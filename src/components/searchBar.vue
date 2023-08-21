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
import { Search, Odometer } from '@element-plus/icons-vue'
import { ref } from 'vue'

const state = ref('')

const cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney']

const querySearch = (queryString: string, cb) => {
  const results = cities.filter(
    (city) => city.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  )
  cb(results.map((value) => ({ value }))) // Wrapping cities in objects with 'value' property
}

const handleSelect = (item) => {
  console.log(item)
}

const handleIconClick = (ev: Event) => {
  console.log(ev)
}
</script>

<style>
.searchDiv{
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
</style>
