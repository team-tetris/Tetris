import React from 'react'
import Card from '../card'
import Container from '../container'
import Button from '../button'
import Heading from '../heading'
import Text from '../text'
import Image from '../image'
import Badge from '../badge'
import Accordion from '../accordion'
import ButtonGroup from '../button-group'
import Icon from '../icon'
const renderSectionTetromino = (props) => {
    const { type, count=12, tetromino } = props;
    switch (type) {
        case "card":
            return <div className={`col col-${count}`} key={Math.random()} >
                <Card {...props} />
            </div>
        case "container":
            return <div className={`col col-${count}`} key={Math.random()} >
                <Container {...props} count={count / tetromino.length} />
            </div>
        case "button":
            return <div className='btn-wrapper'><Button {...props} key={Math.random()} /></div>
        case "heading":
            return <Heading {...props} key={Math.random()} />
        case "text":
            return <Text {...props} key={Math.random()} />
        case "image":
            return <Image {...props} key={Math.random()} />
        case "badge":
            return <Badge {...props} />
        case "card-image":
            return <Image {...props} classname="card-img-top" key={Math.random()} />
        case "accordion":
            return <Accordion {...props} />
        case "button-group":
            return <ButtonGroup {...props} />
        case "icon":
            return <Icon {...props} />
    }
}
export default renderSectionTetromino;