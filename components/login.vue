<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
</script>

<template>
  <Dialog>
    <DialogTrigger class="text-lg">
      Login
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Login</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        Save changes
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>