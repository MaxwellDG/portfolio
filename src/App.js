import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import MobileProjects from './containers/mobileProjects'
import DesktopProjects from './containers/desktopProjects'
import Resume from './containers/resume'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            prevDepth: this.getPathDepth(this.props.location),
            inProp: true
        }
        this.activateInProp = this.activateInProp.bind(this)
    }

    componentWillReceiveProps(){
        this.setState({prevDepth: this.getPathDepth(this.props.location)})
    }

    getPathDepth(location){
        let pathArray = location.pathname.split("/")
        pathArray = pathArray.filter(value => value !== "")
        console.log(pathArray.length)
        return pathArray.length
    }

    activateInProp(bool){
        console.log("Called activiate")
        this.setState({
            inProp: bool
        })
    }

    render(){
        const { location } = this.props

        const currentKey = location.pathname.split("/")[1] || "/"

        return(
            <TransitionGroup className="App">
                <CSSTransition in={ this.state.inProp } key={ currentKey } timeout={ 500 } classNames="slider">
                    <div className={ this.getPathDepth(location) - this.state.prevDepth >= 0 ? "right" : "left" }>
                        <Switch location={ location }>
                            <Route exact path="/" component={() => <Home activateInProp={ this.activateInProp } />}  />
                            <Route path="/about" component={ About } />
                            <Route path="/mobile" component={ MobileProjects } />
                            <Route path="/desktop" component={ DesktopProjects } />
                            <Route path="/resume" component={ Resume } /> 
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        )
    }
}

export default withRouter(App);                   

/* */