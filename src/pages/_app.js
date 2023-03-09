import "@styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "src/context/auth.context";
import { WorkspaceProvider } from "src/context/workspace.context";

function MyApp({ Component, pageProps, session }) {
  return (
    <AuthProvider>
      <WorkspaceProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </WorkspaceProvider>
    </AuthProvider>
  );
}

export default MyApp;
