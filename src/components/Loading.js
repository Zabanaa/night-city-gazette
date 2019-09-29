import React from 'react'
// import '../styles/loading.sass'

const Loading = () => {
    return (
        <React.Fragment>
            <main className="loader">
                <span>
                    Loading...
                    <i className="em em-face_with_monocle"></i>
                </span>
            </main>
        </React.Fragment>
    )
}

export default Loading
