import React, {useMemo} from 'react'
import WelcomeScreen from './../components/WelcomeScreen'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Link as RouterLink} from 'react-router-dom'
import {IconContext} from 'react-icons'
import {WiDaySunny} from 'react-icons/wi'
import Typography from '@material-ui/core/Typography'

const WelcomePage = () => {
  const iconContextSize = useMemo(()=>({size:"6em"}),[])
  return (
    <WelcomeScreen>
      <Grid container
        direction="column"
        justifyContent="center"
        className="full">
          <div className="highlight">
            <Grid item container xs={12}
              justifyContent="center"
              alignItems="center">
                <Grid items>
                  <IconContext.Provider value={iconContextSize}>
                    <WiDaySunny/>
                  </IconContext.Provider>
                </Grid>
                <Grid item
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center">
                    <Typography variant="h4" color="inherit">
                      Weather App
                    </Typography>
                    <Link color="inherit"
                      aria-label="menu"
                      component={RouterLink} to="/main">
                        Ingresar
                    </Link>
                </Grid>
            </Grid>
          </div>
      </Grid>
    </WelcomeScreen>
  )
}

export default WelcomePage