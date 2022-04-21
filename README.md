# <sub><img src="other/promotion/icon/flatline-128.png" width=64px height=64px></sub> Flatline

#### Open apps directly in GNOME Software by clicking Install from Flathub and apps.gnome.

### Instalation

1. [Enable Epiphany extension](https://github.com/GNOME-Web-Extensions/Get-Started/wiki#how-to-enable-extensions). _Optional if not done._
2. Download the latest release from the [.xpi file](https://github.com/GNOME-Web-Extensions/Flatline/releases).
3. Follow this [tutorial](https://github.com/GNOME-Web-Extensions/Get-Started/wiki#how-to-install-extensions).

## Roadmap
To facilitate the installation process of Flatpak applications through the websites flathub.org and app.gnome.org, I created this simple extension that, through appstream, opens GNOME Software directly in the app's details panel.

### Support
- [x] Flathub
- [x] Apps GNOME
- [ ] AppCenter

## Requirements

- It is necessary to have [Flatpak](https://github.com/flatpak/flatpak) installed
- [Flathub repositories are required](https://www.flatpak.org/setup/)
- You must have [GNOME Software](https://apps.gnome.org/app/org.gnome.Software/) installed

## Known Limitations

Flatline basically uses appstream to tell GNOME Software which app to show, but I still haven't found a way or know if it's possible to tell GS which repository to focus on.
If you use distributions that focus heavily on using Flatpaks like Fedora Silverblue, you won't notice this.
Choose Flathub repository on the upper right side

## Special thanks
I want to thank [Lains](https://github.com/lainsce) for taking the trouble to create such a cool icon, thanks also to Nahuel for bringing the idea to the table.
