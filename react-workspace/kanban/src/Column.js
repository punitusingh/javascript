import React from 'react';
import './Column.css';


const renderTasks=(tasks, index, columns, events)=>{
    const notFirst = index > 0;
    const notLast = index < (columns - 1);

    console.log(notFirst, notLast);

   return tasks.map((task, taskIndex)=>(
        <div className={'task'} key={task}>
            {notFirst && <span className={'move-left'} onClick={()=>{events.moveLeft(index, taskIndex)}}>{'<'}</span>}
            {task}
            {notLast && <span className={'move-right'} onClick={()=>{events.moveRight(index, taskIndex)}}>{'>'}</span>}
        </div>
    ))
};

const Column=(props)=>{

    const {name, color, tasks} = props.item;
    const {index, columns, events}=props;

    return  (
        <div className={'column'}>
            <h1 className={'header'} style={{backgroundColor:color}}>{name}</h1>
            {renderTasks(tasks, index, columns, events)}
            <button onClick={()=>events.addItem(index)}>add Item</button>
        </div>);
};




export default Column;