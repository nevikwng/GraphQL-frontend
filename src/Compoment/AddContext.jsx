import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';




const Addcontext = ({ data, add }) => {
    const [MemberId, setMemberId] = useState('')
    const [Total, setTotal] = useState('')

    return (
        <div>
            ChangeContext <input onChange={e => setMemberId(e.target.value)} />
            ChangeContext <input onChange={e => setTotal(e.target.value)} />

            {data.sql.map((el, index) => (
                <ul key={index} style={{ "listStyleType": "none" }}>
                    <li>orderId{el.orderId}</li>
                    <li>Total{el.Total}</li>
                    <li>MemberId{el.MemberId}</li>

                </ul>
            ))}
            <button onClick={() => add(MemberId, Total)}>click</button>
        </div>
    )
}

export default withRouter(Addcontext);