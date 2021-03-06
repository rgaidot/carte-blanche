/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import cube from './cube.gif';
import Button from './components/Button';
import Card from './components/Card';
import ImmutableList from './components/ImmutableList';
import Select from './components/Select';
import Godzilla from './components/Godzilla';
import Ghidorah from './components/Ghidorah';
import Nested from './components/Nested';

ReactDOM.render(
  <div>
    Hello World: {cube}
    <Button>Click Me</Button>
    <Card />
    <ImmutableList />
    <Select />
    <Godzilla />
    <Ghidorah />
    <Nested name={'Ada'} />
  </div>,
  document.getElementById('root')
);
