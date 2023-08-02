<template>
    <nav class="navbar navbar-expand bg-thing-blue">
        <div class="container-fluid d-flex flex-wrap">
            <div class="navbar-logo">
                <a href="#" class="navbar-brand">
                    <!-- UltiMaker Thingiverse -->
                    <img
                        src="../assets/ultimaker-thingiverse-logo.png"
                        alt=""
                    />
                </a>
            </div>
            <div class="navbar-search input-group flex-grow-1">
                <span
                    class="input-group-text bg-thing-dark-blue text-light border-0 rounded-start-1"
                >
                    <font-awesome-icon
                        icon="fa-solid fa-magnifying-glass"
                        flip="horizontal"
                    />
                </span>
                <input
                    type="text"
                    class="form-control bg-thing-dark-blue border-0 text-light rounded-end-1"
                    placeholder="Search Thingiverse"
                />
            </div>
            <div class="navbar-content ms-4">
                <ul class="navbar-nav me-auto mb-0 d-flex space-between">
                    <div>
                        <li class="nav-item dropdown ms-2">
                            <a
                                href="#"
                                class="nav-link p-0"
                                data-bs-toggle="dropdown"
                                >Explore</a
                            >
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#" class="dropdown-item">Things</a>
                                </li>
                                <li>
                                    <a href="#" class="dropdown-item"
                                        >Designers</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="dropdown-item">Groups</a>
                                </li>
                                <li>
                                    <a href="#" class="dropdown-item"
                                        >Customizable Things</a
                                    >
                                </li>
                            </ul>
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
                            <ul class="dropdown-menu dropdown-menu-sm-end">
                                <li>
                                    <a href="#" class="dropdown-item"
                                        >Upload a Thing!</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="dropdown-item"
                                        >Customize a Thing</a
                                    >
                                </li>
                            </ul>
                        </li>
                    </div>
                    <div>
                        <li class="nav-item exclamation ms-2">
                            <a
                                href="#"
                                class="nav-link py-0 bg-white text-thing-blue"
                            >
                                <font-awesome-icon
                                    icon="fa-solid fa-exclamation"
                                />
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
                                <font-awesome-icon
                                    icon="fa-solid fa-angle-down"
                                />
                                <font-awesome-icon icon="fa-solid fa-user" />
                            </a>

                            <ul class="dropdown-menu dropdown-menu-end w-100">
                                <li>
                                    <a href="#" class="dropdown-item"
                                        >View Profile</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="dropdown-item"
                                        >Messages</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="dropdown-item"
                                        >My Designs</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="dropdown-item"
                                        >My Collections</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="dropdown-item"
                                        >My Likes</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="dropdown-item"
                                        >My Groups</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="dropdown-item"
                                        >My Analytics</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="dropdown-item"
                                        >Account Settings</a
                                    >
                                </li>
                                <li>
                                    <a href="#" class="dropdown-item"
                                        >Log Out</a
                                    >
                                </li>
                            </ul>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

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

.layout-wrapper {
}
.layout {
    max-width: 1580px;
}
</style>
