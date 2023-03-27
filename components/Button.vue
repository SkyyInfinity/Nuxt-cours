<template>
    <button v-if="!to" :type="type" @click="click" :class="classes"><slot></slot></button>
    <NuxtLink v-else :to="to" :class="classes"><slot></slot></NuxtLink> 
</template>

<script lang="ts">
import Vue from 'vue';

export default {
    name: 'ButtonComponent',
    props: [
        'text',
        'type',
        'color',
        'to',
        'click'
    ],
    data() {
        return {
            classes: 'py-3 px-5 bg-slate-100 hover:bg-slate-200 transition rounded-lg w-max'
        }
    }
}
</script>
