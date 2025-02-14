<script setup>
import Navbar from "@/components/Navbar.vue";
import LoginForm from "@/components/Auth/LoginForm.vue";
import {RouterView} from "vue-router";
import useAuth from "@/useAuth.js";

const {authenticated, user} = useAuth()

</script>

<template>
  <div>
    <div class="relative">
      <Navbar :user="user"/>
      <RouterView/>
      <!-- <LoginForm v-if="!authenticated"/>-->
    </div>
  </div>
</template>

<style scoped>
</style>