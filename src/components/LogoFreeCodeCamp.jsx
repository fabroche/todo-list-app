import React from "react";
import '../styles/LogoFreeCodeCamp.css'

const LogoFreeCodeCamp = ({ src }) => (
    <div className='freecodecamp-logo-contenedor'>
        <img
            src={src}
            alt="Logo de FreeCodeCamp"
            className='freecodecamp-logo'
        />
    </div>
);

export default LogoFreeCodeCamp;