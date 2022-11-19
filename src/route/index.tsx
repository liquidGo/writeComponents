import React, { Suspense } from 'react';
import Index from '../components/index';
import { HashRouter as Router, Route } from 'react-router-dom'

interface IRouteComponentProps {
}
const RouteComponent: React.FunctionComponent<IRouteComponentProps> = (props) => {
    return (
        <Router>
            <Suspense>
                <Route path='/' render={() => <Index></Index>}></Route>
            </Suspense>
        </Router>
    );
};

export default RouteComponent;
