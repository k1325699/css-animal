import { HashRouter as Router,Switch,Route} from "react-router-dom";
import styled from "styled-components";
import Header from "../Header"
import Footer from "../Footer"
import HomePage from "../../Page/HomePage";

const Wrapper = styled.div`
  max-width:1024px;
  margin: 0 auto;
  margin-top: 10px;
`

function App() {
  return (
    <Wrapper>
      <Router>
        <Header/>
        <Switch>
          <Route export path="/">
            <HomePage/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </Wrapper>
  );
}

export default App;
