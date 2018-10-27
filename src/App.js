import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Github from './components/Github/Github';
import NotFound from './components/NotFound/NotFound';
import Followers from './components/Followers/Followers';
import Header from './components/Header/Header';

export default class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <Fragment>
                    <Header />
                    
                    <Switch>
                        <Route path="/" component={Home} exact /> 
                        <Route path="/:username" component={Github} exact/> 
                        <Route path="/:username/followers" render={(props) => <Followers {...props} query='followers' />}/>
                        <Route path="/:username/following" render={(props) => <Followers {...props} query='following' />}/> 
                        <Route component={NotFound} />
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    }
}