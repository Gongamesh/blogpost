<script setup>
const supabase = useSupabaseClient()

const loading = ref(false)
const router = useRouter()

const user = useSupabaseUser()
console.log('Current user:', user.value);

async function signOut() {
  try {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    user.value = null
    router.push('/')
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
    <div class="flex justify-center items-center mt-10">
      <div class="w-full max-w-md">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 class="text-2xl font-bold mb-4">Profile</h1>
          <p class="text-gray-700 mb-4">Logged in as: <span class="font-bold">{{ user ? user.email : 'Unknown' }}</span></p>
          <div class="mb-4">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              :class="{ 'opacity-50 cursor-not-allowed': loading }"
              :disabled="loading"
              @click="signOut"
            >
              <span v-if="loading">Loading</span>
              <span v-else>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>