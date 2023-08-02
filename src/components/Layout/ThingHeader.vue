<script>
import Logo from "./Logo.vue";
import Search from "./Search.vue";
import HeaderLinks from "./HeaderLinks.vue";

export default {
    components: { Logo, Search, HeaderLinks},
};
</script>

<template>
    <nav class="navbar navbar-expand bg-thing-blue">
        <div class="container-fluid d-flex flex-wrap">
            <!-- Navbar Logo -->
            <Logo />

            <!-- Searh Bar -->
            <Search />

            <!-- Header Links -->
            <HeaderLinks />
        </div>
    </nav>
</template>

<style lang="scss">
.navbar {
    .navbar-brand,
    .navbar-content a,
    .navbar-search input::placeholder {
        color: #fff;
    }
    
    @media (min-width: 1025px) {
        .navbar-logo {
            .navbar-brand {
                flex: 0 0 300px;
            }
        }

        .navbar-search {
            max-width: 625px;
            flex-grow: 1;
        }
    }

    @media (max-width: 879px) {
        .navbar-search {
            margin-top: 7px;
            order: 3;
            flex-grow: 1;
        }
    }
}

.layout {
    max-width: 1580px;
}
</style>
