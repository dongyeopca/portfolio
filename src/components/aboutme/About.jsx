import React from 'react'
import Detail from './Detail';
import {HiPhone,HiUser,HiMail,HiPencil,HiCalendar,HiLocationMarker } from 'react-icons/hi'
function About() {
    return (
        <div id="about" className="flex flex-col items-center p-14">
            <div className="font-black text-4xl mb-10">About Me</div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <Detail icon={<HiUser size="40"/>} content={'이름'} child={"차동엽"} />
            <Detail icon={<HiCalendar size="40"/>} content={'생년월일'} child={"97.03.19"}/>
            <Detail icon={<HiLocationMarker size="40"/>} content={'주소지'} child={"부산광역시 북구"}/>
            <Detail icon={<HiPhone size="40"/>} content={'연락처'} child={"010-5766-8939"}/>
            <Detail icon={<HiMail size="40"/>} content={'이메일'} child={"ckehdduq95@gmail.com"}/>
            <Detail icon={<HiPencil size="40"/>} content={'학력'} child={"부산대학교(핀테크융합전공)"}/>
            </div>
        </div>
    )
}

export default About
