<template>
  <div class="searchDiv">
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearch"
      class="transparent"
      popper-class="my-autocomplete"
      placeholder="Search Cities."
      @select="handleSelect"
    >
      <template #prefix>
        <el-icon class="el-input__icon" @click="handleIconClick">
          <Odometer />
        </el-icon>
      </template>
      <template #suffix>
        <el-icon class="el-input__icon" @click="handleIconClick">
          <Search />
        </el-icon>
      </template>
      <template #default="{ item }">
        <div class="value">{{ item.value }}</div>
      </template>
    </el-autocomplete>
  </div>
</template>

<script setup lang="ts">
import { Search, Odometer } from '@element-plus/icons-vue';
import { ref, onMounted, onUpdated } from 'vue';
import { useStore } from 'vuex';
const state = ref('Tokyo');
const store = useStore();
const cityData = ref({});
let cities: String[] = [];
onMounted(() => {
  store.dispatch('fetchWeather').then(() => {
    cities = store.getters.cityNames;
  });
  store.dispatch('fetchForeCast', state.value);
});

const querySearch = (queryString: string, cb: (arg0: { value: String }[]) => void) => {
  const results = cities.filter(
    (city) => city.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  );
  cb(results.map((value) => ({ value }))); // Wrapping cities in objects with 'value' property
};

const handleSelect = (item: { value: string }) => {
  state.value = item.value;
};
onUpdated(() => {
  store.dispatch('setSelectedCityWeather', state.value);

  cityData.value = store.state.selectedCityWeather;
});

const handleIconClick = (ev: Event) => {
  console.log(ev);
};
</script>

<style>
.searchDiv {
  padding: 14px;
}
.transparent .el-input__inner {
  color: rgb(189, 189, 189);
  width: 250px;
  height: 50px;
}
.transparent .el-input__wrapper {
  background-color: transparent;
  color: white;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.463);
}
.my-autocomplete.el-popper {
  background-color: #0000006d;
  color: white;
}
.my-autocomplete.el-popper li {
  line-height: normal;
  padding: 8px;
  margin: 8px;
  color: rgb(255, 255, 255);
}
.my-autocomplete.el-popper li:hover {
  line-height: normal;
  padding: 7px;
  color: rgb(31, 31, 31);
}

@media (max-width: 1200px) {
  .searchDiv {
    padding: 12px;
  }
  .transparent .el-input__inner {
    width: 310px;
    height: 45px;
  }
  .my-autocomplete.el-popper li {
    padding: 7px;
    margin: 7px;
  }
}

/* Medium screens, typically tablets */
@media (max-width: 992px) {
  .searchDiv {
    padding: 10px;
  }
  .transparent .el-input__inner {
    width: 250px;
    height: 40px;
  }
  .my-autocomplete.el-popper li {
    padding: 6px;
    margin: 6px;
  }
}

/* Small screens, typically large mobile devices */
@media (max-width: 768px) {
  .searchDiv {
    padding: 8px;
    padding-left: 50px;
  }
  .transparent .el-input__inner {
    width: 420px;
    height: 45px;
  }
  .my-autocomplete.el-popper li {
    padding: 5px;
    margin: 5px;
  }
}

/* Extra-small screens, typically small mobile devices */
@media (max-width: 576px) {
  .searchDiv {
    padding: 6px;
    padding-left: 30px;
  }
  .transparent .el-input__inner {
    width: 350px;
    height: 45px;
  }
  .my-autocomplete.el-popper {
    background-color: #0000004d;
    width: 300px;
  }
  .my-autocomplete.el-popper li {
    padding: 4px;
    margin: 4px;
  }
  .my-autocomplete.el-popper li:hover {
    padding: 3px;
  }
}

@media (max-width: 320px) {
  .searchDiv {
    padding: 6px;
    padding-left: 5px;
  }
  .transparent .el-input__inner {
    width: 200px;
    height: 40px;
  }
  .my-autocomplete.el-popper {
    background-color: #0000004d;
    width: 260px;
  }
  .my-autocomplete.el-popper li {
    padding: 4px;
    margin: 4px;
  }
  .my-autocomplete.el-popper li:hover {
    padding: 3px;
  }
}
</style>
