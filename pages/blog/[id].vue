<template>
    <div class=" min-h-screen">
      <div class="container mx-auto px-4 py-12">
        <div v-if="post" class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 class="text-4xl font-bold text-gray-900 mb-6">{{ post.title }}</h1>
          <p class="text-gray-700">{{post.tags.join(', ')}}</p><br>
          <p class="text-gray-700 leading-relaxed mb-6 text-xl">{{ post.body }} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eos natus labore repudiandae quidem dolorem voluptas, fugiat, iste odit excepturi, eligendi corporis quas cumque in molestias qui officiis? Ipsam, aliquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem pariatur odio natus expedita fuga impedit molestiae saepe doloremque laudantium iusto error necessitatibus quis distinctio ipsa doloribus officiis, magnam voluptates facere.</p>
        </div>
        <p v-else class="text-center text-xl text-red-500">Loading...</p>
      </div>
    </div>
</template>
  
<script setup>
  const route = useRoute()
  const post = ref();
  
  const fetchPostDetails = async () => {
    try {
      const response = await $fetch(`https://dummyjson.com/posts/${route.params.id}`);
      post.value = response
      console.log(response);
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  };
  
  onMounted(fetchPostDetails);
</script>
  