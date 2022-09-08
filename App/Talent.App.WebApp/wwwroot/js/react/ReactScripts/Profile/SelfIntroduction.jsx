/* Self introduction section */
import React, { Component } from 'react';
import Cookies from 'js-cookie'
import { ChildSingleInput } from '../Form/SingleInput.jsx';

export default class SelfIntroduction extends React.Component {
    constructor(props) {
        super(props);

        this.updateField = this.updateField.bind(this)
    
    };

    updateField(event) {
        this.props.updateProfileData(event);
    };

    render(item) {
        return (
            null
        )
    }
}



