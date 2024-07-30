const particlesOptions = {

    fullScreen: {
        enable: false,
    },

    background: {
        opacity: {
            value: 0,
        },
    },

    fpsLimit: 120,

    interactivity: {
        detectsOn: "window",
    },

    particles: {
        color: {
            value: "#ffffff",
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: 35,
        },
        opacity: {
            value: 0.7,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 10 },
        },
    },

    detectRetina: true,
};

export default particlesOptions;