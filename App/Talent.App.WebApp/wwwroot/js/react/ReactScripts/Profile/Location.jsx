import React from 'react'
import Cookies from 'js-cookie'
import { default as Countries } from '../../../../util/jsonFiles/countries.json';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Grid, Dropdown } from 'semantic-ui-react'
import { countryOptions } from '../Employer/common';



export class Address extends React.Component {
    constructor(props) {
        super(props)
        const details = props.addr ?
            Object.assign({}, props.details)
            : {
                Number: "",
                Street: "",
                Suburb: "",
                PostCode:0,
                City: "",
                Country: ""
               
            }
        this.state = {
            showEditSection: false,
            newContact: details
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.updateProfileData = this.updateProfileData.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveContact = this.saveContact.bind(this)
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

    updateProfileData(event) {
        const data = Object.assign({}, this.state.newContact)
        data[event.target.name] = event.target.value
        this.setState({
            newContact: data
        })
        console.log(this.state.newContact)
    }

    handleChange(event) {
        var data = Object.assign({}, this.props.details);
        //required
        const name = event.target.name;
        let value = event.target.value;
        const id = event.target.id;

        data[name] = value;
        if (name == "Country") {
            data["City"] = "";
        }
        var updateData = {
            target: { name: "City", value: data }
        }

        //update props here
        this.props.handleChange(updateData);
    }

    saveContact() {

        
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
        let countriesoptions = [];
        let citiesoptions = [];
        const selectedCountry = this.props.newContact;
        const selectedCity = this.props.newContact;

        countriesoptions = Object.keys(Countries).map((x) => <option key={x} value={x}>{x}</option>);
        if (selectedCountry != "" && selectedCountry != null) {

            var popcities = Countries[selectedCountry].map((x) => <option key={x} value={x}>{x}</option>);
            citiesoptions = <span>
                <select className="ui dropdown"
                    placeholder="City"
                    value={selectedCity}
                    onChange={this.handlechange}
                    name="City">
                    <option value="0">Select city</option>
                    {popcities}
                </select>
            </span>

        }

        //let countriesoptions = [];
        //const selectedCountry = this.props.details;

        //countriesoptions = Object.keys(Countries).map((x) => <option key={x} value={x}>{x}</option>);
       
       
        return (

            <div className="ui divided three column grid">
                <div className="row">
                    <div className="column">


                        <ChildSingleInput
                            inputType="text"
                            label="Number"
                            name="Number"
                            maxLength={3}
                            value={this.state.newContact.Number}
                            controlFunc={this.updateProfileData}
                            placeholder="Street number"
                            errorMessage="Please enter a valid street number"


                        />
                    </div>
                    <div className="column">

                        <ChildSingleInput
                            inputType="text"
                            label="Street"
                            name="Street"
                            maxLength={80}
                            value={this.state.newContact.Street}
                            controlFunc={this.updateProfileData}
                            placeholder="Street name"
                            errorMessage="Please enter a valid street name"


                        />
                    </div>
                    <div className="column">
                        <ChildSingleInput
                            inputType="text"
                            label="Suburb"
                            name="Suburb"
                            maxLength={40}
                            value={this.state.newContact.Suburb}
                            controlFunc={this.updateProfileData}
                            placeholder="Enter your suburb"
                            errorMessage="Please enter a valid suburb"



                        />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                    
                    <label><b>Country</b></label>
                    <select className="ui right labeled dropdown search"
                        value={selectedCountry}
                        onChange={this.updateProfileData}
                        name="Country">
                        <option value="" >Select Your Country</option>
                        {countriesoptions}
                            </select>
                    
                    </div>

                    <div className="column">

                        <label><b>City</b></label>
                        
                        
                        <select className="ui right labeled dropdown search"
                            value={citiesoptions}
                            onChange={this.updateProfileData}
                            name="Country">
                            <option value="" >Select Your City</option>
                            
                        </select>
                       

                    </div>
                    
                    <div className="column">
                        <ChildSingleInput
                            inputType="text"
                            label="Post Code"
                            name="PostCode"
                            maxLength={80}
                            value={this.state.newContact.PostCode}
                            controlFunc={this.updateProfileData}
                            placeholder="Enter your post code"
                            errorMessage="Please enter a valid post code"


                        />
                    </div>

                </div>
                <div className="row">
                    <div className="column">
                        <button type="button" className="ui teal button" onClick={this.saveContact} >Save</button>
                        <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
                    </div>
                </div>
            </div>



        )
    }
    renderDisplay() {
        let address = this.props.addressData ? `${this.state.newContact.Number} ${this.state.newContact.Street} ${this.state.newContact.Suburb} ${this.state.newContact.PostCode}` : ""
        let country = this.props.addressData ? this.state.newContact.Country : ""
        return (
            <div className='row'>
                <div className="ui sixteen wide column">
                    <React.Fragment>
                        <p>Address: {address}</p>
                        <p>City:</p>
                        <p>Country:{country} </p>
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
        this.saveProfileData = this.saveProfileData.bind(this);
     
    }
    componentDidMount() {
    }



    saveProfileData(event) {
        const data = Object.assign({}, this.props.details)
        data[event.target.name] = event.target.value
        this.setState({
            details: data

        })
        console.log(data)
        //var data = Object.assign({}, this.state.details)
        //const name = event.target.name;
        //let value = event.target.value;
        //const id = event.target.id;
        //data[name] = value;
        //if (name == "Country") {
        //    data["City"] = "";
        //}
        //var updateData = {
        //    target: { name: "location", value: data }
        //}
        //this.props.saveProfileData(updateData);
       
        //console.log(data)
    }

 

    render() {
        let countriesoptions = [];
        const selectedCountry = this.props.details;

        countriesoptions = Object.keys(Countries).map((x) => <option key={x} value={x}>{x}</option>);
        //let countriesoptions = [];
        //let citiesoptions = [];
        //const selectedCountry = this.props.details;
        //const selectedCity = this.props.details;

        //countriesoptions = Object.keys(Countries).map((x) => <option key={x} value={x}>{x}</option>);
        //if (selectedCountry != "" && selectedCountry != null) {

        //    var popcities = Countries[selectedCountry].map(x => <option key={x} value={x}>{x}</option>);
        //    citiesoptions = <span>
        //        <select className="ui dropdown"
        //            placeholder="City"
        //            value={selectedCity}
        //            onChange={this.saveProfileData}
        //            name="City">
        //            <option value="0">Select city</option>
        //            {popcities}
        //        </select>
        //    </span>


        //}

        return (
            <div>
                <label><b>Nationality</b></label>
                <select className="ui right labeled dropdown search"
                    value={selectedCountry}
                    onChange={this.updateProfileData}
                    name="nationality">
                    <option value="" >Select Your Nationality</option>
                    {countriesoptions}

                </select>
                <br />


            </div>
            //<div>
            //    <label><b>Country</b></label>
            //    <select className="ui right labeled dropdown search"
            //        placeholder="Country"
            //        value={selectedCountry}
            //        onChange={this.saveProfileData}
            //        name="Country">
            //        <option value="" >Select Your Country</option>
            //        {countriesoptions}
            //    </select>
            //    <div style={{ marginBottom:"5px", marginTop:"5px" }}></div>
            //    {citiesoptions}

            //</div>

                    
        );
    }
}

