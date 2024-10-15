import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { AddVideohistoryapi, DeleteVideoApi } from '../services/allApi';
import { json } from 'react-router-dom';


function VideoCard({video,setdeletevid,isPresent}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow =async () =>{
      setShow(true)
      const time = new Date()

      let formatedate = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:"2-digit",second:'2-digit'}).format(time)

      const reqbody={
        caption:video?.caption,
        url:video?.embedLink,
        time:formatedate

      }

      const result = await AddVideohistoryapi(reqbody)
    } ;

    const handledelete= async(id)=>{
      const result= await DeleteVideoApi(id)
      console.log(result.data);
      if(result.status>=200 && result.status<300){

        setdeletevid(result.data)
      }

    }
    const videoDrag = (e,video)=>{
      console.log(video);
      e.dataTransfer.setData("videoDetails",JSON.stringify(video))
    //  console.log( e.dataTransfer.getData("videoDetails"));
     
    }
    
  return (
    <div><Card style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e,video)}>
  { !isPresent&& <Card.Img variant="top"  onClick={handleShow} src={video?.imageURL} className='w-100' height={"300px"}/>}
    <Card.Body className='d-flex justify-content-between'>
      <Card.Text>{video?.caption.slice(0,10)}...</Card.Text>
     { !isPresent&&  <Button onClick={()=> handledelete(video?.id)} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>}
    </Card.Body>
  </Card>
  
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="514" src={`${video?.embedLink}?autoplay=1`} title="Wind River Trailer #1 (2017) | Movieclips Trailers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
    
      </Modal>
  </div>
  )
}

export default VideoCard