import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from './VideoCard';
import { AddCategoryapi, addvideotoCategoryApi, DeleteCategoryApi, GetCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';


function Category(delcategoryvideo) {
    const [show, setShow] = useState(false);

    const [vidcategory ,setvidcategory]=useState("")

    const [allcategory , setallcategory]=useState([])

    const [categorystatus , setcategorystatus]=useState({})

    const [delcategorystatus , setdelcategorystatus]=useState({})

    const [addcategoryvideo , setaddcategoryvideo]=useState({})


    


    const getcategory=async()=>{
      const result = await GetCategoryApi()
      console.log(result.data);
      setallcategory(result.data)
      

    }

    useEffect(()=>{
      getcategory()
    },[categorystatus,delcategorystatus,addcategoryvideo,delcategoryvideo])

  const handleClose = () =>{
    setShow(false);
    handleCancel()
    
  }
  const handleShow = () => setShow(true);

  const handleCancel=()=>{
    setvidcategory("")

  }

  const handleadd=async()=>{

    if(vidcategory){
      const reqbody={
        categoryname:vidcategory,
        allvideos:[]
      }
    
      const result = await AddCategoryapi(reqbody)
      if(result.status>=200 && result.status<300){
        toast.success("category added successfully")
        handleClose()
        setdelcategorystatus(result.data)
      }
    }
    else{
      toast.info("add a category")
    }
    

  }

  const deletecategory = async (id)=>{
    const result = await DeleteCategoryApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      
      setcategorystatus(result.data)
    }
  }




  const ondrag =(e)=>{
    e.preventDefault()//prevent data lose
  }

  const videoDrop=async (e,categorydetails)=>{
    console.log(categorydetails);

    const videoDetailses=JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetailses);

    if(categorydetails.allvideos.find((item)=>item.id==videoDetailses.id)){
      toast.error("already added")
    }
    else{
      categorydetails.allvideos.push(videoDetailses)

      const result =await addvideotoCategoryApi(categorydetails.id , categorydetails)
    if(result.status >=200 && result.status<300){
      toast.success("video added")
      setaddcategoryvideo(result.data)
      
    }
    else{
      toast.error("something went wrong")
    }
    
    }
    console.log(categorydetails);

    
    
    
  }
  const videoDrag = (e,vid,cat)=>{
    
    e.dataTransfer.setData("Dragvid",JSON.stringify(vid))
    e.dataTransfer.setData("Dragcat",JSON.stringify(cat))
     console.log(vid);
     console.log(cat);
     
     

  
   
  }
  
  return (
    <>
    
    <h4>Category</h4>

    <button className='btn w-100 btn-warning mt-4' onClick={handleShow}>Add Category</button>



    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='border p-3 border2 border-dark rounded'>
           <input type="text" onChange={(e)=> setvidcategory(e.target.value)} value={vidcategory} placeholder='Category Name' className='form-control'/>
    </div>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleadd}>Add</Button>
        </Modal.Footer>
      </Modal>
  {allcategory?.length>0 &&
     
     allcategory.map((item)=>(

      <div className="border border-dark border-2 p-3 rounded mt-5" droppable onDragOver={(e)=>{ondrag(e)}} onDrop={(e)=>videoDrop(e,item)} >
        <div className="d-flex justify-content-between mb-3">
            <h5>{item?.categoryname}</h5>
            <button className='btn btn-danger' onClick={()=>deletecategory(item.id) }><FontAwesomeIcon icon={faTrash} /></button>

        </div>
{item?.allvideos.length>0 &&
        item.allvideos.map((vid)=>(
          <div draggable onDragStart={(e)=>videoDrag(e,vid,item)}>
          <VideoCard video={vid} isPresent={true}/>
           </div>
   
        ))
       
}

       
      </div>
    
     ))
      
    }
    </>
  )
}

export default Category