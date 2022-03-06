<template>
    <div class="posts">
        <h1>All Posts</h1>
        <div class="container mx-auto">
            <AddPostOrComment
                v-if="isLoggedIn"
                textRequest="Add Post"
                :showLabel="true"
                @text-added="addPost"
            />
            <PostList :posts="posts" />
        </div>
    </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import PostList from "@/components/Posts/PostList.vue";
import AddPostOrComment from "@/components/Forms/AddPostOrComment.vue";

export default {
    name: "Posts",
    components: { PostList, AddPostOrComment },
    setup() {
        const store = useStore();
        const posts = computed(() => store.getters["posts/ALL_POSTS"]);
        const isLoggedIn = computed(() => store.getters["auth/IS_LOGGED_IN"]);
        return {
            isLoggedIn,
            posts,
        };
    },
    mounted() {
        this.$store.dispatch("posts/getAllPosts");
    },
    methods: {
        addPost(text) {
            const post = {
                username: this.$store.getters["auth/CURRENT_USER"].username,
                post: text,
            };
            this.$store.dispatch("posts/addPost", post);
        },
    },
};
</script>
