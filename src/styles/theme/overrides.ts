import { alpha } from '@mui/material/styles'
import { outlinedInputClasses } from '@mui/material'
import { Components } from '@mui/material/styles/components'
export function overrides(theme: any): Components<any> {
  const modeDark = theme.palette.mode === 'dark'
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box'
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch'
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%'
        },
        '#root': {
          width: '100%',
          height: '100%'
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'text-field',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            }
          }
        },
        img: {
          maxWidth: '100%',
          display: 'inline-block',
          verticalAlign: 'bottom'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[900], 0.8)
        },
        invisible: {
          background: 'transparent'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        containedInherit: {
          color: modeDark ? theme.palette.grey[800] : theme.palette.common.white,
          backgroundColor: modeDark ? theme.palette.grey[300] : theme.palette.grey[800],
          '&:hover': {
            color: modeDark ? theme.palette.grey[800] : theme.palette.common.white,
            backgroundColor: modeDark ? theme.palette.grey[400] : theme.palette.grey[700]
          }
        },
        sizeLarge: {
          minHeight: 48
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.customShadows.card,
          borderRadius: Number(theme.shape.borderRadius) * 2,
          position: 'relative',
          zIndex: 0 // Fix Safari overflow: hidden with border radius
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2' }
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0)
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: modeDark ? alpha('#fff', 0.6) : alpha('#000', 0.5)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: alpha('#000', 1)
        },
        root: {
          borderColor: alpha('#000', 1),
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: modeDark ? alpha('#fff', 0.84) : alpha('#000', 0.84)
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: modeDark ? alpha('#fff', 0.84) : alpha('#000', 0.48)
          }
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0
      }
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.neutral
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          margin: 0,
          color: modeDark ? theme.palette.grey[800] : theme.palette.grey[500],
          backgroundColor: modeDark ? theme.palette.grey[300] : theme.palette.grey[800]
        },
        arrow: {
          color: modeDark ? theme.palette.grey[300] : theme.palette.grey[800]
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(1)
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...theme.typography.body2
        }
      }
    }
  }
}
