<template>
    <div class="navbar-logo">
        <router-link 
        to="/"
        class="navbar-brand">
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
        </router-link>
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
