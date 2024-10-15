import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Await } from 'react-router-dom';
import { AddVideoApi } from '../services/allApi';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Add({setaddVideoStatus}) {


  const [videodetails , setvideodetails]=useState({

    caption:"",
    imageURL:"",
    embedLink:""

  })

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false)
    handleCancel()
  };
  const handleShow = () => setShow(true);



  const handleadd = async ()=>{
    
    const {caption , imageURL ,embedLink}=videodetails

    if(!caption || !imageURL || !embedLink){

      toast.info('please fill out the form')

    }
    else{
      if(videodetails.embedLink.startsWith('https://youtu.be/')){
        

        const embedl=  `https://www.youtube.com/embed/${videodetails.embedLink.slice(17,28)}`
       
       
  
  
        const result = await AddVideoApi({...videodetails, embedLink:embedl})
      console.log(result);
      if(result.status >=200 && result.status <300){
        toast.success('video added successfully')
        handleClose()
        setaddVideoStatus(result.data)
      }
      else{
        toast.error('something went wrong')
      }
      
      }
  
    
      else{
        const embedl=  `https://www.youtube.com/embed/${videodetails.embedLink.slice(-11)}`
       
        
        const result = await AddVideoApi({...videodetails, embedLink:embedl})
      console.log(result);
      
      if(result.status >=200 && result.status <300){
        toast.success('video added successfully')
        handleClose()
        setaddVideoStatus(result.data)
      }
      else{
       toast.error('something went wrong')
      }
  
    }

    }
    
  }
  const handleCancel =()=>{
    setvideodetails({

      caption:"",
      imageURL:"",
      embedLink:""
  
    })

  }


  console.log(videodetails);
  

  return (
   <>
      <div className='d-flex align-items-center'>
        <h5 className='med'>Upload New Video</h5>
        <button className='btn pb-3' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} className='fs-5' /></button>
  
  
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} />Upload Videos </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <p>Please fill the following details</p>
         
            <form action="" className='p-3 border border-dark rounded'>
              <div className="mb-3">
            <input type="text" name='cap' value={videodetails.caption} onChange={(e)=>setvideodetails({...videodetails, caption:e.target.value})} placeholder='video Caption' className='form-control'/>

              </div>
              <div className="mb-3">
            <input type="text" name='img' value={videodetails.imageURL} onChange={(e)=>setvideodetails({...videodetails, imageURL:e.target.value})} placeholder='video Image'  className='form-control'/>

              </div>
              <div className="mb-3">
            <input type="text" name='url' value={videodetails.embedLink} onChange={(e)=>setvideodetails({...videodetails, embedLink:e.target.value})} placeholder='video Url'  className='form-control'/>

              </div>
            </form>

 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleadd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' autoClose={2000} theme="colored" />
   </>
  )
}

export default Add