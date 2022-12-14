import React from "react";
import './style.css';
const data={
    footer:" Copyright-2022"
}
const Footer = () => {
    return (

        <footer className="footer text-center my-5">
            <div className="container-fluid">
                    <div className="col-md-12 footer-col my-5">
                        {data.footer}
                    </div>    
            </div>
        </footer>
    )
}
export default Footer
