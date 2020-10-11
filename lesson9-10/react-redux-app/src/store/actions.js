import { LOADING } from "./types";

export function loading(newLoad) {
  return {
    type: LOADING,
    payload: newLoad,
  };
}
