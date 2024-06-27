<script setup>
const open = ref(false);
</script>

<template>
    <div>
        <div class="flex lg:hidden z-50 items-center justify-between w-full p-4">
            <Logo class="overflow-hidden rounded-lg w-[45px]" />
            <Icon class="z-50 cursor-pointer left-2 top-2 " size="30" name="iconamoon:menu-burger-horizontal-thin" 
            @click="open = true" />
            <div v-if="open" class="fixed top-0 left-0 z-50 w-full h-screen bg-white">
                <Icon class="absolute z-50 cursor-pointer right-4 top-4 " size="30" name="material-symbols:close" 
                    @click="open = false" />
                <SidebarMenu />
            </div>
        </div>
        <div class="hidden lg:flex w-[250px] h-[100px] flex-col justify-between">
            <SidebarMenu />
        </div>
    </div>
</template>