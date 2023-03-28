<template>
    <div class="add-post">
        <form id="form" :class="formClasses">
            <div class="field">
                <label for="name">Titre</label>
                <input v-model="postTitle" :class="inputClasses" type="text"/>
            </div>
            <div class="field">
                <label for="name">Corps</label>
                <input v-model="postBody" :class="inputClasses" type="text"/>
            </div>
            <div class="field">
                <label for="name">User</label>
                <input v-model="postUser" :class="inputClasses" type="number"/>
            </div>
            <Button type="submit" :click="create">Envoyer</Button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Post from '~/assets/data/Post.class';

export default defineComponent({
    name: 'AddPostComponent',
    props: {
        posts: {
            type: Post,
            default() {
                return [];
            }
        },
    },
    data() {
        return {
            formClasses: 'flex flex-col gap-y-3',
            inputClasses: 'border border-slate-200',
            postTitle: '',
            postBody: '',
            postUser: '',
        }
    },
    methods: {
        create(e: any) {
            e.preventDefault();
            const data = {
                title: this.postTitle,
                body: this.postBody,
                userId: this.postUser
            }
            const res = this.$service.posts.add(data);
            console.log(res);
        }
    }
});
</script>
