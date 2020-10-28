import React, { useState } from 'react'
import { useEffect } from 'react'
import { getCharacter } from '../../services/characterService'

const Character = (props) => {
    const [character, setCharacter] = useState({})

    const getCharacterInfo = async () => {
        const { data } = await getCharacter(props.id)
        console.log(data)
        setCharacter({ ...data })
    }
    useEffect(() => {
        getCharacterInfo()
    }, [])
    return (
        <div className="detail-layout">
            <div>
                <img alt={character.name} src={character.image} />
            </div>
            <div className="information">
                <h2>{character.name}</h2>
                <span>{character.status}</span>
                <span>{character.species}</span>
                <span>{character.origin && character.origin.name}</span>
            </div>
        </div>
    )
}

export default Character
