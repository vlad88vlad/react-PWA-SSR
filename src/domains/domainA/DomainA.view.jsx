import React from 'react';
import RenderRoutes from 'router/RenderRoutes';
import { Link } from 'react-router-dom';
import { routes } from './router';

const DomainAView = () => (
    <div>
        <h1>DomainAView</h1>
        <Link to="/domainA/TestPage"> TestPage</Link>
        <Link to="/domainA/DemoPage"> DemoPage</Link>
        <RenderRoutes routes={routes} rootPath="/domainA" />
    </div>
);

export default DomainAView;
