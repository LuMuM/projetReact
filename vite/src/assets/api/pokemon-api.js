/* 
        Api component, deals with async fetch with the fake json server
*/

export const ApiPokemonDB = {

        GetAllPokemon: async () => {
                try {
                        const response = await fetch('http://localhost:3001/pokemons')
                        const data = await response.json()
                        return data
                } catch (error) {
                        console.log("Error : " + error)
                }


        }
}