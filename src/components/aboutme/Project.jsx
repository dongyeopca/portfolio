import React from 'react'
import SeperateProject from './SeperateProject';
import runningmate1 from '../../image/runningmate/1.png'
import myunit1 from '../../image/myunit.png'
import mindmirror1 from '../../image/mindmirror.png'
import portfolio1 from '../../image/portfolio.png';

const runningmate = {
    image:[runningmate1],
    title:"러닝메이트",
    explanation:"HTML gelocation api를 활용하여 유저간 실시간 위치 전송, 친구와 함께 경쟁하며 달릴수 있도록 러닝에 게이미피케이션을 접목한 웹사이트입니다. 실시간 통신을 위해 socket.io를 처음 사용해보면서 http의 실시간 송신 방식을 공부 할 수 있었고 백엔드와 프론트를 나누어 프로젝트를 진행하면서 통신과정에서 필요한 쿠키나 CORS등의 개념에 대해서도 많이 배울 수 있었습니다. 배포 후 삼성인터넷에서만 로그인이 되지 않는 이슈가 있었는데 다른 브라우저에 비해 삼성인터넷의 보안수준이 기본적으로 높게 설정되어있어 서버측에서 전달해준 세션쿠키를 저장하지 않아서 생긴 문제였습니다. 해당 문제를 겪으며 브라우저별 호환성 또한 개발중에 고려해야할 필수요소라는 걸 느낄 수 있었습니다.",
    for:"순위권 유저들의 페이스 확인,채팅방,친구 초대 기능, 일자별 나의 러닝 위치,기록 확인(kakao Map)",
    github:"https://github.com/PNU-Runningmate/Runningmate",
    domain:"https://runningmate.netlify.app",
    frontend:"React,Socket.io",
    backend:"Node.js/Express,Socket.io,MongoDB",
    deployment:"Heroku,Netlify"
}
const myunit = {
    image:[myunit1],
    title:"Myunit",
    explanation:"기존의 공모전 팀원 모집 페이지들은 상대방의 기술스택이나 이력등을 확인 할 수 없어서 적절한 팀원을 모집하는데 어려움이 있다 판단하여 동아리 구성원분들과 함께 시작한 프로젝트입니다. 백엔드와 프론트로 개발파트를 나누어 진행하면서 UI&UX 및 API 명세를 노션에 작성하여 소통하였고 해당 과정에서 협업에 관해 많이 배울 수 있었습니다.또한 ngrok을 이용해 내 로컬서버를 개방하여 프론트분들과 개발을 진행하여서 서버 버전에 따른 이슈를 막을 수 있었습니다.또한 drf로 토큰인증 과정에서 버그가 발생하여 해결하는 과정에서 해당 프레임워크의 git issue를 확인하는 것이 문제해결에 큰 도움을 준다는걸 느낄수 있었습니다",
    for:"사용자별 프로필 및 기술 목록 페이지 제공,메시지 기능,팀원 모집,팀원 초대",
    github:"https://github.com/LikeLion-MyUnit",
    frontend:"React",
    backend:"Django-rest-framework",
}
const mindmirror = {
    image:[mindmirror1],
    title:"MindMirror",
    explanation:"자연어 처리 기술을 기반으로 작성된 일기를 통해 감정 정보를 뽑아내고 일자별로 감정정보를 확인 할 수 있도록 제작된 웹앱입니다. 프로젝트를 진행하면서 처음으로 기계학습의 전반적인 과정을 배울수 있는 기회가 되었고 디자이너 없이 진행한 프로젝트라 프론트를 제작하면서 어떻게 하면 끊기지 않는 흐름의 UI/UX를 제작할 수 있을지 고민 할 수 있는 경험이였습니다.또한 카카오 로그인을 구현하면서 어렴풋이 알고있던 oauth인증의 개념을 확실히 새길 수 있었고 일자별,기간별로 필요한 정보를 뽑아내면서 효율적인 모델링의 필요성을 느꼈습니다.무엇보다 node를 공부하고 처음 풀스택으로 진행해본 프로젝트였기에 node에 조금 더 익숙해질 수 있는 경험이였습니다",
    for:"일기 작성,일기 문장별 감정분석, 일자별 기간별 감정분석 통계페이지",
    github:"https://github.com/PNU-MindMirror/MindMirror",
    frontend:"EJS",
    backend:"Node.js/express,mongodb",
}
const portfolio = {
    image:[portfolio1],
    title:"포트폴리오 웹사이트",
    explanation:"포트폴리오 용도로 React로 제작한 웹사이트로 현재 보고 계신 이 웹사이트에 해당합니다. 프론트 개발에만 집중 해 볼 수 있었던 프로젝트입니다.Next.js를 공부하고 나서 다시 제작 해 볼 계획입니다",
    for:"간단한 자기소개,인전 사항,보유 기술 스택,프로젝트 경험",
    github:"https://github.com/dongyeopca/portfolio",
    domain:"https://dongyeopca.github.io/portfolio/",
    frontend:"React",
    deployment:"Github pages"
}

function Project() {
    return (
        <div id="project" className="bg-indigo-600 pt-14">
        <div className="font-black text-4xl text-white text-center mb-3">Project</div>
            <div className="grid grid-cols-1 md:grid-cols-2">
            <SeperateProject item={runningmate} />
            <SeperateProject item={mindmirror}/>
            <SeperateProject item={myunit}/>
            <SeperateProject item={portfolio}/>
            </div>
        </div>
    )
}

export default Project
