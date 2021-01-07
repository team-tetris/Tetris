import React from 'react'
import Button from '../components/button'
import Heading from '../components/heading'
import Text from '../components/text'
const renderTetrisComponent = ({ type, content, theme, outline, size, muted }) => {

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
        default:
            return <Text size={size} content="No component of this type found" />

    }
}

export default renderTetrisComponent