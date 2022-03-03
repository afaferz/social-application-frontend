<template>
    <div class="app-bar">
        <div class="left-links">
            <RouterLink class="app-bar-item" v-for="link in enabledLinks" :key="link.name" :to="link.to">
                {{ link.name }}
            </RouterLink>
        </div>
        <div class="right-links">
            <router-link
                class="app-bar-item"
                href="#"
                v-if="!loggedIn"
                @click.prevent
                :to="{ name: 'Login' }"
                LOGIN
            >
                LOGIN
            </router-link>
            <a class="app-bar-item" href="#" v-if="loggedIn" @click.prevent="doLogout">LOGOUT</a>
        </div>
    </div>
</template>
<script>
import { computed } from "vue";
import { useStore, mapActions } from "vuex";
export default {
    setup() {
        const store = useStore();
        const loggedIn = computed(() => store.getters["auth/IS_LOGGED_IN"]);

        return {
            loggedIn,
        };
    },
    data() {
        return {
            links: [
                {
                    visibleLoggedOut: true,
                    name: "Posts",
                    to: { name: "Posts" },
                },
                {
                    visibleLoggedOut: false,
                    name: "User",
                    to: {
                        name: "User",
                        params: {
                            userId: this.$store.getters["auth/CURRENT_USER"].username,
                        },
                    },
                },
            ],
        };
    },
    computed: {
        enabledLinks() {
            return this.links.filter((link) => link.visibleLoggedOut || this.loggedIn);
        },
    },
    methods: {
        ...mapActions({
            login: "auth/login",
            logout: "auth/logout",
        }),
        async doLogout() {
            try {
                await this.logout();
                this.$router.push({ name: "Login" });
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
<style scoped>
.app-bar {
    height: 5vh;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(158, 69, 180);
    overflow: hidden;
    display: block;
    justify-content: space-between;
    border-bottom: 1px solid rgb(212, 192, 218);
}
.left-links {
    padding-left: 10%;
}
.left-links a {
    float: left;
}
a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}
.right-links {
    float: right;
}
</style>
