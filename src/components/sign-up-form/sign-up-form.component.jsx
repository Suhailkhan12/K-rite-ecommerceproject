import {useState, useContext}  from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss'
import Button from '../button/button.component';
// import { UserContext } from '../../contexts/user.context';
import { createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';
import { signUpStart } from '../../store/user/user.action';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    // console.log(formFields);
    const dispatch = useDispatch();

    // const {setCurrentUser} = useContext(UserContext);

    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
      event.preventDefault();

      if(password != confirmPassword){
        alert("password do not match");
      }

      try {
        // const {user} = await createAuthUserWithEmailAndPassword(email, password);
        // // console.log(response);
        // // setCurrentUser();

        // await createUserDocumentFromAuth(user, { displayName });
        dispatch(signUpStart(email, password, displayName));
        resetFormFields();

      } catch(error){
        if(error.code === 'auth/email-already-in-use'){
          alert('Cannot create user email already exists');
        }else{
          console.log('occur error',error);
        }
      }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        // console.log(name,value)
        setFormFields({...formFields, [name]:value });
    };



    return (
        <div className='sign-up-container'>
            <h2>Don't Have an account?</h2> 
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput
                  label="Display Name"
                  type="text" 
                  required 
                  onChange={handleChange} 
                  name="displayName" 
                  value={displayName} 
                />
                
                <FormInput
                  label="Email"
                  type="email" 
                  required 
                  onChange={handleChange}
                  name="email"
                  value={email} 
                />


                <FormInput
                  label="Password" 
                  type="password" 
                  required 
                  onChange={handleChange} 
                  name="password" 
                  value={password}
                />

                <FormInput
                  label="Confirm Password"
                  type="password" 
                  required 
                  onChange={handleChange} 
                  name="confirmPassword" 
                  value={confirmPassword}
                />
                {/* <label>Display Name</label>
                <input 
                  type="text" 
                  required 
                  onChange={handleChange} 
                  name="displayName" 
                  value={displayName} 
                />
                
                <label>Email</label>
                <input 
                  type="email" 
                  required 
                  onChange={handleChange}
                  name="email"
                  value={email} 
                />


                <label>Password</label>
                <input 
                  type="password" 
                  required 
                  onChange={handleChange} 
                  name="password" 
                  value={password}
                />

                <label>Confirm Password</label>
                <input 
                  type="password" 
                  required 
                  onChange={handleChange} 
                  name="confirmPassword" 
                  value={confirmPassword}
                /> */}
                {/* <Button buttonType='google' type="submit">Sign Up</Button>   describe your button type in elemnts*/} 
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
};


export default SignUpForm ;