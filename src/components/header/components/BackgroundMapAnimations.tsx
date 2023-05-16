const BackgroundMapAnimations = ({world}:any) => {
    console.log(world)

    //Testing target
    //GoTo animation (Testing)
    setTimeout(()=>{
       /* world.goTo({
            center: [-122, 38, 50000], //Se puede utilizar los pointers
            tilt: 75,
            heading: 105,
        */
       world.goTo({
          }, {speedFactor:0.1, easing: "out-quint"}).catch(e => console.log(e.name));
    }, 3000); 


    return null;
}

export { BackgroundMapAnimations };