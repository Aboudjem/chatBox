import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Connexion from './components/Connexion';
import App from './components/App';
import { BrowserRouter, Match, Miss } from 'react-router';
import NotFound from './components/NotFound';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={Connexion} />
                <Match exactly pattern="/login/:login" component={App} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
};

render (
    <Root />,
    document.getElementById('root')
);