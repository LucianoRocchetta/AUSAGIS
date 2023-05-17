import { useEffect } from 'react';

const BackgroundMapAnimations = ({ world }: any) => {
    //Cloning camera
    const camera = world.camera.clone();
    
    useEffect(() => {

    const animation = async () => {
        for(let i = 0; i < world.graphics.items.length; i++) {
            await world.goTo(world.graphics.items[i], {
                    easing: "linear",
                    speedFactor: 0.1,
                    duration: 15000,
                    tilt: camera.tilt,
                }
        ).catch(e => e);
        }
    }
    animation();
    }, []);
    

return null;
}

export { BackgroundMapAnimations };