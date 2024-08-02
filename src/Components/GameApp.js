import { useState } from 'react'
import './GameApp.scss'

const GameApp = () => {
    const [canReset, setCanReset] = useState(false)

    const [pointA, setPointA] = useState(1)
    const [arrPointA, setArrPointA] = useState(Array.from({ length: pointA }));

    const [pointB, setPointB] = useState(1)
    const [arrPointB, setArrPointB] = useState(Array.from({ length: pointB }));

    const handleIncreasePoint = () => {
        if (Math.floor(Math.random() * 100) % 2 === 0) {
            setPointA(prev => {
                const newPointA = prev + 1
                setArrPointA(Array.from({ length: newPointA }))
                return newPointA
            })
        }
        else {
            setPointB(prev => {
                const newPointB = prev + 1
                setArrPointB(Array.from({ length: newPointB }))
                return newPointB
            })
        }
        setCanReset(true)
    }

    const handleReset = () => {
        setPointA(1)
        setArrPointA(Array.from({ length: 1 }))
        setPointB(1)
        setArrPointB(Array.from({ length: 1 }))
        setCanReset(false)
    }

    return (
        <div className="game-container">
            <div className='header'>
                <h2>{+pointA > +pointB ? 'A is winning' : (+pointA === +pointB ? 'Same point' : 'B is winning')}</h2>
                <hr />
            </div>
            <div className='player'>
                <p className='player-name'>Player A</p>
                <div className='point-container'>
                    {arrPointA.map((_, index) => (
                        <div className='points maroon' key={index + 1}></div>
                    ))}
                </div>
                <p className='text-point'>(Points: {pointA})</p>
            </div>
            <div className='player'>
                <p className='player-name'>Player B</p>
                <div className='point-container'>
                    {arrPointB.map((_, index) => (
                        <div className='points' key={index + 1}></div>
                    ))}
                </div>
                <p className='text-point'>(Points: {pointB})</p>
            </div>
            <div className='btn-container'>
                <button
                    className='btn-race'
                    onClick={() => handleIncreasePoint()}
                >Race</button>
                {canReset &&
                    <button
                        className='btn-reset'
                        onClick={() => handleReset()}
                    >Reset</button>
                }

            </div>
        </div>
    )
}

export default GameApp