<template>
  <div class="technology | column">
    <p class="page-title xl t-lg m-sm"><span>04</span> SPACE LAUNCH 101</p>
    <div class="row collapse sm-center sm-gap btwn">
      <div class="column tabs">
        <div
          v-for="tabIndex in technologies.length"
          :key="tabIndex"
          :class="
            'tab xxl t-label m-md ' + (index == tabIndex - 1 ? ' active' : '')
          "
          @click="index = tabIndex - 1">
          {{ tabIndex }}
        </div>
      </div>

      <div class="details | column">
        <p class="fade m-sm">THE TERMINOLOGY…</p>
        <h1 class="title t-title-sm m-label bellefair upper">
          {{ technologies[index].name }}
        </h1>
        <p class="description | lg t-md m-sm barlow fade">
          {{ technologies[index].description }}
        </p>
      </div>
      <img
        class="image"
        :src="technologies[index].images.portrait"
        alt="Technology Image" />
    </div>
  </div>
</template>
<script setup lang="ts">
let index = ref(0);

let technologies = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "/assets/technology/image-spaceport-portrait.jpg",
      landscape: "/assets/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "/assets/technology/image-space-capsule-portrait.jpg",
      landscape: "/assets/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
</script>
