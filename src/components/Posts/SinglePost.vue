<template>
    <BaseCard :expandable="post.comments && post.comments.length > 0">
        <template #header>
            <router-link :to="linkUser(post.username)">
                <h3>{{ postTitle(post) }}</h3>
            </router-link>
            <button class="delete-button" @click.prevent="deletePost(post)">Delete</button>
        </template>
        {{ post.post }}
        <template #footer>
            <base-card v-for="comment in post.comments" :key="comment.id" :expandable="false">
                <template #header>
                    <router-link :to="linkUser(comment.username)">
                        <h3>{{ postTitle(comment) }}</h3>
                    </router-link>
                </template>
                {{ comment.post }}
            </base-card>
        </template>
        <template #actions v-if="isLoggedIn">
            <AddPostOrComment
                textRequest="Add Comment"
                :showLabel="true"
                @text-added="(text) => addComment(text, post)"
            />
        </template>
    </BaseCard>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import BaseCard from "@/components/Base/BaseCard.vue";
import AddPostOrComment from "@/components/Forms/AddPostOrComment.vue";
export default {
    components: {
        BaseCard,
        AddPostOrComment,
    },
    props: {
        post: {
            type: Object,
            required: true,
            default: () => ({
                id: 1,
                user: "",
                date: "",
                post: "",
                comments: [],
            }),
        },
    },
    setup() {
        const store = useStore();
        const isLoggedIn = computed(() => store.getters["auth/IS_LOGGED_IN"]);
        const currentUser = computed(() => store.getters["auth/CURRENT_USER"]);
        return {
            isLoggedIn,
            currentUser,
        };
    },
    methods: {
        postTitle(post) {
            return `${post.username} @ ${post.date}`;
        },
        linkUser(username) {
            return {
                name: "User",
                params: {
                    userId: username,
                },
            };
        },
        addComment(text, post) {
            const objComment = {
                postId: post.id,
                comment: {
                    username: this.currentUser.username,
                    post: text,
                },
            };
            this.$store.dispatch("posts/addComments", objComment);
        },
        deletePost(post) {
            this.$store.dispatch("posts/deletePost", post);
        },
    },
};
</script>
