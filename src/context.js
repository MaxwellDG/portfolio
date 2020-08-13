import React, { Component } from 'react'

export const AppContext = React.createContext();

export class Provider extends Component{

    constructor() {
        super();
      }
    
      render() {
        return (
          <AppContext.Provider value={{
          }}>
            {this.props.children}
          </AppContext.Provider>  
        );
      }
}



export const Consumer = AppContext.Consumer

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <AppContext.Consumer>
        {context => <Component {...props} context={ context } />}
      </AppContext.Consumer>
    );
  }
}