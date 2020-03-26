import React from 'react'
import {withRouter} from 'react-router-dom'
import './Car.css'


const Car = props =>{
    return(
        <div className='Car' onClick={() => props.history.push('/cars/'+props.name.toLowerCase())}>
            <h3> Car name: {props.name}</h3>
            <p>
                Year <strong>{props.year}</strong>
            </p>
            <button onClick={props.onChangeTitle}>click</button>
        </div>
    )
}
export default withRouter(Car)


