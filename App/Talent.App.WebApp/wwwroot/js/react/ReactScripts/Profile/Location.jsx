import React from 'react'
import Cookies from 'js-cookie'
import { default as Countries } from '../../../../util/jsonFiles/countries.json';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Grid, Dropdown } from 'semantic-ui-react'



export class Address extends React.Component {
    constructor(props) {
        super(props)
        const details = props.details ?
            Object.assign({}, props.details)
            : {
                address: "",
                city: "",
                country: ""

            } 
        this.state = {
            showEditSection: false,
            newContact: details
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        //this.handleChange = this.handleChange.bind(this)
        //this.saveContact = this.saveContact.bind(this)
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

    //handleChange(event) {
    //    const data = Object.assign({}, this.state.newContact)
    //    data[event.target.name] = event.target.value
    //    this.setState({
    //        newContact: data
    //    })
    //}

    //saveContact() {
    //    console.log(this.props.componentId)
    //    console.log(this.state.newContact)
    //    const data = Object.assign({}, this.state.newContact)
    //    this.props.controlFunc(this.props.componentId, data)
    //    this.closeEdit()
    //}
   
    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

        renderEdit() {
            let location = { city: '', country: '' }
            if (this.state.newContact && this.state.newContact.location) {
                location = this.state.newContact.location
            }
        return (

            <div className="ui divided three column grid">
                <div className="row">
                    <div className="column">
                         

                        <ChildSingleInput
                            inputType="text"
                            label="Number"
                            name="number"
                            maxLength={3}
                            placeholder="Street number"
                            errorMessage="Please enter a valid street number"
                            

                        />
                     </div>
                     <div className="column">

                        <ChildSingleInput
                            inputType="text"
                            label="Street"
                            name="street"
                            maxLength={80}
                            placeholder="Street name"
                            errorMessage="Please enter a valid street name"
                            

                        />
                     </div>
                     <div className="column">
                        <ChildSingleInput
                            inputType="text"
                            label="Suburb"
                            name="suburb"
                            maxLength={40}
                            placeholder="Enter your suburb"
                            errorMessage="Please enter a valid suburb"
                            


                            />
                    </div>
                 </div>
                <div className="row">
                     <div className="column">
                        <ChildSingleInput
                            inputType="text"
                            label="Country"
                            name="country"
                            maxLength={40}
                            placeholder="Enter your country"
                            errorMessage="Please enter a valid country"
                            

                        />
                     </div>
                    <div className="column">

                   
                        <ChildSingleInput
                            inputType="text"
                            label="City"
                            name="city"
                            maxLength={80}
                            placeholder="Enter your city"
                            errorMessage="Please enter a valid city"

                        />
                     </div>
                     <div className="column">
                        <ChildSingleInput
                            inputType="text"
                            label="Post Code"
                            name="postcode"
                            maxLength={80}
                            placeholder="Enter your post code"
                            errorMessage="Please enter a valid post code"


                        />
                    </div>

                </div>
                <div className="row">
                    <div className="column">
                        <button type="button" className="ui teal button" >Save</button>
                        <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
                    </div>
                </div>
            </div>


         
        )
    }
    renderDisplay() {
        return (
            <div className='row'>
                <div className="ui sixteen wide column">
                    <React.Fragment>
                        <p>Address: </p>
                        <p>City:</p>
                        <p>Country: </p>
                    </React.Fragment>
                    <button type="button" className="ui right floated teal button" onClick={this.openEdit}>Edit</button>
                </div>
            </div>

        )
    }
}

export class Nationality extends React.Component {
    constructor(props) {
        super(props)
        //this.handleDropDownSelect = this.handleDropDownSelect.bind(this);

    }
    componentDidMount() {
    }

    //handleDropDownSelect = (event, data) => {
    //    console.log(data.value);
    //};

    render() {
        let countriesoptions = [];
        //const selectedCountry = this.props.location.country;
        countriesoptions = Object.keys(Countries).map((x) => <option key={x} value={x}>{x}</option>);
        return (


            
                    <div className='row'>
                        <div className="ui sixteen wide column">
                            <React.Fragment>
                                <Dropdown
                                    placeholder='Select country'
                                    search
                                    selection
                                    options={countriesoptions}
                                />
                            </React.Fragment>

                        </div>
                    </div>

             
        );
    }
}