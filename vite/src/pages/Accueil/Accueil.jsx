/* 
Home Page : Display the list of the 151 existing Pokemons
*/

import { useState, useEffect } from 'react';
import AccueilCSS from './Accueil.module.css'
import { ApiPokemonDB } from '../../assets/api/pokemon-api';
import { Card } from '../../components/Card/Card';
//import { pokeBg} from '../../assets/img/pokeball_bg.svg'
//style ={{backgroundImage: pokeBg }}
export function Accueil() {

    const [lesItems, setLesItems] = useState([])

    async function fetchPokemons(){
        let items = await ApiPokemonDB.GetAllPokemon()
        //items = JSON.stringify(items)
        setLesItems(items)
    }

    useEffect(() => {
        fetchPokemons()
    }, [])

    
    return (
        <div className={AccueilCSS.background} > 
    
            <div className={AccueilCSS.liste}>
                {lesItems.map((item, index) => (
                    <Card key={index} infos={item}/>
                ))}
            </div>
        </div>
    )
}