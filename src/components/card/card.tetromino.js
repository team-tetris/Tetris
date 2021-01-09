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
            break;
        case "heading":
            return <Heading muted={muted} size={size} content={content} />
            break;
        case "text":
            return <Text size={size} content={content} />
            break;
        case "image":
            return <Image rounded={rounded} size={size} source={source} height={height} width={width} />
            break;
        case "badge":
            return <Badge theme={theme} content={content} rounded={rounded} />
            break;
        case "card-image":
            return <Image rounded={rounded} size={size} source={source} height={height} width={width} classname="card-img-top" />
            break;
    }
}
export default renderCardTetromino;