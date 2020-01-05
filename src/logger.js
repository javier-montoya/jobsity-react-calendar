import { createLogger } from "redux-logger";
let showAll = true; // true to show all actions

export default createLogger({
  level: "info",
  collapsed: true,
  predicate: () => showAll
});
