<script setup>
const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('')
const password = ref('')

const router = useRouter()

const handleLogin = async () => {
  try {
    loading.value = true
    const { data, error } = await supabase.auth.signInWithPassword({ email: email.value, password: password.value })
    if (error) throw error
    router.push('/')
  } catch (error) {
    alert('Invalid credentials')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex justify-center items-center mt-10">
    <form class="w-full max-w-md" @submit.prevent="handleLogin">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-2xl font-bold mb-4">Login</h1>
        <p class="text-gray-700 mb-4">Log in via password with your email below</p>
        <div class="mb-4">
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Your email" v-model="email" />
        </div>
        <div class="mb-4">
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Your password" v-model="password" />
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            :class="{ 'opacity-50 cursor-not-allowed': loading }"
            :disabled="loading"
          >
            <span v-if="loading">Loading</span>
            <span v-else>Login</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
