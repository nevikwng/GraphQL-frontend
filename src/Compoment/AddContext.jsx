import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';




const Addcontext = ({ data, add, history }) => {
    const [search, changeSearch] = useState('')

    return (
        <div>
            ChangeContext <input onChange={e => changeSearch(e.target.value)} />
            {data.todoList.map((el, index) => (
                <ul key={index} style={{ "listStyleType": "none" }}>
                    <li>{el._id}</li>
                    <li>{el.content}</li>
                    <li>{el.completed}</li>
                </ul>
            ))}
            <button onClick={() => add(search)}>click</button>
        </div>
    )
}

export default withRouter(Addcontext);