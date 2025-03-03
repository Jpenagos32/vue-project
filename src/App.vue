<script setup>
import MainView from './views/MainView.vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.open-meteo.com/v1/forecast?latitude=2.4382&longitude=-76.6132&current=temperature_2m&timezone=auto&forecast_days=1'

</script>

<template>
    <MainView/>
</template>

<style scoped></style>
