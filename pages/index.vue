<template>
    <div class="page page-home">
        <h1 class="text-3xl font-bold">Home</h1>
        <div class="flex flex-row gap-2">
            <Button to="/poney">Liste des poney</Button>
            <Button to="/post">Liste des articles</Button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'IndexPage',
})
</script>
