'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { usePathname } from 'next/navigation'


import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function Sidebar(props: any){
    let [ manu, setmanu ] = useState('');
    let [ submanu, setSubManu ] = useState('');
 
    let current = usePathname();

    useEffect(()=>{
        setSubManu(current);
        setmanu(current)
    },[current])
    
    return(
        <nav id="sidebar" className="sidebar-wrapper sidebar-white z-10">
            <div className="sidebar-content">
                <div className="sidebar-brand">
                    <Link href="/" shallow={true} className="flex items-center gap-2">
                        <Image src='/images/AppBanner_white.png' width={20} height={20} alt=""/>
                        <label>Lodash (Thailand)</label>
                    </Link>
                </div>
                <SimpleBar style={{height: "calc(100% - 70px)"}}>
                    <ul className="sidebar-menu border-t border-white/10">
                        <li className="active ms-0 my-2">
                            <Link href="#" shallow={true}><i className="mdi mdi-chart-bell-curve-cumulative me-2"></i><p className="text-xl text-black">Dashboard</p></Link>
                        </li>

                        <li className={`${manu.startsWith("/logs")? 'active' : ''} ms-0`}>
                            <Link href="/logs" shallow={true}><i className="mdi mdi-home-city me-2"></i><p className="text-md text-gray-500 active:text-black">Logs</p></Link>
                        </li>

                        <li className={`${manu.startsWith("/traces") ? 'active' : ''} ms-0`}>
                            <Link href="/traces" shallow={true}><i className="mdi mdi-home-city me-2"></i><p className="text-md text-gray-500 active:text-black">Traces</p></Link>
                        </li>

                        <li className={`${manu.startsWith("/assistants")? 'active' : ''} ms-0`}>
                            <Link href="/assistants" shallow={true}><i className="mdi mdi-home-city me-2"></i><p className="text-md text-gray-500 active:text-black">Assistants</p></Link>
                        </li>

                        <li className={`ms-0 text-md text-gray-500 active:text-black`}>
                            <Link href="/batches" shallow={true}><i className="mdi mdi-home-city me-2"></i>Batches</Link>
                        </li>

                        <li className={`${manu === "/evaluation" ? 'active' : ''} ms-0`}>
                            <Link href="/evaluation" shallow={true}><i className="mdi mdi-home-heart me-2"></i><p className="text-md text-gray-500 active:text-black">Evaluation</p></Link>
                        </li>

                        <li className={`${manu === "/fine-tuning" ? 'active' : ''} ms-0`}>
                            <Link href="/fine-tuning" shallow={true}><i className="mdi mdi-home-plus me-2"></i><p className="text-md text-gray-500 active:text-black">Fine-tuning</p></Link>
                        </li>

                        <li className={`${manu === "/storage" ? 'active' : ''} ms-0`}>
                            <Link href="/storage" shallow={true}><i className="mdi mdi-chat-outline me-2"></i><p className="text-md text-gray-500 active:text-black">Storage</p></Link>
                        </li>

                        <li className={`${manu === "/usage" ? 'active' : ''} ms-0`}>
                            <Link href="/usage" shallow={true}><i className="mdi mdi-chat-outline me-2"></i><p className="text-md text-gray-500 active:text-black">Usage</p></Link>
                        </li>

                        <li className={`${manu === "/apikey" ? 'active' : ''} ms-0`}>
                            <Link href="/apikey" shallow={true}><i className="mdi mdi-chat-outline me-2"></i><p className="text-md text-gray-500 active:text-black">API Key</p></Link>
                        </li>
                    </ul>

                    <ul className="sidebar-menu border-t border-white/10">
                        <li className={`${manu === "/cookbook" ? 'active' : ''} ms-0`}>
                            <Link href="/cookbook" shallow={true}><i className="mdi mdi-chart-bell-curve-cumulative me-2"></i><p className="text-md text-gray-500 active:text-black">Cookbook</p></Link>
                        </li>
                        <li className={`${manu === "/forum" ? 'active' : ''} ms-0`}>
                            <Link href="/forum" shallow={true}><i className="mdi mdi-chart-bell-curve-cumulative me-2"></i><p className="text-md text-gray-500 active:text-black">Forum</p></Link>
                        </li>
                        <li className={`${manu === "/help" ? 'active' : ''} ms-0`}>
                            <Link href="/help" shallow={true}><i className="mdi mdi-chart-bell-curve-cumulative me-2"></i><p className="text-md text-gray-500 active:text-black">Help</p></Link>
                        </li>
                    </ul>
                </SimpleBar>
            </div>
        </nav>
    )
}