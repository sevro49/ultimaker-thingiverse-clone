<template>
    <div>
      <h2>Thingiverse Cards</h2>
      <div class="card-container">
        <div class="card" v-for="thing in things" :key="thing.id">
          <img :src="thing.thumbnail" alt="Thing Image" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ thing.name }}</h5>
            <!-- Add more details if needed -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        things: [],
      };
    },
    mounted() {
      this.fetchThings();
    },
    methods: {
      fetchThings() {
        const apiKey = process.env.VUE_APP_API_KEY;
        const headers = { Authorization: `Bearer ${apiKey}` };
  
        // Make an API call to fetch things from Thingiverse using Axios
        axios.get('https://api.thingiverse.com/things', { headers })
          .then((response) => {
            this.things = response.data.map((item) => ({
              id: item.id,
              name: item.name,
              thumbnail: item.thumbnail, // URL for the thing's thumbnail image
              // Add more properties as needed, e.g., description, likes, etc.
            }));
          })
          .catch((error) => {
            console.error('Error fetching things:', error);
          });
      },
    },
  };
  </script>
  
  <style>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .card {
    width: 250px;
    margin-bottom: 20px;
  }
  </style>
  