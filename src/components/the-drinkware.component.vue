<template>
  <div class="drinkware-page">
    <h1>{{ collectionTitle }}</h1>
    <div class="product-cards">
      <div v-for="product in drinkwareProducts" :key="product.id" class="product-card">
        <img :src="product.photoUrl" :alt="product.title" class="product-image" />
        <div class="product-details">
          <h2>{{ product.title }}</h2>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price">${{ product.price.toFixed(2) }}</p>
          <Rating :value="product.rating" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import Rating from "primevue/rating";
import http from "../services/http-common.js";

export default {
  name: "Drinkware",
  components: {
    Rating
  },
  data() {
    return {
      drinkwareProducts: [],
      collectionTitle: "Drinkware"
    };
  },
  mounted() {
    http.get("/products")
        .then((response) => {
          this.drinkwareProducts = response.data.filter(product => product.collectionId === "all-drinkware");
        })
        .catch((error) => {
          console.error("Error loading data:", error);
        });
  }
};
</script>

<style scoped>
.drinkware-page {
  padding: 20px;
}

.product-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
}

.product-image {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}

.product-details {
  text-align: left;
}

.product-details h2 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.product-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
}

.product-price {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: #007bff;
}
</style>

