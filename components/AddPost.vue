<template>
    <div class="add-post">
        <div id="form" :class="formClasses">
            <div class="field">
                <label for="name">Titre</label>
                <input v-model="postTitle" :class="inputClasses" type="text"/>
            </div>
            <div class="field">
                <label for="name">Corps</label>
                <input v-model="postBody" :class="inputClasses" type="text"/>
            </div>
            <Button :click="create">Envoyer</Button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AddPostComponent',
    data() {
        return {
            formClasses: 'flex flex-col gap-y-3',
            inputClasses: 'border border-slate-200',
            postTitle: '',
            postBody: '',
        }
    },
    methods: {
        async create() {
            const data = {
                userId: 1,
                title: this.postTitle,
                body: this.postBody
            }
            const res = await this.$services.posts.add(data);
            console.log(res);
        }
    },
});
</script>
