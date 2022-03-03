<template>
    <div class="login">
        <button @click="doLogin">LOGIN</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    methods: {
        ...mapActions({ login: "auth/login" }),
        async doLogin() {
            try {
                await this.login();
                this.$router.push({ name: "Posts" });
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped>
button {
    margin-top: 1rem;
    width: 20rem;
    height: 5rem;
    border-radius: 8px;
    background-color: darksalmon;
    padding: 8px;
}
</style>
