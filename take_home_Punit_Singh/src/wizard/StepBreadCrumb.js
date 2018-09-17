import React from 'react';

export default function StepBreadCrumb(props){
    return (<div className='step-bread-crumb'>
        {props.titles.map(x => (<button key={x.id}
                                        data-for={x.id}
                                        onClick={()=>{props.handleOnClick(x.id)}}
                                        className={x.id===props.selected ?
                                            'step-bread-crumb-item step-bread-crumb-item-selected' : 'step-bread-crumb-item'}
        >{x.title}</button>))}
    </div>);
}
