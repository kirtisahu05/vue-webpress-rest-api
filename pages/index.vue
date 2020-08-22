<template>
    <section class="container">
        <div class="posts">
            <div class="post" v-for="post in posts" :key="post.id">
                <post :post="post"></post>
            </div>
            <span v-if="totalPosts > 25 && !showMore" @click="showMore = true">more...</span>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    import Post from '../components/Post'

    export default {
        components: {
            Post
        },
        data() {
            return {
                showMore: false,
                totalPosts: null,
            }
        },
        async asyncData({ store }) {
            return axios.get('https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/')
                .then((res) => {
                    store.commit('recentPosts', res.data.posts)
                }).catch((error) => {
                    console.log(error)
                })
        },
        computed: {
            posts() {
                this.totalPosts = this.$store.state.posts.length;
                    if (!this.showMore &&  this.totalPosts > 25) {
                        return this.$store.state.posts.slice(0, 25);
                    } else {
                        this.showMore = true;
                        return this.$store.state.posts;
                }
            }
        },
    }
</script>
