<script>
export default {
    methods: {
        reloadPage() {
            location.reload()
        },
    },
};
</script>

<template>
    <div class="navbar-logo">
        <a href="#app" class="navbar-brand" @click="reloadPage">
            <!-- UltiMaker Thingiverse -->

            <img
                class="img-wide"
                src="../../assets/ultimaker-thingiverse-logo.png"
                alt=""
            />

            <img
                class="img-small"
                src="../../assets/ultimaker-thingiverse-logo2.png"
                alt=""
            />
        </a>
    </div>
</template>

<style>
@media (min-width: 578px) {
    .img-small {
        display: none;
    }
}

@media (max-width: 577px) {
    .img-wide {
        display: none;
    }
}
</style>
