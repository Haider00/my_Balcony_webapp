import React, { useContext, useMemo, useReducer } from "react";
const PlannerContext = React.createContext(undefined);
const PlannerDispatchContext = React.createContext(undefined);
function usePlannerState() {
  const planner = useContext(PlannerContext);

  if (planner === undefined) {
    throw new Error(
      "usePlannerState can only be used inside PlannerProvider"
    );
  }

  return planner;
}

function usePlannerDispatch() {
  const planner = useContext(PlannerDispatchContext);

  if (planner === undefined) {
    throw new Error(
      "usePlannerDispatch can only be used inside PlannerProvider"
    );
  }
  return planner;
}

function plannerReducer(state, action) {
  switch (action.type) {
    case "SELECTED_DATE": {
      console.log('aaaa>>>>>>>>>',action.payload)
      return { ...state, selectedDate: action.payload };
    }
    case "MESSAGE": {
      console.log('aaaa>>>>>>>>>',action.payload)
      return { ...state, message: action.payload };
    }
    default:
      throw new Error(`Invalid action ${action.type}`);
    }
  }
  
function PlannerProvider({ children }) {
  const [planner, dispatch] = useReducer(plannerReducer, {
    selectedDate:"",
    message:{}
  });
  const memoedplanner = useMemo(() => planner, [planner]);
  const memoedDispatch = useMemo(() => dispatch, [dispatch]);

  return (
    <PlannerContext.Provider value={memoedplanner}>
      <PlannerDispatchContext.Provider value={memoedDispatch}>
        {children}
      </PlannerDispatchContext.Provider>
    </PlannerContext.Provider>
  );
}

export { PlannerProvider, usePlannerDispatch, usePlannerState };
