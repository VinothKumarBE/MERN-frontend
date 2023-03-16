import  {useState, useCallback, useRef,  useEffect} from 'react';



export  const useHttpClient =()=>{
   const [isLoading, setIsLoading] =useState(false);
   const [error, setError] =useState();
   

    const activeHttpRequests = useRef([]);   
   

   const sendRequest = useCallback (async (url, method= 'GET', body = null, headers={})=>{

    setIsLoading(true);
    const  httpAbortctrl = new AbortController();
    activeHttpRequests.current.push(httpAbortctrl);
    try{
        const response =  await fetch(url, {

            method,
            body,
            headers,
            signal: httpAbortctrl.signal
        });
    
    
        const responseData = await response.json();
        if(!response.ok){
           throw new Error(responseData.message)
        }
    return responseData;
    }catch(err){
        setError(err.message);
    }
    
setIsLoading(false)
}, []);
const  clearError = () => {
    setError(null)
};
useEffect(()=>{ 
    return ()=>{
        activeHttpRequests.current.forEach(abortctrl=>abortctrl.abortctrl());
    };
},[]);

return {isLoading, error, sendRequest, clearError};
};