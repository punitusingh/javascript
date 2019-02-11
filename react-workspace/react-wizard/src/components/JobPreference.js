import React from 'react';
import {connect} from 'react-redux';
import {updateJobPreference, updateStepValidFn} from '../store/actions';

class JobPreference extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.isValid=this.isValid.bind(this)
    }

    handleChange(event) {
        const { target } = event;

        const {jobPreference}=this.props;
        this.props.update(Object.assign({},jobPreference,{[target.name]:target.value}));
    }

    isValid(){
        const currentData=this.props.jobPreference;
        const keys= Object.keys(currentData);
        for(let i=0;i<keys.length;i++){
            const value=currentData[keys[i]];
            if(!value || value.trim()===''){
                return false;
            }
        }

        return true;
    }

    render() {
        const {jobPreference}=this.props;
        this.props.updateValidity(this.isValid);
        return (
            <div className='component'>
                <div className='row'>

                    <label className='small-6'>Select Your Location:</label>
                    <select name='location' className='small-6'
                            value={jobPreference.location}
                            onChange={this.handleChange}>
                        <option/>
                        <option value='CA'>CA</option>
                        <option value='LA'>LA</option>
                    </select>

                </div>


            </div>

        );
    }

}


function mapStateToProps(state) {
    return {
        jobPreference: state.data.jobPreference
    };
}

function mapDispatchToProps(dispatch) {
    return {
        update: (data)=>{dispatch(updateJobPreference(data))},
        updateValidity: (validFn)=>{dispatch(updateStepValidFn(validFn))}
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobPreference);