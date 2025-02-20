<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema';

const submit = () => {
    console.log('Se envio el formulario')
}
</script>

<template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="submit">
            <div class="form">
                <label for="nombre">Nombre:</label>
                <Field name="nombre" type="text" id="nombre" placeholder="ingrese su nombre" />
                <ErrorMessage name="nombre" />
            </div>

            <div class="form">
                <label for="correo">Correo:</label>
                <Field name="email" type="email" id="correo" placeholder="ingrese su email" />
                <ErrorMessage name="email" />

            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<style scoped>
.form {
    margin-bottom: 10px;
}
</style>
