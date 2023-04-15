# AllTabs
A Chromium extension to view and manage opened tabs.<br><br>
![Screenshot](https://raw.githubusercontent.com/jtheller/AllTabs/development/screenshot.png)

# Install
1. Download or clone the repo.
2. Copy `build` folder to desired location.
3. Enable "Developer Mode" ([Edge](https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/extension-sideloading) / [Chrome](https://developer.chrome.com/docs/extensions/mv2/getstarted/#manifest)) in your browser extensions setting.
4. Choose "Load unpacked" and choose the `build` folder that you just copied out, feel free to rename the `build` folder.
5. Extension should be up and running.

## Todo
##### Last updated: 2023-04-14
- Continuous delivery through network load.
- Disable default chunking.
- Improve performance with a large amount of tabs in single window.
    - Implement virtual scroll.
- Add material design search bar.
    - Move Fab to horizontal toolbar.
- ~~Add re-ordering.~~
- ~~Add backup.~~
- Add persistent storage (MS Account / Google Account).
- Multi-select and grouping (color).
- Move tab to other windows.
