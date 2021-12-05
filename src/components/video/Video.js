import React from 'react'
import video from './profile.mp4'

function Video() {
    return (
        <div className="w-100">
            <video className="w-1/6 h-1/6 rounded-full m-auto"loop autoPlay muted>
                <source src={video}/>
            </video>
        </div>
    )
}

export default Video
