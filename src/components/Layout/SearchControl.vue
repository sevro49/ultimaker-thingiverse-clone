<script>
import SearchControlDropdown from "../Forms/SearchControlDropdown.vue";

export default {
    data() {
        return {
            showModal: false,
            sortLinks: [
                {
                    name: "Popular Last 7 Days",
                },
                {
                    name: "Popular Last 30 Days",
                },
                {
                    name: "Popular This Year",
                },
                {
                    name: "Popular All Time",
                },
                {
                    name: "Newest",
                },
                {
                    name: "Most Makes",
                },
            ],
            
        };
    },

    components: {
        SearchControlDropdown,
    },
};
</script>
class=""
<template>
    <div class="search-control d-flex justify-content-center">
        <SearchControlDropdown :list="sortLinks" />
        <SearchControlDropdown :list="sortLinks" />
        <SearchControlDropdown :list="sortLinks" />
    </div>
</template>

<style lang="scss">
.search-control {
    .btn-search-control {
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
