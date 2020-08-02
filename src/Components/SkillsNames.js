import React from 'react'


function SkillsNames({img, name})
{
    return(
        <>
            <img id="skillImg" src={img} alt={name} style={{height:"25vh", width:"25vh" }}/>
        </>
    )
}

export default SkillsNames;