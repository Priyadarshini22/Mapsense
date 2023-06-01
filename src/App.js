import React, { useState } from "react";
import Map from "./Map";
import { Layers, TileLayer, VectorLayer } from "./Layers";
import { Style, Icon } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { osm, vector } from "./Source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import { Controls, FullScreenControl } from "./Controls";
import FeatureStyles from "./Features/Styles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import mapConfig from "./config.json";
import "./App.css";
import Viewer from "./Viewer";
import Login from "./Login";
import Dashboard from "./Dashboard";


const App = () => {
 
  return (
    <Router>
    <Routes>
    <Route path='/' exact element={<Login/>} />
        <Route path='viewer' element={<Viewer/>} />  
    </Routes>
  </Router>
     )
};

export default App;
