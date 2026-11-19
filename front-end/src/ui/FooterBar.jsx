import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CoffeeIcon from '@mui/icons-material/Coffee'

export default function FooterBar() {
  return (
    <Toolbar
      variant="dense"
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100vw',
        justifyContent: 'center',
        backgroundColor: 'action.disabledBackground'
      }}
    >
      <Typography
        variant="caption"
        sx={{
          '& a': {
            color: 'secondary.light'
          }
        }}
      >
        Guilherme De Araújo Silva <CoffeeIcon fontSize="small" /> <a href="mailto:guilherme.silva140@aluno.cps.sp.gov.br">guilherme.silva140@aluno.cps.sp.gov.br</a> | <a href="mailto:guilhermedeearaujo@gmail.com">guilhermedeearaujo@gmail.com</a>
      </Typography>
    </Toolbar>
  )
}
