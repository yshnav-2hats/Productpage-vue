<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="product-card">
    <div class="product-image">
      <picture>
        <source :srcset="product.thumbnail" type="image/webp" />
        <img
          :src="product.thumbnail"
          :alt="product.title"
          loading="lazy"
        />
      </picture>

      <button
        class="favorite-button"
        type="button"
        :aria-label="`Add ${product.title} to favourites`"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

      <span class="product-badge">Featured</span>
    </div>

    <div class="product-info">
      <h2>{{ product.title }}</h2>

      <div class="product-rating">
        <span class="stars" :aria-label="`${product.rating} out of 5 stars`">
          ★★★★★
        </span>

        <span class="review-count">({{ product.reviews?.length ?? 0 }} reviews)</span>
      </div>

      <div class="product-bottom">
        <p class="product-price">
          {{ product.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          }) }}
        </p>

        <button class="add-to-cart" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.product-card {
  min-width: 0;
}

.product-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  border-radius: 24px;
  background: #f0eeee;

  picture {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.favorite-button {
  position: absolute;
  top: 16px;
  left: 16px;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid #000;
    outline-offset: 3px;
  }
}

.product-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 5px 18px;
  border-radius: 20px;
  background: #fff;
  font-size: 10px;
}

.product-info {
  padding: 16px 6px 0;

  h2 {
    margin: 0 0 5px;
    font-size: 16px;
    font-weight: 600;
  }
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.stars {
  color: #ff9800;
  font-size: 18px;
  letter-spacing: 1px;
}

.review-count {
  color: #777;
  font-size: 9px;
}

.product-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
}

.product-price {
  margin: 0;
  font-size: 28px;
  font-weight: 500;
}

.add-to-cart {
  padding: 8px 20px;
  border: none;
  border-radius: 24px;
  background: #000;
  color: #fff;
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: #333;
  }

  &:focus-visible {
    outline: 2px solid #000;
    outline-offset: 3px;
  }
}

@media (max-width: 600px) {
  .product-info {
    h2 {
      font-size: 15px;
    }
  }

  .product-price {
    font-size: 22px;
  }

  .add-to-cart {
    padding: 8px 14px;
  }
}
</style>
