import React from "react";
function SeperateProject(props) {
  const {item} = props

  return (
    <div className="bg-white mb-10 rounded-xl p-5 m-5 ">
        <div className="text-center mb-3 text-3xl font-black">{item.title}</div>
        <div className="flex justify-center shadow-lg rounded-xl">
            <img className="rounded-xl" width="200px" alt="프로젝트이미지" src={item.image[0]}/>
        </div>
        <div style={{paddingTop:"1rem",paddingBottom:"1rem",borderBottom: "1px solid black",marginBottom:"1rem"}}>{item.explanation}</div>
        <div className="mb-2">
            <div className="text-xl mb-1" style={{borderLeft:"5px solid black",paddingLeft:'0.5rem'}}>주요기능</div>
            <div>{item.for}</div>
        </div>
    <div className="mb-2">
        <div className="text-xl mb-1" style={{borderLeft:"5px solid black",paddingLeft:'0.5rem'}}>github</div>
        <a className="text-pink-400" href={item.github}>{item.github}</a>
    </div>
    {item.domain !== undefined 
    ?   <div className="mb-2">
            <div className="text-xl mb-1" style={{borderLeft:"5px solid black",paddingLeft:'0.5rem'}}>도메인</div>
            <a href={item.domain} className="text-pink-400">{item.domain}</a>
        </div>
    :   <div></div>
    }
    <div className="mb-2">
        <div className="text-xl mb-1" style={{borderLeft:"5px solid black",paddingLeft:'0.5rem'}}>Frontend</div>
        <div>{item.frontend}</div>
    </div>
    {item.backend !== undefined 
    ?   <div className="mb-2">
            <div className="text-xl" style={{borderLeft:"5px solid black",paddingLeft:'0.5rem'}}>Backend</div>
            <div>{item.backend}</div>
        </div>
    :   <div></div>
    }
    {item.deployment !== undefined 
    ?   <div className="mb-2">
            <div className="text-xl" style={{borderLeft:"5px solid black",paddingLeft:'0.5rem'}}>Deployment</div>
            <div>{item.deployment}</div>
        </div>
    :   <div></div>
    }
    </div>
  );
}

export default SeperateProject;
