import React, {useContext} from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/Validators';
import  ErrorModal  from '../../shared/components/UIelement/ErrorModal';
import LoadingSpinner from '../../shared/components/UIelement/LoadingSpinner';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';
//import { stringify } from '@openlayers/mapbox-gl-style-spec';
import { AuthContext } from '../../shared/context/auth-context';
import { useHistory } from 'react-router-dom';


const NewPlace = () => {
  const  auth = useContext(AuthContext)
   const {isLoading, error, sendRequest, clearError} = useHttpClient()
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      }
    },
    false
  );
const history = useHistory();
  const placeSubmitHandler = async event => {
    event.preventDefault();
    try{
      await sendRequest('http://localhost:4500/api/places', 'POST', 
        JSON.stringify({ 
        title: formState.inputs.title.value,
        description: formState.inputs.description.value,
        address: formState.inputs.address.value,
        creator: auth.userId
         }),
          {'Content-Type': 'application/json'}
  );
  history.push('/');
    }catch(err){

    }
   };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
        <form className="place-form"  onSubmit={placeSubmitHandler}>
          {isLoading && <LoadingSpinner asOverlay />}
          <Input
            id="title"
           element="input"
            type="text"
            label="Title"
             validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
                 onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid} >
        ADD PLACE
      </Button>
    </form>
    </React.Fragment>
  );
};

export default NewPlace;