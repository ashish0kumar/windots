# 🍙 windots
This repo contains my config files to create a visually appealing and highly customized setup on Windows 11 🪟

## ✨ Features

- [GlazeWM](https://github.com/glzr-io/glazewm) config
- [Windows Terminal](https://github.com/microsoft/terminal) settings.json
- [VSCode](https://code.visualstudio.com/) settings.json
- [Windhawk](https://windhawk.net/) configs
- [My Wallpapers](https://github.com/ashish0kumar/windots/tree/main/walls)

## 📸 Screenshots

| Catppuccin mocha 🐈🍵 |
| :---: |
| ![](/rice-previews/1.png) |
| ![](/rice-previews/2.png) |
| ![](/rice-previews/3.png) |

## 🚀 Setup

### 1. GlazeWM Configuration

> [!IMPORTANT]
> This is using previous build of [GlazeWM](https://github.com/glzr-io/glazewm) and not the latest release.
> So, this will not work with new [Zebar](https://github.com/glzr-io/zebar).

To use my GlazeWM setup:

- Install [GlazeWM v2](https://github.com/glzr-io/glazewm/releases/tag/v2.1.1).
- Copy the `dotfiles/.glaze-wm/config.yaml` to your GlazeWM configuration directory `C:\Users\<YourUsername>\.glaze-wm`
- Restart GlazeWM for the changes to take effect.

### 2. Windows Terminal Setup

To apply my custom settings:

- Open Windows Terminal.
- Copy `windots/terminal/settings.json` to the terminal configuration directory `C:\Users\<YourUsername>\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\settings.json`
- Restart Windows Terminal to see the updated configurations.

### 3. VSCode Configuration

To use my VSCode settings:

- Install APC Customize UI and catppuccin theme from vscode extensions.
- Copy `windots/vscode/settings.json` to your VSCode user configuration directory:
    - On Windows: `C:\Users\<YourUsername>\AppData\Roaming\Code\User\settings.json`
    - On WSL2: `~/.vscode-server/data/Machine/settings.json`
- Restart VSCode to load the updated settings.

### 4. Windhawk Configurations

To set up my Windhawk tweaks:
- Install [Windhawk](https://windhawk.net/).
- Copy the Windhawk configuration files from `windots/windhawk/`
- Apply the tweaks from the Windhawk UI.

### ✨ For CLI Lovers
- [nnn](https://github.com/jarun/nnn) - (n3) is a full-featured terminal file manager.
- [fzf](https://github.com/junegunn/fzf) - a command-line fuzzy finder.
- [nitch](https://github.com/ssleert/nitch) - incredibly fast system fetch written in nim.
- [btop](https://github.com/aristocratos/btop) - a resource monitor for the terminal.
- [cmatrix](https://github.com/abishekvashok/cmatrix) - terminal based "The Matrix" like implementation.
- [cbonsai](https://gitlab.com/jallbrit/cbonsai) - a bonsai tree generator, written in C using ncurses.

## ⌨️ Useful keybindings 

You can always change these in your Glaze config.

| Keys                                                                   | Action                                                          |
|------------------------------------------------------------------------|-----------------------------------------------------------------|
| <kbd>alt</kbd> + <kbd>enter</kbd>                                      | Open terminal                                                   |
| <kbd>alt</kbd> + <kbd>h \| j \| k \| l</kbd>                           | Focus window left \| top \| bottom \| right                     |
| <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>h \| j \| k \| l</kbd>        | Move focusing window left \| top \| bottom \| right             |
| <kbd>alt</kbd> + <kbd>q</kbd>                                          | Close focusing window                                           |
| <kbd>alt</kbd> + <kbd>1 - 9</kbd>                                      | Focus workspace {n}                                             | 
| <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>1 - 9</kbd>                   | Move focusing window to workspace {n}                           |
| <kbd>alt</kbd> + <kbd>m</kbd>                                          | Minimize current window                                         |
| <kbd>alt</kbd> + <kbd>x</kbd>                                          | Maximize current window                                         |
| <kbd>alt</kbd> + <kbd>v</kbd>                                          | Change direction where the next window open should be placed    |
| <kbd>alt</kbd> + <kbd>f</kbd>                                          | Make focusing window float/tiled                                |
| <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>e</kbd>                       | Exit glazewm                                                    |

## 📜 License
Feel free to use and modify these dotfiles to suit your needs.
