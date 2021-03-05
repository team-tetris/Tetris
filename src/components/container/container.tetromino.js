import React from 'react'
import Card from '../card'
import Container from './index'
import Button from '../button'
import Heading from '../heading'
import Text from '../text'
import Image from '../image'
import Badge from '../badge'
import ButtonGroup from '../button-group'
import Section from '../section'
import Icon from '../icon'
import Accordion from '../accordion'

const renderContainerTetromino = (props, count = 12, index) => {
    const { tetromino, type } = props
    switch (type) {
        case "card":
            return <div className={`col col-${count}`} key={Math.random()} >
                <Card {...props} />
            </div>
        case "accordion":
            return <Accordion {...props} />
        case "container":
            return <div className={`col col-${count}`} key={Math.random()} >
                <Container {...props} />
            </div>
        case "button":
            return <div className='btn-wrapper'><Button {...props} key={Math.random()} /></div>
        case "button-group":
            return <ButtonGroup {...props} />
        case "heading":
            return <Heading {...props} key={Math.random()} />
        case "text":
            return <Text {...props} key={Math.random()} />
        case "image":
            return <Image {...props} key={Math.random()} />
        case "badge":
            return <Badge {...props} key={Math.random()} />
        case "cardImage":
            return <Image {...props} classname="card-img-top" key={Math.random()} />
        case "section":
            return <Section {...props} index={index} />
        case "icon":
            return <Icon {...props} />
    }
}
export default renderContainerTetromino;