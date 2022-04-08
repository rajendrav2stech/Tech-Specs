import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-column">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <span className="footer-title">Product</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Product 1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Product 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Plans & Prices</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Frequently asked questions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-column">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <span className="footer-title">Company</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Job postings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">News and articles</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-column">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <span className="footer-title">Contact & Support</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link"> +1 123 123 123</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Live chat</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer