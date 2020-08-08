import React from 'react';
import {
    Link,
} from 'react-router-dom';
import './App.scss';
import LanguageSwitcher from 'translations/component/LanguageSwitcher';
import { StaticRoutesConfig } from './router';
import RenderRoutes from './router/RenderRoutes';

const App = () => (
    <div>
        <Link to="/domainA">domainA</Link>
        <Link to="/">domainB</Link>
        <div className="App">
            <RenderRoutes routes={StaticRoutesConfig} />
        </div>
        <LanguageSwitcher />
    </div>
);

export default App;
