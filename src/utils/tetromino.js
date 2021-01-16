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
const renderTetrisComponent = ({ type, content, theme, outline, size, muted, rounded, source, height, width, heading, close, align, tetromino, min, max, classname, animated, striped, count, gutter }) => {

    switch (type) {
        case "button":
            return <Button theme={theme} size={size} content={content} outline={outline} />
        case "heading":
            return <Heading muted={muted} size={size} content={content} />
        case "text":
            return <Text size={size} content={content} />
        case "image":
            return <Image rounded={rounded} size={size} source={source} height={height} width={width} />
        case "alert":
            return <Alert theme={theme} content={content} heading={heading} close={close} />
        case "badge":
            return <Badge theme={theme} content={content} rounded={rounded} />
        case "card":
            return <Card align={align} tetromino={tetromino} />
        case "strong":
            return <Strong content={content} />
        case "progress":
            return <Progress classname={classname} theme={theme} min={min} max={max} content={content} animated={animated} striped={striped} />
        case "accordion":
            return <Accordion content={content} />
        case "container":
            return <Container tetromino={tetromino} gutter={gutter} count={count} />
        case "button-group":
            return <ButtonGroup tetromino={tetromino} size={size} />
        default:
            return <Text size={size} content="No component of this type found" />

    }
}

export default renderTetrisComponent