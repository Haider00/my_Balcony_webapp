import "@styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "src/context/auth.context";
import { WorkspaceProvider } from "src/context/workspace.context";
import { WorkspaceDetailProvider } from "src/context/workspaceDetail.context";
function MyApp({ Component, pageProps, session }) {
  return (
    <AuthProvider>
      <WorkspaceProvider>
        <WorkspaceDetailProvider>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </WorkspaceDetailProvider>
      </WorkspaceProvider>
    </AuthProvider>
  );
}

export default MyApp;
