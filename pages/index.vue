<template>
    <div class="page page-home">
        <h1 class="text-3xl font-bold">Home</h1>
        <Button to="/poney">Liste des poney</Button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'IndexPage',
})
</script>
