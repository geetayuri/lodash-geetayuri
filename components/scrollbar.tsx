'use client'
import React from "react"

import SimpleBar from "simplebar-react"

export default function ScrollBar( props: any ){
    return(
        <SimpleBar className={props.className}>
            {props.children}
        </SimpleBar>
    )
}