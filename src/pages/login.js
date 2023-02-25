import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'


export default function login() {
    
    const { data: session } = useSession();
    
    async function handleGoogleSignin(){
        signIn('google')
    }
    
    if (session) {
        return (
            <div>
                <p>Welcome, {session.user.email}</p>
                {/* <img width="100px" height="100px" src={session.user.image}/> */}
                <button onClick={() => signOut()}>Signout</button>
            </div>
        )
    }  
    else {
        return (
            <div>
                <p>You are not signed-in</p>
                <button onClick={handleGoogleSignin}>SignIn</button>
            </div>
        )
    }
}
