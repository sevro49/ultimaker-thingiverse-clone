<script>
export default {
    data() {
        return {
            isLiked: false,
            isShared: false,
        };
    },

    methods: {
        toggleLike() {
            this.isLiked = !this.isLiked;
        },

        toggleShare() {
            this.isShared = !this.isShared;
        },
    },
};
</script>

<template>
    <div
        class="search-result mt-3 d-grid align-items-center flex-wrap justify-content-center"
    >
        <div class="thing-card shadow">
            <div class="share-popUp"></div>
            <div
                class="thing-card__header d-flex py-2 px-3 align-items-center bg-white"
            >
                <a href="" class="thing-card__headerAvatar me-3">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </a>
                <a
                    href=""
                    class="thing-card__headerTitle text-muted text-decoration-none"
                >
                    test title
                </a>
            </div>
            <a href="" class="thing-card__bodyWrapper">
                <img src="../../assets/test-image.jpg" alt="make card" />
            </a>
            <div class="thing-card__actions d-flex align-items-center">
                <div class="thing-card__actionsLeftContainer p-0 col-8">
                    <div class="item-container">
                        <a href="javascript:void(0);" class="text-decoration-none text-muted">
                            <font-awesome-icon icon="fa-solid fa-plus" />
                            Collect Thing
                        </a>
                    </div>
                </div>
                <div
                    class="thing-card__actionsRightContainer p-0 col-4 border-start"
                >
                    <div class="border-bottom">
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleLike"
                            >
                                <template v-if="!isLiked">
                                    <font-awesome-icon
                                        icon="fa-regular fa-heart"
                                    />
                                    111
                                </template>
                                <template v-else>
                                    <font-awesome-icon
                                        icon="fa-solid fa-heart"
                                    />
                                </template>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleShare"
                            >
                                <font-awesome-icon
                                    icon="fa-solid fa-arrow-up-from-bracket"
                                />
                                Share
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thing-card shadow">
            <div class="share-popUp"></div>
            <div
                class="thing-card__header d-flex py-2 px-3 align-items-center bg-white"
            >
                <a href="" class="thing-card__headerAvatar me-3">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </a>
                <a
                    href=""
                    class="thing-card__headerTitle text-muted text-decoration-none"
                >
                    test title
                </a>
            </div>
            <a href="" class="thing-card__bodyWrapper">
                <img src="../../assets/test-image.jpg" alt="make card" />
            </a>
            <div class="thing-card__actions d-flex align-items-center">
                <div class="thing-card__actionsLeftContainer p-0 col-8">
                    <div class="item-container">
                        <a href="javascript:void(0);" class="text-decoration-none text-muted">
                            <font-awesome-icon icon="fa-solid fa-plus" />
                            Collect Thing
                        </a>
                    </div>
                </div>
                <div
                    class="thing-card__actionsRightContainer p-0 col-4 border-start"
                >
                    <div class="border-bottom">
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleLike"
                            >
                                <template v-if="!isLiked">
                                    <font-awesome-icon
                                        icon="fa-regular fa-heart"
                                    />
                                    111
                                </template>
                                <template v-else>
                                    <font-awesome-icon
                                        icon="fa-solid fa-heart"
                                    />
                                </template>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleShare"
                            >
                                <font-awesome-icon
                                    icon="fa-solid fa-arrow-up-from-bracket"
                                />
                                Share
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thing-card shadow">
            <div class="share-popUp"></div>
            <div
                class="thing-card__header d-flex py-2 px-3 align-items-center bg-white"
            >
                <a href="" class="thing-card__headerAvatar me-3">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </a>
                <a
                    href=""
                    class="thing-card__headerTitle text-muted text-decoration-none"
                >
                    test title
                </a>
            </div>
            <a href="" class="thing-card__bodyWrapper">
                <img src="../../assets/test-image.jpg" alt="make card" />
            </a>
            <div class="thing-card__actions d-flex align-items-center">
                <div class="thing-card__actionsLeftContainer p-0 col-8">
                    <div class="item-container">
                        <a href="javascript:void(0);" class="text-decoration-none text-muted">
                            <font-awesome-icon icon="fa-solid fa-plus" />
                            Collect Thing
                        </a>
                    </div>
                </div>
                <div
                    class="thing-card__actionsRightContainer p-0 col-4 border-start"
                >
                    <div class="border-bottom">
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleLike"
                            >
                                <template v-if="!isLiked">
                                    <font-awesome-icon
                                        icon="fa-regular fa-heart"
                                    />
                                    111
                                </template>
                                <template v-else>
                                    <font-awesome-icon
                                        icon="fa-solid fa-heart"
                                    />
                                </template>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleShare"
                            >
                                <font-awesome-icon
                                    icon="fa-solid fa-arrow-up-from-bracket"
                                />
                                Share
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thing-card shadow">
            <div class="share-popUp"></div>
            <div
                class="thing-card__header d-flex py-2 px-3 align-items-center bg-white"
            >
                <a href="" class="thing-card__headerAvatar me-3">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </a>
                <a
                    href=""
                    class="thing-card__headerTitle text-muted text-decoration-none"
                >
                    test title
                </a>
            </div>
            <a href="" class="thing-card__bodyWrapper">
                <img src="../../assets/test-image.jpg" alt="make card" />
            </a>
            <div class="thing-card__actions d-flex align-items-center">
                <div class="thing-card__actionsLeftContainer p-0 col-8">
                    <div class="item-container">
                        <a href="javascript:void(0);" class="text-decoration-none text-muted">
                            <font-awesome-icon icon="fa-solid fa-plus" />
                            Collect Thing
                        </a>
                    </div>
                </div>
                <div
                    class="thing-card__actionsRightContainer p-0 col-4 border-start"
                >
                    <div class="border-bottom">
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleLike"
                            >
                                <template v-if="!isLiked">
                                    <font-awesome-icon
                                        icon="fa-regular fa-heart"
                                    />
                                    111
                                </template>
                                <template v-else>
                                    <font-awesome-icon
                                        icon="fa-solid fa-heart"
                                    />
                                </template>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleShare"
                            >
                                <font-awesome-icon
                                    icon="fa-solid fa-arrow-up-from-bracket"
                                />
                                Share
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thing-card shadow">
            <div class="share-popUp"></div>
            <div
                class="thing-card__header d-flex py-2 px-3 align-items-center bg-white"
            >
                <a href="" class="thing-card__headerAvatar me-3">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </a>
                <a
                    href=""
                    class="thing-card__headerTitle text-muted text-decoration-none"
                >
                    test title
                </a>
            </div>
            <a href="" class="thing-card__bodyWrapper">
                <img src="../../assets/test-image.jpg" alt="make card" />
            </a>
            <div class="thing-card__actions d-flex align-items-center">
                <div class="thing-card__actionsLeftContainer p-0 col-8">
                    <div class="item-container">
                        <a href="javascript:void(0);" class="text-decoration-none text-muted">
                            <font-awesome-icon icon="fa-solid fa-plus" />
                            Collect Thing
                        </a>
                    </div>
                </div>
                <div
                    class="thing-card__actionsRightContainer p-0 col-4 border-start"
                >
                    <div class="border-bottom">
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleLike"
                            >
                                <template v-if="!isLiked">
                                    <font-awesome-icon
                                        icon="fa-regular fa-heart"
                                    />
                                    111
                                </template>
                                <template v-else>
                                    <font-awesome-icon
                                        icon="fa-solid fa-heart"
                                    />
                                </template>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleShare"
                            >
                                <font-awesome-icon
                                    icon="fa-solid fa-arrow-up-from-bracket"
                                />
                                Share
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thing-card shadow">
            <div class="share-popUp"></div>
            <div
                class="thing-card__header d-flex py-2 px-3 align-items-center bg-white"
            >
                <a href="" class="thing-card__headerAvatar me-3">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </a>
                <a
                    href=""
                    class="thing-card__headerTitle text-muted text-decoration-none"
                >
                    test title
                </a>
            </div>
            <a href="" class="thing-card__bodyWrapper">
                <img src="../../assets/test-image.jpg" alt="make card" />
            </a>
            <div class="thing-card__actions d-flex align-items-center">
                <div class="thing-card__actionsLeftContainer p-0 col-8">
                    <div class="item-container">
                        <a href="javascript:void(0);" class="text-decoration-none text-muted">
                            <font-awesome-icon icon="fa-solid fa-plus" />
                            Collect Thing
                        </a>
                    </div>
                </div>
                <div
                    class="thing-card__actionsRightContainer p-0 col-4 border-start"
                >
                    <div class="border-bottom">
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleLike"
                            >
                                <template v-if="!isLiked">
                                    <font-awesome-icon
                                        icon="fa-regular fa-heart"
                                    />
                                    111
                                </template>
                                <template v-else>
                                    <font-awesome-icon
                                        icon="fa-solid fa-heart"
                                    />
                                </template>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleShare"
                            >
                                <font-awesome-icon
                                    icon="fa-solid fa-arrow-up-from-bracket"
                                />
                                Share
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thing-card shadow">
            <div class="share-popUp"></div>
            <div
                class="thing-card__header d-flex py-2 px-3 align-items-center bg-white"
            >
                <a href="" class="thing-card__headerAvatar me-3">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </a>
                <a
                    href=""
                    class="thing-card__headerTitle text-muted text-decoration-none"
                >
                    test title
                </a>
            </div>
            <a href="" class="thing-card__bodyWrapper">
                <img src="../../assets/test-image.jpg" alt="make card" />
            </a>
            <div class="thing-card__actions d-flex align-items-center">
                <div class="thing-card__actionsLeftContainer p-0 col-8">
                    <div class="item-container">
                        <a href="javascript:void(0);" class="text-decoration-none text-muted">
                            <font-awesome-icon icon="fa-solid fa-plus" />
                            Collect Thing
                        </a>
                    </div>
                </div>
                <div
                    class="thing-card__actionsRightContainer p-0 col-4 border-start"
                >
                    <div class="border-bottom">
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleLike"
                            >
                                <template v-if="!isLiked">
                                    <font-awesome-icon
                                        icon="fa-regular fa-heart"
                                    />
                                    111
                                </template>
                                <template v-else>
                                    <font-awesome-icon
                                        icon="fa-solid fa-heart"
                                    />
                                </template>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleShare"
                            >
                                <font-awesome-icon
                                    icon="fa-solid fa-arrow-up-from-bracket"
                                />
                                Share
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thing-card shadow">
            <div class="share-popUp"></div>
            <div
                class="thing-card__header d-flex py-2 px-3 align-items-center bg-white"
            >
                <a href="" class="thing-card__headerAvatar me-3">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </a>
                <a
                    href=""
                    class="thing-card__headerTitle text-muted text-decoration-none"
                >
                    test title
                </a>
            </div>
            <a href="" class="thing-card__bodyWrapper">
                <img src="../../assets/test-image.jpg" alt="make card" />
            </a>
            <div class="thing-card__actions d-flex align-items-center">
                <div class="thing-card__actionsLeftContainer p-0 col-8">
                    <div class="item-container">
                        <a href="javascript:void(0);" class="text-decoration-none text-muted">
                            <font-awesome-icon icon="fa-solid fa-plus" />
                            Collect Thing
                        </a>
                    </div>
                </div>
                <div
                    class="thing-card__actionsRightContainer p-0 col-4 border-start"
                >
                    <div class="border-bottom">
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleLike"
                            >
                                <template v-if="!isLiked">
                                    <font-awesome-icon
                                        icon="fa-regular fa-heart"
                                    />
                                    111
                                </template>
                                <template v-else>
                                    <font-awesome-icon
                                        icon="fa-solid fa-heart"
                                    />
                                </template>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="item-container py-2">
                            <a
                                href="javascript:void(0);"
                                class="contentItem text-muted text-decoration-none"
                                @click="toggleShare"
                            >
                                <font-awesome-icon
                                    icon="fa-solid fa-arrow-up-from-bracket"
                                />
                                Share
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.search-result {
    // display: flex;
    // align-items: center;
    // flex-wrap: wrap;
    grid-template-columns: repeat(5, minmax(300px, max-content)) !important;
    gap: 20px;

    .thing-card {
        // &__header{

        // }
        // &__bodyWrapper{

        // }

        &__actions {
            &LeftContainer > *,
            &RightContainer > * {
                cursor: pointer;
                gap: 20px;
            }
        //     &LeftContainer {
        //     }
        //     &RightContainer {
                
        //     }
        }
    }

    img {
        object-fit: contain;
        max-width: 300px;
    }
}

@media (max-width: 1596px) {
    .search-result {
        grid-template-columns: repeat(4, minmax(300px, max-content)) !important;
    }
}

@media (max-width: 1272px) {
    .search-result {
        grid-template-columns: repeat(3, minmax(300px, max-content)) !important;
    }
}

@media (max-width: 940px) {
    .search-result {
        grid-template-columns: repeat(2, minmax(300px, max-content)) !important;
    }
}

@media (max-width: 640px) {
    .search-result {
        grid-template-columns: repeat(1, minmax(300px, max-content)) !important;
    }
}
</style>