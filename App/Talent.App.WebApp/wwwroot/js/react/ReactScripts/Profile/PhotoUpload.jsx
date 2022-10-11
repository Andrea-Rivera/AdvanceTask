/* Photo upload section */
import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Icon, Form, Button } from 'semantic-ui-react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';

export default class PhotoUpload extends Component {

    constructor(props) {
        super(props);

        const details = props.details ?
            Object.assign({}, props.details)
            : {
                ProfilePhotoUrl: "",
                ProfilePhoto: "",

            }

        this.state = {
            showEditSection: false,
            newContact: details
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
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

   
    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

    renderEdit() {
        return (

            <div className='ui sixteen wide column'>
                
                <input type="file" id="file" style={{ display: "hidden" }} onChange={this.onChange} />
              
            </div>

        );
            
    }

    renderDisplay() {

    

        return (
            <React.Fragment>
                <div className='ui six wide column' >
                    <div className='field' style={{ marginBottom: "10px", marginTop: "5px", display: "block" }}>
                        <h1>Profile Photo</h1>

                    </div>
                </div>
                <div className='ui six wide column'>
                    <div className='field'>
                        
                       
                        
                        <div>
                            <label htmlFor="formId">
                                <input name="" type="file" name= "profilePhoto" id="formId" hidden />
                                <i className="camera retro icon" style={{ marginLeft: "40px", marginTop: "40px", fontSize: "100px" }}  ></i>
                            </label>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}


