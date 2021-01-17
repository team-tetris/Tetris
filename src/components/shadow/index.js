import React from 'react'

const Shadow = (size) => {
    switch (size) {
        case 'regular':
            return 'shadow'
        case 'large':
            return 'shadow-lg'
        case 'small':
            return 'shadow-sm'
        default:
            return ''
    }
}

export default Shadow