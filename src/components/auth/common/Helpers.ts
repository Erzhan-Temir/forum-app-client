/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {Dispatch} from "react";

export const allowSubmit = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: Dispatch<any>,
  msg: string,
  setDisabled: boolean
) => {
  dispatch({type: "isSubmitDisabled", payload: setDisabled});
  dispatch({payload: msg, type: "resultMsg"});
};
