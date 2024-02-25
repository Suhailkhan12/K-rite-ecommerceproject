// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import './authentication.styles.scss';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';





const Authentication = () => { 

    // const dosome = async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    //     if(response){
    //         const userDocRef = await (response.user);
    //     }
    // }


    // useEffect( () => { 
    //     dosome();
    // },[]);

    // const logGoogleUser = async () => {
    //     const {user} = await signInWithGooglePopup();
    //     console.log(user);  // data come from google like auth key ,uid etc
    //     const userDocRef = await createUserDocumentFromAuth(user);
    // }
    
    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log(user);  // data come from google like auth key ,uid etc
    // }

    return(
        <div className='authentication-container'>
            <SignInForm />
            {/* <button onClick={logGoogleUser} > Sign In </button> */}
            <SignUpForm />
        </div>
    )
}


export default Authentication;