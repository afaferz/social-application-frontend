<template>
    <div class="p-4">
        <header v-if="$slots.header" class="text-blue-600 flex justify-between items-center">
            <slot name="header"></slot>
        </header>
        <slot></slot>
        <footer v-if="$slots.footer && expandable">
            <a href="#" @click.prevent="toggleDetails" class="footer-elements">
                {{ detailsText }}
            </a>
            <slot name="footer" v-if="expanded"></slot>
        </footer>
        <slot name="actions"></slot>
    </div>
</template>
<script>
export default {
  props: {
    expandable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    detailsText() {
      if (!this.expanded) return 'Show comments';
      return 'Hide comments';
    },
  },
  methods: {
    toggleDetails() {
      this.expanded = !this.expanded;
    },
  },
};
</script>
<style scoped>
.right-icon {
    float: right;
    margin: 2rem auto;
    border-radius: 12px;
}
/* .footer-elements {
    display: flex;
    float: left;
} */
/* header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: brown;
} */
div {
    /* margin: 2rem auto; */
    max-width: 50rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
