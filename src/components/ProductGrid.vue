<script setup>
import { computed } from 'vue'
import ProductCard from './ProductCard.vue'
import { useProducts } from '../composables/useProducts'

const props = defineProps({
  searchQuery: {
    type: String,
    default: '',
  },
})

const { products, isLoading, error } = useProducts()

const filteredProducts = computed(() => {
  const query = props.searchQuery.trim().toLowerCase()

  if (!query) {
    return products.value
  }

  return products.value.filter((product) =>
    product.title.toLowerCase().includes(query),
  )
})
</script>

<template>
  <section class="product-listing" aria-label="Product listing">
    <p v-if="isLoading">Loading products...</p>

    <p v-else-if="error" role="alert">
      {{ error }}
    </p>

    <template v-else>
      <p v-if="filteredProducts.length === 0">
        No products found.
      </p>

      <div v-else class="product-grid">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </template>
  </section>
</template>

<style lang="scss" scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
}

@media (max-width: 600px) {
  .product-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>