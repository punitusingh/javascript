import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';
import ToDoJson from '../../src/todo/todo.json';
import ToDoList from '../../src/todo/ToDoList';

configure({ adapter: new Adapter() });


test('CheckboxWithLabel changes the text after click', () => {
    // Render a checkbox with label in the document
    const toDoListEl = mount(<ToDoList tasks={ToDoJson.tasks}/>);
    expect(toDoListEl.find('.to-do-item').length).toEqual(3);
});