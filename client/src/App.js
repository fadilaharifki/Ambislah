import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import Create from './pages/Create';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Switch>
        <Route path="/create">
          <Create />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
