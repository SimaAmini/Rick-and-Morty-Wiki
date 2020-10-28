import React, { useState } from 'react'

const Pagintion = ({
    count,
    pages,
    onPrev,
    onNext,
    onPageClicked,
    current,
}) => {
    const renderPages = () => {
        let sima = []
        const list = new Array(pages).fill(undefined).map((v, i) => i)
        if (current === pages) {
            sima = list.slice(pages - 5, pages)
        } else {
            sima = list.slice(current, current + 5)
        }
        return sima.map((page) => (
            <button
                className={current === page ? 'active-page' : ''}
                key={page}
                onClick={() => onPageClicked(page)}
            >
                {page}
            </button>
        ))
    }
    return (
        <div className="pagination centered">
            <button onClick={onPrev} disabled={current === 1}>
                prev
            </button>
            <>{renderPages()}</>
            <button>...</button>
            <button onClick={() => onPageClicked(pages)}>{pages}</button>
            <button onClick={onNext} disabled={current === pages}>
                next
            </button>
        </div>
    )
}

export default Pagintion
