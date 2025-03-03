<script setup>
import TheSidebar from '@/components/TheSidebar.vue';
import Header from '@/components/Header.vue';
import { ref } from 'vue';

const texto = ref('')
</script>

<template>
    <Header :mensaje="texto" /> <!-- con ":mensaje" estamos preparando la propiedad para que envie variables -->
    <div class="container">
        <TheSidebar />

        <div class="content">
            <input type="text" v-model="texto">
            {{ texto }}
            <!-- Esto renderiza los componentes que se encuentren en el enrutado -->
            <RouterView></RouterView>
        </div>

    </div>
</template>

<style scoped>
.container {
    display: flex;
}

.content {
    flex: 1;
    padding: 20px;
}
</style>
