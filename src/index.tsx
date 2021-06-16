import React from 'react';
import ReactDOM from 'react-dom';

import { HelloWorld } from './components/HelloWorld';

ReactDOM.render(
  <HelloWorld compiler='Typescript' framework='React' />,
  document.getElementById('root')
);
