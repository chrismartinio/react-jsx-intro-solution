import React, { Component } from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <FirstComponent />
        <NamedComponent name="Bob" />
      </div>
    );
  }
}
