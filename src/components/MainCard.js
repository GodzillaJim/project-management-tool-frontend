import React from 'react'
import {
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Typography,
  useTheme
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { MDBCard } from 'mdbreact'

const headerSX = {
  '&.MuiCardHeader-action': { mr: 0 }
}

const useStyles = makeStyles(() => ({
  cardActive: {
    '&.hover': {
      boxShadow: ''
    }
  }
}))
const MainCard = React.forwardRef(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentClass,
      contentSX,
      darkTitle,
      secondary,
      shadow,
      sx = {},
      title,
      ...others
    },
    ref
  ) => {
    const theme = useTheme()
    const classes = useStyles()
    return (
            <MDBCard
                className={classes.cardActive}
                ref={ref}
                {...others}
                sx={{
                  border: border ? '1px solid' : 'none',
                  borderColor: theme.palette.primary[200] + 75,
                  ':hover': {
                    boxShadow: boxShadow
                      ? shadow || '0 2px 14px 0 rgb(32 40 45 / *%)'
                      : 'inherit'
                  },
                  ...sx
                }}
            >
                {!darkTitle && title && (
                    <CardHeader sx={headerSX} title={title} action={secondary}/>
                )}
                {darkTitle && title && (
                    <CardHeader
                        sx={headerSX}
                        title={<Typography variant={'h3'}>{title}</Typography>}
                    />
                )}
                {title && <Divider/>}
                {content && (
                    <CardContent sx={contentSX} className={contentClass}>
                        {children}
                    </CardContent>
                )}
                {!content && children}
            </MDBCard>
    )
  }
)
MainCard.displayName = 'MainCardComponent'
MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.object
  ]),
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.object
  ])
}
export default MainCard
