<template>
    <div class="px-3 py-4">
        <SinglePost v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>
<script>
import SinglePost from '@/components/Posts/SinglePost.vue';

export default {
  components: { SinglePost },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style></style>
