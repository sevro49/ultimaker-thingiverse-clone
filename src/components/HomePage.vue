<script>
import SearchControl from "./Layout/SearchControl.vue";
import HomePageContent from "./Layout/HomePageContent.vue";

export default {
    components: {
        SearchControl,
        HomePageContent,
    },
};
</script>

<template>
    <div class="layout-wrapper bg-light">
        <div class="layout my-3 mx-auto">
            <div class="home-page">
                <SearchControl />

                <HomePageContent />
            </div>
        </div>
    </div>
</template>

<style></style>
