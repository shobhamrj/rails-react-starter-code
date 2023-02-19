import * as React from 'react'
import * as ReactDom from 'react-dom'

const Welcome = () => {
    return (
        <div className="container">
            <h1> React ! </h1>
        </div>
    )
}
document.addEventListener('DOMContentLoaded', () => {
    ReactDom.render(<Welcome />, document.getElementById('welcome'))
})

export default Welcome 
