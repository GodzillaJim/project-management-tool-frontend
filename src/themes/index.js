import {createTheme} from "@material-ui/core";
import colors from '../assets/scss/_themes-vars.module.scss'

const themePalette = (theme) => ({
    common: {
        black: '#000000'
    },
    primary: {
        light: theme.colors.primaryLight,
        main: theme.colors.primaryMain,
        dark: theme.colors.primaryDark,
        200: theme.colors.primary200,
        800: theme.colors.primary800
    },
    secondary: {
        light: theme.colors.secondaryLight,
        main: theme.colors.secondaryMain,
        dark: theme.colors.secondaryDark,
        200: theme.colors.secondary200,
        800: theme.colors.secondary800
    },
    error: {
        light: theme.colors.errorLight,
        main: theme.colors.errorMain,
        dark: theme.colors.errorDark
    },
    orange: {
        light: theme.colors.orangeLight,
        main: theme.colors.orangeMain,
        dark: theme.colors.orangeDark
    },
    warning: {
        light: theme.colors.warningLight,
        main: theme.colors.warningMain,
        dark: theme.colors.warningDark
    },
    success: {
        light: theme.colors.successLight,
        200: theme.colors.success200,
        main: theme.colors.successMain,
        dark: theme.colors.successDark
    },
    grey: {
        50: theme.colors.grey50,
        100: theme.colors.grey100,
        500: theme.darkTextSecondary,
        600: theme.heading,
        700: theme.darkTextPrimary,
        900: theme.textDark
    },
    text: {
        primary: theme.darkTextPrimary,
        secondary: theme.darkTextSecondary,
        dark: theme.textDark,
        hint: theme.colors.grey100
    },
    background: {
        paper: theme.paper,
        default: theme.backgroundDefault
    }
})
const typographyTheme = (theme) => ({
    fontFamily: theme.fontFamily,
    h6: {
        fontWeight: 500,
        color: theme.heading,
        fontSize: '0.75rem'
    },
    h5: {
        fontSize: '0.875rem',
        color: theme.heading,
        fontWeight: 500
    },
    h4: {
        fontSize: '1rem',
        color: theme.heading,
        fontWeight: 600
    },
    h3: {
        fontSize: '1.25rem',
        color: theme.heading,
        fontWeight: 600
    },
    h2: {
        fontSize: '1.5rem',
        color: theme.heading,
        fontWeight: 700
    },
    h1: {
        fontSize: '2.125rem',
        color: theme.heading,
        fontWeight: 700
    },
    subtitle1: {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: theme.textDark
    },
    subtitle2: {
        fontSize: '0.75rem',
        fontWeight: 400,
        color: theme.darkTextSecondary
    },
    caption: {
        fontSize: '0.75rem',
        color: theme.darkTextSecondary,
        fontWeight: 400
    },
    body1: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.334em'
    },
    body2: {
        letterSpacing: '0em',
        fontWeight: 400,
        lineHeight: '1.5em',
        color: theme.darkTextPrimary
    },
    customInput: {
        marginTop: 8,
        marginBottom: 8,
        '& > label': {
            top: '23px',
            left: 0,
            color: theme.grey500,
            '&[data-shrink="false"]': {
                top: '5px'
            }
        },
        '& > div > input': {
            padding: '30.5px 14px 11.5px !important'
        },
        '& legend': {
            display: 'none'
        },
        '& fieldset': {
            top: 0
        }
    },
    mainContent: {
        backgroundColor: theme.background,
        width: '100%',
        minHeight: 'calc(100vh - 88px)',
        flexGrow: 1,
        padding: '20px',
        marginTop: '88px',
        marginRight: '20px',
        borderRadius: `${theme.borderRadius}px`
    },
    menuCaption: {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: theme.heading,
        padding: '6px',
        textTransform: 'capitalize',
        marginTop: '10px'
    },
    subMenuCaption: {
        fontSize: '0.6875rem',
        fontWeight: 500,
        color: theme.darkTextSecondary,
        textTransform: 'capitalize'
    },
    commonAvatar: {
        cursor: 'pointer',
        borderRadius: '8px'
    },
    smallAvatar: {
        width: '22px',
        height: '22px',
        fontSize: '1rem'
    },
    mediumAvatar: {
        width: '34px',
        height: '34px',
        fontSize: '1.2rem'
    },
    largeAvatar: {
        width: '44px',
        height: '44px',
        fontSize: '1.5rem'
    }
})
const theme = (customization) => {
    const color = colors
    const themeOption = {
        colors: color,
        heading: color.grey900,
        paper: color.paper,
        backgroundDefault: color.paper,
        background: color.primaryLight,
        darkTextPrimary: color.grey700,
        darkTextSecondary: color.grey500,
        textDark: color.grey900,
        menuSelected: color.secondaryDark,
        menuSelectedBack: color.secondaryLight,
        divider: color.grey200,
        customization
    }
    return createTheme({
        direction: "ltr",
        palette: themePalette(themeOption),
        mixins: {toolbar: {minHeight: '48px', padding: '16px', '@media (min-width: 600px)':{
            minHeight: '48px'
                }}},breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920
            }
        },
        typography: typographyTheme(themeOption),
    })
}
export default theme