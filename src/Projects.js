import React,{useEffect, useState} from 'react'
import {useStore} from "./store/Store"
import {database} from "./store/firebase"
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function Projects() {
    const {user} = useStore()
    const [data, setData] = useState("wait")
    const [today, setToday] = useState(new Date())
    let [color, setColor] = useState("#ffffff");
    useEffect(() => {
        var cardRef = database.ref(`/${user.displayName}/`);
        cardRef.on('value', (snapshot) => {
            const data1 = snapshot.val(); 
            setData(data1)
            
                  
})
    }, [])
   if(data === "wait"){
    return <div className="mt-9"><ClipLoader color={color}  css={override} size={150} /></div>
   }
   
    
    return (
        <>
        {!data&&<h1 className="text-center">No Projects due</h1>}
        {data&&Object.keys(data).map((key,index)=><div className="w-screen">
            <div class="mx-auto mt-3 max-w-lg max-h-sm w-full lg:flex">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('https://picsum.photos/800/900')"}} title="Woman holding a mug">
        </div>
        <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <p class="text-sm text-grey-dark flex items-center">
              <svg class="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Start Date: {data[key].from?.replace(/\./g,"/")}{" "} Due Date:{data[key].to?.replace(/\./g,"/")}
            </p>
            <div class="text-black font-bold text-xl mb-2">{data[key].title}</div>
            <p class="text-grey-darker text-base">Months left: {data[key].to?.split(".")[1] - (today.getMonth()+1)}</p>
            <p class="text-grey-darker text-base">Days left: {data[key].to?.split(".")[0] - today.getDate()}</p>
            <p class="text-red-500 text-center">{(data[key].to?.split(".")[0] - today.getDate()) <=0?"Project overdue":""}</p>
          </div>
          
          </div>
        </div>
      </div>) }
    
       
            
       
      </>
    )
}

export default Projects
