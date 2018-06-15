import React from 'react';
import ToDoComponent from './ToDoComponent';
import './todo.scss';

export default class ToDoList extends React.Component {

    static getToComponents(items){
        return  items.map((item, index)=>{
            return (
                <ToDoComponent item={item} key={index}/>
            );
        });
    }

    render() {
        return (<ul className="to-do-items-list">
                {
                    ToDoList.getToComponents(this.props.tasks)
                }
            </ul>
        );
    }
}