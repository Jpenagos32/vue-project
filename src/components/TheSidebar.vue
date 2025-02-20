<script setup>
</script>

<template>
    <div class="sidebar">
        <h2>Barra lateral</h2>

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
