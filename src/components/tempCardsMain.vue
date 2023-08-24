<template>
  <div class="tempCard">
    <div class="card-content">
      <h1 class="temperature">
        <span>{{ props.temperature }} &deg;</span>
      </h1>
      <p class="city-name">{{ props.city }}</p>
      <div class="line-container">
        <div
          class="line"
          :style="{ width: props.line1Length + 'px', backgroundColor: props.lineColor }"
        ></div>
        <div
          class="line"
          :style="{ width: props.line2Length + 'px', backgroundColor: props.lineColor }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  temperature: String,
  city: String,
  line1Length: Number,
  line2Length: Number,
  lineColor: String
});
</script>

<style scoped>
.tempCard {
  padding: 30px;
  width: 40%; /* Defaults to full width */
}

.temperature {
  font-size: 55px;
  font-weight: 200;
}

.temperature span {
  white-space: nowrap; /* Prevent wrapping within the span */
}

.city-name {
  font-size: 13px;
  font-weight: 500;
}

.line-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 15px;
}

.line {
  height: 3px;
  margin-bottom: 5px;
}

/* Laptops and small screen – 769px — 1024px */
@media (max-width: 1024px) {
  .tempCard {
    width: 48%; /* Two cards per row */
  }
  .temperature {
    font-size: 45px;
    font-weight: 200;
  }
}

/* iPads and Tablets – 481px — 768px */
@media (max-width: 768px) {
  .tempCard {
    width: 8%; /* One card per row */
  }
  .temperature {
    font-size: 40px;
    font-weight: 200;
  }
}

/* Mobile Devices – 320px — 480px */
@media (max-width: 480px) {
  .tempCard {
    width: 100%; /* One card per row */
  }
  .temperature {
    font-size: 35px;
    font-weight: 200;
  }
}
</style>
