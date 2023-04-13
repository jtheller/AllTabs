import { UIPopoverMenuItem } from "./types/miscTypes";
import { UIText } from "../client/lang";
import { ui } from "../client/ui";

export const matchTabs = (tab: chrome.tabs.Tab, match: string) => {
  match = match && match.toString().trim();
  const regExp = new RegExp(match, "i");
  return (tab.url && tab.url.match(regExp)) ||
    (tab.title && tab.title.match(regExp)) ||
    (tab.audible && "audible".match(regExp)) ||
    (tab.mutedInfo.muted && "mute".match(regExp)) ||
    (tab.active && "active".match(regExp));
};

export const getTabMenuItems = (tab: chrome.tabs.Tab, isStored?: boolean): UIPopoverMenuItem[] => [
  {
    text: UIText.copyTitle,
    handler: () => ui.copyStringToClipboard(tab.title, true)
  },
  {
    text: UIText.copyUrl,
    handler: () => ui.copyStringToClipboard(tab.url, true)
  },
  !isStored && {
    text: UIText.duplicateTab,
    handler: () => chrome.tabs.create({ url: tab.url, active: true })
  },
  !isStored && {
    text: UIText.duplicateInBg,
    handler: () => chrome.tabs.create({ url: tab.url, active: false })
  },
  !isStored && {
    text: UIText.openStandalone,
    handler: () => chrome.windows.create({ url: tab.url, focused: true })
  },
  !isStored && {
    text: UIText.moveToNewWindow,
    handler: () => chrome.windows.create({ tabId: tab.id, focused: true })
  },
  isStored && {
    text: UIText.reopenTab,
    handler: () => chrome.tabs.create({ url: tab.url, active: true })
  },
  isStored && {
    text: UIText.openInNewWindow,
    handler: () => chrome.windows.create({ url: tab.url, focused: true })
  },
  {
    text: UIText.openInPrivate,
    handler: () => chrome.windows.create({ url: tab.url, focused: true, incognito: true })
  }
].filter(Boolean);

export const getQuickSearchItems = () => ([
  "Audible", "Muted", "Active"
]);

export const dirSort = (asc: boolean, prop: string) => (a, b) => (
  a[prop] > b[prop]
    ? asc
    ? 1
    : -1
    : asc
    ? -1
    : 1
);
