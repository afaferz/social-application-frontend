import Api from "@/plugins/Api";

export default {
    namespaced: true,
    state: () => ({
        posts: [],
    }),
    mutations: {
        SET_ALL_POSTS(state, posts) {
            state.posts = posts;
        },
        SET_POST_COMMENTS(state, { postId, post }) {
            const oldPost = state.posts.find(({ id }) => id == postId);
            oldPost.comments = post.comments;
        },
        DELETE_POST(state, postId) {
            state.posts = state.posts.filter(({ id }) => id != postId);
        },
    },
    actions: {
        async getAllPosts({ commit }) {
            try {
                const { data } = await Api.get("/api/posts/");
                commit("SET_ALL_POSTS", data);
            } catch (error) {
                console.log(error);
            }
        },
        async addPost({ commit }, post) {
            try {
                const { data } = await Api.post("/api/posts/", post);
                commit("SET_ALL_POSTS", data);
            } catch (error) {
                console.log(error);
            }
        },
        async addComments({ commit }, { postId, comment }) {
            try {
                const { data } = await Api.post(`/api/posts/${postId}/comments/`, comment);
                commit("SET_POST_COMMENTS", { postId: postId, post: data });
            } catch (error) {}
        },
        async deletePost({ commit }, post) {
            try {
                await Api.delete(`/api/posts/${post.id}/`);
                commit("DELETE_POST", post.id);
            } catch (error) {
                console.log(error);
            }
        },
    },

    getters: {
        ALL_POSTS: (state) => state.posts,
        USER_POSTS: (state) => (username) => state.posts.filter(({ user }) => user === username),
    },
};
