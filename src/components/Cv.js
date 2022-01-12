import React, { Component } from "react";
import Pdf from "../assets/pdf/Cristal-herrera.pdf"


const Cv = () => {
    return (

            <div className="cv">
              <a href={Pdf} target="_blank"  className="btn-cv">Descargar CV</a>
            </div>
    );
}

export default Cv;