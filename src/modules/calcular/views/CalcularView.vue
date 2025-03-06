<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, computed } from 'vue';
import ResultadoSection from '../Components/ResultadoSection.vue';
const valor = ref()
const valorCalculado = computed(() => {
    return valor.value * 3
})

// computed se usa para realizar operaciones con variables reactivas
const mostrarElemento = computed(() => {
    return valor.value > 10
})

</script>

<template>
    <h3>Propiedades Computadas</h3>

    <input type="text" v-model="valor">
    {{ valorCalculado }}

    <!-- '':' antes de 'resultado' es para enviar variables dentro de las props -->
    <ResultadoSection v-if="mostrarElemento" :resultado="valorCalculado"/>
    <div v-else-if="isNaN(valor)">Debe ser un número para calcular</div>
    <div v-else>Aquí no se muestra nada</div>
</template>

<style scoped></style>
