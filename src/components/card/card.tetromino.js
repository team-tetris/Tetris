import React from 'react'
import Button from '../button'
import Heading from '../heading'
import Text from '../text'
import Image from '../image'
import Badge from '../badge'
const renderCardTetromino = ({ type, content, theme, outline, size, muted, rounded, source, height, width }) => {
    switch (type) {
        case "button":
            return <Button theme={theme} size={size} content={content} outline={outline} />
        case "heading":
            return <Heading muted={muted} size={size} content={content} />
        case "text":
            return <Text size={size} content={content} />
        case "image":
            return <Image rounded={rounded} size={size} source={source} height={height} width={width} />
        case "badge":
            return <Badge theme={theme} content={content} rounded={rounded} />
        case "card-image":
            return <Image rounded={rounded} size={size} source={source} height={height} width={width} classname="card-img-top" />
    }
}
export default renderCardTetromino;