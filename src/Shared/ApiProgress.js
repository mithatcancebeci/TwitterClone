import { useEffect,useState } from 'react'
import axios from 'axios'




export const useApiProgress=(apiMethod,apiPath,strictPath)=>{
  const[pendingApiCall,setPendingApiCall]=useState(false);
useEffect(()=>{
  let requestInterceptor,responseInterceptor
  const updateApiForCall=(method,url,InProgress)=>{
    if(apiMethod!==method){
      return;
    }
    if(strictPath && url===apiPath){
      setPendingApiCall(InProgress)
    }
    else if(!strictPath && url.startsWith(apiPath)){
      setPendingApiCall(InProgress)
    }

}
const registerInterceptors=()=>{
  requestInterceptor= axios.interceptors.request.use((request) => {
    const{url,method}=request
     updateApiForCall(method,url,true)
     return request;
   });
   responseInterceptor= axios.interceptors.response.use(
     (response) => {
       const{method,url}=response.config
       updateApiForCall(method,url,false)
       return response;
     },
     (error) => {
       const{method,url}=error.config
     updateApiForCall(method,url,false)
       throw error;
     }
   );
 }
const unregisterInterceptors=()=>{
  
  
  axios.interceptors.request.eject(requestInterceptor);
  axios.interceptors.response.eject(responseInterceptor)

}
registerInterceptors()
return function unmount(){
  unregisterInterceptors();
}


},[apiPath,apiMethod,strictPath])
return pendingApiCall
}




