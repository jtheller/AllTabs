export const getIonStyleVal = (varName: string) =>
  window.getComputedStyle(document.documentElement).getPropertyValue(varName);