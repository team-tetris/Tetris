import React from 'react'
import Button from '../button'
import Heading from '../heading'
import Text from '../text'
import Image from '../image'
import Badge from '../badge'
import Container from '../container'
const renderCardTetromino = ({ type, tetromino, gutter, count, content, theme, outline, size, muted, rounded, source, height, width }) => {
    switch (type) {
        case "button":
            return <Button theme={theme} size={size} content={content} outline={outline} key={Math.random()} />
        case "heading":
            return <Heading muted={muted} size={size} content={content} key={Math.random()} />
        case "text":
            return <Text size={size} content={content} key={Math.random()} />
        case "image":
            return <Image rounded={rounded} size={size} source={source} height={height} width={width} key={Math.random()} />
        case "badge":
            return <Badge theme={theme} content={content} rounded={rounded} key={Math.random()} />
        case "card-image":
            return <Image rounded={rounded} size={size} source={source} height={height} width={width} classes="card-img-top" key={Math.random()} />
        case "container":
            return <Container tetromino={tetromino} count={count} gutter={gutter} key={Math.random()} />
    }
}
export default renderCardTetromino;