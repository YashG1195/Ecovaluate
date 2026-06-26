import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export const registerUser = async (payload) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
    return { success: true, message: "Registration successful", user: userCredential.user };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const loginUser = async (payload) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, payload.email, payload.password);
    return { 
      success: true, 
      message: "Login successful", 
      data: { accessToken: await userCredential.user.getIdToken() } 
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const signInWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    return { 
      success: true, 
      message: "Login successful", 
      data: { accessToken: await userCredential.user.getIdToken() } 
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
};