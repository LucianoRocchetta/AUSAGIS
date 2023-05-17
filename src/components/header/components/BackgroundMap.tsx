import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map.js";
import SceneView from "@arcgis/core/views/SceneView.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import { useRef, useEffect, useState } from 'react';

// Components
import { OfficesMarkers } from './OfficesMarkers';
import { BackgroundMapAnimations } from "./BackgroundMapAnimations";

esriConfig.apiKey = 'AAPKd6297e652e3649d68560645aa126553fKRlw0Kii3wYDc8HB67xgoRvJN3_FEL--UR9BiajsRzqllRPDlIGCrAaA6V91XNHc';

const BackgroundMap = () => {
  const [worldObject, setWorldObject] = useState();
  // IDEA: Crear un graphic layer donde se renderize automaticamente las oficinas
  const mapContainer = useRef();

  useEffect(() => {
    const officesGraphicLayer = new GraphicsLayer();

    const map = new Map({
      basemap: 'arcgis-imagery',
      ground: 'world-elevation',
      layers: [officesGraphicLayer],
    })

    const world = new SceneView({
      container: mapContainer.current,
      map: map,
      zoom: 0,
      navigation: {
        mouseWheelZoomEnabled: false,
        browserTouchPanEnabled: false
      },
      camera: {
        position: {
          x: -58.37723,
          y: -34.61315,
          z: 8000000,
        }, 
        tilt: 25,
      },
      viewingMode: "global",
      qualityProfile: "medium", //low for mobile phone
      environment: {
        background: {
          type: "color",
          color: '#161616'
        },
        starsEnabled: true,
        atmosphereEnabled: true,
      },
      ui: {
        components: []
      },
    }).when(world => setWorldObject(world));
  }, []);

  return (
    <div ref={mapContainer} className="background-map">
      { (worldObject) &&
        <>
          <OfficesMarkers world={worldObject}/>
          <BackgroundMapAnimations world={worldObject}/>
        </>
      }
    </div>
  )
}

export { BackgroundMap };