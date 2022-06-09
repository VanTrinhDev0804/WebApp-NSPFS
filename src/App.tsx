import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageRender from './PageRender';

function App() {
  return (
    <>
    <BrowserRouter>
        <Switch>
            <Route path="/" component={PageRender} exact />
            <Route path="/:id" component={PageRender} exact />
        </Switch>
    </BrowserRouter>
</>
  );
}

export default App;
