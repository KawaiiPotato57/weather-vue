<template>
  <div class="displayContainer">
    <h2 style="font-weight: 500">{{ props.cityName || 'Tokyo' }}</h2>
    <p style="font-size: 14px; font-weight: 300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea amet rerum porro fugit
      dignissimos et debitis eos, vel aliquam ex molestiae sit ipsum quis necessitatibus? A incidunt
      cum minima.
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  cityName: String
});
</script>

<style scoped>
.displayContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 4px 2px rgba(255, 255, 255, 0.078);
  padding-bottom: 10px;
  margin-left: 15px;
  width: 90%;
}
</style>
