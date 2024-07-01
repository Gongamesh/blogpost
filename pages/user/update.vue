<script setup>
const supabase = useSupabaseClient();

const loading = ref(false);
const username = ref("");
const fullName = ref("");

const router = useRouter();

loading.value = true;
const user = useSupabaseUser();

const { data } = await supabase
  .from("profiles")
  .select(`username, full_name`)
  .eq("id", user.value.id)
  .single();

if (data) {
  username.value = data.username;
  fullName.value = data.full_name;
}

loading.value = false;

async function updateProfile() {
  try {
    loading.value = true;
    const user = useSupabaseUser();

    const updates = {
      id: user.value.id,
      username: username.value,
      full_name: fullName.value,
      updated_at: new Date(),
    };

    const { error } = await supabase.from("profiles").upsert(updates, {
      returning: "minimal", // Don't return the value after inserting
    });
    if (error) throw error;
    router.push('/user/profile')
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Update Profile
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="updateProfile">
        <div class="py-2">
          <label for="email">Email</label>
          <input
            id="email"
            type="text"
            :value="user.email"
            disabled
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div class="py-2">
          <label for="username">Username</label>
          <input
            id="username"
            type="text"
            v-model="username"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div class="py-2">
          <label for="fullName">Name</label>
          <input
            id="fullName"
            type="text"
            v-model="fullName"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
          />
        </div>

        <div>
          <input
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            :value="loading ? 'Loading ...' : 'Update'"
            :disabled="loading"
          />
        </div>
      </form>
    </div>
  </div>
</template>
