import React,{useState,useEffect} from "react";
import "./App.css";
import Video from "./components/video/Video";
import About from './components/aboutme/About';
import Stack from './components/aboutme/Stack';
import background from './image/background.jpeg';
import Button from './components/Button/DownButton';
import Header from './components/Header';
import Project from "./components/aboutme/Project";
import Bottom from './components/Bottom';
import {WiDirectionUp} from 'react-icons/wi'

function App() {
  const [scrollposition,setscrollposition] = useState(0);
  const updateScroll = ()=>{
    setscrollposition(window.scrollY|| document.documentElement.scrollTop);
  }
  useEffect(()=>{
    window.addEventListener('scroll',updateScroll)
  })
  function toTop(){
    window.scrollTo({top:0,behavior:'smooth'});
  }
  return (
    <div className="App">
      <Header/>
      <container>
        <div className="grid  w-100 justify-center" style={{backgroundImage:`url(${background})`,backgroundSize:"cover",alignItems:"center",padding: '5rem 1.5rem 1.5rem 1.5rem'}}>
        <div className="text-4xl font-black text-white justify-self-center text-center mb-3">
          - 차동엽 -<br/><br/>
           웹 개발자 포트폴리오
          </div>
        <Video />
        <div className="text-1xl text-white mt-7 text-center mb-7">안녕하세요<br/>개발하고 공부하는게 즐거운 개발자입니다.<br/>계속 해서 공부하고 성장하는 개발자를 목표로 합니다.<br/>문제가 생기면 포기하지 않고 끝까지 해결하는 것이 저의 장점입니다.</div>
        <Button />
        </div>
        <WiDirectionUp size="40" id={scrollposition <200 ? "upbutton" : "upbutton_block"} onClick={toTop}/>
        <About />
        <Stack />
        <Project/>
      </container>
      <Bottom/>
    </div>
  );
}

export default App;
