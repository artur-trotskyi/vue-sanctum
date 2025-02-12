<script setup>
import {reactive} from "vue";
import useAuth from "@/useAuth.js";

const {login} = useAuth();

const form = reactive({
  email: "admin@example.com",
  password: "password",
});
</script>

<template>
  <div class="absolute inset-0 bg-gray-900 bg-opacity-80 z-50 flex items-start justify-center">
    <!-- Card -->
    <div class="bg-green-100 p-6 rounded-lg shadow-lg max-w-sm w-full mt-[20px] fixed top-[20vh]">
      <h2 class="text-2xl font-bold text-green-700">For Employers</h2>
      <p class="mt-2 mb-4 text-gray-600">Log in to manage your job listings</p>

      <form @submit.once.prevent="login(form)" class="space-y-4">
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
              type="email"
              v-model="form.email"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
              type="password"
              v-model="form.password"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
            type="submit"
            class="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Log in
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>
