import React, { useContext, useMemo, useReducer } from "react";
const WorkspacedetailStateContext = React.createContext(undefined);
const WorkspacedetailDispatchContext = React.createContext(undefined);
function useWorkspaceDetailState() {
  const workspace = useContext(WorkspacedetailStateContext);

  if (workspace === undefined) {
    throw new Error(
      "useWorkspaceDetailState can only be used inside WorkspaceDetailProvider"
    );
  }

  return workspace;
}

function useWorkspaceDetailDispatch() {
  const workspace = useContext(WorkspacedetailDispatchContext);

  if (workspace === undefined) {
    throw new Error(
      "useWorkspaceDetailDispatch can only be used inside WorkspaceDetailProvider"
    );
  }

  return workspace;
}

function workspaceDetailReducer(state, action) {
  switch (action.type) {
    case "WORKSPACE_DETAIL": {
      console.log('haha', action.payload)
      return { ...state, workspaceDetail: action.payload };
    }
    case "WORKSPACE_DAY_AND_TIME":{
      console.log('haha', action.payload)
      return { ...state, workspaceDayTime: action.payload };
    }
    case "SELECTED_DATES":{
      console.log('haha', action.payload)
      return { ...state, selectedDatesarr: action.payload };
    }

    default:
      throw new Error(`Invalid action ${action.type}`);
  }
}

function WorkspaceDetailProvider({ children }) {
  const [workspace, dispatch] = useReducer(workspaceDetailReducer, {
    workspaceDetail: {},
    workspaceDayTime:[],
    selectedDatesarr:[]
  });
  const memoedWorkspace = useMemo(() => workspace, [workspace]);
  const memoedDispatch = useMemo(() => dispatch, [dispatch]);

  return (
    <WorkspacedetailStateContext.Provider value={memoedWorkspace}>
      <WorkspacedetailDispatchContext.Provider value={memoedDispatch}>
        {children}
      </WorkspacedetailDispatchContext.Provider>
    </WorkspacedetailStateContext.Provider>
  );
}

export {
  WorkspaceDetailProvider,
  useWorkspaceDetailDispatch,
  useWorkspaceDetailState,
};
