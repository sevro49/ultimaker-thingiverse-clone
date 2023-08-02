<script>
import SearchControl from "./Layout/SearchControl.vue";
import ThingCard from "./Layout/ThingCard.vue";
import Pagination from "./Layout/Pagination.vue";
import Social from "./Layout/Social.vue";

export default {
    components: {
        ThingCard,
        SearchControl,
        Pagination,
        Social,
    },
};
</script>

<template>
    <div class="layout-wrapper bg-light">
        <div class="layout my-3 mx-auto bg-white">
            <div class="home-page">
                <!-- Search Control -->
                <SearchControl />

                <!-- Cards -->
                <ThingCard />

                <!-- Page Numbers -->
                <Pagination />

                <!-- Social Icons -->
                <Social />
            </div>
        </div>
    </div>
</template>

<style></style>
