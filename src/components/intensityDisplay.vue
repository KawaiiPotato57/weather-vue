<template>
  <div class="intensityContainer">
    <div class="circlesDiv">
      <div class="weather-circles">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <div>
        <h2 style="padding-top: 10px">>0.8%</h2>
      </div>
    </div>
    <div class="safeContainerDiv">
      <div class="safeDiv">
        <p>Safe</p>
        <ul class="list">
          <li>0.00%-0.09%</li>
          <li>0.00%-0.09%</li>
        </ul>
      </div>
      <div class="safeDiv">
        <p>Dangerous</p>
        <ul class="list">
          <li>12%-38%</li>
          <li>39%-90%</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.list {
  padding-left: 15px; /* Removes the default padding */
  /* Removes the default bullets */
}

p {
  margin: 0; /* Removes any default margin from the p tag */
}
.intensityContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 2px rgba(255, 255, 255, 0.078);
  padding-bottom: 10px;
  margin-top: 20px;
  margin-left: 15px;
  width: 90%;
}
.circlesDiv {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
  width: 100%;
}

.safeContainerDiv {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.weather-circles {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 20px;
  width: 18px; /* width of one circle */
  height: 7px; /* Adjust height to space the circles */
}
.safeDiv {
  display: flex;
  flex-direction: column;
  padding: 25px;
}
.circle {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

/* Position and color each circle */
.circle:nth-child(1) {
  left: 30px;
  background: rgb(1, 59, 250);
}
.circle:nth-child(2) {
  left: 45px;
  background: #318af0;
}
.circle:nth-child(3) {
  left: 60px;
  background: #befdff;
}
.circle:nth-child(4) {
  left: 75px;
  background: #ff6471;
}
.circle:nth-child(5) {
  left: 90px;
  background: rgb(255, 40, 40);
}
</style>
