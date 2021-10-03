import api from "./api";


export async function getAllPokemons() {
  try {
    const response = await api.get('/pokemon')
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export async function getPokemonByname(nome) {
    try {
      const response = await api.get(`/pokemon/${nome}`)
      return response.data
    } catch (error) {
      console.log(error);
    }
  }