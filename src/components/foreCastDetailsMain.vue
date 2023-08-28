<template>
  <div class="detailsContainer">
    <div class="date-container">
      <el-icon v-if="!props.icon">
        <PartlyCloudy />
      </el-icon>
      <img v-if="props.icon" :src="props.icon" alt="" class="icon-container" />
      <span class="date-text">{{ formattedDate }}</span>
    </div>
    <div class="text-container">
      <div class="ellipsis-container">
        <p class="ellipsis-text">
          Lorem ipsum dolor, sit amet consectetur adipisicingaaa adipisicingaaa adipisicingaaa v sit
          amet consectetur adipisicingaaa adipisicingaaa adipisicingaaa.
        </p>
      </div>
      <div class="detailsText">
        <div class="temperature-container">
          <p class="temperature padding-margin">{{ props.temp || '00' }}&deg;</p>
        </div>
        <div class="description-container">
          <p class="description-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing. sit amet consectetur adipisicing.
            sit amet consectetur
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PartlyCloudy } from '@element-plus/icons-vue';
const tempStr = ref<string>('23');
const props = defineProps({
  temp: String,
  icon: String
});
tempStr.value = props.temp?.toString() as string;
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
.date-container {
  display: flex;
  align-items: center;
}

.icon-container {
  width: 40px;
  height: 40px;
  margin-right: 5px;
}
.text-container {
  width: 40%;
  padding-top: 20px;
  text-align: justify;
}
.ellipsis-container {
  width: 100%;
  overflow: hidden;
}
.temperature {
  font-size: 50px;
  font-weight: 400;
}
.detailsText {
  display: flex;
  flex-direction: row;
}
.temperature-container {
  width: 25%;
}
.description-container {
  width: 75%;
}
.description-text {
  font-size: 12px;
  width: 100%;
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
@media (min-width: 1025px) and (max-width: 1200px) {
  .text-container {
    width: 60%;
    padding-top: 18px;
    text-align: justify;
  }
  .ellipsis-container {
    width: 100%;
    overflow: hidden;
  }
  .ellipsis-text {
    font-size: 11px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    color: rgb(126, 233, 233);
  }
  .description-text {
    font-size: 11px;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
  }
  .description-text:hover {
    white-space: normal;
    text-overflow: clip;
    overflow: visible;
  }
  .temperature {
    font-size: 36px;
    font-weight: 400;
  }
  .padding-margin {
    padding-top: -500px;
    margin-top: -15px;
    margin-left: 0px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .text-container {
    width: 60%;
    padding-top: 15px;
    text-align: justify;
  }
  .ellipsis-container {
    width: 100%;
    overflow: hidden;
  }
  .ellipsis-text {
    font-size: 11px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    color: rgb(126, 233, 233);
  }
  .description-text {
    font-size: 11px;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
  }
  .description-text:hover {
    white-space: normal;
    text-overflow: clip;
    overflow: visible;
  }
  .temperature {
    font-size: 30px;
    font-weight: 400;
  }
  .padding-margin {
    padding-top: 3px;
    margin-top: -15px;
    margin-left: 0px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .text-container {
    width: 100%;
    padding-top: 12px;
    text-align: justify;
  }
  .ellipsis-container {
    width: 100%;
    overflow: hidden;
  }
  .ellipsis-text {
    font-size: 11px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    color: rgb(126, 233, 233);
  }
  .description-text {
    font-size: 11px;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
  }
  .description-text:hover {
    white-space: normal;
    text-overflow: clip;
    overflow: visible;
  }
  .temperature {
    font-size: 25px;
    font-weight: 400;
  }
  .padding-margin {
    padding-top: 5px;
    margin-top: -15px;
    margin-left: 0px;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .text-container {
    width: 30%;
    padding-top: 10px;
    text-align: justify;
  }
  .ellipsis-container {
    width: 100%;
    overflow: hidden;
  }
  .ellipsis-text {
    font-size: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    color: rgb(126, 233, 233);
  }
}
</style>
