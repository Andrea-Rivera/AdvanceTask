import React from 'react'
import { Radio } from 'semantic-ui-react'


export default class TalentStatus extends React.Component {

        constructor(props) {
            super(props)
        };

        render() {
            return (
                
                <div className='ui six wide column'>
                    <div className='field'>
                <label>Current Status</label>
                <div className="ui radio checkbox">
                    <input type="radio"  name = "jobType" />
                    <label>Actively looking for a job</label>
                        </div>
                        <div className="ui radio checkbox">
                            <input type="radio" name="jobType" />
                            <label>Not looking for a job at the moment</label>
                        </div>
                        <div className="ui radio checkbox">
                            <input type="radio" name="jobType" />
                            <label>Currently employed but open to offers</label>
                        </div>
                        <div className="ui radio checkbox">
                            <input type="radio" name="jobType" />
                            <label>Will be available on later date</label>
                        </div>


                    </div>
                   </div>
                );
        }
    }



