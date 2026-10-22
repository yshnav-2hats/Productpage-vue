<script setup>
import { ref } from 'vue'
import CollectionHeader from './components/CollectionHeader.vue'
import ProductFilters from './components/ProductFilters.vue'
import ProductGrid from './components/ProductGrid.vue'
import { useProducts } from './composables/useProducts'

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedSort = ref('')

const { categories } = useProducts()
</script>

<template>
  <main class="product-page">
    <div class="header-container">
      <CollectionHeader />
    </div>

    <div class="filters-container">
      <ProductFilters
        v-model:search-query="searchQuery"
        v-model:category="selectedCategory"
        v-model:sort="selectedSort"
        :categories="categories"
      />
    </div>

    <div class="products-container">
      <ProductGrid
        :search-query="searchQuery"
        :category="selectedCategory"
        :sort="selectedSort"
      />
    </div>
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
  padding: 40px 0;
}

.header-container,
.filters-container,
.products-container {
  width: 86%;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
}

.header-container {
  margin-bottom: 32px;
}

.filters-container {
  margin-bottom: 44px;
}

@media (max-width: 768px) {
  .header-container,
  .filters-container,
  .products-container {
    width: calc(100% - 40px);
  }

  .header-container,
  .filters-container {
    margin-bottom: 28px;
  }
}
</style>
