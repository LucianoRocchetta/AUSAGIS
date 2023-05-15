import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map.js";
import SceneView from "@arcgis/core/views/SceneView.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import { useRef, useEffect, useState } from 'react';

// Components
import { OfficesMarkers } from './OfficesMarkers';

esriConfig.apiKey = 'AAPKd6297e652e3649d68560645aa126553fKRlw0Kii3wYDc8HB67xgoRvJN3_FEL--UR9BiajsRzqllRPDlIGCrAaA6V91XNHc';

const BackgroundMap = () => {
  // IDEA: Crear un graphic layer donde se renderize automaticamente las oficinas
  const officesGraphicLayer = new GraphicsLayer();

  const mapContainer = useRef();

  const map = new Map({
    basemap: 'arcgis-imagery',
    ground: 'world-elevation',
    layers: [officesGraphicLayer],
  })

  const world = new SceneView({
    container: mapContainer.current,
    map: map,
    center: [-58.37723, -34.61315],
    zoom: 1,
    viewingMode: "global",
    qualityProfile: "medium", //low for mobile phone
    environment: {
      background: {
        type: "color",
        color: '#161616'
      },
      starsEnabled: false,
      atmosphereEnabled: false,
    },
    constraints: {

    },
  });

  //remove all components
  world.ui.components = [];

  useEffect(() => {
    world
  }, []);

  return (
    <div ref={mapContainer} className="background-map">
      {map && <OfficesMarkers view={officesGraphicLayer} />}
    </div>
  )
}

export { BackgroundMap };