<template>
    <div class="page page-poney">
        <div class="flex gap-x-3">
            <Button to="/">Retour</Button>
            <h1 class="text-3xl font-bold">List des articles</h1>
            <Button to="/post/add">Ajouter</Button>
        </div>
        <div class="posts">
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
    name: 'PoneyPage',
    async asyncData(ctx) {
        const posts = await ctx.app.$services.posts.findAll();

        return {
            posts,
        }
    },
})
</script>
