<template>
  <div class="destination | column">
    <p class="page-title | xl t-lg m-sm">
      <span>01</span> PICK YOUR DESTINATION
    </p>
    <div class="row flex-end collapse sm-center sm-gap around">
      <img
        :src="destinations[index].images.png"
        :key="'img' + index"
        class="image"
        alt="Destination Image" />
      <div class="details | column sm-center">
        <div class="tabs | row fade">
          <p
            v-for="(item, dIndex) in destinations"
            :key="dIndex"
            :class="'tab | upper' + (index == dIndex ? ' active' : '')"
            @click="index = dIndex">
            {{ item.name }}
          </p>
        </div>
        <h1 class="title-lg t-title-md m-title bellefair upper">
          {{ destinations[index].name }}
        </h1>
        <p class="description | lg m-md barlow fade">
          {{ destinations[index].description }}
        </p>
        <div class="divider"></div>
        <div class="metrics | row m-collapse s-center">
          <div class="column">
            <p class="sm fade">AVG. DISTANCE</p>
            <p class="xl upper bellefair">{{ destinations[index].distance }}</p>
          </div>
          <div class="column">
            <p class="sm fade">EST. TRAVEL TIME</p>
            <p class="xl upper bellefair">{{ destinations[index].travel }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
let index = ref(0);

let destinations = [
  {
    name: "Moon",
    images: {
      png: "/destination/image-moon.png",
      webp: "/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "/destination/image-mars.png",
      webp: "/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "/destination/image-europa.png",
      webp: "/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "/destination/image-titan.png",
      webp: "/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];
</script>
