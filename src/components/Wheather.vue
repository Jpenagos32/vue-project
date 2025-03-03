<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useWeather } from '@/composables/useWeather';
// funcion que tiene que ver con el ciclo de vida de vue
import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';

const weatherStore = useWeatherStore()

onMounted(() => {
    useWeather()
})
</script>

<template>
    <h3>La Temperatura Actual Es: {{ weatherStore.temperatura }}°</h3>
</template>

<style scoped>

</style>
