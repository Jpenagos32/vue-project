<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';

const registrarStore = useRegistrarStore()

</script>

<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ registrarStore.nombre }}</h3>
        <h3>Email: {{ registrarStore.email }}</h3>

        <ul>
            <li>
                <RouterLink to="/contador">Contador</RouterLink>
            </li>
            <li>
                <RouterLink to="/tareas">Lista de tareas</RouterLink>
            </li>
            <li>
                <RouterLink to="/registrar">Registrar</RouterLink>
            </li>
            <li>
                <RouterLink to="/calcular">Calcular</RouterLink>
            </li>
        </ul>
        <!-- enrutado -->
    </div>
</template>

<style scoped>
.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>
