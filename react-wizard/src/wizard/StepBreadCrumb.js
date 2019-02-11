import React from 'react';

export default function StepBreadCrumb(props){
    return (<div className='step-bread-crumb'>
        {props.titles.map(x => (<button key={x.id}
                                        data-for={x.id}
                                        onClick={()=>{props.navigate(x.id)}}
                                        className={x.id===props.currentStepTitleId ?
                                            'step-bread-crumb-item step-bread-crumb-item-selected' : 'step-bread-crumb-item'}>
            {x.newTitle ? x.newTitle : x.title}
            </button>))}
    </div>);
}
