<script setup>
import TheSidebar from '@/components/TheSidebar.vue';
</script>
<template>
    <div class="container">
        <TheSidebar/>

        <div class="content">
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
