import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    apiKey: 'b21317f0',
    search: ref(null),
    movies: ref([]),
    singleMovie: ref(''),
    movieCount: ref(0),
  }),
  getters: {

  },

  actions: {
    async searchMovie(){
      if (this.search != '') {
        const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${this.apiKey}&s=${this.search}`);
        this.movies = data.Search;
        this.movieCount = data.totalResults;
      }
      
    },
    async getSingleMovie(id){
      if (this.search != '') {
        const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${this.apiKey}&i=${id}&plot=full`);
        // console.log(data);
        this.singleMovie = data;
      }
    }
  },
})
