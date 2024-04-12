/* 
Displays a pokemon item on the HomePage
*/

import {Link} from 'react-router-dom'
import {ROUTES} from '../../routes/routes'
import CardCSS from './Card.module.css'

export function Card( {infos}) {


    return(
        <Link to={`${ROUTES.details}/${info.id}`} className={CardCSS.card}>
                <img className = {CardCSS.img} src = {`raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${infos.id}.svg`} alt = {infos.name} />
                <p> {infos.name} </p>
        </Link>
    )
}