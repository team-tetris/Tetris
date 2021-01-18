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
const renderTetrisComponent = props => {
    //reserved props
    //pills, type, content, theme, outline, size, muted, rounded, source, height, width, heading, close, align, tetromino, min, max, classname, animated, striped, count, gutter
    const { type } = props
    switch (type) {
        case "button":
            return <Button {...props} />
        case "heading":
            return <Heading {...props} />
        case "text":
            return <Text {...props} />
        case "image":
            return <Image {...props} />
        case "alert":
            return <Alert {...props} />
        case "badge":
            return <Badge {...props} />
        case "card":
            return <Card {...props} />
        case "strong":
            return <Strong {...props} />
        case "progress":
            return <Progress {...props} />
        case "accordion":
            return <Accordion {...props} />
        case "container":
            return <Container {...props} />
        case "button-group":
            return <ButtonGroup {...props} />
        case "tab":
            return <Tab {...props} />
        default:
            return <Text {...props} content="No component of this type found" />

    }
}

export default renderTetrisComponent