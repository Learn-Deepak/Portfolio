import React from 'react'
//import ParticlesBg from 'particles-bg'
import ParticleComponent from '../ParticleComponent'
import CentreImage from './CentreImage'
import NavTopbar from './NavTopbar'

function Home(props)
{
    debugger;
    return (
        <>
        <NavTopbar addBg=""/>
        <div style={{color: "#ffffff", display: "flex", justifyContent:"center", alignItems:"center", height: "80vh"}}>
            <CentreImage/>
            <ParticleComponent />
        </div>
        </>
    )
}

export default Home 