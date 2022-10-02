<template>
  <div
    class="app"
    :style="{
      'background-image':
        'url(/assets/images/background-' + page + '-desktop.jpg)',
    }"
  >
    <NuxtLayout>
      <Navbar v-model="page" />
      <NuxtPage class="page" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
let url = useRoute().name;
let urlName: string = url == "index" ? "home" : url.toString();
let page = ref(urlName);
</script>

<style lang="scss">
.app{
  min-height: 100vh;
  background-size: cover;
}
</style>
