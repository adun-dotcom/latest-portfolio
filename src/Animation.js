export const bounceTransition = {
    show:{y:[30, -30],
        transition:{
            duration:0.7,
            yoyo:Infinity,
            ease:'easeOut',
        }
       

    }
}

export const rotateTransition = {
    // hidden:{rotate:'0deg'},
    hover:{rotate:360,
    transition:{duration:2, type: "spring",
    stiffness: 300,}
    }
}