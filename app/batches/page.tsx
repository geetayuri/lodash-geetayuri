import React from 'react';
import Index from "./index";

import { Suspense } from 'react';
import LoadingPage from "../../components/loadingPage";

export default function EasyappVersionCreate() {
    return (
        <>
            <Suspense fallback={<LoadingPage/>}>
                <Index/>
            </Suspense>
        </>
    )
}