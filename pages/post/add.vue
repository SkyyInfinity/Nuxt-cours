<template>
    <div class="page page-poney__add">
        <div class="flex gap-x-3">
            <Button to="/post">Retour</Button>
            <h1 class="text-3xl font-bold">Ajouter un article</h1>
        </div>
        <AddPost />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'PostAddPage', 
})
</script>
