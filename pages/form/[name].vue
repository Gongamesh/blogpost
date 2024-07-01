<script setup lang="ts">
const route = useRoute()

console.log(route.params.name);

const dynamicPlaceholder = ref('')
const router = useRouter()

onMounted(() => {
  if (route.params.name) {
    dynamicPlaceholder.value = `To: ${route.params.name}@blogger.com`
  }
})

function handleSubmit() {
  router.push({ path: '/', query: { notification: 'success' } })
}
</script>

<template>
    <div class=" flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Contact Form</h2>
        </div>
        <form class="mt-8 space-y-6" method="post" @submit="handleSubmit">
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="py-2">
              <label for="to" class="sr-only">To</label>
              <input id="to" name="to" type="email" disabled 
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 bg-gray-200 cursor-not-allowed rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                :placeholder="dynamicPlaceholder">
            </div>
            <div class="py-2">
              <label for="name" class="sr-only">Name</label>
              <input id="name" name="name" type="text" required 
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
                     placeholder="Name">
            </div>
            <div class="py-2">
              <label for="email" class="sr-only">Email address</label>
              <input id="email" name="email" type="email" required 
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
                     placeholder="Email address">
            </div>
            <div class="py-2">
              <label for="message" class="sr-only">Message</label>
              <textarea id="message" name="message" required 
                        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
                        placeholder="Your message"></textarea>
            </div>
          </div>
          <div>
            <Button variant="secondary" class="w-full justify-center items-center" type="submit"> Submit </Button>
          </div>
        </form>
      </div>
    </div>
    
  </template>