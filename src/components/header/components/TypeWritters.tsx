import Typewriter from "typewriter-effect";

const TypeWritters = () => {

    return (
        <Typewriter
            options={{
                loop: true,
                delay: 100,
                autoStart: true,
                strings: ['GIS Consulting Services', 'Data Analytics', 'Training and support'],
            }}
        />
    )
}

export { TypeWritters };