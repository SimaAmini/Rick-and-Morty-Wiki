import React, { useEffect, useState } from 'react'
import Pagintion from '../../common/Pagination'
import { getCharacters } from '../../services/characterService'
import CharacterCard from '../characterCard/CharacterCard'

const Characters = () => {
    const [list, setList] = useState([])
    const [info, setInfo] = useState({})
    const [page, setPage] = useState(1)

    const getList = async () => {
        const { data } = await getCharacters(page)
        setList([...data.results])
        setInfo({ ...data.info })
    }
    const onNext = () => {
        setPage(page + 1)
    }
    const onPrev = () => {
        setPage(page - 1)
    }
    const onPageClicked = (number) => {
        setPage(number)
    }
    useEffect(() => {
        getList()
    }, [page])

    return (
        <>
            <div className="cards">
                {list &&
                    list.map((item) => (
                        <CharacterCard key={item.id} character={item} />
                    ))}
            </div>
            <Pagintion
                {...info}
                onPrev={onPrev}
                onNext={onNext}
                current={page}
                onPageClicked={onPageClicked}
            />
        </>
    )
}

export default Characters
