<template>
    <nav class="navbar navbar-expand bg-thing-blue">
        <div class="container-fluid">
            <div class="navbar-logo">
                <a href="#" class="navbar-brand">UltiMaker Thingiverse</a>
            </div>
            <div class="navbar-search">
                <input type="search" name="" id="" />
            </div>
            <div class="navbar-content">
                <ul class="navbar-nav me-auto mb-0">
                    <div>
                        <li class="nav-item dropdown">
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
                        <li class="nav-item">
                            <a href="#" class="nav-link p-0">Education</a>
                        </li>
                    </div>
                    <div>
                        <li class="nav-item dropdown">
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
                        <li class="nav-item">
                            <a href="#" class="nav-link p-0 bg-white text-thing-blue">
                                <font-awesome-icon
                                    icon="fa-solid fa-exclamation"
                                />
                            </a>
                        </li>
                    </div>
                    <div>
                        <li class="nav-item dropdown d-inline-block">
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
    .navbar-content a{
        color: #fff;
    }

    .navbar-content {
        .nav-item {
            .show {
                color: #fff;
            }

            a{
                font-size: .9rem;
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
</style>
