# 🪟 windots

### 💖 For the Ricing and Unixporn Enthusiasts
Welcome, ricing enthusiasts! If you love customizing your desktop environment and making it your own, this collection of dotfiles is designed just for you. Tailored for a Windows setup, these configs will help you elevate your system's aesthetics and functionality to the next level.

> [!IMPORTANT]
> For those using WSL2, my dedicated [dotfiles](https://github.com/ashish0kumar/dotfiles) repository includes configurations fine-tuned for Linux workflows within Windows.

## 🛠️ Core

- Tiling Window Manager: [GlazeWM](https://github.com/glzr-io/glazewm)
- Terminal: [Windows Terminal](https://github.com/microsoft/terminal)
- Editor: [VSCode](https://code.visualstudio.com/)
- Windows Customisation:  [Windhawk](https://windhawk.net/)

## 🎨 Screenshots

| Catppuccin mocha 🐈🍵 |
| :---: |
| ![](/rice-previews/1.png) |
| ![](/rice-previews/2.png) |
| ![](/rice-previews/3.png) |

## 🚀 Setup

Throughout the setup, I use the **JetBrains Mono Nerd Font** for a clean and developer-friendly aesthetic, paired with the **Catppuccin Mocha** theme for a cohesive, soothing color palette.

- [JetBrainsMono Nerd Font](https://www.programmingfonts.org/#jetbrainsmono)
- [Catppuccin Theme](https://catppuccin.com)

### 🪟 GlazeWM

> [!IMPORTANT]
> This setup uses an earlier version of GlazeWM and is not compatible with the latest release. <br/> As a result, it will not work with the new Zebar integration.

To use my GlazeWM setup:

- Install [GlazeWM v2](https://github.com/glzr-io/glazewm/releases/tag/v2.1.1).
- Copy the `dotfiles/.glaze-wm/config.yaml` to your GlazeWM configuration directory `C:\Users\<YourUsername>\.glaze-wm`
- Restart GlazeWM for the changes to take effect.

### </> Windows Terminal

To apply my custom settings:

- Open Windows Terminal.
- Copy `windots/terminal/settings.json` to the terminal configuration directory <br/> `C:\Users\<YourUsername>\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\settings.json`
- Restart Windows Terminal to see the updated configurations.

### 📝 VSCode

To use my VSCode settings:

- Install APC Customize UI and catppuccin theme from vscode extensions.
- Copy `windots/vscode/settings.json` to your VSCode user configuration directory:
    - On Windows: `C:\Users\<YourUsername>\AppData\Roaming\Code\User\settings.json`
    - On WSL2: `~/.vscode-server/data/Machine/settings.json`
- Restart VSCode to load the updated settings.

### 🦅 Windhawk

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
