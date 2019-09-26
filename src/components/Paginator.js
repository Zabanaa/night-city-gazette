import React from 'react'
import { Link } from 'react-router-dom'

const Paginator = props => {
    const { 
        pageNumber, 
        isLastPage, 
        location: { pathname }
    } = props

    return (
        <nav className="paginator">
            { 
                pageNumber === 1 ? 
                <a href={`?page=${pageNumber + 1}`}>More</a> : 
                (
                    isLastPage ?
                    <a href={`?page=${pageNumber - 1}`}>Prev</a> : 
                    <React.Fragment>
                        <a href={`?page=${pageNumber - 1}`}>Prev</a>
                        <a href={`?page=${pageNumber + 1}`}>More</a>
                    </React.Fragment>
                )
            } 
        </nav>
    )
}

export default Paginator
