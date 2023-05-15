import Graphic from "@arcgis/core/Graphic.js";

const dataTest: office = {
    name: 'Aeroterra Argentina',
    description: 'Lorem ipsum',
    adress: 'Della Paolera 218, BSAS',
    coordinates: [-58.370568, -34.595919, 1000]
}

const OfficesMarkers = ({ view }: any) => {
    const offices = new Graphic({

        geometry: {
            type: 'point',
            x: dataTest.coordinates[0],
            y: dataTest.coordinates[1],
            z: dataTest.coordinates[2],
        },
        symbol: {
            type: 'simple-marker',
            color: '#2f88d0',
            size: 10,
            outline: {
                color: 'white',
                size: 10,
            }
        },
        attributes: {
            name: dataTest.name,
        },
        popupTemplate: {
            title: dataTest.name,
            content: `<div>
                        <span>${dataTest.description}</span>
                        <img src = "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"></img>
                    </div>
            `
        }
    })



    view.graphics = [offices]


    return null;
}

export { OfficesMarkers };