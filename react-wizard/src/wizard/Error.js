import React from 'react';

export default function Error(props){

        return (<div className={props.error ? 'error':''}>
                    {props.error && ' Please fill all the fields correctly. '}
        </div>);

}
