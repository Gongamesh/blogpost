<script setup lang="ts">

const user = useSupabaseUser()
</script>


<template>
  <header>
    <div class="flex items-start justify-start gap-7 w-screen px-5 py-5 cursor-pointer">
      <Logo />
      <p class="text-3xl mt-2.5 font-bold text-black">Blogger</p>
      <NuxtLink to="/" class="mt-5 hover:bg-neutral-100 text-lg">Home</NuxtLink>
      <NuxtLink to="/categories" class="mt-5 hover:bg-neutral-100 text-lg"
        >Categories</NuxtLink>
      <NuxtLink to="/contact" class="mt-5 hover:bg-neutral-100 text-lg"
        >Contact us</NuxtLink>
      <div v-if="user" class="mt-5 hover:bg-neutral-100 text-lg"><NuxtLink to="/user/profile">Profile</NuxtLink></div>
      <div v-else class="mt-5 hover:bg-neutral-100 text-lg"><NuxtLink to="/login" >Login</NuxtLink></div>
    </div>

  </header>
</template>
