import * as ActionTypes from '../actions/modals'

const initialState = [
    {
        text: "About Me",
        selected: false,
        index: 0
      },
      {
        text: "Mobile Projects",
        selected: false,
        index: 1
      },
      {
        text: "Other Projects",
        selected: false,
        index: 2
      },
      {
        text: "Resume",
        selected: false,
        index: 3
      }
]

export default function ModalsReducer(prevState=initialState, actionObj){
    switch(actionObj.type){
        case ActionTypes.TOGGLE_MODAL_ON:
            const prevStateCopy = Object.assign([], prevState)
            prevStateCopy[actionObj.index].selected = !prevStateCopy[actionObj.index].selected
            return prevStateCopy
        case ActionTypes.TOGGLE_OFF_MODALS:
            const prevStateCopy2 = Object.assign([], prevState)
            return prevStateCopy2.map(button => {
                return {
                    ...button,
                    selected: false
                }
            })
        default:
            return prevState    
    }  
}