/**
 * Services Module
 */
import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateEmail,
    updatePassword,
    deleteUser,
} from "firebase/auth";

// register user function
export const registerUser = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

// login user function
export const loginUser = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

// logout user function
export const logoutUser = async () => {
    return await signOut(auth);
};

// update user email function
export const updateUserEmail = async (newEmail: string) => {
    if (auth.currentUser) {
        return await updateEmail(auth.currentUser, newEmail);
    } else {
        throw new Error("No user is currently signed in.");
    }
};

// update user password function
export const updateUserPassword = async (newPassword: string) => {
    if (auth.currentUser) {
        return await updatePassword(auth.currentUser, newPassword);
    } else {
        throw new Error("No user is currently signed in.");
    }
};

// delete user function
export const deleteUserAccount = async () => {
    if (auth.currentUser) {
        return await deleteUser(auth.currentUser);
    } else {
        throw new Error("No user is currently signed in.");
    }
};