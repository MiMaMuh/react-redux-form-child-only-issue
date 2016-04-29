/**
* @Author: Michael Neumair <mBook>
* @Date:   2016-04-23T16:31:40+02:00
* @Email:  7q7w7e7r@gmail.com
* @Last modified by:   mBook
* @Last modified time: 2016-04-29T09:10:26+02:00
*/

import React, { Component } from 'react'
import ChildOnlyComp from './ChildOnlyComp';
import { Field } from 'react-redux-form';


class Form extends Component{
    render() {
        return (
            <div>
                <Field model="input.field">
                    <ChildOnlyComp>
                        <p>{'Hello, I\'m the only child!'}</p>
                    </ChildOnlyComp>
                </Field>
            </div>
        );
    }
};

export default Form;
