import React from 'react';
import {connect} from 'react-redux';
import {updateContactInfoAdvance, updateStepValidFn} from '../store/actions';

class ContactInfoAdvance extends React.Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.isValid=this.isValid.bind(this)
    }

    handleChange(event) {
        const { target } = event;

        const {advance}=this.props;
        this.props.update(Object.assign({},advance,{[target.name]:target.value}));
    }

    isValid(){
        const currentData=this.props.advance;
        const keys= Object.keys(currentData);
        for(let i=0;i<keys.length;i++){
            const value=currentData[keys[i]];
            if(!value || value.trim()===''){
                return false;
            }
        }

        return true;
    }

    render (){
        const {advance}=this.props;
        this.props.updateValidity(this.isValid);

        return (
            <div className='component'>
                <div className='row'><label className='small-6 underline'>Enter Home Address </label><label className='small-6'/></div>
                <div className='row'><label className='small-6'>Street Address: </label>
                    <input className='small-6'
                           name='street'
                           value={advance.street}
                           onChange={this.handleChange}
                    /></div>
                <div className='row'><label className='small-6'>City:</label>
                    <input className='small-6'
                           name='city'
                           value={advance.city}
                           onChange={this.handleChange}
                    /></div>
                <div className='row'><label className='small-6'>State:</label>
                    <input className='small-6'
                           name='state'
                           value={advance.state}
                           onChange={this.handleChange}
                    />
                </div>
                <div className='row'><label className='small-6'>Zip Code:</label>
                    <input className='small-6'
                           name='zipCode'
                           value={advance.zipCode}
                           onChange={this.handleChange}
                    /></div>
                <div className='row'><label className='small-6'>Country:</label>
                    <input className='small-6'
                           name='country'
                           value={advance.country}
                           onChange={this.handleChange}
                    /></div>
            </div>

        );
    }

}

function mapStateToProps(state) {
    console.log('ContactInfoBasis mapStateToProps',state);
    return {
        advance: state.data.contactInfo.advance
    };
}

function mapDispatchToProps(dispatch) {
    return {
        update: (data)=>{dispatch(updateContactInfoAdvance(data))},
        updateValidity: (validFn)=>{dispatch(updateStepValidFn(validFn))}
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactInfoAdvance);


