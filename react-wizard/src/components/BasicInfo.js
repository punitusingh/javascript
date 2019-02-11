import React from 'react';
import {connect} from 'react-redux';
import {updateBasicInfo, updateStepValidFn} from '../store/actions';

class BasicInfo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.isValid=this.isValid.bind(this)
    }

    handleChange(event) {
        const basicInfo={
            [event.target.name]: event.target.value
        };

        this.props.update(basicInfo);
    }

    isValid(){
        const currentData=this.props.basicInfo;
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
        const {basicInfo} = this.props;
        this.props.updateValidity(this.isValid);
        return (
            <div className='component'>
                <div className='row'><label className='small-6'>First Name: </label>
                    <input className='small-6' name='firstName' ref='firstName' onChange={this.handleChange}
                           defaultValue={basicInfo.firstName}
                    />

                </div>
                <div className='row'><label className='small-6'>Last Name:</label>
                    <input className='small-6' name='lastName' ref='lastName' onChange={this.handleChange}
                           defaultValue={basicInfo.lastName}
                    />
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        basicInfo: state.data.basicInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        update: (basicInfo)=>{dispatch(updateBasicInfo(basicInfo))},
        updateValidity: (validFn)=>{dispatch(updateStepValidFn(validFn))}
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasicInfo);