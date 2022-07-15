import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Authentication = async (email, password, setlogged) => {

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setlogged(!!user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Code: " + errorCode + "  Message: " + errorMessage);
    });
};

export default Authentication;
