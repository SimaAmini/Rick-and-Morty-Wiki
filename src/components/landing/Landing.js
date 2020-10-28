import React, { useEffect, useState } from 'react'
import LandingRow from '../landing-row/LandingRow'
import { getRandomCharacters } from '../../services/characterService'

const Landing = () => {
    const [list, setList] = useState([])
    const getCharacterList = async () => {
        const { data } = await getRandomCharacters(10)
        setList([...data])
    }
    useEffect(() => {
        getCharacterList()
    }, [])
    return <LandingRow title="Characters" list={list} link="/characters" />
}

export default Landing
