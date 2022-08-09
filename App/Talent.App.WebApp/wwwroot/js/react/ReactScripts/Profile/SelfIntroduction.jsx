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
            <div className='ui sixteen wide column'>
            <ChildSingleInput
                inputType="text"
                name="description"
                maxLength={80}
                placeholder="Please provide a short summary about yourself"
                value={this.props.summary}
                onChange={this.updateField}
                errorMessage="Please enter a valid summary"
            />
            <p>Summary must be more than 150 characters</p>

            <textarea
                name="summary"
                placeholder="Please tell us about any hobbies, additional expertise or anything else you'd like to add."
                value={this.props.description}
                onChange={this.updateField}
            >
            </textarea>
            <p>Description must be between 150-600 characters</p>

            <button type="button" className="ui right floated teal button">Save</button>

        </div>
        )
    }
}



