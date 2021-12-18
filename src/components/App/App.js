import { HashRouter as Router,Switch,Route} from "react-router-dom";
import Header from "../Header"
import Footer from "../Footer"
import HomePage from "../../Page/HomePage";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route export path="/">
          <HomePage/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
