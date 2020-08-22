
export const state = () => ({
    posts: []
})

export const mutations = {
    recentPosts (state, posts) {
        state.posts = posts
    },
    categories (state, categories) {
        state.categories = categories;
    },
    getPostById (state, post) {
        state.post = post;
    },
    getPostByCategory (state, posts) {
        state.postsByCategory = posts;
    },
    getPostByTag (state, posts) {
        state.postsByTag = posts;
    },
    relatedPost (state, posts) {
        state.relatedPost = posts;
    }

}