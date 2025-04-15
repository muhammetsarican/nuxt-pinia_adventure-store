<template>
  <div class="flex gap-2">
    <button
      class="material-icons-outlined bg-secondary rounded-sm"
      @click="cartStore.decQuantity(product.id)"
    >
      remove
    </button>
    <p class="text-white">{{ product.quantity }}</p>
    <button
      class="material-icons-outlined bg-secondary rounded-sm"
      @click="cartStore.incQuantity(product.id)"
    >
      add
    </button>
  </div>
</template>

<script setup>
import { useCartStore } from "~/store/cartStore";

const cartStore = useCartStore();
defineProps(["product"]);
</script>

<style lang="scss" scoped>
</style>