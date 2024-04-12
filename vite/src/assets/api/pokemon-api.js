/* 
        Api component, deals with async fetch with the fake json server
*/

export const ApiPokemonDB = {

        GetAllPokemon: async () => {
                try {
                        const response = await fetch('http://localhost:3001/pokemons')
                        const data = await response.json()
                        const body = JSON.stringify(data)
                        return body
                } catch (error) {
                        console.log("Error : " + error)
                }


        }
}