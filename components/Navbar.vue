<template>
  <div id="navbar">
    <img src="~/assets/icons/logo.svg" alt="Logo" />
    <img
      @click="toggleNav(true)"
      class="menu-icon"
      src="~/assets/icons/icon-hamburger.svg"
      alt="Menu Icon" />
    <nav :class="showNav ? '' : 'hideNav'">
      <img
        @click="toggleNav(false)"
        class="close-icon"
        src="~/assets/icons/icon-close.svg"
        alt="Close Icon" />
      <ol>
        <li>
          <NuxtLink @click="selectTab(0)" :class="'link' + getActive(0)" to="/"
            ><span>00</span> HOME</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            @click="selectTab(1)"
            :class="'link' + getActive(1)"
            to="/destination"
            ><span>01</span> DESTINATION</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            @click="selectTab(2)"
            :class="'link' + getActive(2)"
            to="/crew"
            ><span>02</span> CREW</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            @click="selectTab(3)"
            :class="'link' + getActive(3)"
            to="/technology"
            ><span>03</span> TECHNOLOGY</NuxtLink
          >
        </li>
      </ol>
    </nav>
  </div>
</template>
<script setup lang="ts">
let props = defineProps(["modelValue"]);
let emits = defineEmits(["update:modelValue"]);

let url = props.modelValue;
let pages = { home: 0, destination: 1, crew: 2, technology: 3 };
let pageIndex = ref(pages[url]);

let showNav = ref(false);

function toggleNav(opened: boolean) {
  showNav.value = opened;
}

function selectTab(index) {
  pageIndex.value = index;
  let pageName = Object.keys(pages)[index];
  emits("update:modelValue", pageName);
  showNav.value = false;
}

function getActive(index): string {
  return index == pageIndex.value ? " active" : "";
}
</script>
