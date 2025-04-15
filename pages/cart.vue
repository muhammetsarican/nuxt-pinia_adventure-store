<template>
  <div>
    <h2 class="text-center text-white my-8 text-2xl">Your Basket</h2>
    <div class="card text-xl" v-if="cartStore.cart.length">
      <div
        v-for="product in cartStore.cart"
        :key="product.id"
        class="flex gap-8 items-center"
      >
        <img :src="product.img" :alt="product.title" />
        <p class="text-white">{{ product.title }}</p>
        <p class="text-white">{{ product.description }}</p>

        <!-- quantity - start -->
        <ProductQuantity :product="product" />
        <!-- quantity - end -->
        <p class="text-white">{{ product.price * product.quantity }} coins.</p>
        <!-- delete button - start -->
        <button
          class="material-icons-outlined text-white ml-auto"
          @click="cartStore.deleteFromCart(product)"
        >
          delete
        </button>
        <!-- delete button - end -->
      </div>

      <div class="text-right pt-4 mt-4 border-t-2">
        <span class="text-white"> Total amount to pay: </span>
        <span class="text-secondary"> {{ cartStore.cartTotal }} coins.</span>
      </div>
    </div>
    <div v-else>
      <p class="text-white">No items in your basket.</p>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../store/cartStore";
const cartStore = useCartStore();
</script>

<style scoped>
</style>