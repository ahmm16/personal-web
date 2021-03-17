import React from 'react'

const SquareAnimation = () => {
    const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (<ul className="bg-bubbles">
        {squares.map((item, index) => {
            return (<li key={index}></li>)
        })}
    </ul>
    )
}
export default SquareAnimation