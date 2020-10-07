export interface TabGroup {
  id: chrome.windows.Window["id"];
  title: string;
  tabs: chrome.tabs.Tab[];
}