/* Self introduction section */
import React, { Component } from 'react';
import Cookies from 'js-cookie'
import { ChildSingleInput } from '../Form/SingleInput.jsx';

export default class SelfIntroduction extends React.Component {
    constructor(props) {
        super(props);

        const details = props.details ?
            Object.assign({}, props.details)
            : {
                summary: "",
                description: ""
            }

        this.state =
        {
            newContact: details
        }

     
        this.updateProfileData = this.updateProfileData.bind(this)
        this.saveContact = this.saveContact.bind(this)
    

    }

    updateProfileData(event) {
        const data = Object.assign({}, this.state.newContact)
        data[event.target.name] = event.target.value
        this.setState({
            newContact: data
        })
    }

    saveContact() {

        console.log(this.state.newContact)
        const data = Object.assign({}, this.state.newContact)
        this.props.updateProfileData(data)
       
    }

    render(item) {

       // let summary = this.props.summary ? this.state.newContact.summary : ""
       
        return (

           

            <div className='ui sixteen wide column'>
                <ChildSingleInput
                    inputType="text"
                    name="summary"
                    maxLength={150}
                    placeholder="Please provide a short summary about yourself"
                    value={this.state.newContact.summary}
                    controlFunc={this.updateProfileData}
                    errorMessage="Please enter a valid summary"
                />
                <p>Summary must be more than 150 characters</p>

                    <ChildSingleInput
                    inputType="text"
                    name="description"
                    value={this.state.newContact.description}
                    controlFunc={this.updateProfileData}
                    maxLength={600}
                    placeholder="Please tell us about any hobbies, additional expertise or anything else you'd like to add"
                    errorMessage="Please enter a valid description"

                    />
                 
                <p>Description must be between 150-600 characters</p>

                <button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>

            </div>
        )
    }
}





