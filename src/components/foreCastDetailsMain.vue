<template>
  <div class="detailsContainer">
    <div>
      <el-icon>
        <PartlyCloudy />
      </el-icon>
      {{ formattedDate }}
    </div>
    <div style="width: 30%; padding-top: 20px; text-align: justify">
      <div style="width: 100%; overflow: hidden">
        <p class="ellipsis-text">
          Lorem ipsum dolor, sit amet consectetur adipisicingaaa adipisicingaaa adipisicingaaa v sit
          amet consectetur adipisicingaaa adipisicingaaa adipisicingaaa.
        </p>
      </div>
      <div class="detailsText">
        <div style="width: 25%">
          <p class="temperature padding-margin">{{ temp || '00' }}&deg;</p>
        </div>
        <div style="width: 75%">
          <p style="font-size: 12px; width: 100%">
            Lorem ipsum dolor, sit amet consectetur adipisicing. sit amet consectetur adipisicing.
            sit amet consectetur
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { PartlyCloudy } from '@element-plus/icons-vue';
const props = defineProps({
  temp: String
});
const formattedDate = ref('');
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true // Use 12-hour clock (remove if you want 24-hour clock)
  };

  return date.toLocaleString(undefined, options);
}

const date = new Date();
formattedDate.value = formatDate(date); // Outputs the date in the desired format
formattedDate.value = formattedDate.value.replace(' at', ' ');
</script>

<style scoped>
.detailsContainer {
  padding-top: 50px;
  color: aliceblue;
}
.temperature {
  font-size: 50px;
  font-weight: 400;
  padding: 0;
  margin: 0;
}
.detailsText {
  display: flex;
  flex-direction: row;
}
.padding-margin {
  padding-top: -500px;
  margin-top: -15px;
  margin-left: 0px;
}
.ellipsis-text {
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  color: rgb(126, 233, 233);
}

.ellipsis-text:hover {
  white-space: normal;
  text-overflow: clip;
  overflow: visible;
}
</style>
