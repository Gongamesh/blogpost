<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const selectedTag = ref('')

const { data: tagsData } = await useFetch('https://dummyjson.com/posts/tag-list')
//console.log(tagsData);

const tags = ref<string[]>([]);

if (tagsData.value) {
  tags.value = tagsData.value.slice(0, 5);
}

console.log('Selected: ',selectedTag);


</script>

<template>
  <div class="ml-7 mt-5">
  <Select v-model="selectedTag">
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a category" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>category</SelectLabel>
        <!-- Iteracija kroz tagove i generisanje SelectItem komponenti -->
        <SelectItem v-for="(tag, index) in tags" :key="index" :value="tag">
          {{ tag }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select> 
  </div>

  <div class="grid gap-4 pl-7 pr-7 mt-7">
  <div v-if="selectedTag=='history'">
    <CardCategoryHistory />
  </div>
  <div v-else-if="selectedTag=='american'">
    <CardCategoryAmerican />
  </div> 
  <div v-else-if="selectedTag=='crime'">
    <CardCategoryCrime />
  </div>    
  <div v-else-if="selectedTag=='french'">
    <CardCategoryFrench />
  </div>    
  <div v-else-if="selectedTag=='fiction'">
    <CardCategoryFiction />
  </div>       
  </div>

</template>