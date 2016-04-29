/**
* @Author: Michael Neumair <mBook>
* @Date:   2016-04-23T16:31:11+02:00
* @Email:  7q7w7e7r@gmail.com
* @Last modified by:   mBook
* @Last modified time: 2016-04-29T09:20:34+02:00
*/



import React from 'react';
import {render} from 'react-dom';
import Form from './Form.js';
import store from './store';
import { Provider } from 'react-redux';


render(<Provider store={store}><Form /></Provider>, document.getElementById('root'));
