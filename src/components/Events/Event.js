import React from 'react';
import { Input } from 'semantic-ui-react';
import EventContainer from './EventContainer';

class Event extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleChange = event => {
    this.setState({
      search: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Input icon={{ name: 'search', circular: true }} placeholder="Search..." />
        <EventContainer />
      </div>
    );
  }
}

export default Event;
