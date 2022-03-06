<template>
    <div class="container">
        <h1>{{ user.username }}</h1>
        <p>{{ user.description }}</p>
        <PostList :posts="userPosts" title="Last Posts"> </PostList>
    </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import PostList from '@/components/Posts/PostList.vue';

export default {
  name: 'User',
  components: { PostList },
  props: {
    userId: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const store = useStore();
    const { userId } = props;
    const user = store.getters['users/GET_USER'](userId);
    const userPosts = computed(() => store.getters['posts/USER_POSTS'](user.username));
    return {
      user,
      userPosts,
    };
  },
};
</script>
