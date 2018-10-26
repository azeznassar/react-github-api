import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import InputForm from './components/InputForm/InputForm';
import Github from './components/Github/Github';
import NotFound from './components/NotFound/NotFound';
import Followers from './components/Followers/Followers';
import './App.css';


class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    <div className="appHeader">
                        <Link className="headerTitle" to="/">
                            <h1>Github profile lookup</h1>
                        </Link>
                    </div>
                    <Switch>
                        <Route path="/" component={InputForm} exact /> 
                        <Route path="/:username" component={Github} exact/> 
                        <Route path="/:username/followers" render={(props) => <Followers {...props} query='followers' />}/>
                        <Route path="/:username/following" render={(props) => <Followers {...props} query='following' />}/> 
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;