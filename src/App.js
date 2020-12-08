import React from 'react'
import { Switch, Route, withRouter, useLocation } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import MobileProjects from './containers/mobileProjects'
import DesktopProjects from './containers/desktopProjects'
import { AnimatePresence } from 'framer-motion'



const App = () => {

    let location = useLocation()

    return(
        <AnimatePresence exitBeforeEnter>
            <Switch location={ location } key={ location.pathname }>
                <Route exact path="/" component={ Home }  />
                <Route path="/about" component={ About  } />
                <Route path="/mobile" component={ MobileProjects  } />
                <Route path="/desktop" component={ DesktopProjects  } />
            </Switch>
        </AnimatePresence>
    )
}   

export default withRouter(App)