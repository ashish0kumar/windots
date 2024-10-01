<h1 align="center">🍙 windots</h1>

<h3 align="center">💖 For the Ricing and <a href="https://reddit.com/r/unixporn">r/unixporn</a> Enthusiasts</h3>

Welcome, ricing enthusiasts! If you're a Windows user feeling stuck in customization and want a setup similar to Unix environments, this collection of dotfiles is designed just for you. Tailored for a Windows setup, these configs will help you elevate your system's aesthetics and functionality to the next level, making it truly your own!

> [!NOTE]
> All terminal and shell-related configurations are maintained in this repository -> [dotfiles](https://github.com/ashish0kumar/dotfiles) <br/>
> I'm using WSL2 for my setup, so if you're interested, feel free to check that out.

<hr/>

## 🖼️ Gallery

![](/rice-previews/1.png)
![](/rice-previews/2.png)
![](/rice-previews/3.png)


<hr/>

## ✨ Features

- 🪟 Beautiful glaze config
- </> Sleek windows terminal config
- 🌸 Minimal VSCode setup
- 🦅 Custom start menu and taskbar
- 🔔 Notification center
- 🚀 Flow launcher config

<hr/>

## 🌸 Core System Info

- **OS:** [Windows 11](https://www.microsoft.com/en-in/windows/windows-11) 🪟 + [WSL2](https://learn.microsoft.com/en-us/windows/wsl/) 🐧
- **WM:** [glazewm](https://github.com/glzr-io/glazewm) ✨
- **Shell:** [zsh](https://zsh.sourceforge.io/) 🌾
- **Terminal Emulator:** [windows terminal](https://github.com/microsoft/terminal) >_
- **Panel:** [glaze bar](https://github.com/glzr-io/glazewm) ✨
- **Text Editor:** [vscode](https://code.visualstudio.com/) and [neovim](https://neovim.io/) ⌨️
- **App Launcher:** [flow launcher](https://www.flowlauncher.com/) 🚀
- **File Manager:** [file explorer](https://www.microsoft.com/en-us/windows/tips/file-explorer) / [nnn](https://github.com/jarun/nnn) 📂
- **Browser:** [Firefox](https://www.mozilla.org/en-US/firefox/) 🌐
- **Colorscheme:** [Catppuccin](https://catppuccin.com/) 🐈🍵

<hr/>

## 🔧 Setup

Throughout the setup, I use the **JetBrains Mono Nerd Font** for a clean and developer-friendly aesthetic, paired with the **Catppuccin Mocha** theme for a cohesive, soothing color palette.

- [JetBrainsMono Nerd Font](https://www.programmingfonts.org/#jetbrainsmono)
- [Catppuccin Theme](https://catppuccin.com)

### 🪟 GlazeWM

> [!IMPORTANT]
> This setup uses an earlier version of GlazeWM and is not compatible with the latest release. <br/> As a result, it will not work with the new Zebar integration.

To use my GlazeWM setup:

- Install [GlazeWM v2](https://github.com/glzr-io/glazewm/releases/tag/v2.1.1).
- Copy the `dotfiles/.glaze-wm/config.yaml` to your GlazeWM configuration directory <br/> `C:\Users\<Username>\.glaze-wm`
- Restart GlazeWM for the changes to take effect.

### </> Windows Terminal

To apply my custom settings:

- Open Windows Terminal.
- Copy `windots/terminal/settings.json` to the terminal configuration directory `C:\Users\<Username>\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\settings.json`
- Restart Windows Terminal to see the updated configurations.

### 📝 VSCode

To use my VSCode settings:

- Install APC Customize UI and catppuccin theme from vscode extensions.
- Copy `windots/vscode/settings.json` to your VSCode user configuration directory:
    - On Windows: `C:\Users\<Username>\AppData\Roaming\Code\User\settings.json`
    - On WSL2: `~/.vscode-server/data/Machine/settings.json`
- Restart VSCode to load the updated settings.

### 🦅 Windhawk

To set up my Windhawk tweaks:
- Install [Windhawk](https://windhawk.net/).
- Copy the Windhawk configuration files from `windots/windhawk/`
- Apply the tweaks from the Windhawk UI.

<hr/>

## ⌨️ GlazeWM keybindings 

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


<hr/>


## 📜 License
Feel free to use and modify these dotfiles to suit your needs.

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>
