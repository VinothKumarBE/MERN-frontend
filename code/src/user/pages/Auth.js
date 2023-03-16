import React,{useState, useContext} from "react";
import Card from "../../shared/components/UIelement/Card";
import './Auth.css';
import { AuthContext } from "../../shared/context/auth-context";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/Validators';
import {useForm} from '../../shared/hooks/form-hook';
import ErrorModal from "../../shared/components/UIelement/ErrorModal";
import LoadingSpinner from "../../shared/components/UIelement/LoadingSpinner";
const Auth =()=>{
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState();
    const [formState,inputHandler, setFormData]= useForm({
        email:{
            value:'',
            isValid: false
        },
        password:{
            value: '',
            isValid: false
        }

    }
    ,false);
    
    const switchModeHandler =()=>{
        if(!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name: undefined
            },
            formState.inputs.email.isValid && formState.inputs.password.isValid);
        }else{
            setFormData(
         {
            ...formState.inputs,
              name:{
                value:'',
                isValid: false
            }

            }, false);
        }
    setIsLoginMode(prevMode => !prevMode);    
    };

     const submitHandler = async event=>{
     event.preventDefault();
     
     setIsLoading(true);

     if(isLoginMode){
 try{
        const response= await fetch('http://localhost:4500/api/users/login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          
            email:formState.inputs.email.value,
            password:formState.inputs.password.value
        })
     });
        const responseData = await response.json();
        if(!response.ok){
           throw new Error(responseData.message)
        }
        setIsLoading(false);
        auth.login();   
        }catch(err){
            setIsLoading(false);
            setError(err.message ||'Something went wrong, Please Try again.');
        }

     }else{
        try{
             const response= await fetch('http://localhost:4500/api/users/signup',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:formState.inputs.name.value,
            email:formState.inputs.email.value,
            password:formState.inputs.password.value
        })
     });
        const responseData = await response.json();
        if(!response.ok){
           throw new Error(responseData.message)
        }
   
        setIsLoading(false);
        auth.login();   
        }catch(err){
            
            setIsLoading(false);
            setError(err.message ||'Something went wrong, Please Try again.');
        }
       }
  };

  const errorHandler = () =>{
    setError(null);

  }
    return(
        <React.Fragment>
            <ErrorModal error={error} onClear={errorHandler} />
        <Card className="authentication">
            {isLoading && <LoadingSpinner asOverlay />}
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={submitHandler}>
            {!isLoginMode && <Input element="input" id="name" type="text" label=" your's Name" validators={[VALIDATOR_REQUIRE]} error="please enter a name" onInput={inputHandler}  />}
              <Input  
              element="input" 
              id="email"
               type="email" 
               label="E-mail" 
               validators={[VALIDATOR_EMAIL()]}
               errorText="please enter a valid email address."
               onInput={inputHandler}
               />  
               <Input  
                element="input" 
              id="password"
               type="password" 
               label="Password" 
               validators={[VALIDATOR_MINLENGTH(5)]}
               errorText="please enter a correct password."
               onInput={inputHandler}
               />  
               <Button type="submit"  disabled={!formState.isValid}>{isLoginMode ? 'LOGIN':'SIGNUP'}</Button>
            </form>
            <Button inverse onClick={switchModeHandler}>Switch to {isLoginMode ? 'SIGNUP':'LOGIN'}</Button>
        </Card>
        </React.Fragment>
    );
};
export default Auth;
