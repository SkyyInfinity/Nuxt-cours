<template>
    <div class="add-form">
        <form id="form" :class="formClasses">
            <div class="field">
                <label for="name">Champ 1</label>
                <input :class="inputClasses" v-model="namePoney" type="text"/>
            </div>
            <Button type="submit" :click="createPony">Envoyer</Button>
        </form>
        <ul class="ponies">
            <Details v-for="poney in ponies" :poney="poney" v-on:delete="deletePony"/>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default {
    name: 'AddFormComponent',
    props: {
        ponies: {
            type: Array,
            default() {
                return {};
            }
        },
    },
    data() {
        return {
            formClasses: 'flex flex-col gap-y-3',
            inputClasses: 'border border-slate-200',
            namePoney: '',
        }
    },
    methods: {
        createPony(e: any) {
            e.preventDefault();
            let poney = {
                id: this.ponies.length + 1,
                name: this.namePoney
            }
            this.ponies.push(poney);
            
        },
        deletePony(item) {
            this.ponies.splice(this.ponies.indexOf(item), 1);
            
        }
    }
}
</script>
