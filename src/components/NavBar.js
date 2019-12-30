import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class MenuExampleSecondary extends Component {
   state = { activeItem: 'home' };

   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

   render() {
      const { activeItem } = this.state;

      return (
         <Menu secondary>
            <Menu.Item
               name="home"
               active={activeItem === 'home'}
               onClick={this.handleItemClick}
            />
            <Menu.Item
               name="events"
               active={activeItem === 'events'}
               onClick={this.handleItemClick}
            />
            <Menu.Item
               name="friends"
               active={activeItem === 'friends'}
               onClick={this.handleItemClick}
            />
            <Menu.Menu position="right">
               <Menu.Item
                  name="logout"
                  active={activeItem === 'logout'}
                  onClick={this.handleItemClick}
               />
            </Menu.Menu>
         </Menu>
      );
   }
}
