import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Form from '../form/Form'
import Change from '../change/Change'

const history = createBrowserHistory();

function App() {
    return (
        <BrowserRouter history={history}>
            <Route exact path="/" component={Form} />
            <Route exact path="/change" component={Change} />
        </BrowserRouter>
    );
}

export default App;