import {computed, reactive, ref} from 'vue'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
      await axios.get('/sanctum/csrf-cookie', {baseURL: API_BASE_URL});
    }
  };

  const login = async (credentials) => {
    await getCsrfCookie();

    try {
      await axios.post('/api/auth/login', credentials, {baseURL: API_BASE_URL});
      return attempt() // We'll fill this in later!
    } catch (e) {
      return Promise.reject(e.response.data.errors)
    }
  }

  const attempt = async () => {
    try {
      let response = await axios.post('/api/auth/me', {}, {baseURL: API_BASE_URL});
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