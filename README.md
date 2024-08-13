# Color Theme Manager

[![npm version](https://badge.fury.io/js/color-theme-manager.svg)](https://badge.fury.io/js/color-theme-manager)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction

Color Theme Manager is a simple and flexible tool for managing color themes in your web applications. This package allows you to easily switch between different color themes, enhancing the visual experience of your users.

**Note:** This package is currently in beta. We welcome feedback and contributions to improve its functionality and stability.

## Live demo
Code sand box - [Demo](https://codesandbox.io/p/sandbox/wonderful-roman-6vpt9w?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clvuc3c550006356mx66dj212%2522%252C%2522sizes%2522%253A%255B100%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clvuc3c550002356mk74yvfm3%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clvuc3c550003356m7km4vclj%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clvuc3c550005356mt9dvrie3%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clvuc3c550002356mk74yvfm3%2522%253A%257B%2522id%2522%253A%2522clvuc3c550002356mk74yvfm3%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clzs0hr7g0002356laohfjvzl%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.js%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clzs0hr7g0002356laohfjvzl%2522%257D%252C%2522clvuc3c550005356mt9dvrie3%2522%253A%257B%2522id%2522%253A%2522clvuc3c550005356mt9dvrie3%2522%252C%2522activeTabId%2522%253A%2522clzs1btpt00du356lblkm0l18%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvuc3c550004356mo5xoz2qc%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%252C%257B%2522type%2522%253A%2522SANDBOX_INFO%2522%252C%2522isCloud%2522%253Afalse%252C%2522id%2522%253A%2522clzs1btpt00du356lblkm0l18%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clvuc3c550003356m7km4vclj%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clvuc3c550003356m7km4vclj%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A42.40885416666667%257D)

## Installation

You can install Color Theme Manager via npm:

```bash
npm install color-theme-manager

```

## Basic Usage
Here's a basic example of how to use Color Theme Manager in your project:

Add the theme provider in APP level;

```javascript
import { ThemeProvider } from "color-theme-manager";

<ThemeProvider>
  <App />
</ThemeProvider>

```
Use the theme in application component

```javascript
import { useTheme } from "color-theme-manager";

function Component(){
  const {theme, themeClass, toggleTheme} = useTheme()
 return (
    <>
      <div className={`${themeClass} title `}>
        <h1>Hello World</h1>
        <button onClick={toggleTheme}>Change theme</button>
      </div>
    </>
}

```
## Contributing
We welcome contributions to improve Color Theme Manager! Please fork the repository and submit pull requests.

1. Fork the repository
2. Create your feature branch (git checkout -b feature/your-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin feature/your-feature)
5. Create a new Pull Request 

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Feedback
We'd love to hear your thoughts on Color Theme Manager! Please open an issue or contact us at [ramachandran052015@gmail.com].



