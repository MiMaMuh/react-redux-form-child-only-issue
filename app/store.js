/**
* @Author: Michael Neumair <mBook>
* @Date:   2016-04-29T09:01:53+02:00
* @Email:  7q7w7e7r@gmail.com
* @Last modified by:   mBook
* @Last modified time: 2016-04-29T09:09:23+02:00
*/



import React, { Component } from 'react'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { modelReducer, formReducer } from 'react-redux-form';


const reducers = combineReducers({
	input: modelReducer('input', {}),
	inputForm: formReducer('input'),
});
export const store = createStore(
	reducers,
	{},
	compose(
		applyMiddleware(thunkMiddleware)
	)
);
export default store;
