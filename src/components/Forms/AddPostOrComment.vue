<template>
    <form @submit.prevent="add">
        <div class="flex flex-col">
            <label v-if="showLabel" :for="'text' + _uid" :class="[...classes.label]">
                {{ textRequest }}
            </label>
            <div>
                <input
                    v-model="textValue"
                    :id="'text' + _uid"
                    type="text"
                    :placeholder="textRequest"
                    class="outline-none py-1 px-2 text-md border-2 rounded-md w-4/5"
                />
                <button type="submit" class="w-1/5" :disabled="!disabledButton">SUBMIT</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        textRequest: { type: String, default: "" },
        showLabel: { type: Boolean, default: false },
    },
    data() {
        return {
            textValue: "",
            _uid: "",
            classes: {
                label: ["text-left", "text-lx", "font-mono", "pb-2", "uppercase", "font-bold"],
            },
        };
    },
    computed: {
        disabledButton() {
            return !!this.textValue;
        },
    },
    methods: {
        add() {
            this.$emit("text-added", this.textValue);
            this.textValue = "";
        },
    },
};
</script>

<style scoped></style>
