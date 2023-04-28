import "@styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "src/context/auth.context";
import { WorkspaceProvider } from "src/context/workspace.context";
import { WorkspaceDetailProvider } from "src/context/workspaceDetail.context";
import { PlannerProvider } from "src/context/planner.context";
function MyApp({ Component, pageProps, session }) {
  return (
    <AuthProvider>
      <WorkspaceProvider>
        <WorkspaceDetailProvider>
          <PlannerProvider>
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </PlannerProvider>
        </WorkspaceDetailProvider>
      </WorkspaceProvider>
    </AuthProvider>
  );
}

export default MyApp;
