import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainView from './components/MainView';
import DetailView from './components/DetailView';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/details' component={DetailView}/>
          <Route path='/' component={MainView}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
