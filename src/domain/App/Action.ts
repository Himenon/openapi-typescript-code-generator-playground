import * as React from "react";

export interface UpdateInputCode {
  type: "UPDATE_INPUT_CODE";
  code: string;
}

export type ActionTypes = UpdateInputCode;

export type Dispatch = React.Dispatch<ActionTypes>;
