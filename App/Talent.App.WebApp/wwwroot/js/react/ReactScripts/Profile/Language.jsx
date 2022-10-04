/* Language section */
import React from 'react';
import Cookies from 'js-cookie';
import { Table } from 'semantic-ui-react';
import { Icon, Dropdown } from 'semantic-ui-react'
import { ChildSingleInput } from '../Form/SingleInput.jsx';

export default class Language extends React.Component {
    constructor(props) {
        super(props);
       

        const details = props.languageData ?
            Object.assign({}, props.details)
            : {
                Name: "",
                Level: "",
               
            }

        this.state = {
            showEditSection: false,
            newContact: details
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveContact = this.saveContact.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }

    componentDidMount() {
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

    handleChange(event) {
        const data = Object.assign({}, this.state.newContact)
        data[event.target.name] = event.target.value
        this.setState({
            newContact: data
        })
        console.log(data)
    }

    saveContact() {

        console.log(this.state.newContact)
        const data = Object.assign({}, this.state.newContact)
        this.props.updateProfileData(data)
        this.closeEdit()
    }

    render() {
       
        return (
      
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

    renderEdit() {
        const options = [
            { key: 'Basic', text: 'Basic', value: 'Basic' },
            { key: 'Conversational', text: 'Conversational', value: 'Conversational' },
            { key: 'Fluent', text: 'Fluent', value: 'Fluent' },
            { key: 'Native ', text: 'Native', value: 'Native' },


        ];
        return (

            <div className="ui divided three column grid">
               
                    <div className="column">
            
                <ChildSingleInput
                    inputType="text"
                    name="Name"
                    value={this.state.newContact.Name}
                    controlFunc={this.handleChange}
                    maxLength={80}
                    placeholder="Add Language"
                    errorMessage="Please enter a language"
                />
                    </div>
                    <div className="column">
             
                    <Dropdown
                        
                    placeholder='Language Level'
                    label="Level"
                    name="Level"
                    value={this.state.newContact.Level}
                    controlFunc={this.handleChange}
                    options={options}
                />
                    </div>
                    <div className="column">
                <button type="button" className="ui teal button" onClick={this.saveContact}>Add</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
          
                </div>
                </div>
        )
    }

    renderDisplay() {
        //table rows

        let Language = this.props.languageData ? `${this.state.newContact.Name}` : ""
        let Level = this.props.languageData ? this.state.newContact.Level : ""

        return (
           
             
            <table className="ui celled structured table">
                    <thead className="">
                    <tr className="">
                        <th rowSpan="2" className="">Language</th>
                        <th rowSpan="2" className="">Level</th>
                        <th><button className="ui secondary button" onClick={this.openEdit}>+ Add New</button></th>
                        </tr>
                            
                    </thead>
                <tbody className="">
                    <tr className="">
                        <td className="">{Language} </td>
                        <td className="">{Level}</td>
                        <td className=""> <Icon name="edit" color="olive" onClick={this.openEdit} /><Icon name="delete" color="red" onClick={this.openEdit} /></td>
                    </tr>
                </tbody>
            </table>


          
        )
    }
}