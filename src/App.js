
import Home from './Folder/Page/Home';
import About from './Folder/Page/Vidio';
import Shop from './Folder/Page/Vidio';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home}  exact />
            <Route path="/vidio" component={About} />
            <Route path="/shop" component={Shop} />
          </Switch>
        </BrowserRouter>,
        </main>
    </div>
  );
}

export default App;
