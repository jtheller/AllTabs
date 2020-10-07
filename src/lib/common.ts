import { UIPopoverMenuItem } from "./types/miscTypes";
import { UIText } from "../client/lang";
import { ui } from "../client/ui";

export const matchTabs = (tab: chrome.tabs.Tab, match: string) => {
  match = match && match.trim();
  const regExp = new RegExp(match, "i");
  return (tab.url && tab.url.match(regExp)) ||
    (tab.title && tab.title.match(regExp)) ||
    (tab.audible && "audible".match(regExp)) ||
    (tab.mutedInfo.muted && "mute".match(regExp)) ||
    (tab.active && "active".match(regExp));
};

export const getTabMenuItems = (tab: chrome.tabs.Tab): UIPopoverMenuItem[] => [
  {
    text: UIText.copyTitle,
    handler: () => ui.copyStringToClipboard(tab.title, true)
  },
  {
    text: UIText.copyUrl,
    handler: () => ui.copyStringToClipboard(tab.url, true)
  },
  {
    text: UIText.duplicateTab,
    handler: () => chrome.tabs.create({ url: tab.url, selected: true })
  },
  {
    text: UIText.duplicateInBg,
    handler: () => chrome.tabs.create({ url: tab.url, selected: false })
  },
  {
    text: UIText.openStandalone,
    handler: () => chrome.windows.create({ url: tab.url, focused: true })
  },
  {
    text: UIText.openInPrivate,
    handler: () => chrome.windows.create({ url: tab.url, focused: true, incognito: true })
  }
];

export const getQuickSearchItems = () => ([
  "Audible", "Muted", "Active"
]);