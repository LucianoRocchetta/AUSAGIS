import Graphic from "@arcgis/core/Graphic.js";

const dataTest: office[] = [{
    name: 'Aeroterra Argentina',
    description: 'Lorem ipsum',
    adress: 'Della Paolera 218, BSAS',
    coordinates: [-58.370568, -34.595919, 1000]
}, {
    name: 'Another office/Client 2',
    description: 'Lorem ipsum',
    adress: 'Lorem ipsum',
    coordinates: [-73.988780, 40.746985, 1000]
},
{
    name: 'Another office/Client 3',
    description: 'Lorem ipsum',
    adress: 'Lorem ipsum',
    coordinates: [12.467960, 41.917395, 1000]
},
{
    name: 'Another office/Client 4',
    description: 'Lorem ipsum',
    adress: 'Lorem ipsum',
    coordinates: [144.958667, -37.816211, 1000]
}
]

const OfficesMarkers = ({ layer }: any) => {

    layer.graphics = dataTest.map((office) => {
        return (new Graphic({
            geometry: {
                type: 'point',
                x: office.coordinates[0],
                y: office.coordinates[1],
                z: office.coordinates[2],
            },
            symbol: {
                type: 'simple-marker',
                color: '#2f88d0',
                size: 15,
                outline: {
                    color: 'white',
                    size: 10,
                }
            },
            attributes: {
                name: office.name,
            },
            popupTemplate: {
                title: office.name,
                content: `<div class = "popup-template">
                        <span>${office.description}</span>
                        <button>Hola mundo</button>
                        <img src = "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"></img>
                    </div>
            `
            }
        })
        )
    });

    return null;
}

export { OfficesMarkers };