import React from 'react'
import Card from '../card'
import Container from './index'
import Button from '../button'
import Heading from '../heading'
import Text from '../text'
import Image from '../image'
import Badge from '../badge'
import ButtonGroup from '../button-group'

const renderCardTetromino = ({ tetromino, shadow, gutter, type, content, theme, outline, size, muted, rounded, source, height, width,classes }, count = 12) => {
    switch (type) {
        case "card":
            return <div className={`col col-${count}`} key={Math.random()} >
                <Card tetromino={tetromino} shadow={shadow} classes={classes}/>
            </div>
        case "container":
            return <div className={`col col-${count}`} key={Math.random()} >
                <Container tetromino={tetromino} count={count} gutter={gutter} />
            </div>
        case "button":
            return <Button theme={theme} size={size} content={content} outline={outline} key={Math.random()} />
        case "button-group":
            return <ButtonGroup tetromino={tetromino} size={size} />
        case "heading":
            return <Heading muted={muted} size={size} content={content} key={Math.random()} />
        case "text":
            return <Text size={size} content={content} key={Math.random()} />
        case "image":
            return <Image rounded={rounded} size={size} source={source} height={height} width={width} key={Math.random()} />
        case "badge":
            return <Badge theme={theme} content={content} rounded={rounded} key={Math.random()} />
        case "card-image":
            return <Image rounded={rounded} size={size} source={source} height={height} width={width} classname="card-img-top" key={Math.random()} />
    }
}
export default renderCardTetromino;