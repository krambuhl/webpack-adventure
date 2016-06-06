import React from 'react';

export default class Root extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          Hello World
        </body>
      </html>
    );
  }
}
