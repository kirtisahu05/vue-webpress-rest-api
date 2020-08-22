<template>
    <div class="container post-container">
        <nuxt-link :to="{ name: 'posts-postId', params: { postId: post.ID }}">
            <v-img :aspect-ratio="16/9" :src="post.post_thumbnail.URL"></v-img>
            <h1>{{ post.title }}</h1>
        </nuxt-link>
            <h4>{{ post.date | moment("from", "now") }}</h4>
        <div class="post-content" v-html="post.excerpt"></div>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        name: 'Members',
        data() {
            return {
            }
        },
        props: {
            post: Object,
        },
        computed: {
        },
        methods: {
        },
    }
</script>
<style lang="less" scoped>
    .post-container {
        h1 {
            color: #0d84f9;
        }
        h4 {
            color: #8e8787;
        }
        a {
            text-decoration: none;
        }
    }
</style>