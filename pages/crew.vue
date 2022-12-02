<template>
  <div class="crew | row collapse sm-center btwn">
    <div class="column sm-center sm-gap btwn">
      <p class="page-title | xl t-lg m-sm"><span>02</span> MEET YOUR CREW</p>
      <img class="m-image" :src="crew[index].images.png" alt="Crew Member" />
      <div class="details | column sm-center">
        <p class="xxl t-label m-md bellefair upper fade">
          {{ crew[index].role }}
        </p>
        <h1 class="title t-title-sm m-xl bellefair upper">
          {{ crew[index].name }}
        </h1>
        <p class="bio | lg t-md m-sm barlow fade">{{ crew[index].bio }}</p>
      </div>

      <div class="indicators">
        <div
          v-for="dIndex in crew.length"
          @click="index = dIndex - 1"
          :key="dIndex - 1"
          :class="'indicator' + (dIndex - 1 == index ? ' active' : '')"></div>
      </div>
    </div>
    <img class="image" :src="crew[index].images.png" alt="Crew Member" />
  </div>
</template>
<script setup lang="ts">
let index = ref(0);

let crew = [
  {
    name: "Douglas Hurley",
    images: {
      png: "/crew/image-douglas-hurley.png",
      webp: "/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "/crew/image-mark-shuttleworth.png",
      webp: "/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "/crew/image-victor-glover.png",
      webp: "/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "/crew/image-anousheh-ansari.png",
      webp: "/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];
</script>
