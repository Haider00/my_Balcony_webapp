import "@styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "src/context/auth.context";

function MyApp({ Component, pageProps, session }) {
  return (
    <AuthProvider >
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
    </AuthProvider>
  );
}

export default MyApp;
