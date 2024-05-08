<template>
  <div class="sidebar">
    <ul>
      <li @click="navigateTo('/')">Home</li>
      <li @click="navigateTo('/the-drinkware')">Drinkware</li>
      <li @click="navigateTo('/the-accessories')">Accessories</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'the-sidebar',
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
}

.sidebar.collapsed {
  transform: translateX(-100%);
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 15px 20px;
  cursor: pointer;
  border-bottom: 1px solid #444;
  transition: background-color 0.2s ease-in-out;
}

li:hover {
  background-color: #444;
}

li:last-child {
  border-bottom: none;
}

li a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
}
</style>