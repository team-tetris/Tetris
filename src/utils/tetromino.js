import React from 'react'
import Button from '../components/button'
import Heading from '../components/heading'
import Text from '../components/text'
import Image from '../components/image'
import Alert from '../components/alert'
import Badge from '../components/badge'
import Card from '../components/card'
import Strong from '../components/strong'
import Progress from '../components/progress'
import Accordion from '../components/accordion'
import Container from '../components/container'
import Tab from '../components/tab'
import ButtonGroup from '../components/button-group'
import Section from '../components/section'
const renderTetrisComponent = (props,index) => {
    //reserved props
    //pills, type, content, theme, outline, size, muted, rounded, source, height, width, heading, close, align, tetromino, min, max, classname, animated, striped, count, gutter
    const { type } = props.tetromino?.type === undefined ? props : props.tetromino
    switch (type) {
        case "button":
            return <Button {...props.tetromino} />
        case "heading":
            return <Heading {...props.tetromino} />
        case "text":
            return <Text {...props.tetromino} />
        case "image":
            return <Image {...props.tetromino} />
        case "alert":
            return <Alert {...props.tetromino} />
        case "badge":
            return <Badge {...props.tetromino} />
        case "cardImage":
            return <Image {...props} classes="card-img-top" key={Math.random()} />
        case "card":
            return <Card {...props.tetromino} />
        case "strong":
            return <Strong {...props.tetromino} />
        case "progress":
            return <Progress {...props.tetromino} />
        case "accordion":
            return <Accordion {...props.tetromino} />
        case "container":
            return <Container {...Array.isArray(props.tetromino) ? props : props.tetromino} />
        case "button-group":
            return <ButtonGroup {...props.tetromino} />
        case "tab":
            return <Tab {...props.tetromino} />
        case "section":
            return <Section {...props} index={index}/>
            // case "icon": 
            // return <Icon {...props}/>

        default:
            return <Text {...props} content="No component of this type found" />

    }
}

export default renderTetrisComponent