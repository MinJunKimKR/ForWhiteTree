import React, { useEffect } from 'react';
import axios from 'axios';
import { Route } from "react-router-dom"
import viewPage1 from './ViewPage1'
import viewPage2 from './Viewpage2'
import viewPage3 from './Viewpage3'
import viewPage4 from './Viewpage4'
import giftPage from './gift'
import qrPage from './QRPage'


function LandingPage({ match }) {
    useEffect(() => {
        console.log('match view page : ', match)
        console.log(`${match.path}/second`)
        axios.get('/api').then((response) => {
            console.log(response.data);
        });
    }, []);
    return (
        <>
            <Route exact path={`${match.path}`} component={viewPage1} />
            <Route exact path={`${match.path}/second`} component={viewPage2} />
            <Route exact path={`${match.path}/third`} component={viewPage3} />
            <Route exact path={`${match.path}/forth`} component={viewPage4} />
            <Route exact path={`${match.path}/giftbox`} component={giftPage} />
            <Route exact path={`${match.path}/qrPage`} component={qrPage} />
        </>
    );
}

export default LandingPage;
