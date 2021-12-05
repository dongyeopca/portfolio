import React from 'react'

function Detail(props) {
    const {icon,content,child} = props
    return (
        <div className="flex mb-10 ml-10">
        <div>{icon}</div>
        <div className="ml-2">
        <div className="font-semibold text-xl">{content}</div>
        <div>{child}</div>
        </div>
        </div>
    )
}

export default Detail
