<template>
    <div class="page page-poney">
        <div class="flex gap-x-3">
            <h1 class="text-3xl font-bold">List des poney</h1>
            <Button to="/poney/add">Ajouter</Button>
        </div>
        <ul class="ponies">
            <li v-for="poney in ponies" :key="poney.id">{{ poney.name }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'PoneyPage',
    data() {
        return {
            ponies: [
                {
                    id: 1,
                    name: 'Pink'
                },
                {
                    id: 2,
                    name: 'Yellow'
                },
                {
                    id: 3,
                    name: 'Blue'
                }
            ]
        }
    }
})
</script>
