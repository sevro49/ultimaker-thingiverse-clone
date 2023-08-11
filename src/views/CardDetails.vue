<script>
import { fetchThings } from "../components/API/FetchThings";

export default {
    data() {
        return {
            things: [],
            cardDetails: null,
        };
    },

    async mounted() {
        try {
            this.things = await fetchThings();
            this.fetchCardDetails();
        } catch (error) {
            console.log("Error fetching things:", error);
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
    <div>
        <div v-if="cardDetails">
            <h2>{{ cardDetails.name }}</h2>
            <img :src="cardDetails.thumbnail" alt="Card Thumbnail" />
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<style></style>
