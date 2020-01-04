import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import OrganizationContainer from './components/OrganizationContainer';
import Login from './components/Login';
import UserContainer from './components/UserContainer';
import EventContainer from './components/EventContainer';
import SignUp from './components/SignUp';
import NewEvent from './components/NewEvent';
import Event from './components/Event';
import OrganizationCard from './components/OrganizationCard';
import EventDetail from './components/EventDetail';
import EditVolunteer from './components/EditVolunteer';
import './App.css';

function App() {
  const [currentUser, setUser] = React.useState('');
  const login = user => {
    setUser(user);
  };
  const logout = () => {
    setUser('');
  };
  return (
    <Router>
      <div>
        <NavBar currentUser={currentUser} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/login"
          render={() => <Login onLogin={login} currentUser={currentUser} />}
        />
        <Route
          exact
          path="/signup"
          render={() => <SignUp onLogin={login} currentUser={currentUser} />}
        />
        <Route
          exact
          path="/users/:user_id"
          render={routerProps => (
            <UserContainer {...routerProps} onLogout={logout} currentUser={currentUser} />
          )}
        />
        <Route exact path="/organizations" component={OrganizationContainer} />
        <Route
          exact
          path="/organizations/:id"
          render={routerProps => <OrganizationCard {...routerProps} />}
        />
        <Route exact path="/events" component={Event} />
        <Route
          exact
          path="/volunteer/edit"
          render={routerProps => <EditVolunteer {...routerProps} currentUser={currentUser} />}
        />
        <Route exact path="/events/new" component={NewEvent} />
        <Route
          exact
          path="/events/:id"
          render={routerProps => <EventDetail {...routerProps} currentUser={currentUser} />}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
