<template>
    <li>
        N°{{ poney.id }} : {{ poney.name }}
        <button @click="deleteItem">x</button>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
});
</script>
