import React from 'react'

export default function Text(props){       
    const className = [props.className]
    if (props.isSmall) className.push('text-sm')
    if (props.isMedium) className.push('text-md')
    if (props.isLarge) className.push('text-lg')
    if (props.is1Large) className.push('text-xl')
    if (props.is2Large) className.push('text-2xl')
    if (props.is3Large) className.push('text-3xl')
    if (props.is4Large) className.push('text-4xl')
    if (props.is5Large) className.push('text-5xl')
    if (props.is6Large) className.push('text-6xl')
    if (props.is7Large) className.push('text-7xl')
    if (props.is8Large) className.push('text-8xl')

    if (props.isThin) className.push('font-thin')
    if (props.isLight) className.push('font-light')
    if (props.isnormal) className.push('font-normal')
    if (props.isMedium) className.push('font-medium')
    if (props.isSemiBold) className.push('font-semibold')
    if (props.isBold) className.push('font-bold')

    if (props.isWhite) className.push('text-white')

    if (props.isCenter) className.push('text-center')
    if (props.isVerticalCenter) className.push('align-middle')
    if (props.isWmax) className.push('w-max')
    return (
        <p className={className.join(' ')}>{props.children}</p>
    )
}