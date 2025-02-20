<script setup>
import { ref } from 'vue';

// Estados locales
const tareas = ref([])
const nuevaTarea = ref('')

// Funciones
const addTarea = () => {
    tareas.value.push(nuevaTarea.value)
    nuevaTarea.value = ''
}

const borrarTarea = (index) => {
    tareas.value.splice(index, 1)
}
</script>

<template>
    <div>
        <h2>Lista de tareas</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ tarea }}
                <button @click="borrarTarea(index)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
