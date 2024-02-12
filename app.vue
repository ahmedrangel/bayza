<script setup>
const { $AOS } = useNuxtApp();

onMounted(() => {
  $AOS.init({ once: true, duration: 500 });
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
