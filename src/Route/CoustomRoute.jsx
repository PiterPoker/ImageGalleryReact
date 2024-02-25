import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar/Navbar'
import constants from './constatnts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PrivateGalleryWrapper from './PrivateGalleryWrapper'

const Home = lazy(() => import('../pages/Home'));
const Gallery = lazy(() => import('../pages/Gallery'));
const TermsOfUse = lazy(() => import('../pages/TermsOfUse'));
const Loading = lazy(() => import('./Loading'));
const NotFound = lazy(() => import('./NotFound'));


function CoustomRoute() {
    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Navbar routes={constants.arrayRoutes}></Navbar>
                <Routes>
                    <Route path={constants.routes.Home} element={<Home />} />
                    <Route path={constants.routes.Gallery} element={<PrivateGalleryWrapper />}>
                        <Route path={constants.routes.Images} element={<Gallery />} />
                        <Route path={constants.routes.TremsOfUse}  element={<TermsOfUse />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>

        </Suspense>
    )
}

export default CoustomRoute