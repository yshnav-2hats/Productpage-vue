<script setup>
</script>

<template>
  <article class="product-card">
    <div class="product-image">
      <img
        src="https://placehold.co/400x400/f0eeee/333333?text=Product"
        alt="Sample product"
      />

      <button
        class="favorite-button"
        type="button"
        aria-label="Add product to favourites"
      >
        ♡
      </button>

      <span class="product-badge">Featured</span>
    </div>

    <div class="product-info">
      <h2>Super Serum Skin Mist SPF 40</h2>

      <div class="product-rating">
        <span class="stars" aria-label="5 out of 5 stars">
          ★★★★★
        </span>

        <span class="review-count">(230 reviews)</span>
      </div>

      <div class="product-bottom">
        <p class="product-price">$40</p>

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
  font-size: 23px;
  cursor: pointer;
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
</style>