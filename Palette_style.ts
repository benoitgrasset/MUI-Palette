import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { CardProps } from "./Palette";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        page: {
            background: theme.palette.background.default,
            height: "auto",
            padding: theme.spacing(4)
        },
        cardContainer: {
            background: "white",
            display: "flex",
            flexWrap: "wrap",
            padding: theme.spacing(4),
            margin: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px 0`,
            border: "1px solid rgb(229, 229, 229)"
        },
        key: {
            margin: theme.spacing(1),
            marginRight: theme.spacing(3),
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
    })
)

export const useCardStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: (props: CardProps) => {
            return {
                height: 45,
                width: 110,
                background: props.color,
                border: "1px solid grey",
                marginBottom: theme.spacing(1)
            }
        },
    }))