import React from "react";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 px-6 py-4 z-10">
            <div className="container-fluid">
                <div className="grid grid-cols-1">
                    <div className="sm:text-start text-center mx-md-2">
                        <p className="mb-0 text-slate-400">© {new Date().getFullYear()} Patcharapol Bunyos <i className="mdi mdi-heart text-red-600"></i><label className="text-reset"> (Guitar)</label></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}