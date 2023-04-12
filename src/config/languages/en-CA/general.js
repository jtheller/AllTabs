const general = {
  generalConfirm: "Ok",
  generalCancel: "Cancel",
  generalYes: "Yes",
  generalNo: "No",
  generalAccept: "Accept",
  generalDecline: "Decline",
  generalRefuse: "Refuse",
  generalReject: "Reject",
  generalIgnore: "Ignore",
  generalChange: "Change",
  generalReset: "Reset",
  generalApply: "Apply",
  generalSend: "Send",
  generalSubmit: "Submit",
  generalNext: "Next",
  generalBack: "Back",
  generalEdit: "Edit",
  generalSave: "Save",
  generalCreate: "Create",
  generalView: "View",
  generalDiscard: "Discard",
  generalUndo: "Undo",
  generalMinimize: "Minimize",
  generalClose: "Close",
  generalAdd: "Add",
  generalRemove: "Remove",
  generalDelete: "Delete",
  generalNew: "New",
  generalSelectAll: "Select all",
  generalDeselectAll: "Deselect all",
  generalExpandAll: "Expand all",
  generalCollapseAll: "Collapse all",
  generalWarning: "Warning",
  generalError: "Error",
  generalSuccess: "Success",
  generalFailure: "Failure",
  generalRefresh: "Refresh",
  generalUnknown: "Unknown",
  generalDone: "Done",
  generalFinish: "Finish",
  generalHelp: "Help",
  generalMute: "Mute",
  generalUnmute: "Unmute",
  generalMore: "More",
  generalAnd: "And",
  generalOr: "Or",
  generalChoose: name => `Choose ${name}`,
  generalReconfirm: (verb, item) => `Are you sure you want to ${verb} ${item}?`,
  generalMe: "Me",

  title: "AllTabs",
  helloUser: displayName => `Hello ${displayName}!`,

  id: "ID",
  menu: "Menu",
  selectLanguage: "Select Language",

  welcome: "Welcome",

  characters: "Characters",

  settings: "Settings",

  copiedToClipboard: name => `${name || "data"} copied to clipboard!`,
  clearSidebarRecentEntries: "Clear recent entries",
  comingSoon: "Coming soon!",
  pleaseWait: "Please wait",
  get pleaseWaitLong() { return `${general.pleaseWait}, this may take a while` },

  createdAt: "Created",
  updatedAt: "Updated",
  submittedAt: "Submitted",

  applyToAll: "Apply to all",

  search: "Search",
  searchStuff: name => `${general.search} ${name}`,

  swipeRevealHintLeft: "Swipe left to see more options",
  swipeRevealHintRight: "Swipe right to see more options",

  searchForTabs: "Lookup Tabs",
  quickSearch: "Quick search",
  currentWindow: "Current window",
  otherWindow: "From other windows",

  showAllWindows: "Show all windows",
  showCurrentWindows: "Show only this window",
  showActive: "Show current tabs",
  showStored: "Show stored tabs",
  goToWindow: "Switch to this window",

  copyTitle: "Copy page title",
  copyUrl: "Copy URL",
  duplicateTab: "Duplicate tab",
  duplicateInBg: "Duplicate in background",
  openStandalone: "Duplicate in new window",
  moveToNewWindow: "Move to new window",
  reopenTab: "Re-open tab",
  reopenWindow: "Restore window",
  openInNewWindow: "Open in new window",
  openInPrivate: "Open in InPrivate",

  tabsJSON: "Tabs JSON",
  dumpTabs: "Dump tabs",
  restoreTabs: "Restore tabs",
  restoreToStore: "Restore to storage only",

  sortDirection: "Sort direction",

  windowTitle: (title, length) => `${title}${length > 1 ? ` and ${length - 1} more` : ""}`
};

export default general;
