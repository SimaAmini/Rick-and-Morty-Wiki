import React from 'react'
import { Link } from '@reach/router'
import CharacterCard from '../characterCard/CharacterCard'

const LandingRow = ({ title, list, link }) => {
    return (
        <>
            <div className="cards-header">
                <h2>{title}</h2>
                <h5 className="more">
                    <Link to={link}>more</Link>
                </h5>
            </div>
            <div className="cards">
                {list &&
                    list.map((character) => (
                        <CharacterCard
                            key={character.id}
                            character={character}
                        />
                    ))}
            </div>
        </>
    )
}

export default LandingRow
