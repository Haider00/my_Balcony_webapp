import "@styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "src/context/auth.context";
import { WorkspaceProvider } from "src/context/workspace.context";
import { WorkspaceDetailProvider } from "src/context/workspaceDetail.context";
import { PlannerProvider } from "src/context/planner.context";
import Head from "next/head";
function MyApp({ Component, pageProps, session }) {
  return (
    <>
      <Head>
        <title>Balcony Workspaces</title>
      </Head>
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
    </>
  );
}

export default MyApp;
