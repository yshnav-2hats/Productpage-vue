<script setup>
import { ref } from 'vue'
import CollectionHeader from './components/CollectionHeader.vue'
import ProductFilters from './components/ProductFilters.vue'
import ProductGrid from './components/ProductGrid.vue'

const searchQuery = ref('')
</script>

<template>
  <main class="product-page">
    <section class="product-container">
      <CollectionHeader />

      <ProductFilters v-model:search-query="searchQuery" />
      
      <ProductGrid :search-query="searchQuery" />
    </section>
  </main>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  min-height: 100%;
  margin: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
}

.product-page {
  width: 100%;
  min-height: 100vh;
  padding: 48px 40px;
}

.product-container {
  width: 100%;
  max-width: none;
  margin: 0 auto;
  text-align: left;
}
</style>