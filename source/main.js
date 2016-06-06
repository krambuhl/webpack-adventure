import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import Root from './components/display/Root.jsx';

export default function render(locals, callback) {
  console.log('helo', locals);
  const html = renderToStaticMarkup(React.createElement(Root, locals));
  callback(null, '<!DOCTYPE html>' + html);

  // return '<p>hello</p>';
}
