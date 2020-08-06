import React from 'react';
import {
    Link,
} from 'react-router-dom';
import './App.scss';
import { StaticRoutesConfig } from './router';
import RenderRoutes from './router/RenderRoutes';


const App = () => (
    <div>
        <Link to="/domainA">domainA</Link>
        <Link to="/">domainB</Link>
        <div className="App">
            <RenderRoutes routes={StaticRoutesConfig} />
        </div>
    </div>
);

export default App;
