<script setup>
//All Libraries
import { useMovieStore } from "../stores/movie";

//Instance or Object
const movieStore = useMovieStore();
//Method or Function

//Computed, Watches and Hooks
</script>

<template>
  <div class="home">
    <div class="feature-movie-card">
      <router-link to="/movie/tt0078346">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
          alt="movie-img"
          class="featured-movie-img"
        />
        <div class="movie-detail">
          <h3>SuperMan</h3>
          <p>
            An alien orphan is sent from his dying planet to Earth, where he grows up to
            become his adoptive home's first and greatest superhero.
          </p>
        </div>
      </router-link>
    </div>

    <form @submit.prevent="movieStore.searchMovie" class="search-box">
      <div class="">
        <input type="text" v-model="movieStore.search" placeholder="Search the movie" />
        <input type="submit" value="Search" />
      </div>
    </form>

    <div class="movies-list">
      <div class="movie" v-for="movie in movieStore.movies" :key="movie.imdbID">
        <router-link
          :to="{ name: 'movie-detail', params: { id: movie.imdbID } }"
          class="movie-link"
        >
          <div class="movie-image">
            <img :src="movie.Poster" alt="" />

            <div class="movie-type">{{ movie.Type }}</div>
          </div>

          <div class="movie-detail">
            <p class="movie-year">{{ movie.Year }}</p>
            <h3>{{ movie.Title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  .featured-movie-card {
    position: relative;

    .featured-movie-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;

      position: relative;
      z-index: 0;
    }

    .movie-detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      z-index: 1;

      h3 {
        color: #fff;
        margin-bottom: 16px;
      }

      p {
        color: #fff;
      }
    }
  }

  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;

    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"] {
        width: 100%;
        color: #fff;
        background-color: #496583;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;

        &::placeholder {
          color: #f3f3f3;
        }

        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }

      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #42b883;
        padding: 16px;
        border-radius: 8px;
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;

        &:active {
          background-color: #3b8070;
        }
      }
    }
  }

  .movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;

    .movie {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;

      .movie-link {
        display: flex;
        flex-direction: column;
        height: 100%;

        .movie-image {
          position: relative;
          display: block;

          img {
            display: block;
            width: 100%;
            height: 300px;
            object-fit: cover;
          }

          .movie-type {
            position: absolute;
            padding: 8px 16px;
            background-color: #42b883;
            color: #fff;
            bottom: 16px;
            left: 0px;
            text-transform: capitalize;
          }
        }

        .movie-detail {
          background-color: #496583;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;

          .movie-year {
            color: #aaa;
            font-size: 14px;
          }

          h3 {
            color: #fff;
            font-weight: 600;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
