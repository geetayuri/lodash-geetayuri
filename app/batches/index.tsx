'use client'
import React, { ChangeEvent, useState, useEffect,useRef } from 'react'
import ScrollBar from '../../components/scrollbar'

import { useRouter, usePathname } from 'next/navigation';

export default function Index() {
    const router = useRouter();
    const pathname = usePathname();
    const segments = pathname.split("/");
    const basePath = segments.slice(0, 2).join("/");

    const [isOpen, setIsOpen] = useState(false);

    const idRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);

    const [statusValue, setstatusValue] = useState("active");

    const statusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setstatusValue(e.target.id === "radio-1" ? "active" : "disabled");
    };

    const backClick = async () => {
        router.push(basePath);
    }
    const createClick = (value: boolean) => {
        setIsOpen(value);
    };

    const handleClick = (item: any) => {
        
    };

    const list = [
        {
            id: 1,
            name: "batch_aaaaaaaaaaaaaaa",
            date: "3/6/2025, 4:11 PM"
        },
        {
            id: 2,
            name: "batch_bbbbbbbbbbbbbbb",
            date: "3/6/2025, 4:11 PM"
        },
        {
            id: 3,
            name: "batch_ccccccccccccccc",
            date: "3/6/2025, 4:11 PM"
        }
    ];

    const [isCSR, setIsCSR] = useState(false);
    useEffect(() => {
        setIsCSR(true);
    }, []);

    return isCSR ? (
        <>
            <div className="container-fluid relative px-3">
                <div className="layout-specing">
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 ">
                        <div className="xl:col-span-12 lg:col-span-12 xl:order-2 order-3">
                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                    <p className="text-2xl font-semibold">Batches</p>
                                    <div>
                                        <label className="btn-upload btn bg-gray-400 hover:bg-gray-700 border-gray-600 hover:border-gray-700 text-white rounded-md cursor-pointer ms-1">Learn More</label>
                                        <label className="btn-upload btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md cursor-pointer ms-1" onClick={() => createClick(true)}>Create</label>
                                    </div>
                                </div>
                                <div className="container-fluid relative px-3">
                                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                                        <div className="rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 h-fit">
                                            <div>
                                                <ScrollBar className="relative overflow-x-auto block w-full xl:max-h-[284px] max-h-[350px]">
                                                    <table className="w-full text-start">
                                                        <tbody>
                                                            {list.map((item: any) =>{
                                                                return(
                                                                    <tr key={item.id} style={{ cursor: 'pointer' }} onClick={() => handleClick(item.id)}>
                                                                        <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold w-[100%] min-w-[300px]">
                                                                            <div className="relative md:shrink-0">
                                                                                {item.name}
                                                                            </div>
                                                                        </th>
                                                                        <td className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 w-[25%] min-w-[150px]">
                                                                            <span className="text-slate-400 text-sm">{item.date}</span>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })}
                                                        </tbody>
                                                    </table>
                                                    <table className="w-full">
                                                        <tbody>
                                                            <tr key="loadmore" style={{ cursor: 'pointer' }}>
                                                                <th className="text-start border-t border-gray-100 dark:border-gray-800 px-4 py-3 font-semibold w-[100%] min-w-[300px]">
                                                                    <div className="relative md:shrink-0 flex justify-center">
                                                                        <p className='text-sm'>Load More</p>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </ScrollBar>
                                            </div>
                                        </div>

                                        <div className="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900 h-fit">
                                            <div className="grid grid-cols-12 gap-5">
                                                <div className="col-span-12">
                                                    <p className="text-sm text-gray-500">BATCH</p>
                                                    <p className="text-xl font-semibold">batch aaaaaaaaaaa</p>
                                                </div>
                                                <div className="col-span-3">
                                                    <p className="text-md text-gray-500 inline-block my-1">Status</p>
                                                    <p className="text-md text-gray-500 my-1">Create At</p>
                                                    <p className="text-md text-gray-500 my-1">EndPoint</p>
                                                    <p className="text-md text-gray-500 my-1">Completion window</p>
                                                    <p className="text-md text-gray-500 my-1">Completion time</p>
                                                    <p className="text-md text-gray-500 my-1">Request Counts</p>
                                                </div>

                                                <div className="col-span-9">
                                                    <p className="text-md text-green-700 bg-green-100 rounded flex inline-block my-1"><i className="mdi mdi-home-city me-2"></i>Completed</p>
                                                    <p className="text-md text-black my-1">Mar 6, 2025 4:11 PM</p>
                                                    <p className="text-md text-black my-1">/v1/embeddings</p>
                                                    <p className="text-md text-black my-1">24h</p>
                                                    <p className="text-md text-black my-1">24 seconds</p>
                                                    <p className="text-md text-black my-1">3 completed, 0 failed of 3 total requests</p>
                                                </div>

                                                <div className="col-span-12">
                                                    
                                                    <div className="flex inline-block">
                                                        <i className="mdi mdi-home-city me-2"></i>
                                                        <p className="text-md text-gray-500">Files</p>
                                                    </div>
                                                    <div className="grid grid-cols-12 gap-5">
                                                        <div className="col-span-2">
                                                            <p className="text-md text-gray-500 inline-block my-1">Input</p>
                                                            <p className="text-md text-gray-500 my-1">Output</p>
                                                            <p className="text-md text-gray-500 my-1">Error</p>
                                                        </div>

                                                        <div className="col-span-10">
                                                            <p className="text-md text-green-700 my-1">embeddingbatchlink.json</p>
                                                            <p className="text-md text-green-700 my-1">batch aaaaaaaaaaa</p>
                                                            <p className="text-md text-green-700 my-1"></p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-span-12">
                                                    <div className="container-fluid relative px-3">
                                                        <p className="text-md text-gray-500 inline-block my-1">THURSDAY, MARCH 6, 2025</p>
                                                        <p className="text-md text-gray-500 inline-block my-1">....</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                className="fixed top-0 left-0 right-0 z-[50] flex justify-center w-full h-full bg-gray-800 bg-opacity-50 "
                role="dialog"
                aria-modal="true"
                >
                    <div className="relative w-[500px] p-4 overflow-auto lg:overflow-hidden scrollbar-hide">
                        <div className="relative bg-white rounded-lg shadow min-w-[500px]">
                            <div className="container-fluid relative px-3">
                                <div className="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900 h-fit">
                                    <div className="grid grid-cols-12 gap-5">
                                        <div className="col-span-12">
                                            <p className="text-xl font-semibold">Create a Batch</p>
                                        </div>
                                        
                                        <div className="col-span-12">
                                            <p className="text-md text-black">Input Files</p>
                                            <p className="text-sm text-gray-500">Add a json file of request inputs for the batch.</p>
                                            <div className="flex inline mt-2">
                                                <div className="mr-4">
                                                    <input defaultChecked id="radio-1" type="radio" value="" name="radioStatus" onChange={statusChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 mr-1"/>
                                                    <label id="radio-1" className="text-black-600 text-sm font-semibold" htmlFor="radio-1">Upload New</label>
                                                </div>
                                                <div>
                                                    <input id="radio-2" type="radio" value="" name="radioStatus" onChange={statusChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 mr-1"/>
                                                    <label id="radio-2" className="text-black-600 text-sm font-semibold" htmlFor="radio-2">Select existing</label>
                                                </div>
                                            </div>
                                            <input name="name" id="name" type="text" className="form-input mt-2" placeholder="File ID" ref={nameRef}/>
                                        </div>

                                        <div className="col-span-12">
                                            <p className="text-md text-black">Completion window</p>
                                            <p className="text-sm text-gray-500">The time frame within with the batch should be processed.</p>
                                            <input name="name" id="name" type="text" className="form-input mt-2" placeholder="File ID" ref={nameRef}/>
                                        </div>

                                        <div className="col-span-12">
                                            <p className="text-md text-black">Endpoint</p>
                                            <p className="text-sm text-gray-500">The endpoint to be used for all request in the batch.</p>
                                            <input name="name" id="name" type="text" className="form-input mt-2" placeholder="File ID" ref={nameRef}/>
                                        </div>

                                        <div className="col-span-12">
                                            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                                <p className="text-md text-green-700 my-1">batch aaaaaaaaaaa</p>
                                                <div>
                                                    <label className="btn-upload btn bg-gray-400 hover:bg-gray-700 border-gray-600 hover:border-gray-700 text-white rounded-md cursor-pointer ms-1" onClick={() => createClick(false)}>Cancel</label>
                                                    <label className="btn-upload btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md cursor-pointer ms-1">Create</label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    ): null;
}