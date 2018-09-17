import React from 'react';


export default function ContactInfoAdvance (){
    return (
        <div className='component'>
            <div className='row'><label className='small-6 underline'>Enter Home Address </label><label className='small-6'/></div>
            <div className='row'><label className='small-6'>Street Address: </label><input className='small-6' name='street'/></div>
            <div className='row'><label className='small-6'>City:</label> <input className='small-6' name='city'/></div>
            <div className='row'><label className='small-6'>State:</label> <input className='small-6' name='state'/></div>
            <div className='row'><label className='small-6'>Zip Code:</label> <input className='small-6' name='zipCode'/></div>
            <div className='row'><label className='small-6'>Country:</label> <input className='small-6' name='country'/></div>
        </div>

    );
}
