<template>
  <div class="container">
    <div class="sideBar">
      <sideBarVue />
    </div>
    <div class="mainDisplay">
      <mainViewVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import mainViewVue from '../components/mainView.vue';
import sideBarVue from '../components/sideBar.vue';

sideBarVue;
</script>

<style scoped>
.container {
  display: flex; /* Use flexbox to align the divs */
  width: 100%;
  height: 100%;
}

.sideBar {
  padding: 10px;
  width: 25%; /* Set width to 25% of the container */
  border-right: 4px solid #afafaf67;
  border-radius: 5px;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.26);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.sideBar::-webkit-scrollbar {
  width: 5px;
}
.sideBar::-webkit-scrollbar-track {
  background: #514f4f; /* Background color of the track */
}

.sideBar::-webkit-scrollbar-thumb {
  background: #888; /* Background color of the thumb (the part you drag) */
}

.sideBar::-webkit-scrollbar-thumb:hover {
  background: #333333; /* Background color when hovering over the thumb */
}
.mainDisplay {
  padding: 10px;
  width: 75%;
  border-right: 2px solid #00000060;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.26);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.mainDisplay::-webkit-scrollbar {
  width: 5px;
}
.mainDisplay::-webkit-scrollbar-track {
  background: #514f4f; /* Background color of the track */
}

.mainDisplay::-webkit-scrollbar-thumb {
  background: #888; /* Background color of the thumb (the part you drag) */
}

.mainDisplay::-webkit-scrollbar-thumb:hover {
  background: #333333; /* Background color when hovering over the thumb */
}
</style>
