import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map.js";
import SceneView from "@arcgis/core/views/SceneView.js";
import { useRef, useEffect } from 'react';

esriConfig.apiKey = 'AAPKd6297e652e3649d68560645aa126553fKRlw0Kii3wYDc8HB67xgoRvJN3_FEL--UR9BiajsRzqllRPDlIGCrAaA6V91XNHc';

const BackgroundMap = () => {
    const mapContainer = useRef();

    const map = new Map({
        basemap: 'arcgis-imagery',
        ground: 'world-elevation',
    })

    const world = new SceneView({
        container: mapContainer.current,
        map: map,
        center: [-58.37723, -34.61315],
        zoom: 1,
        viewingMode: "global",
        qualityProfile: "high",
        environment: {
          background: {
            type: "color",
            color: '#161616'
          },
          starsEnabled: false,
          atmosphereEnabled: false,
        },
      });

      //remove all components
      world.ui.components = [];

    useEffect(() => {
       world
    }, []);

    return(
        <div ref={mapContainer} className="background-map"></div>
    )
}

export { BackgroundMap };