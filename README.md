# 🍙 dotfiles
Welcome to my dotfiles repo! This repo contains my config files to create a visually appealing and highly customized setup on Windows 11 with WSL2.

## ✨ Features

- [GlazeWM](https://github.com/glzr-io/glazewm) config
- [Windows Terminal](https://github.com/microsoft/terminal) settings.json
- [VSCode](https://code.visualstudio.com/) settings.json
- [Windhawk](https://windhawk.net/) configs
- [Zsh](https://zsh.sourceforge.io/) config
- [My Wallpapers](https://github.com/ashish0kumar/dotfiles/tree/main/walls)

## 📸 Screenshots

| Catppuccin mocha 🐈🍵 |
| :---: |
| ![](/rice-previews/1.png) |
| ![](/rice-previews/2.png) |
| ![](/rice-previews/3.png) |

## 🚀 Setup

### 1. GlazeWM Configuration

To use my GlazeWM setup:

- Install [GlazeWM v2](https://github.com/glzr-io/glazewm/releases/tag/v2.1.1).
- Copy the `config.yaml` file from `dotfiles/.glaze-wm/` to your GlazeWM configuration directory `C:\Users\<YourUsername>\.glaze-wm`
- Restart GlazeWM for the changes to take effect.

### 2. Windows Terminal Setup

To apply my custom settings:

- Open Windows Terminal.
- Copy `dotfiles/terminal/settings.json` to the terminal configuration directory `C:\Users\<YourUsername>\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\settings.json`
- Restart Windows Terminal to see the updated configurations.

### 3. VSCode Configuration

To use my VSCode settings:

- Install APC Customize UI and catppuccin theme from vscode extensions.
- Copy dotfiles/vscode/settings.json to your VSCode user configuration directory:
    - On Windows: `C:\Users\<YourUsername>\AppData\Roaming\Code\User\settings.json`
    - On WSL2: `~/.vscode-server/data/Machine/settings.json`
- Restart VSCode to load the updated settings.

### 4. Windhawk Configurations

To set up my Windhawk tweaks:
- Install [Windhawk](https://windhawk.net/).
- Copy the Windhawk configuration files from `dotfiles/windhawk/`
- Apply the tweaks from the Windhawk UI.

### 5. Zsh Configuration for WSL2

To set up Zsh with my configurations:

Install Zsh in WSL2 by running:

```bash
sudo apt install zsh
chsh -s $(which zsh)
```

Install Oh My Zsh if you want more customization:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Copy the .zshrc file from dotfiles/.zshrc to your home directory in WSL2:

```bash
cp dotfiles/.zshrc ~/.zshrc
```

## ⌨️ Useful keybindings 

You can always change them in your glaze config file.

| Keys                                                                   | Action                                              |
|------------------------------------------------------------------------|-----------------------------------------------------|
| <kbd>alt</kbd> + <kbd>enter</kbd>                                      | Open terminal                                       |
| <kbd>alt</kbd> + <kbd>h \| j \| k \| l</kbd>                           | Focus window left \| top \| bottom \| right         |
| <kbd>alt</kbd> + <kbd>shift + h \| j \| k \| l</kbd>                   | Move focusing window left \| top \| bottom \| right |
| <kbd>alt</kbd> + <kbd>q</kbd>                                          | Close focusing window                               |
| <kbd>alt</kbd> + <kbd>1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9</kbd>  | Focus workspace {n}                                 |
| <kbd>alt</kbd> + <kbd>1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9</kbd>  | Move focusing window to workspace {n}               |
| <kbd>alt</kbd> + <kbd>m</kbd>                                          | Minimize current window                             |
| <kbd>alt</kbd> + <kbd>x</kbd>                                          | Maximize current window                             |
| <kbd>alt</kbd> + <kbd>v</kbd>                                          | Change direction where the next window open should be placed |
| <kbd>alt</kbd> + <kbd>f</kbd>                                          | Make focusing window float/tiled                    |
| <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>e</kbd>                       | Exit glazewm                                        |
