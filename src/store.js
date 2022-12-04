import { reactive } from "vue";

export const store = reactive({
  textToSearch: "", //testo della ricerca
  movies: [], //scatola dei film
  tv: [], //scatola delle serie tv
});
