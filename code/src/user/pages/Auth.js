import React,{useState, useContext} from "react";
import Card from "../../shared/components/UIelement/Card";
import './Auth.css';
import { AuthContext } from "../../shared/context/auth-context";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/Validators';
import {useForm} from '../../shared/hooks/form-hook';
import ErrorModal from "../../shared/components/UIelement/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/components/UIelement/LoadingSpinner";
import ImageUplaod from "../../shared/components/FormElements/imageUpload";

const Auth =()=>{
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
   const{isLoading, error, sendRequest, clearError}= useHttpClient()
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
                name: undefined,
                image:undefined
            },
            formState.inputs.email.isValid && formState.inputs.password.isValid);
        }else{
            setFormData(
         {
            ...formState.inputs,
              name:{
                value:'',
                isValid: false
            },
            image:{ 
                value: null,
                isValid: false
            }

            }, false);
        }
    setIsLoginMode(prevMode => !prevMode);    
    };

     const submitHandler = async event=>{
     event.preventDefault();
     
      console.log(formState.inputs);
     if(isLoginMode){

        try{

         const responseData = await sendRequest('http://localhost:4500/api/users/login', 'POST',   
            JSON.stringify({
            email:formState.inputs.email.value,
            password:formState.inputs.password.value
       }),
           {
               'Content-Type': 'application/json'
           }
      
        );
        auth.login(responseData.user.id); 
        }catch(err){

        }
         }else{
          try{
              const responseData = await sendRequest('http://localhost:4500/api/users/signup', 'POST',
               JSON.stringify({
                name:formState.inputs.name.value,
                email:formState.inputs.email.value,
                password:formState.inputs.password.value
               }),
        {
            'Content-Type': 'application/json'
        }
     
);
     
        auth.login(responseData.user.id);   
        }catch(err){}
       }
  }

  
    return(
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
        <Card className="authentication">
            {isLoading && <LoadingSpinner asOverlay />}
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={submitHandler}>
            {/* {!isLoginMode && <ImageUplaod center id="image" onInput={inputHandler} />} */}
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
               validators={[VALIDATOR_MINLENGTH(6)]}
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
