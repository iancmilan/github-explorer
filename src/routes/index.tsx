import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* esse : significa que o repository é um parâmetro e o + significa que tudo que tiver após o repositório faz parte do parâmetro */}
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
