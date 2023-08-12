import axios from "axios";

const apiKey = process.env.VUE_APP_API_KEY;
const fetchThingsUrl = process.env.VUE_APP_THINGS_URL;
const headers = { Authorization: `Bearer ${apiKey}` };

export const fetchThingDetails = async (id) => {
    try {
        const response = await axios.get(`${fetchThingsUrl}/${id}`, { headers });
        const thing = {
            id: response.data.id,
            name: response.data.name,
            thumbnail: response.data.thumbnail,
            public_url: response.data.public_url,
            like_count: response.data.like_count,
            creator: {
                id: response.data.creator.id,
                name: response.data.creator.name,
                thumbnail: response.data.creator.thumbnail,
                public_url: response.data.creator.public_url,
            },
            added: response.data.added,
        };
        return thing; // Return the fetched Thing details
    } catch (error) {
        console.error("Error fetching Thing details:", error);
        throw error; // Rethrow the error to the caller
    }
};
