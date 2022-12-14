import React from "react";
import './style.css';
const data={
    footer:" Copyright@ Website-2022"
}
const Footer = () => {
    return (

        <footer className="footer container-fluid footer-col my-5 py-3">
                <div className="texto">{data.footer}</div>

        </footer>
    )
}
export default Footer
