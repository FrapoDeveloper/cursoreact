import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from '../components/pages/home/home'
import Characters from '../components/pages/characters/characters'
import Titans from '../components/pages/ttitans/titans'
import Curiositys from '../components/pages/curiositys/curiositys'
import Notfound from '../components/pages/notfound/notfound'
import Header from '../components/molecules/header/header.jsx'
const App = () => (

   <Router>
     <Header />
     <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/personajes" exact component={Characters} />
          <Route path="/titanes" exact component={Titans} />
          <Route path="/curiosidades" exact component={Curiositys} />
          <Route component={() => ( 
          <Notfound />
          )} />
     </Switch>
  
   </Router>

  
)


export default App;
