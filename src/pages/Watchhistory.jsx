import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { DeletehisVideoApi, GetVideohistoryApi } from '../services/allApi';




function Watchhistory() {

  const [allhisvideos ,setallhisvideos]=useState([])
 const [hisstatus, sethisstatus]=useState(false)
  const getallhistory = async ()=>{
    const result = await GetVideohistoryApi()
    setallhisvideos(result.data);
    
  }

  const  handledelete=async (id) =>{
    const result= await DeletehisVideoApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      sethisstatus(true)
    }
    
  }

  console.log(allhisvideos);
  
  useEffect(()=>{
    getallhistory()
    sethisstatus(false)
  },[hisstatus])

  

  return (
    <div className='p-4'>
      <div className="d-flex mt-5">
        <h4>Watch History</h4>
        <Link to={'/home'} style={{textDecoration:'none'}} className='ms-auto'>
        <h5><FontAwesomeIcon icon={faHouse} /><span className='med'>Back Home</span></h5></Link>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 p-3 table-responsive">
       {allhisvideos.length>0?     
          <table className='table mt-5'>
        <thead>
          <tr>
            <th>sl.no</th>
            <th>Caption</th>
            <th>Url</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {allhisvideos?.map((item , i)=>(
           <tr>
           <td>{++i}</td>
           <td>{item?.caption}</td>
           <td><a href={item?.url}>{item?.url}</a></td>
           <td>{item?.time}</td>
    <td> <Button variant="danger" onClick={()=>handledelete(item?.id)}><FontAwesomeIcon icon={faTrash} /></Button>
     </td>
         </tr>
              
            ))}
          
        </tbody>
      </table>
   :
      <h4 className='text-warning text-center'>No Watch History</h4>
}
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      
    </div>
  )
}

export default Watchhistory