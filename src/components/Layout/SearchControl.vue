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
            categoryTitles: [
                {
                    name: "All Things",
                },
                {
                    name: "3D Printing",
                },
                {
                    name: "Art",
                },
                {
                    name: "Fashion",
                },
                {
                    name: "Gadgets",
                },
                {
                    name: "Hobby",
                },
                {
                    name: "Household",
                },
                {
                    name: "Learning",
                },
                {
                    name: "Models",
                },
                {
                    name: "Tools",
                },
                {
                    name: "Toys & Games",
                },
                {
                    name: "Other",
                },
            ],
            categoryItems: [
                {
                    category: "3D Printing",
                    subcategories: [
                        "3D Printer Accessories",
                        "3D Printer Extruders",
                        "3D Printer Parts",
                        "3D Printers",
                        "3D Printing Tests",
                    ],
                },
            ],
            categories: [],
        };
    },

    components: {
        SearchControlDropdown,
    },
};
</script>

<template>
    <div class="search-control d-grid justify-content-center flex-nowrap">
        <SearchControlDropdown :list="sortLinks" />
        <SearchControlDropdown :list="sortLinks" />
        <SearchControlDropdown :list="sortLinks" />
    </div>
</template>

<style lang="scss">
.search-control {
    grid-template-columns: repeat(
        3,
        minmax(300px, max-content)
    ) !important;
    gap: 20px;

    
}

@media (max-width: 960px) {
    .search-control {
        grid-template-columns: repeat(
            2,
            minmax(300px, max-content)
        ) !important;
    }
}

@media (max-width: 640px) {
    .search-control {
        grid-template-columns: repeat(
            1,
            minmax(300px, max-content)
        ) !important;
    }
}
</style>
