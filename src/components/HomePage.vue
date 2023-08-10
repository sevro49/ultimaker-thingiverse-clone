<script>
import SearchControl from "./Layout/SearchControl.vue";
import HomePageContent from "./Layout/HomePageContent.vue";
import BacktoTop from "./Layout/BacktoTop.vue";

export default {
    components: {
        SearchControl,
        HomePageContent,
        BacktoTop,
    },
};
</script>

<template>
    <content class="layout-wrapper bg-light">
        <div class="layout my-3 mx-auto">
            <div class="home-page">
                <SearchControl />

                <HomePageContent />

                <BacktoTop />
            </div>
        </div>
    </content>
</template>

<style></style>
