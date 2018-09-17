import React from 'react';

export default function ContactInfoBasic(){
    return (
        <div className='component'>
            <div className='row'><label className='small-6 underline'>Enter Online Address </label><label className='small-6'/></div>
            <div className='row'><label className='small-6'>Email Address: </label><input className='small-6' name='email'/></div>
            <div className='row'><label className='small-6'>Phone:</label> <input className='small-6' name='phone'/></div>
        </div>
    );
}