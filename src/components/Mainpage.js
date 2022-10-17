import '../UI/Mainpage.css';
import React,{useState} from 'react';
import { Component1 } from './Component1';
import { Component2 } from './Component2';
import { Component3 } from './Component3';
export const datadetails1=[{
    currenttask:"Experiment design",
    assigned:"Due date 07/10/2019(overdue)",
    all:"In progress",
   },{
    currenttask:"Sampling biological material",
    assigned:"Due date 06/01/2019(overdue)",
    all:"In progress",
  },
  {
    currenttask:"RAN isolation",
    assigned:"Due date 08/15/2019(overdue)",
    all:"In progress",
  },
  {
    currenttask:"RAN quality & RAN quality BIOANALYSER",
    assigned:"Due date 06/29/2019(overdue)",
    all:"In progress",
  },
  ];
  export const datadetails2=[{
   work:"Bala's test run 1-lee's disc",
    task:"task",
   date:"01/03/2022 12:19",
   },{
    work:"Bala's test run 1-lee's disc",
    task:"task",
   date:"01/03/2022 12:19",
  },
  {
    work:"Bala's test run 1-lee's disc",
    task:"task",
   date:"01/03/2022 12:19",
  },
  {
    work:"Bala's test run 1-lee's disc",
    task:"task",
   date:"01/03/2022 12:19",
  },
  ];
function Mainpage(){
const [data1,setData1]=useState(datadetails1);
const [data2,setData2]=useState(datadetails2);
    return(
        <div className="Mainpage">
         <h3>My Page</h3>
         <div className="Mainpagecontent">
           
           <Component1 data1={data1} setData1={setData1}/> 
           <div className="Mainpagecontent2">
            <div className="Mainpagecomponent2"> <Component2 data2={data2} setData2={setData2} /></div>
            <div className="Mainpagecomponent3">  <Component3/></div>
          
           </div>   
       </div>
        </div>
       
    )
}
export default Mainpage;

