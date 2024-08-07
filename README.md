# Color Theme Manager

[![npm version](https://badge.fury.io/js/color-theme-manager.svg)](https://badge.fury.io/js/color-theme-manager)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction

Color Theme Manager is a simple and flexible tool for managing color themes in your web applications. This package allows you to easily switch between different color themes, enhancing the visual experience of your users.

**Note:** This package is currently in beta. We welcome feedback and contributions to improve its functionality and stability.

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



