<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const props = defineProps({
  title: String,
  description: String,
  views: Number,
  content: String,
  buttonText: Number,
  likes: Number,
  dislikes: Number
})

const router = useRouter()

const redirectToPost = (blogId?: number) => {
  if (blogId !== undefined && Number.isInteger(blogId) && blogId > 0) {
    router.push({ name: 'blog-id', params: { id: blogId } });
  } else {
    throw new Error('Neispravan ID posta.');
  }
}


</script>

<template>
  <Card class="flex flex-col h-full">
    <CardHeader>
        <CardTitle class="flex text-[25px] w-full justify-center">{{ props.title }}</CardTitle>
        <div class="flex justify-between mt-5">
          <CardDescription class="flex justify-start w-full text-[15px]">{{ props.description }}</CardDescription>
          <CardDescription class="flex justify-end w-full text-[15px]">{{ props.views }} views</CardDescription>
        </div>
    </CardHeader>
    <CardContent class="flex w-full gap-4 justify-center items-center text-[20px]">
      <div class="flex justify-center">
        <p class="text-[20px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, rem. Consequuntur, facere aliquid tempora et quidem deserunt rem magni quisquam nemo ea illum, dolore quo nostrum dolorum vel nesciunt maiores.
        </p>
      </div>
    </CardContent>
    <CardFooter class="flex justify-between mt-auto">
      <div class="flex justify-between w-full">
          <CardDescription class="flex justify-start text-[15px] mt-3">{{ props.likes }} postivive</CardDescription>
          <Button @click="redirectToPost(props.buttonText)" variant="secondary" class="fles justify-center">Read more</Button>
          <CardDescription class="flex justify-end text-[15px] mt-3">{{ props.dislikes }} negative</CardDescription>
      </div>
    </CardFooter>
  </Card>
</template>