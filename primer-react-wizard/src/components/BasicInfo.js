import React from 'react';

export default function BasicInfo(){
    return (
        <div className='component'>
            <div className='row'><label className='small-6'>First Name: </label><input className='small-6' name='firstName'/></div>
            <div className='row'><label className='small-6'>Last Name:</label> <input className='small-6' name='lastName'/></div>
        </div>

    );
}