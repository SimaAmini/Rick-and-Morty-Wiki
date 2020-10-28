import React from 'react'
import Characters from './components/characters/Characters'
import Header from './components/header/Header'
import { Router } from '@reach/router'
import Landing from './components/landing/Landing'
import Character from './components/character/Character'

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Landing path="/" />
                <Character path="character/:id" />
                <Characters path="characters" />
            </Router>
        </div>
    )
}

export default App
