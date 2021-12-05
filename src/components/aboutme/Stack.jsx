import React from 'react'
import SeperateSkill from './SeperateSkill'
import backend from '../../image/backend.png';
import frontend from '../../image/frontend.png';
import version from '../../image/version.png';
import deployment from '../../image/deployment.png'

function Stack() {
    return (
        <div id="skill" className="bg-yellow-200 p-14">
            <div className="font-black text-4xl text-center mb-3">Skill</div>
            <div className="grid md:grid-flow-col">
                <SeperateSkill skill={"Front End"} image={frontend}/>
                <SeperateSkill skill={"Back End"} image={backend}/>
                <SeperateSkill skill={"Deployment"} image={deployment}/>
                <SeperateSkill skill={"Versioin Control"} image={version}/>
            </div>
        </div>
    )
}

export default Stack
