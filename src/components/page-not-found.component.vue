<template>
  <div class="page-not-found">
    <h1>404 - Page Not Found</h1>
    <p>The requested URL <strong>{{ $route.fullPath }}</strong> was not found.</p>
    <router-link to="/" class="btn btn-primary">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "Page-Not-Found"
}
</script>

<style scoped>
.page-not-found {
  text-align: center;
  margin-top: 50px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
