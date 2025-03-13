'use client'
import React,{useState} from 'react'
import Sidebar from './sidebar'
import TopHeader from './topHeader'
import Footer from './footer'

export default function Wrapper(props: any){

    let [toggle, setToggle] = useState(false)
    return(
        <div className={`${toggle ? '' : 'toggled' } page-wrapper`}>
            <Sidebar ln={props.ln}/>
            <main className="page-content bg-gray-50 dark:bg-slate-800">
                <TopHeader toggle={toggle} setToggle={setToggle} ln={props.ln} hc={props.hc}/>
                    {props.children}
                <Footer/>
            </main>
        </div>
    )
}