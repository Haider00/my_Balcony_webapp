import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";

export default function login() {
  const { data: session } = useSession();
  // console.log("resp>>", session.user.email);
  async function handleGoogleSignin() {
    signIn("google");
  }

  if (session) {
    return (
      <div>
        <Head>
          <title>Login</title>
        </Head>
        <p>Welcome, {session.user.email}</p>

        {/* <img width="100px" height="100px" src={session.user.image}/> */}
        <button onClick={() => signOut()}>Signout</button>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>Login</title>
        </Head>
        <p>You are not signed-in</p>
        <button onClick={handleGoogleSignin}>SignIn</button>
      </div>
    );
  }
}
