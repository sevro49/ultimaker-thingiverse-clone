<script>
import Dropdown from "../Forms/Dropdown.vue";

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
    compontents: { Dropdown },
};
</script>

<template>
    <div class="navbar-content ms-4">
        <div class="dropdown-links">
            <ul class="navbar-nav me-auto mb-0 d-flex space-between">
                <div>
                    <li class="nav-item dropdown ms-2">
                        <a
                            href="#"
                            class="nav-link p-0"
                            data-bs-toggle="dropdown"
                            >Explore</a
                        >

                        <Dropdown :list="exploreLinks" />
                    </li>
                </div>
                <div>
                    <li class="nav-item ms-2">
                        <a href="#" class="nav-link p-0">Education</a>
                    </li>
                </div>
                <div>
                    <li class="nav-item dropdown ms-2">
                        <a
                            href="#"
                            class="nav-link p-0"
                            data-bs-toggle="dropdown"
                            >Create
                            <font-awesome-icon icon="fa-solid fa-plus" />
                        </a>

                        <Dropdown :list="createLinks" />
                    </li>
                </div>
                <div>
                    <li class="nav-item exclamation ms-2">
                        <a
                            href="#"
                            class="nav-link py-0 bg-white text-thing-blue"
                        >
                            <font-awesome-icon icon="fa-solid fa-exclamation" />
                        </a>
                    </li>
                </div>
                <div>
                    <li class="nav-item dropdown d-inline-block ms-2">
                        <a
                            href="#"
                            class="nav-link p-0"
                            data-bs-toggle="dropdown"
                        >
                            <font-awesome-icon icon="fa-solid fa-angle-down" />
                            <font-awesome-icon icon="fa-solid fa-user" />
                        </a>

                        <Dropdown :list="userLinks" />

                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
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
        }
    }

    
}
</style>
