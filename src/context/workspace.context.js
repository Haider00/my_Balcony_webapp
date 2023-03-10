import React, { useContext, useMemo, useReducer } from "react";
const WorkspaceStateContext = React.createContext(undefined);
const WorkspaceDispatchContext = React.createContext(undefined);
function useWorkspaceState() {
  const workspace = useContext(WorkspaceStateContext);

  if (workspace === undefined) {
    throw new Error(
      "useWorkspaceState can only be used inside WorkspaceProvider"
    );
  }

  return workspace;
}

function useWorkspaceDispatch() {
  const workspace = useContext(WorkspaceDispatchContext);

  if (workspace === undefined) {
    throw new Error(
      "useWorkspaceDispatch can only be used inside WorkspaceProvider"
    );
  }

  return workspace;
}

function workspaceReducer(state, action) {
  switch (action.type) {
    case "SET_WORKSPACE_FIRST_IMAGE": {
      return { ...state, firstImage: action.payload };
    }
    case "SET_WORKSPACE_SECOND_IMAGE": {
      return { ...state, secondImage: action.payload };
    }
    case "SET_WORKSPACE_THIRD_IMAGE": {
      return { ...state, thirdImage: action.payload };
    }
    case "WORKSPACE_MAP_COARDINATES": {
      return { ...state, workSpaceMapCoardinates: action.payload };
    }

    default:
      throw new Error(`Invalid action ${action.type}`);
  }
}

function WorkspaceProvider({ children }) {
  const [workspace, dispatch] = useReducer(workspaceReducer, {
    firstImage: {},
    secondImage: {},
    thirdImage: {},
    workSpaceMapCoardinates: [],
  });
  const memoedWorkspace = useMemo(() => workspace, [workspace]);
  const memoedDispatch = useMemo(() => dispatch, [dispatch]);

  return (
    <WorkspaceStateContext.Provider value={memoedWorkspace}>
      <WorkspaceDispatchContext.Provider value={memoedDispatch}>
        {children}
      </WorkspaceDispatchContext.Provider>
    </WorkspaceStateContext.Provider>
  );
}

export { WorkspaceProvider, useWorkspaceDispatch, useWorkspaceState };
