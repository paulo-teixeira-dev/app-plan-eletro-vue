<script setup>
    defineProps({
        'content': Object,
    })

    const emit = defineEmits(['action'])

    function itemClick(id) {
        emit('action', id)
    }
</script>

<template>
    <div class="v-table">
        <div class="grid-header p-3">
            <div class="grid-item"><span>#ID</span></div>
            <div class="grid-item"><span>Nome</span></div>
            <div class="grid-item"><span>Marca</span></div>
        </div>
        <div class="grid-content p-3" v-for="obj in content" @click="itemClick(obj.id)">
            <div class="grid-item"><span class="text-item">{{ obj.id }}</span></div>
            <div class="grid-item"><span class="text-item">{{ obj.nome }}</span></div>
            <div class="grid-item"><span class="text-item">{{ obj.marca_id }}</span></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .v-table {
        .grid-header,
        .grid-content {
            width: 100%;
            height: auto;
            display: grid;
            grid-template-columns: 5% 60% 10% 10% 10% 5%;
            box-sizing: border-box;

            .grid-item {
                display: flex;
                align-items: center;
            }
        }

        .grid-header {
            background: #ffffff;
            box-shadow: 0px 0px 7px 2px rgba(14, 14, 14, .07);
            border: #DADCE0 solid 1px;

            span {
                font-weight: 500;
                color: blue;
            }
        }

        .grid-content {
            cursor: pointer;
            border-bottom: #DADCE0 solid 1px;
            transition: .05s;
            &:hover {
                background: #DADCE0;
            }

            .grid-item {
                .text-item {
                    font-size: .9rem;
                    color: #424242;
                }
            }
        }
    }
</style>
