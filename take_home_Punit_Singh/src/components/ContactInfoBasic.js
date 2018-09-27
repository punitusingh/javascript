import React from 'react';
import {connect} from 'react-redux';
import {updateContactInfoBasic, updateStepValidFn} from '../store/actions';

class  ContactInfoBasic extends React.Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.isValid=this.isValid.bind(this)
    }

    handleChange(event) {
        const { target } = event;

        const {basic}=this.props;
        this.props.update(Object.assign({},basic,{[target.name]:target.value}));
    }

    isValid(){
        const currentData=this.props.basic;
        const keys= Object.keys(currentData);
        for(let i=0;i<keys.length;i++){
            const value=currentData[keys[i]];
            if(!value || value.trim()===''){
                return false;
            }
        }

        return true;
    }


    render(){
        const {basic}=this.props;
        this.props.updateValidity(this.isValid);
        return (
            <div className='component'>
                <div className='row'><label className='small-6 underline'>Enter Online Address </label><label className='small-6'/></div>
                <div className='row'><label className='small-6'>Email Address: </label>
                    <input className='small-6'
                           name='email'
                           value={basic.email}
                           onChange={this.handleChange}
                    /></div>
                <div className='row'><label className='small-6'>Phone:</label>
                    <input className='small-6'
                           name='phone'
                           value={basic.phone}
                           onChange={this.handleChange}
                    /></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('ContactInfoBasis mapStateToProps',state);
    return {
        basic: state.data.contactInfo.basic
    };
}

function mapDispatchToProps(dispatch) {
    return {
        update: (data)=>{dispatch(updateContactInfoBasic(data))},
        updateValidity: (validFn)=>{dispatch(updateStepValidFn(validFn))}
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactInfoBasic);