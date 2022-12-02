<template>
  <div
    class="app"
    :style="{
      'background-image':
        'url(/images/background-' + page + '-' + screen + '.jpg)',
    }">
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

let screen = ref("desktop");

function setBackground() {
  if (process.client) {
    let width = window.innerWidth;
    console.log(width);
    if (width > 864) {
      screen.value = "desktop";
    } else if (width > 576) {
      screen.value = "tablet";
    } else {
      screen.value = "mobile";
    }
  }
}

onMounted(() => {
  window.addEventListener("resize", setBackground);
});
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  background-size: cover;
}
</style>
