<script>
// import TitleList from "../API/TitleList.vue";
import axios from "axios";

export default {
    data() {
        return {
            isLiked: [],
            isShared: false,
            things: [],
        };
    },

    // components: {
    //     TitleList,
    // },

    mounted() {
        this.fetchThings();
    },

    methods: {
        // Toggle like for a specific thing ID
        toggleLike(thingId) {
            const item = this.isLiked.find((item) => item.id === thingId);
            if (item) {
                item.value = !item.value;
            } else {
                // If the item doesn't exist in the array, add it
                this.isLiked.push({ id: thingId, value: true });
            }
        },

        // Check if a specific thing is liked
        isLikedMethod(thingId) {
            const item = this.isLiked.find((item) => item.id === thingId);
            return item ? item.value : false;
        },

        toggleShare() {
            this.isShared = !this.isShared;
        },

        fetchThings() {
            const apiKey = process.env.VUE_APP_API_KEY;
            const headers = { Authorization: `Bearer ${apiKey}` };

            // Make an API call to fetch things from Thingiverse using Axios
            axios
                .get("https://api.thingiverse.com/things", { headers })
                .then((response) => {
                    this.things = response.data.map((item) => ({
                        id: item.id,
                        name: item.name,
                        thumbnail: item.thumbnail,
                        public_url: item.public_url,
                        like_count: item.like_count,
                        creator: {
                            id: item.creator.id,
                            name: item.creator.name,
                            thumbnail: item.creator.thumbnail,
                            public_url: item.creator.public_url,
                        },
                    }));
                })
                .catch((error) => {
                    console.error("Error fetching things:", error);
                });
        },
    },
};
</script>

<template>
    <div class="thing-card shadow" v-for="thing in things" :key="thing.id">
        <div class="share-popUp"></div>
        <div
            class="thing-card__header d-flex py-2 px-3 align-items-center bg-white overflow-hidden"
        >
            <a :href="thing.creator.public_url" class="thing-card__headerAvatar me-3">
                <!-- <font-awesome-icon icon="fa-solid fa-user" /> -->
                <img :src="thing.creator.thumbnail" alt="">
            </a>
            <a :href="thing.public_url" class="text-decoration-none">
                <span class="thing-card__headerTitle text-muted">
                    {{ thing.name }}
                </span>
            </a>
        </div>
        <a :href="thing.public_url" class="thing-card__bodyWrapper">
            <img :src="thing.thumbnail" alt="make card" />
        </a>
        <div
            class="thing-card__actions bg-white d-flex align-items-center bg-white"
        >
            <div class="thing-card__actionsLeftContainer p-0 col-8">
                <div class="item-container">
                    <a
                        href="javascript:void(0);"
                        class="text-decoration-none text-muted"
                    >
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
                            @click="toggleLike(thing.id)"
                        >
                            <template v-if="!isLikedMethod(thing.id)">
                                <font-awesome-icon icon="fa-regular fa-heart" />
                                {{ thing.like_count }}
                            </template>
                            <template v-else>
                                <font-awesome-icon icon="fa-solid fa-heart" />
                                {{ thing.like_count + 1 }}
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
    <!-- <TitleList /> -->
</template>

<style lang="scss">
.search-result {
    // display: flex;
    // align-items: center;
    // flex-wrap: wrap;
    grid-template-columns: repeat(5, minmax(300px, max-content)) !important;
    gap: 20px;

    .thing-card {
        max-width: 300px;
        div > * {
            background: #fff;
        }

        &__header {
            // height: 40px;
            // width: 300px;

            &Avatar{
                img{
                    width: 30px;
                    border-radius: 50%;
                }
            }

            a:nth-child(2) {
                overflow: hidden;
            }
            &Title {
                display: block;
                overflow: hidden;
                word-break: break-all;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
        &__bodyWrapper {
            img {
                height: 225px;
                object-fit: contain;
                max-width: 300px;
            }
        }

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

@media (max-width: 960px) {
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
