import React from 'react';
import './list.css';

const List = (todos) => {
    return ( 
        <div>
            <ul>
                {todos.map(el => {
                    return <li> {el.todo} </li>
                })}
            </ul>
        </div>
        
     );
}
 
export default List;