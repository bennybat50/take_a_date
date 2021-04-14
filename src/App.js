import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/SignUp';
import CreateCase from './sections/CreateCase';
import DashBoard from './component/DashBoard';
import Cases from './component/Cases';
import Notifications from './component/Notifications';
import SearchCase from './component/SearchCase';
import Schedule from './component/Schedule';
import Chat from './component/Chat';
import ProfileSettings from './component/ProfileSettings';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/signup" component={SignUp}></Route>
      <Route exact path="/dashboard" component={DashBoard}></Route>
      <Route exact path="/appointment" component={Cases}></Route>
      <Route exact path="/notifications" component={Notifications}></Route>
      <Route exact path="/searchcase" component={SearchCase}></Route>
      <Route exact path="/schedule" component={Schedule}></Route>
      <Route exact path="/chat" component={Chat}></Route>
      <Route exact path="/profilesetting" component={ProfileSettings}></Route>
      <Route exact path="/createcase" component={CreateCase}></Route>

    </BrowserRouter>
    
  );
}

export default App;
