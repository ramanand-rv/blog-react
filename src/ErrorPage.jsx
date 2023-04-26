import React from 'react'
import { Link } from 'react-router-dom'
import cryingCat from './asset/banana-crying-cat.gif';

const ErrorPage = () => {
    return (
        <div className="not-found">
            <h2>Sorry...</h2>
            <p>That Page Cannot Be Found 😢</p>

            <div className="back-home">
                <Link to="/">Back to Home  Page👈</Link>
            </div>
                <img src={cryingCat} alt="Sorry Face" />
        </div>
    )
}

export default ErrorPage
