import List from './components/List';
import Detail from './components/Detail'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={List} />
        <Route exact path="/:id" render={(props) => (
          <Detail id={props.match.params.id} />
        )} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;