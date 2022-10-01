<template>
  <div id="navbar">
    <img src="~/assets/icons/logo.svg" alt="Logo" />
    <nav>
      <ol>
        <li>
          <NuxtLink class="link active" to="/"><span>00</span> HOME</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/destination"
            ><span>01</span> DESTINATION</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="link" to="/crew"><span>02</span> CREW</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/technology"
            ><span>03</span> TECHNOLOGY</NuxtLink
          >
        </li>
      </ol>
    </nav>
  </div>
</template>
<script setup lang="ts"></script>
