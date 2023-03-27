<template>
    <div class="page page-poney__details">
        <h1 class="text-3xl font-bold">Poney n°{{ $route.params.id }}</h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'PoneyDetailsPage',
})
</script>
