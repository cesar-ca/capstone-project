import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TopicsdetailPage from './routes/TopicsdetailPage';
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import { TopicsContextProvider } from './context/TopicsContext';

const App = () => {
    return (
        <TopicsContextProvider>
<div className="container">
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/topics/:id/update" component={UpdatePage}/>
                <Route exact path="/topics/:id" component={TopicsdetailPage}/>
            </Switch>
        </Router>
    </div>
        </TopicsContextProvider>
    )
}

export default App;