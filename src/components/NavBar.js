import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import logo from '../play it forward v2.png';

export default class MenuExampleSecondary extends Component {
   state = { activeItem: 'home' };

   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

   render() {
      const { activeItem } = this.state;

      return (
         <Menu stackable>
            <Menu.Item
               name="home"
               active={activeItem === 'home'}
               onClick={this.handleItemClick}
               as={Link}
               to="/"
            >
               <img src={logo} />
            </Menu.Item>
            <Menu.Item
               name="events"
               active={activeItem === 'events'}
               onClick={this.handleItemClick}
               as={Link}
               to="/events"
            />
            <Menu.Menu position="right">
               <Menu.Item
                  name="login"
                  active={activeItem === 'login'}
                  onClick={this.handleItemClick}
                  as={Link}
                  to="/login"
               />
            </Menu.Menu>
         </Menu>
      );
   }
}
