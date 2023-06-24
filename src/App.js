import React from 'react'
import { Switch, Route, withRouter, useLocation } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import EnterpriseProjects from './containers/enterpriseProjects'
import HobbyProjects from './containers/hobbyProjects'
import { AnimatePresence } from 'framer-motion'



const App = () => {

    let location = useLocation()

    return(
        <AnimatePresence exitBeforeEnter>
            <Switch location={ location } key={ location.pathname }>
                <Route exact path="/" component={ Home }  />
                <Route path="/about" component={ About  } />
                <Route path="/enterprise" component={ EnterpriseProjects  } />
                <Route path="/hobby" component={ HobbyProjects  } />
            </Switch>
        </AnimatePresence>
    )
}   

export default withRouter(App)