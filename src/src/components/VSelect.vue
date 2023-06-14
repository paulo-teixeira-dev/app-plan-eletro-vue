<script setup>

    defineProps({
        label: {
            type: String,
            default: ''
        },
        placeholder: String,
        content: Array,
        modelValue: Number
    })

    defineEmits(['update:modelValue'])

</script>

<template>
    <div class="v-select">
        <label>{{ label }}</label>
        <select :value="modelValue" @change="$emit('update:modelValue', Number($event.target.value))">
            <option v-for="obj in content" :value="obj.id">{{obj.nome}}</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
    .v-select {
        width: 100%;
        display: flex;
        flex-direction: column;

        label {
            font-weight: 500;
        }

        select {
            width: 100%;
            height: 35px;
            background: $wth-primary;
            border: $br-primary;
            border-radius: $bdra-primary;
            outline: none;
            padding: 0 10px;
            user-select: none;
        }
    }
</style>
