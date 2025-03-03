<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Wheather from './Wheather.vue';
import { defineProps, ref, watch } from 'vue';

// Definir propiedades recibidas desde componenete padre
const props = defineProps(['mensaje'])
const mensajeRecibido = ref(props.mensaje)

watch(() => props, (newValue) => {
    mensajeRecibido.value = newValue.mensaje
})
</script>

<template>
    <div class="header">
        {{ mensajeRecibido }} <Wheather /> {{ otroMensaje }}
    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    /* position: fixed; */
    top: 0;
    right: 0;
    left: 0;
    background-color: #333;
    color: white;
}

h3 {
    margin: 0;
}
</style>
