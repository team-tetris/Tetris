import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Accordion = ({ content }) => {

    const [currentIndex, toggleIndex] = useState(null)
    return <div className="bd-example bg-light">
        <div className="accordion accordion-flush" id="accordionFlushExample">
            {content.map((obj, index) => {
                return <div className="accordion-item">
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