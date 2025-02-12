import {computed, reactive, ref} from 'vue'
import axios from 'axios'

const state = reactive({
  authenticated: false,
  user: {}
})

export default function useAuth() {
  const authenticated = computed(() => state.authenticated)
  const user = computed(() => state.user)

  const setAuthenticated = (authenticated) => {
    state.authenticated = authenticated
  }

  const setUser = (user) => {
    state.user = user?.data?.user ?? {};
  };

  const getCsrfCookie = async () => {
    if (!document.cookie.includes('XSRF-TOKEN')) {
      await axios.get('/sanctum/csrf-cookie', {baseURL: 'http://laravel-sanctum-vue.local'});
    }
  };

  const login = async (credentials) => {
    await getCsrfCookie();

    try {
      await axios.post('/api/auth/login', credentials, {baseURL: 'http://laravel-sanctum-vue.local'});
      return attempt() // We'll fill this in later!
    } catch (e) {
      return Promise.reject(e.response.data.errors)
    }
  }

  const attempt = async () => {
    try {
      let response = await axios.post('/api/auth/me', {}, {baseURL: 'http://laravel-sanctum-vue.local'});
      setAuthenticated(true)
      setUser(response.data)

      return response
    } catch (e) {
      setAuthenticated(false)
      setUser({})
      return Promise.reject(e?.response?.data?.errors ?? 'Unauthorized');
    }
  }

  return {
    authenticated,
    user,
    login,
    attempt
  }
}