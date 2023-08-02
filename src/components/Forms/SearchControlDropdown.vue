<script>
export default {
    props: ["list"],
    data() {
        return {
            showDropdown: false,
        };
    },

    methods: {
        toggleModal() {
            this.showDropdown = !this.showDropdown;
        },
    },
};
</script>

<template>
    <div class="mx-3 d-block">
        <button
            class="btn btn-white rounded-0 btn-search-control"
            @click="toggleModal"
        >
            <span> Popular Last 30 Days </span>
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </button>

        <div
            v-if="showDropdown"
            class="search-control-dropdown btn-search-control position-absolute bg-white p-3"
        >
            <div class="dropdown-items align-items-start">
                <a href="#" v-for="(item, i) in list" :key="i" class="my-1">
                    {{ item.name }}
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.search-control-dropdown{
    border: 1px solid var(--thing-blue);

    .dropdown-items {
        display: flex;
        flex-direction: column;
        z-index: 1000;

        a{
            color: #333;
            text-decoration: none;

            &:hover{
                color: var(--thing-blue);
            }
        }
    }
}
</style>
