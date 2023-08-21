<template>
  <div class="displayContainer">
    <div style="display: flex; flex-direction: row; align-items: center">
      <h1 style="font-size: 60px; font-weight: 200">20&deg;C</h1>
      <p style="padding-top: 35px; margin: 0 30px 30px; font-size: 40px; font-weight: 200">+/-</p>
      <h1 style="font-size: 60px; font-weight: 200">3</h1>
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 80%;
      "
    >
      <h1 style="font-size: 40px; font-weight:400">9.8%</h1>
      <p>Wind: WSW 6 mph</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.displayContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 2px rgba(255, 255, 255, 0.078);
    padding-bottom: 10px;
    margin-left: 15px;
    width: 90%;
}

</style>
