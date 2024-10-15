import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { addvideotoCategoryApi, GetVideoApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function VideosAll({addvideoStatus}) {


    const [allvideos , setAllvides]=useState([])
    const [deletevid , setdeletevid]=useState([])

    // side effect

    const getAllvideo = async ()=>{
        const result = await GetVideoApi()
        setAllvides(result.data)

    }
    console.log(allvideos);
    
    //to handle side effect

    useEffect(()=>{
        getAllvideo()

    },[addvideoStatus,deletevid]) // [] , use effect is called when component render to the browser
    
   
  return (
 <> 
 
 
   <div >
    <h4>All Videos</h4>

    {/* added video */}


    
          
    
    
       { allvideos.length>0 ?
        <div className="container">
            <div className="row">
    
               {allvideos.map((item)=>(
               <div className="col-md-3 p-2" >
               <VideoCard video={item} setdeletevid={setdeletevid}/>
               </div>
            ))}
                
               
            </div>
        </div>
    
      :
    
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <img src="https://y.yarn.co/7538953d-4399-4668-9af5-9093476484b0_text.gif" alt="no image"  className='w-100'/>
                    <h5 className='text-danger text-center'>No video added yet</h5>
                </div>
                <div className="col-md-4"></div>
            
            </div>
        </div>
    }
    
    
      

   </div>
   
   <ToastContainer position='top-center' autoClose={2000} theme="colored" />
   
   
   </>
  )
}

export default VideosAll