'use client'
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import { FiMenu, FiBell } from 'react-icons/fi'

export default function TopHeader(props: any){
    
    return(
        <div className="top-header z-10">
            <div className="header-bar flex justify-between">
                <div className="flex items-center space-x-1">
                    
                    <Link href="#" className="xl:hidden block me-2">
                        <i className="mdi mdi-chart-bell-curve-cumulative me-2"></i>
                        Dashboard
                    </Link>
                    
                    <Link id="close-sidebar" onClick={() =>props.setToggle(!props.toggle)} className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" href="#">
                        <FiMenu className="h-4 w-4"/>
                    </Link>
                </div>

                <ul className="list-none mb-0 space-x-1">
                    <li className="dropdown inline-block relative">
                        <button className="ms-5 dropdown-toggle h-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" type="button">
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Playground</p>
                        </button>
                    </li>
                    <li className="dropdown inline-block relative">
                        <button className="ms-5 dropdown-toggle h-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" type="button">
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Dashboard</p>
                        </button>
                    </li>
                    <li className="dropdown inline-block relative">
                        <button className="ms-5 dropdown-toggle h-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" type="button">
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Doc</p>
                        </button>
                    </li>
                    <li className="dropdown inline-block relative">
                        <button className="ms-5 dropdown-toggle h-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" type="button">
                            <p className="text-gray-500 dark:text-gray-400 text-sm">API Reference</p>
                        </button>
                    </li>

                    
                    <li className="dropdown inline-block relative">
                        <button className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" type="button">
                            <FiBell className="h-4 w-4"></FiBell>
                        </button>
                    </li>
    
                    <li className="dropdown inline-block relative">
                        <button className="dropdown-toggle items-center" type="button">
                            <span className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md"><Image src='/images/client/07.jpg' width={30} height={30} className="rounded-md" alt=""/></span>
                        </button>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}