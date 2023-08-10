<script>
import Logo from "./Logo.vue";
import Search from "./Search.vue";
import HeaderLinks from "./HeaderLinks.vue";

export default {
    components: { Logo, Search, HeaderLinks},
};
</script>

<template>
    <header class="navbar navbar-expand bg-thing-blue position-sticky w-100 top-0">
        <div class="inner-navbar container-fluid d-flex flex-wrap">
            <!-- Navbar Logo -->
            <Logo />

            <!-- Searh Bar -->
            <Search />

            <!-- Header Links -->
            <HeaderLinks />
        </div>
    </header>
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

    @media (max-width: 861px) {
        .navbar-content{
            margin-top: 10px;
        }

        .navbar-search {
            margin-top: 10px;
            order: 3;
            flex-grow: 1;
        }

        
    }
    
    @media (max-width: 577px){

        .navbar-content{
            margin-left: 0;
        }

        .navbar-search{
            min-width: 300px;
        }
    }

    @media (max-width: 344px){
        .navbar-search{
            min-width: 300px;
        }
    }
}

</style>
