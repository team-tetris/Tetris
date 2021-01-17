import React, { useState } from 'react'
const Tab = ({ tetromino, pills }) => {

    const [currentIndex, toggleIndex] = useState(0)

    return <>
        <nav>
            <div className={`nav ${pills ? 'nav-pills' : 'nav-tabs'}`} id="nav-tab" role="tablist">
                {tetromino === undefined ? console.error('You need to pass some content into tetromino') :
                    tetromino.map((tabcontent, index) => (
                        <a key={Math.random()} className={`nav-link ${currentIndex === index ? 'active' : ''} `} onClick={() => toggleIndex(index === currentIndex ? null : index)} data-bs-toggle="tab" role="tab">{tabcontent.title}</a>
                    )
                    )
                }
            </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            {tetromino === undefined ? console.error('You need to pass some content into tetromino') :
                tetromino.map((tabcontent, index) => (
                    <div key={Math.random()} className={`tab-pane fade ${currentIndex === index ? 'show active' : ''} `} role="tabpanel">{tabcontent.content}</div>
                )
                )}
        </div>
    </>

}

export default Tab