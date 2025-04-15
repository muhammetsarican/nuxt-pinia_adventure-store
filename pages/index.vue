<template>
  <div>
    <div>
      <h2 class="text-center text-white my-8 text-2xl">all products</h2>
    </div>
    <div class="grid grid-cols-2 gap-7">
      <div v-for="product in products" :key="product.id">
        <span>{{ product.title }}</span>
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products } = useFetch("http://localhost:4000/products");
</script>

<style scoped>
</style>