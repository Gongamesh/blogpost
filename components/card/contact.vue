<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Button from '../ui/button/Button.vue';

const props = defineProps({
  title: String,
  description: String,
  content: String,
  buttonText: String,
  contact: String,
})
</script>

<template>
  <Card>
    <CardHeader>
        <CardTitle class="flex text-[45px] w-full justify-center">{{ props.title }}</CardTitle> 
      <CardDescription class="flex justify-center w-full text-[20px]">{{ props.description }}</CardDescription>
    </CardHeader>
    <CardContent class="flex w-full gap-4 justify-center h-[150px] items-center text-3xl">
        {{ props.content }}
    </CardContent>
    <CardFooter class="flex w-full gap-4 justify-center">
      <NuxtLink :to="{ name: 'form-name', params: {name: props.contact  }}">
        <Button variant="secondary">{{ props.buttonText }}</Button>
      </NuxtLink>
    </CardFooter>
  </Card>
</template>