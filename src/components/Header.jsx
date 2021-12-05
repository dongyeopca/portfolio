import { react } from 'react'

function Header(props) {
    const {scroll} = props
    function show(){
        const selectbox = document.querySelector("#selectbox");
        console.log(selectbox.className)
        if(selectbox.className === "hidden"){
            selectbox.className ="block"
        }else{
            selectbox.className ="hidden"
        }
    }
    function Aboutme(){
        const about = document.querySelector("#about");
        const selectbox = document.querySelector("#selectbox");
        selectbox.className="hidden"
        about.scrollIntoView({behavior:"smooth",block:"start"});
        
    }
    function skill(){
        const skill = document.querySelector("#skill");
        const selectbox = document.querySelector("#selectbox");
        selectbox.className="hidden"
        skill.scrollIntoView({behavior:"smooth",block:"start"});
    }
    function project(){
        const project = document.querySelector("#project");
        const selectbox = document.querySelector("#selectbox");
        selectbox.className="hidden"
        project.scrollIntoView({behavior:"smooth",block:"start"});
    }
    return (
        <div className={scroll>100 ? "bg-white w-full fixed" : "w-full fixed" }>
        <div className="flex justify-around items-center h-14 px-3" >
            <div className="font-semibold text-2xl" style={{padding:"1.25rem 2rem"}}>DYC's Portfolio</div>
            { window.innerWidth >=768
            ?
            <div className="flex w-5/12 justify-between">
                <div onClick={Aboutme} className="hover:text-yellow-200">About me</div>
                <div onClick={skill} className="hover:text-yellow-200">Skill</div>
                <div onClick={project} className="hover:text-yellow-200">Project</div>
            </div>
            :
            <div  onClick={show}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
    </div>
            }
        </div>
        <div id="selectbox" className="hidden">
            <ul className="w-full">
                <li className="hover:bg-yellow-200 text-center" onClick={Aboutme}>
                    aboutme
                </li>
                <li className="hover:bg-yellow-200 text-center" onClick={skill}>
                    skill
                </li>
                <li className="hover:bg-yellow-200 text-center" onClick={project}>
                    project
                </li>
            </ul>
        </div>
        </div>
    )
}

export default Header
