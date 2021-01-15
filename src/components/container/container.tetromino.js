import React from 'react'
import Card from '../card'
const renderCardTetromino = ({ type, tetromino }, count = 3) => {
    switch (type) {
        case "card":
            return <div className={`col col-${count}`}>
                <Card key={Math.random()} tetromino={tetromino} />
            </div>
    }
}
export default renderCardTetromino;