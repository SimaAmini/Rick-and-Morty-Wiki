import React from 'react'
import { navigate } from '@reach/router'

const CharacterCard = ({ character }) => {
    const go = () => {
        navigate(`/character/${character.id}`)
    }
    return (
        <div className="card pointer" onClick={go}>
            <div className="card-img">
                <img alt={character.name} src={character.image} />
            </div>
            <div className="character-info">
                <h3>{character.name}</h3>
                <span>{character.status}</span>
            </div>
        </div>
    )
}

export default CharacterCard
