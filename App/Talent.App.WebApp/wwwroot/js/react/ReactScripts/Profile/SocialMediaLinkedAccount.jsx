/* Social media JSX */
import React from 'react';
import { Form, TextArea } from 'semantic-ui-react'
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import Cookies from 'js-cookie';
import { Popup } from 'semantic-ui-react';

export default class SocialMediaLinkedAccount extends React.Component {
    constructor(props) {
        super(props);

        const details = props.details ?
            Object.assign({}, props.details)
            : {
                LinkedIn: "",
                Github: ""


            }
        this.state = {
            showEditSection: false,
            newContact: details
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.updateProfileData = this.updateProfileData.bind(this)
        this.saveContact = this.saveContact.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
   

    }

    componentDidMount() {
        $('.ui.button.social-media')
            .popup();
    }

    openEdit() {
        const details = Object.assign({}, this.props.details)
        this.setState({
            showEditSection: true,
            newContact: details
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
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
        this.props.saveProfileData(data)
        this.closeEdit()
    }


    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }


    renderEdit() {
        return (
            <div className='ui sixteen wide column'>
                <ChildSingleInput
                    inputType="text"
                    label="LinkedIn"
                    name="LinkedIn"
                    value={this.state.newContact.LinkedIn}
                    controlFunc={this.updateProfileData} 
                    maxLength={80}
                    placeholder="Enter your LinkedIn Url"
                    errorMessage="Please enter a valid LinkedIn  Url"

                />

                <ChildSingleInput
                    inputType="text"
                    label="Github"
                    name="Github"
                    value={this.state.newContact.Github}
                    controlFunc={this.updateProfileData} 
                    maxLength={80}
                    placeholder="Enter your GitHub Url"
                    errorMessage="Please enter a valid GitHub account"

                />
                <button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
            </div>
        )
    }

    renderDisplay() {

        return (
            <div className='row'>
                <div className="ui sixteen wide column">
                    <button className="ui linkedin button" disabled ><i className="linkedin icon" ></i>LinkedIn</button>
                    <button className="ui github button" disabled><i className="github icon"></i>GitHub</button>

                    <button type="button" className="ui right floated teal button" onClick={this.openEdit}>Edit</button>
                </div>
            </div>
        )

    
    }

}