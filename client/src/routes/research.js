import React from 'react';
import {Route} from 'react-router-dom';
import {List,Create, Update, Show} from '../components/research/';

export default [
  <Route path='/researches/create' component={Create} exact={true} key='create'/>,
  <Route path='/researches/edit/:id' component={Update} exact={true} key='update'/>,
  <Route path='/researches/show/:id' component={Show} exact={true} key='show'/>,
  <Route path='/researches/:page?' component={List} strict={true} key='list'/>,
];
