import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

export const AddVideoApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}
 
export const GetVideoApi=async()=>{
    return await commonApi('GET',`${serverUrl}/videos`)
}

export const AddVideohistoryapi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqBody)
}

export const GetVideohistoryApi=async()=>{
    return await commonApi('GET',`${serverUrl}/history`)
}

export const DeleteVideoApi=async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`)
}

export const DeletehisVideoApi=async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`)
}

export const AddCategoryapi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqBody)
}

export const GetCategoryApi=async()=>{
    return await commonApi('GET',`${serverUrl}/category`)
}

export const DeleteCategoryApi=async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`)
}

export const addvideotoCategoryApi=async(id,reqbody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${id}`,reqbody)
}









 

