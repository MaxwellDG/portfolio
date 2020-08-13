export const TOGGLE_MODAL_ON = 'modals/TOGGLE_MODAL_ON'
export const TOGGLE_OFF_MODALS = 'modals/TOGGLE_OFF_MODALS'

export const toggleModalOn = (button) => {
    return{
        type: TOGGLE_MODAL_ON,
        index: button.index
    }
}

export const toggleOffModals = () => {
    return{
        type: TOGGLE_OFF_MODALS
    }
}

