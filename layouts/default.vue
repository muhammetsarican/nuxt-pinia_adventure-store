<template>
  <div class="m-8">
    <header class="wrapper flex justify-between">
      <NuxtLink to="/">
        <h1 class="text-secondary text-5xl">Adventure Store</h1>
      </NuxtLink>
      <NuxtLink to="/cart">
        <span class="material-icons-outlined text-secondary text-5xl">shopping_bag</span>
        <span class="bg-white py-1 px-2 rounded-2xl font-bold relative -left-4">{{ cartStore.cartQuantity }}</span>
      </NuxtLink>
    </header>
    <div class="wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/store/cartStore";

const cartStore = useCartStore();
cartStore.getCart();
</script>

<style lang="scss" scoped></style>