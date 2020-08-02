import React from 'react'
import Particles from 'react-particles-js'


function ParticleComponent() {
    //debugger;
    return (
        <div id="particlesDiv" style={{ position: "absolute", top: "0%",height: "100%", width: "100%", zIndex: "-1" }}>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 780
                            }
                        },
                        "size": {
                            "value": 3
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 2
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 5,
                                "sync": false
                            }
                        },
                        "move": {
                            "enable": true,
                            "speed": 5,
                            "direction": "bottom",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": true,
                                "rotateX": 1200,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            },
                            "resize": true
                        }
                    }
                }}
            />
        </div>
    )
}

export default ParticleComponent