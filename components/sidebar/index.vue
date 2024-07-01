<script setup>
const user = useSupabaseUser()

const menuOpen = ref(false);
</script>

<template>
    <header class="bg-white shadow-md">
      <div class="container mx-auto flex justify-between items-center px-5 py-3 relative">
        <div class="flex items-center">
          <Logo class="h-8 w-8 mr-3" />
          <p class="text-3xl font-bold text-black">Blogger</p>
        </div>
        <button @click="menuOpen = !menuOpen" class="lg:hidden text-gray-500 focus:outline-none absolute right-5 top-5">
          <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <nav :class="{'block': menuOpen, 'hidden': !menuOpen}" class="lg:flex lg:items-center w-full lg:w-auto">
          <div class="flex flex-col lg:flex-row lg:items-center lg:ml-auto">
            <NuxtLink to="/" class="mt-2 lg:mt-0 lg:ml-4 hover:bg-neutral-100 text-lg">Home</NuxtLink>
            <NuxtLink to="/categories" class="mt-2 lg:mt-0 lg:ml-4 hover:bg-neutral-100 text-lg">Categories</NuxtLink>
            <NuxtLink to="/contact" class="mt-2 lg:mt-0 lg:ml-4 hover:bg-neutral-100 text-lg">Contact us</NuxtLink>
            <div v-if="user" class="mt-2 lg:mt-0 lg:ml-4 hover:bg-neutral-100 text-lg">
              <NuxtLink to="/user/profile">Profile</NuxtLink>
            </div>
            <div v-else class="mt-2 lg:mt-0 lg:ml-4 hover:bg-neutral-100 text-lg">
              <NuxtLink to="/login">Login</NuxtLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </template>