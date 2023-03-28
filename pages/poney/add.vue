<template>
    <div class="page page-poney__add">
        <div class="flex gap-x-3">
            <Button to="/poney">Retour</Button>
            <h1 class="text-3xl font-bold">Ajouter un poney</h1>
        </div>
        <AddForm :ponies="ponies"/>
        <div class="posts">
            <h2>Liste des articles</h2>
            <ul class="posts-list grid gap-6 sm:grid-col-1 md:grid-col-2 lg:grid-cols-4">
                <li v-for="post in posts" :key="post.id" class="post rounded-lg bg-white shadow-md p-6">
                    <h3 class="title font-bold text-lg">{{ post.title }}</h3>
                    <span class="from text-sm text-violet-400">Par n°{{ post.userId}}</span>
                    <p class="body text-slate-500">{{ post.body }}</p>
                </li>
            </ul>
        </div>
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
