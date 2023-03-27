<template>
    <li :key="poney.id">
        N°{{ poney.id }} : {{ poney.name }}
        <button @click="deleteItem">x</button>
    </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default {
    name: 'DetailsComponents',
    props: {
        poney: {
            type: Object,
            default() {
                return {}
            }
        }
        
    },
    methods: {
        deleteItem() {
            this.$emit('delete', this.poney);
        },
    }
}
</script>
