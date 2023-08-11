import axios from "axios";
import { useThingStore } from "@/stores/thingStore";

const apiKey = process.env.VUE_APP_API_KEY;
const fetchThingsUrl = process.env.VUE_APP_THINGS_URL;
const headers = { Authorization: `Bearer ${apiKey}` };

export const fetchThings = async () => {
    try {
        const response = await axios.get(`${fetchThingsUrl}`, { headers });
        const things = response.data.map((item) => ({
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
        const thingStore = useThingStore();
        thingStore.setThings(things);
        return things; // Return the fetched data
    } catch (error) {
        console.error("Error fetching things:", error);
        throw error; // Rethrow the error to the caller
    }
};
