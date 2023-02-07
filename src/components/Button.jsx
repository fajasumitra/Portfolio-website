import React from 'react'

export default function Button(props) {
    const className = [props.className]
    if (props.isSmall) className.push('text-sm')
    if (props.isMedium) className.push('text-md')
    if (props.isLarge) className.push('text-lg')
    if (props.is1Large) className.push('text-xl')
    if (props.is2Large) className.push('text-2xl')
    if (props.is3Large) className.push('text-3xl')
    if (props.is4Large) className.push('text-4xl')

    if (props.isThin) className.push('font-thin')
    if (props.isLight) className.push('font-light')
    if (props.isnormal) className.push('font-normal')
    if (props.isMedium) className.push('font-medium')
    if (props.isSemiBold) className.push('font-semibold')
    if (props.isBold) className.push('font-bold')

    if (props.isWhite) className.push('text-white')

    const onClick = () => {
        if (props.onClick) props.onClick()
    }
        
    if (props.type === 'button'){
        return (
            <button className={className.join(" ")} onClick= {onClick}>
                {props.children}
            </button>
    )
    }
}