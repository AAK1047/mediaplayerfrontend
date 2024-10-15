import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import VideosAll from '../components/VideosAll'
import Category from '../components/Category'
import { addvideotoCategoryApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';




function Home() {

  const[addvideoStatus , setaddVideoStatus]=useState({})
  const [delcategoryvideo , setdelcategoryvideo]=useState({})


  const ondrag =(e)=>{
    e.preventDefault()//prevent data lose
  }

  const videoDrop=async (e)=>{
    

    const video=JSON.parse(e.dataTransfer.getData("Dragvid"))
    const category=JSON.parse(e.dataTransfer.getData("Dragcat"))
     console.log(video);
     console.log(category);
     
     

    // if(category.allvideos.find((item)=>item.id==video.id)){
        
          
        for( let i in category.allvideos){
      
        

            if(category.allvideos[i].id==video.id){
                console.log("gonna work");
                console.log(category.allvideos);
                
                
        category.allvideos.splice(i,1)
        console.log(category.allvideos);
        
                  
            }
        }


        const result =await addvideotoCategoryApi(category.id , category)
      if(result.status >=200 && result.status<300){
       
        
        setdelcategoryvideo(result.data)
        
      }
      else{
        toast.error("something went wrong")
      }
    
    // }
    // else{
     
    //     toast.error("something went wrong")
    
    // }
  

    
    
    
  }


  return (
    <div >
    
    <div className='d-flex p-md-5 p-3 align-item-center' droppable onDragOver={(e)=>{ondrag(e)}} onDrop={(e)=>videoDrop(e)}>
      <Add setaddVideoStatus={setaddVideoStatus}/>
      <Link to={'/watchhistory'} className='ms-auto' style={{textDecoration:"none"}}>
      <h5><span className='med'>Watch History</span>
      <FontAwesomeIcon icon={faClockRotateLeft} className='ms-2' /></h5></Link>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-9" droppable onDragOver={(e)=>{ondrag(e)}} onDrop={(e)=>videoDrop(e)}>
          <VideosAll addvideoStatus={addvideoStatus}/>
        </div>
        <div className="col-md-3">
          <Category delcategoryvideo={delcategoryvideo}/>

        </div>
      </div>
    </div>
   <ToastContainer position='top-center' autoClose={2000} theme="colored" />

    </div>
  )
}

export default Home