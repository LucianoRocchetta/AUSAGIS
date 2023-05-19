import { AnimatedBox } from './components/index';

const dataTest = [
    {
        title: 'Title1',
        image: 'https://www.aeroterra.com/content/dam/distributor-share/esri-ar/home/learn-arcgis-tutoriales-abiertos.jpg',
        orientation: 'right',
    },
    {
        title: 'Title2',
        image: 'https://www.aeroterra.com/content/dam/esrisites/en-us/home/homepage-map-gallery-2021-tile.jpg',
        orientation: 'left',
    },
    {
        title: 'Title3',
        image: 'https://www.aeroterra.com/content/dam/distributor-share/esri-ar/productos/arcgis-pro/need-arcgis-pro-overlay-split-fg.png',
        orientation: 'right',
    },
]

const Body = () => {
    return (
        <div className="body-container">
            <div className="body-content">
                {
                    dataTest.map(({title, image, orientation}) => {
                        return <AnimatedBox title={title} image={image} orientation={orientation} key = {title}/>
                    })
                }
            </div>
        </div>
    )
}

export { Body };