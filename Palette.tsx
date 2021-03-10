import React from "react"
import clsx from "clsx"
import { useStyles, useCardStyles } from "./Palette_style"
import { Palette } from "@material-ui/core/styles/createPalette"
import { Theme, ColorFormat } from "@material-ui/core/styles"

export type CardProps = { className?: string, color: string }

const colorsFormats: Array<ColorFormat> = ["hsl", "hsla", "rgb", "rgba"]

const regHexa = /^#[0-9A-F]{6}$/i

const isColor = (color: string): boolean => {
    const marker = color.indexOf('(');
    const type = color.substring(0, marker);
    // hex color
    if (color.charAt(0) === '#') {
        return regHexa.test(color);
    }
    if ([...colorsFormats, 'color'].indexOf(type) > 0) {
        return true
    }
    return false
}

const Card: React.FunctionComponent<CardProps> = (props) => {
    const classes = useCardStyles(props)
    return (
        <div className={clsx(classes.card, props.className)} />
    )
}

// colorObject (KarrenPalette) type is not recursive
const CardContainer: React.FunctionComponent<{ property: string, depth: number, colorObject: any }> = (props) => {

    const classes = useStyles()
    const { property, depth, colorObject } = props
    const keys = Object.keys(colorObject)
    const colors = Object.values(colorObject)

    return (
        <div>
            <h2 color="black">{property}</h2>
            <div className={classes.cardContainer}>
                {keys.map((colorName, index) => {
                    const colorCode = colors[index] as any
                    if (typeof colorCode === "object") {
                        return (
                            <CardContainer property={colorName} depth={depth + 1} colorObject={colorObject[colorName]} />
                        )
                    }
                    else if (typeof colorCode === "string" && isColor(colorCode)) {
                        return (
                            <div key={index} className={classes.key}>
                                <Card color={colorCode} />
                                <div>{colorName}</div>
                                <div>{colorCode}</div>
                            </div>
                        )
                    }
                    else return undefined
                })}
            </div>
        </div>
    )
}


const KarrenPalette: React.FunctionComponent<{ theme: Theme }> = (props) => {

    const classes = useStyles()
    const { theme } = props

    return (
        <div className={classes.page}>
            {Object.keys(theme.palette).map((key, index) => {
                const colorObject = theme.palette[key as keyof Palette]
                return (
                    <CardContainer key={index} property={key} depth={1} colorObject={colorObject} />
                )
            })}
        </div >
    )
}

export default KarrenPalette