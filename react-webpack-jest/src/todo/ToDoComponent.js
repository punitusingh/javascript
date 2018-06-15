import React from 'react';

export default ({item}) => (
            <li className="to-do-item">
                <input
                    type="checkbox"
                    name="to-do-task"
                />
                {item.description}
            </li>
        );
