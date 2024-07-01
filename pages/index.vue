<script setup>
const user = useSupabaseUser()
console.log('Current user:', user.value);
const { data: posts } = await useFetch('https://dummyjson.com/posts')
const postsList = ref(posts.value.posts);
//console.log(toRaw(posts.value));

const route = useRoute()
const showNotification = ref(false)

onMounted(() => {
  if (route.query.notification) {
    showNotification.value = true
    setTimeout(() => {
      showNotification.value = false
    }, 3000) // Obavijest nestaje nakon 3 sekunde
  }
})
</script>

<template>
  <main class="grid gap-4 pl-7">
    <div>
        <h1>Top voted blogs</h1>    
    </div>
    <div class="grid lg:grid-cols-3 gap-4">
      <CardPost v-for="(post, index) in postsList.slice(0,3)" :key="post.id"
        :title="post.title"
        :description="post.tags.join(', ')"
        :buttonText="post.id"
        :views="post.views"
        :likes="post.reactions.likes"
        :dislikes="post.reactions.dislikes"
        class="w-[600px] h-[400px]"/>
      <!--<div v-for="(item, index) in 3" :key="index" class="w-[600px] h-[400px] bg-neutral-200"></div> -->
    </div>
    <div>
        <h1>Recent posts</h1>
    </div>
    <div class="grid lg:grid-cols-3 gap-4">
      <CardPost v-for="(post, index) in postsList.slice(4,16)" :key="post.id"
        :title="post.title"
        :description="post.tags.join(', ')"
        :buttonText="post.id"
        :views="post.views"
        :likes="post.reactions.likes"
        :dislikes="post.reactions.dislikes"
        class="w-[600px] h-[400px]"/>
      <!--<div v-for="(item, index) in 3" :key="index" class="w-[600px] h-[400px] bg-neutral-200"></div> -->
    </div>
  </main>
  <div v-if="showNotification" class="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
      Email successfully sent!
  </div>
</template>