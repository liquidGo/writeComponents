import React, { Suspense } from 'react';
import Button from '../components/buttons';
import { HashRouter as Router, Route } from 'react-router-dom'

interface IRouteComponentProps {
}
const RouteComponent: React.FunctionComponent<IRouteComponentProps> = (props) => {
    return (
        <Router>
            <Suspense>
                <Route path='/' render={() => <Button></Button>}></Route>
            </Suspense>
        </Router>
    );
};

export default RouteComponent;
