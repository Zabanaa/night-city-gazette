import React from 'react'
import '../styles/paginator.sass'

const Paginator = props => {
    const { 
        pageNumber, 
        isLastPage, 
    } = props

    return (
        <nav className="paginator">
            <ul>
                { 
                    pageNumber === 1 ? 
                    <li className="paginator__link link__more">
                        <a href={`?page=${pageNumber + 1}`}>More</a>
                        <i className="em em-arrow_right"></i>
                    </li> :
                    (
                        isLastPage ?
                        <li className="paginator__link link__prev">
                            <i className="em em-arrow_left"></i>
                            <a href={`?page=${pageNumber - 1}`}>Prev</a>
                        </li> :
                        <React.Fragment>
                            <li className="paginator__link link__prev">
                                <i className="em em-arrow_left"></i>
                                <a href={`?page=${pageNumber - 1}`}>Prev</a>
                            </li>
                            <li className="paginator__link link__more">
                                <a href={`?page=${pageNumber + 1}`}>More</a>
                                <i className="em em-arrow_right"></i>
                            </li>
                        </React.Fragment>
                    )
                } 
            </ul>
        </nav>
    )
}

export default Paginator
