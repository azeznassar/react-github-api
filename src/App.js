import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InputForm from './components/InputForm/InputForm';
import Github from './components/Github/Github';
import NotFound from './components/NotFound/NotFound';
import './App.css';


class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    <div className="appHeader">
                        <h1>Github profile lookup</h1>
                    </div>
                    <Switch>
                        <Route path="/" component={InputForm} exact /> 
                        <Route path="/user/:username" component={Github} exact/> 

                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        ); // do I want to remove the exact?
    }
}

export default App;