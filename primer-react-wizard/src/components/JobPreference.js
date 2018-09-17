import React from 'react';


export default function JobPreference(){
    return (
        <div className='component'>
            <div className='row'>

                <label className='small-6'>Select Your Location:</label>
                <select name='location' className='small-6'>
                    <option/>
                    <option value='CA'>CA</option>
                    <option value='LA'>LA</option>
                </select>

            </div>


        </div>

    );
}
