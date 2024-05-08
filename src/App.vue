<template>
  <main>
    <nav>
      <the-sidebar></the-sidebar>

    </nav>
    <router-view></router-view>

  </main>
</template>

<script setup>


import TheSidebar from "./components/the-sidebar.component.vue";
</script>

<style scoped>

</style>
