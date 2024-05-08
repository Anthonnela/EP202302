<template>

    <div class="home">
      <div class="hero">
        <img src="https://ember.com/cdn/shop/files/230914_launch_WebBanner-Desktop_2048x.jpg" alt="Hero Image" class="hero-image">
        <div class="hero-content">
          <h1 class="title">The perfect temperature, every time</h1>
          <p class="description">Ember’s patented technology allows you to experience precision temperature control in your everyday life, with the vision to transform how the world eats, drinks, and lives, empowering you to experience your world without limits.</p>
        </div>
      </div>
    </div>

</template>

<script>
import TheSidebar from "./the-sidebar.component.vue";

export default {
  name: 'the-home',
  components: {TheSidebar}
}
</script>

<style scoped>


.home {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero {
  position: relative;
  width: 100%;
}

.hero-image {
  width: 80%;
  height: auto;
}

.hero-content {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

.description {
  font-size: 18px;
  margin-bottom: 40px;
}
</style>