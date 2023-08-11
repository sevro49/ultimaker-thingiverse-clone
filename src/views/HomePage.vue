<script>
import SearchControl from "../components/Layout/SearchControl.vue";
import HomePageContent from "../components/Layout/HomePageContent.vue";
import BacktoTop from "../components/Layout/BacktoTop.vue";

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
