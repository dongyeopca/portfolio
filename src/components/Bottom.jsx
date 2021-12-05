import React from 'react'
import {AiFillInstagram,AiOutlineGithub} from 'react-icons/ai'
function Bottom() {
    return (
        <div className="bg-white">
        <div className="flex justify-center">
            {/* 인스타 아이디 잊어버려서 링크를 걸지못함...*/}
            <a href="https://www.instagram.com"><AiFillInstagram size="40"/></a>
            <a href="https://github.com/dongyeopca"><AiOutlineGithub size="40"/></a>
        </div>
        <div style={{textAlign:"center"}}>
            Made by dongyeopcha
        </div>
        </div>
    )
}

export default Bottom
