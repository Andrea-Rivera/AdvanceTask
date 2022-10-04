import React from 'react'
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Select,Dropdown} from 'semantic-ui-react'


export default class VisaStatus extends React.Component {
    constructor(props) {
        super(props)

        const details = props.details ?
            Object.assign({}, props.details)
            : {
                VisaStatus: "",
                VisaExpiryDate: ""

            }
        this.state = {
            newContact: details
        }
        this.updateProfileData = this.updateProfileData.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    componentDidMount() {

    }

    handleChangeDate(date, name) {
        if (name == "VisaExpiryDate") {
            this.props.updateProfileData({ target: { name: "VisaExpiryDate", value: date } });
        }
        else {
            this.props.updateProfileData()
        }
    }


    updateProfileData(event) {
        var data = Object.assign({}, this.state.newContact)
        data[event.target.name] = event.target.value
        this.setState({
            newContact: data
            
        })
        console.log(data)
        }


    render() {
        const optionVisa = [
            { key: 'Citizen', value: 'Citizen' },
            { key: 'Permanent Resident', value: 'Permanent Resident' },
            { key: 'Work Visa', value: 'Work Visa' },
            { key: 'Student Visa', value: 'Student Visa' },


        ];
        //const selectedVisaType = this.props.newContact;
        //const visaoptions = Object.keys(options).map((x) => <option key={x} value={x}>{x}</option>);
        
        
        return (
            <div>
             
           
                <label><b>Visa Status</b></label>
                <Select
                    name='VisaStatus'
                        selectedOption={this.props.visaStatus}
                        onChange={this.handleChange}
                    placeholder='Please select a visa type'
                    options={optionVisa}
                />
                   <br/>
                 
               
                    <ChildSingleInput
                        inputType="Date"
                        label="Visa Expiry Date"
                        name="VisaExpiryDate"
                        maxLength={3}
                        value={this.state.newContact.VisaExpiryDate}
                        controlFunc={this.updateProfileData}
                        placeholder="Date"
                        errorMessage="Please enter a valid Date"


                    />
              
             </div>
        );
    }
}

