import { defineStore } from 'pinia';

export const useThingStore = defineStore('thingStore', {
  state: () => ({
    things: [],
    filteredThings: [],
  }),

  actions: {
    setThings(things) {
      this.things = things;
      this.filteredThings = things; // Initialize filteredThings with all things
    },

    filterThings(query) {
      this.filteredThings = this.things.filter(thing =>
        thing.name.toLowerCase().includes(query.toLowerCase())
      );
    },
  },

  getters: {
    getFilteredThings() {
      return this.filteredThings;
    },
  },
});
