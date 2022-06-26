<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ParameterPanel from './components/ParameterPanel.vue';
import MainContent from './components/MainContent.vue';
import Overlay from './components/Overlay.vue';
</script>

<template>
  <Overlay />
  <ParameterPanel />
  <MainContent />
</template>

<style>
@font-face {
  font-family: xiaomi-flex;
  src: url("./assets/32ba1d20b4cea47a40ec0137c2197d29.ttf") format('truetype');
}

#app {
  position: relative;
  font-family: "xiaomi-flex", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f3f4f6;
  height: 100%;
  overflow-y: hidden;
  /* margin-top: 60px; */
}
</style>
