export const homeVariants = {

    homeInitialXSlide: {
        x: "-100vw",
        translateY: "-50%",
        translateX: "-50%"
    },
    homeStableXSlide: {
        x: 0,
    },
    homeExitXSlide:{
        x: "-100vw"
    }
}

export const standardVariants = {

    initial: {
        x: "100vw",
        translateX: "-50%",
        translateY: "-40vh"
    },
    animateTo: {
        x: 0
    },

    exit:{
        x: "100vw"
    }
}

export const AnimationTransitions = {
        duration: .75
}