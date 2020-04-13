export default (payload = null) =>
  new CustomEvent("forceUpdate", { detail: payload });
