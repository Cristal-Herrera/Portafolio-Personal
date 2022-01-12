import React, { Component } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home";
import Proyectos from "./components/Proyectos";
import Footer from './components/Footer';
import Cv from "./components/Cv";



class Router extends Component {
    render() {

        return (
            <BrowserRouter>
                <Header />
                <div className="center">

                    {/* CONFIGURAR RUTAS Y PÁGINAS */}
                    <Routes>
                    <Route path="/" element={<Home />} />

                        <Route path="/home" element={<Home />} />
                        <Route path="/proyectos" element={<Proyectos />} />
                        <Route path="/curriculum" element={<Cv />} />
                    </Routes>


                    <div className="clearfix"></div>
                </div>
                <Footer />
            </BrowserRouter>

        );
    }
}


export default Router;

