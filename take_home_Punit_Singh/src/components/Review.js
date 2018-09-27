import React from 'react';
import {connect} from 'react-redux';

function Review(props){
    console.log('Review data ::',props.data);
    const {basicInfo, contactInfo, jobPreference} = props.data;
    return (
        <div className='component'>


            <div className='row'><label className='small-6'>First Name: </label>
                {basicInfo.firstName}
            </div>
            <div className='row'><label className='small-6'>Last Name:</label>
                {basicInfo.lastName}
            </div>

            <div className='row'><label className='small-6'>Email Address: </label>
                {contactInfo.basic.email}
            </div>
            <div className='row'><label className='small-6'>Phone:</label>
                {contactInfo.basic.phone}
            </div>

            <div className='row'><label className='small-6'>Street Address: </label>
                {contactInfo.advance.street}
            </div>

            <div className='row'><label className='small-6'>City:</label>
                {contactInfo.advance.city}
            </div>
            <div className='row'><label className='small-6'>State:</label>
                {contactInfo.advance.state}
            </div>
            <div className='row'><label className='small-6'>Zip Code:</label>
                {contactInfo.advance.zipCode}
            </div>
            <div className='row'><label className='small-6'>Country:</label>
                {contactInfo.advance.country}
            </div>
            <div className='row'><label className='small-6'>Your Preferred Job Location:</label>
                {jobPreference.location}
            </div>
        </div>
    );
}


function mapStateToProps(state) {
    console.log('Review mapStateToProps',state);
    return {
        data: state.data
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Review);