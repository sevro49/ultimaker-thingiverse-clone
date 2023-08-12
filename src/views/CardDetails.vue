<script>
// import { fetchThings } from "../components/API/FetchThings";
import { fetchThingDetails } from "../components/API/FetchThingsDetails.js";
import ShareCardDetails from "../components/Layout/ShareCardDetails.vue";
var moment = require("moment");

export default {
    data() {
        return {
            moment: moment,
            things: [],
            cardDetails: null,
        };
    },

    components: {
        ShareCardDetails,
    },

    async mounted() {
        try {
            this.cardDetails = await fetchThingDetails(this.$route.params.id);
        } catch (error) {
            console.log("Error fetching Thing details:", error);
        }
    },

    methods: {
        fetchCardDetails() {
            const cardId = Number(this.$route.params.id); // Convert to number
            this.cardDetails = this.things.find((thing) => thing.id === cardId);
        },
    },
};
</script>

<template>
    <div class="layout-content bg-light d-flex mt-3" v-if="cardDetails">
        <div class="thingPage my-0 mx-auto bg-light">
            <div class="thingPage_top d-flex">
                <div class="thingPage_topLeft bg-white me-3">
                    <div class="thingPage_topLeft_gallery">
                        <div class="thingPage_topLeft_galleryHeader d-flex p-2">
                            <a :href="cardDetails.creator.public_url">
                                <img
                                    :src="cardDetails.creator.thumbnail"
                                    alt=""
                                />
                            </a>
                            <div class="header-title text-start ms-2">
                                <div>{{ cardDetails.name }}</div>
                                <div class="made-by">
                                    by
                                    <a :href="cardDetails.creator.public_url">
                                        {{ cardDetails.creator.name }}</a
                                    >
                                    {{
                                        moment(cardDetails.added).format(
                                            "MMM Do YYYY"
                                        )
                                    }}
                                </div>
                            </div>
                        </div>
                        <div class="thingPage_topLeft_galleryBody">
                            <div v-if="cardDetails" class="img-wrapper">
                                <img
                                    :src="cardDetails.thumbnail"
                                    alt="Card Thumbnail"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="thingPage_topSidebar">
                    <div class="sidebar-menu bg-white mb-3">
                        <div class="sidebar-menu-top p-2">
                            <button class="btn btn-primary w-100">
                                <font-awesome-icon
                                    icon="fa-solid fa-arrow-down"
                                />
                                Download All Files
                            </button>
                        </div>
                        <div class="sidebar-menu-center">
                            <div
                                class="sidebar-menu-center_itemContainer d-flex p-2 border-top border-bottom"
                            >
                                <div class="side-bar-menu-center_itemIcon me-2">
                                    <font-awesome-icon
                                        icon="fa-solid fa-plus"
                                    />
                                </div>
                                <a href="#">Collect Thing</a>
                            </div>
                            <div
                                class="sidebar-menu-center_itemContainer d-flex p-2 border-top border-bottom justify-content-between align-items-center"
                            >
                                <div class="d-flex">
                                    <div
                                        class="side-bar-menu-center_itemIcon me-2"
                                    >
                                        <font-awesome-icon
                                            icon="fa-regular fa-heart"
                                        />
                                    </div>
                                    <a href="#">Like</a>
                                </div>
                                <font-awesome-icon
                                    icon="fa-solid fa-arrow-right"
                                />
                            </div>
                            <div
                                class="sidebar-menu-center_itemContainer d-flex p-2 border-top border-bottom"
                            >
                                <div class="side-bar-menu-center_itemIcon me-2">
                                    <font-awesome-icon
                                        icon="fa-regular fa-message"
                                    />
                                </div>
                                <a href="#">Comment</a>
                            </div>
                            <div
                                class="sidebar-menu-center_itemContainer d-flex p-2 border-top border-bottom justify-content-between align-items-center"
                            >
                                <div class="d-flex">
                                    <div
                                        class="side-bar-menu-center_itemIcon me-2"
                                    >
                                        <font-awesome-icon
                                            icon="fa-solid fa-pen"
                                            flip="horizontal"
                                        />
                                    </div>
                                    <a href="#">Post a Make</a>
                                </div>
                                <font-awesome-icon
                                    icon="fa-solid fa-arrow-right"
                                />
                            </div>
                            <div
                                class="sidebar-menu-center_itemContainer d-flex p-2 border-top border-bottom"
                            >
                                <div class="side-bar-menu-center_itemIcon me-2">
                                    <font-awesome-icon
                                        icon="fa-regular fa-eye"
                                    />
                                </div>
                                <a href="#">Watch</a>
                            </div>
                            <div
                                class="sidebar-menu-center_itemContainer d-flex p-2 border-top border-bottom justify-content-between align-items-center"
                            >
                                <div class="d-flex">
                                    <div
                                        class="side-bar-menu-center_itemIcon me-2"
                                    >
                                        <font-awesome-icon
                                            icon="fa-solid fa-arrows-spin"
                                        />
                                    </div>
                                    <a href="#">Remix it</a>
                                </div>
                                <font-awesome-icon
                                    icon="fa-solid fa-arrow-right"
                                />
                            </div>
                            <div
                                class="sidebar-menu-center_itemContainer d-flex p-2 border-top border-bottom"
                            >
                                <div class="side-bar-menu-center_itemIcon me-2">
                                    <font-awesome-icon
                                        icon="fa-solid fa-arrow-up-from-bracket"
                                    />
                                </div>
                                <a href="#">Copy Link</a>
                            </div>
                        </div>
                        <div class="sidebar-menu-bottom p-2">
                            <button class="btn btn-primary w-100 text-start">
                                <font-awesome-icon
                                    icon="fa-regular fa-thumbs-up"
                                />
                                Tip Designer
                            </button>
                        </div>
                    </div>
                    <div class="sidebar-menu-bottom">
                        <div class="report-btn_wrapper">
                            <a href="#" class="report-btn mb-3">
                                <button
                                    class="btn btn-secondary w-100 text-start"
                                >
                                    <font-awesome-icon
                                        icon="fa-solid fa-exclamation"
                                    />
                                    Report Thing
                                </button>
                            </a>
                        </div>
                        <div class="share-card-details mb-3">
                            <ShareCardDetails />
                        </div>
                        <div class="legalLinks">
                            <div
                                class="linksRow d-flex flex-wrap text-break align-items-center"
                            >
                                <a href="#">About Thingiverse ®</a>
                                <div>.</div>
                                <a href="#">Legal</a>
                                <div>.</div>
                                <a href="#">Privacy Policy</a>
                                <div>.</div>
                                <a href="#">Contact Us</a>
                                <div>.</div>
                                <a href="#">Developers</a>
                                <div>.</div>
                                <a href="#">Changelogs</a>
                                <div>.</div>
                            </div>
                            <div class="copyRight text-start">
                                © 2023
                                <a
                                    href="https://www.makerbot.com"
                                    target="_blank"
                                    >MakerBot Induestires, LLC</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="thingPage_navControl"></div>
        </div>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<style lang="scss">
.layout-content {
    .thingPage {
        &_top {
            max-width: 970px;

            &Left {
                max-width: 740px;

                &_gallery {
                    &Header {
                        border-bottom: 1px solid #666;
                        margin: 2px 0;

                        a {
                            img {
                                width: 40px;
                                height: 40px;
                                border-radius: 50%;
                            }
                        }

                        .header-title {
                            .made-by {
                                font-size: 11px;
                            }
                        }
                    }

                    &Body {
                        .img-wrapper {
                            img {
                                max-height: 510px;
                                max-width: 675px;
                            }
                        }
                    }
                }
            }

            &Sidebar {
                .sidebar-menu {
                    &-top {
                    }

                    &-center {
                        &_itemContainer {
                            a {
                                color: #666 !important;
                            }
                        }
                    }

                    &-bottom {
                    }
                }

                .legalLinks {
                    width: 220px;

                    .linksRow a,
                    .copyRight {
                        font-size: 9px;
                    }

                    .linksRow {
                        line-height: 12px;
                    }
                }
            }
        }
    }
}

@media (max-width: 925px) {
    .thingPage_top {
        flex-direction: column;

        .sidebar-menu-bottom{
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            .report-btn_wrapper {
                display: flex;
                .report-btn {
                    button {
                        width: auto !important;
                        align-items: start;
                    }
                }
            }
        }

    }
}
</style>
