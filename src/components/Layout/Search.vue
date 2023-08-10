<script>
import { useThingStore } from "@/stores/thingStore";

export default {
    data() {
        return {
            searchQuery: "",
            filteredThings: [],
        };
    },
    methods: {
        searchTitles() {
            const thingStore = useThingStore();
            thingStore.filterThings(this.searchQuery);
            this.filteredThings = thingStore.things.filter((thing) =>
                thing.name
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
            );
        },
    },
};
</script>

<template>
    <div class="navbar-search input-group flex-grow-1">
        <span
            class="input-group-text bg-thing-dark-blue text-light border-0 rounded-start-1"
        >
            <font-awesome-icon
                icon="fa-solid fa-magnifying-glass"
                flip="horizontal"
            />
        </span>
        <input
            type="text"
            class="form-control bg-thing-dark-blue border-0 text-light rounded-end-1"
            placeholder="Search Thiniverse"
            v-model="searchQuery"
            @keydown.enter="searchTitles"
        />
    </div>
</template>

<style lang="scss">
.navbar-search {
    &.input-group {
        width: 35% !important;

        input[type="text"] {
            border: none !important;
            outline: none !important;

            :focus {
                outline: none !important;
            }
        }
    }
}
</style>
