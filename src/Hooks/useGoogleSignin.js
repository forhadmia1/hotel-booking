import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useGoogleSignin = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const signInGoogle = () => {
        signInWithGoogle()
    }

    return [signInGoogle];
};

export default useGoogleSignin;