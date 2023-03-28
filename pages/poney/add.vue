<template>
    <div class="page page-poney__add">
        <div class="flex gap-x-3">
            <Button to="/poney">Retour</Button>
            <h1 class="text-3xl font-bold">Ajouter un poney</h1>
        </div>
        <AddForm :ponies="ponies"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'PoneyAddPage',
    async asyncData(ctx) {
        const all = await ctx.app.$services.posts.findAll();
        console.log('findAll', all);

        const one = await ctx.app.$services.posts.findOne(2);
        console.log('findOne', one);

        const addResult = await ctx.app.$services.posts.add({ title: 'foo', body: 'bar', userId: 1 });
        console.log('add', addResult);
        
        const deleteResult = await ctx.app.$services.posts.delete(3);
        console.log('delete', deleteResult);

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
            ],
            posts: all
        }
    },
    data() {
        return {
            ponies: Array
        }
    }, 
})
</script>
