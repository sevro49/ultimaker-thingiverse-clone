<script>
import Logo from "./Logo.vue";
import Search from "./Search.vue";
import HeaderLinks from "./HeaderLinks.vue";

export default {
    data() {
        return {
            exploreLinks: [
                {
                    name: "Things",
                    path: "/",
                },
                {
                    name: "Designers",
                    path: "/",
                },
                {
                    name: "Groups",
                    path: "/",
                },
                {
                    name: "customizable Things",
                    path: "/",
                },
            ],
            createLinks: [
                {
                    name: "Upload a Thing!",
                    path: "/",
                },
                {
                    name: "Customize a Thing",
                    path: "/",
                },
            ],
            userLinks: [
                {
                    name: "View Profile",
                    path: "/",
                },
                {
                    name: "Messages",
                    path: "/",
                },
                {
                    name: "My Designs",
                    path: "/",
                },
                {
                    name: "My Collections",
                    path: "/",
                },
                {
                    name: "My Likes",
                    path: "/",
                },
                {
                    name: "My Groups",
                    path: "/",
                },
                {
                    name: "My Analytics",
                    path: "/",
                },
                {
                    name: "Account Settings",
                    path: "/",
                },
                {
                    name: "Log Out",
                    path: "/",
                },
            ],
        };
    },

    components: { Logo, Search, HeaderLinks },
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

    .navbar-content {
        .navbar-nav {
            .nav-item {
                .show {
                    color: #fff;
                }

                &.exclamation a {
                    padding: 0 0.7rem;
                    border-radius: 2px;
                }

                a {
                    font-size: 0.9rem;
                }

                .dropdown-menu {
                    border: 1px solid var(--thing-blue);
                    border-radius: 0;
                    a {
                        color: var(--thing-blue);
                    }
                }
            }
        }

        .line-seperator {
            border: 1px solid #333;
        }
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
