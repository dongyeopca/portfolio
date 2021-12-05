import React from 'react'
function SeperateSkill(props) {
    const {skill,image} = props
    return (
        <div className="bg-white rounded-xl text-center p-5 m-3">
            <div className="border-b-2 text-yellow-500 text-2xl">{skill}</div>
            <div className="flex items-center justify-center w-full h-full">
                <img alt="기술스택" src={image} />
            </div>
        </div>
    )
}

export default SeperateSkill
