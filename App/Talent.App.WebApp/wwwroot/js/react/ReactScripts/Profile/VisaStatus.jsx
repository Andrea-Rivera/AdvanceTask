import React from 'react'
import { SingleInput } from '../Form/SingleInput.jsx';
import { Dropdown } from 'semantic-ui-react'

export default class VisaStatus extends React.Component {
    constructor(props) {
        super(props)
        
    }

    
    render() {
        const options = [
            { key: 'Citizen', text: 'Citizen', value: 'Citizen' },
            { key: 'Permanent Resident', text: 'Permanent Resident', value: 'Permanent Resident' },
            { key: 'Work Visa', text: 'Work Visa', value: 'Work Visa' },
            { key: 'Student Visa', text: 'Student Visa', value: 'Student Visa' },
            

        ];
        return (
            <div className='row'>
                <div className="ui sixteen wide column">
                    <React.Fragment>
                        <Dropdown
                            placeholder='Select visa type'
                            search
                            selection
                            options={options}
                        />
                    </React.Fragment>

                </div>
            </div>
         );
    }
}