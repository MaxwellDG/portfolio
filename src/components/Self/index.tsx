"use client"

import { Theme, useThemeContext } from "../themeProvider"
import { useMemo } from "react";

const style = {
    height: "100%",
    width: "100%"
}

export default function Self(){

    const theme: Theme = useThemeContext();

    const pic = useMemo(() => {
        switch(theme){
            case Theme.AUTUMN: return <img src="/images/Self_Autumn.png" style={style}/>
            case Theme.JUNGLE: return <img src="/images/Self_Jungle.png" style={style}/>
            case Theme.MOUNTAINS: return <img src="/images/Self_Mountains.png" style={style}/>
        }
    }, [theme])

    return (
        <div style={{ height: "500px", aspectRatio: "0.833" }}>
            {pic}
        </div>
    )
}