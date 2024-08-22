import { onMounted } from "vue";
import { defineStore } from "pinia";
import {signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword ,getAuth} from 'firebase/auth';
import { auth, provider} from "@/server/firebaseConfig";

export const useAuthStore = defineStore("auth", () => {
    // state
    const isAuthUser = ref(false);

    const login_data = ref({
        email : '',
        password : ''
    })

    const createuser_data = ref({
        email : '',
        password : ''
    })

  // Sign in google function
  const SignInWithGoogle = async () => {
    console.log("Sign in with Google");
    try {
        await signInWithPopup(auth, provider);
        navigateTo("/promptpage")
    } catch {
      console.log("Error signing in with Google:");
    }
  };

  // Sign Out Function
  const SignOut = async () => {
    try{
        await signOut(auth)
        console.log("Sign out");
        navigateTo('/auth/signin')
        console.log(isAuthUser.value)
    }catch(e){
        console.log("Error signing out:",e);
    }

  };

  //Login account Function
  const UserLoginFUN = async () => {
    const auth = getAuth();
    try{
        await signInWithEmailAndPassword(auth, login_data.value.email, login_data.value.password)
        console.log("User Login successfully");
        navigateTo("/promptpage")
    }catch(e){
        console.log("Error creating account:",e);
    }
  }

  //Create user account
  const CreateUser = async () => {
    const auth = getAuth();
    try{
        await createUserWithEmailAndPassword(auth, createuser_data.value.email, createuser_data.value.password)
        console.log("User account successfully");
    }
    catch(e){
        console.log("Error Creating account:",e);
    }
  };

  //user login checker
  onMounted(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        isAuthUser.value = true;
      } else {
        isAuthUser.value = false;
      }
    });
  });

  return {
    SignInWithGoogle,
    SignOut,
    UserLoginFUN,
    CreateUser,
    isAuthUser,
    login_data,
    createuser_data,
  };

});
