import React from 'react'
import { Link } from 'react-router-dom'
// import '../styles/notfound.sass'

const NotFound = () => (
    <main className="notFound">
       <div className="notFound__content">
            <p>
                Oops, Looks like you've lost your way ! 
                There's nothing to see in this corner of 
                the internet unfortunately. <i className="em em-disappointed"></i>
            </p> 

            <p>How about a ride 
                <Link to="/"> back home ?</Link>
            </p>
       </div>
    </main>
)

export default NotFound
