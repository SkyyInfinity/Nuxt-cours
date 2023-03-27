<template>
    <div class="page page-poney__add">
        <div class="flex gap-x-3">
            <h1 class="text-3xl font-bold">Ajouter un poney</h1>
            <Button to="/poney">Voir la liste</Button>
        </div>
        <AddForm :ponies="ponies"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'PoneyAddPage',
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
