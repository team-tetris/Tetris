import React, { useState } from 'react'

const Accordion = ({ tetromino,classes}) => {

    const [currentIndex, toggleIndex] = useState(null)
    return <div className={`bg-light ${classes}`}>
        <div className="accordion accordion-flush" id="accordionFlushExample">
            {tetromino === undefined ? console.error('You need to pass some content to component through tetromino') : tetromino.map((obj, index) => {
                return <div key={Math.random()} className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button onClick={() => toggleIndex(index === currentIndex ? null : index)} className={`accordion-button ${currentIndex !== index ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded={currentIndex === index ? true : false} aria-controls="flush-collapseOne">
                            {obj.title}</button>
                    </h2>
                    <div id="flush-collapseOne" className={`accordion-collapse ${currentIndex !== index ? 'collapse' : ''}`} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">{obj.content}</div>
                    </div>
                </div>

            })}
        </div>
    </div>
}

export default Accordion