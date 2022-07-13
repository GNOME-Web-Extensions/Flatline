const checkLoadPage = setInterval(() => {
    const url = new URL(window.location);
    const pathname = url.pathname;

    if (url.hostname === "beta.flathub.org")
        replaceButton(pathname);
    else if (url.hostname === "flathub.org")
        replaceFlathubLink(pathname);
    else if (url.hostname === "apps.gnome.org")
        replaceGnomeLink(pathname);
        
}, 300);

function replaceFlathubLink(pathname) {
    const flathubInstallButton = document.querySelector("[download]")
    flathubInstallButton.href = "appstream://" + pathname.split("/")[3];
}

function replaceGnomeLink(pathname) {
    const appsGnomeInstallButton =  document.querySelector("a.text-button")
    const occurrences = (pathname.match(/\//g) || []).length
    const app = occurrences == 4 ? pathname.split("/")[3] : pathname.split("/")[2];
    appsGnomeInstallButton.href = "appstream://" + app
};

function replaceButton(pathname) {
    let oldButton = document.querySelector(".Button_primaryButton__jhRGg")
    let newButton = oldButton.cloneNode(true);

    if (newButton.id != "installButton") {
        newButton.id = "installButton";
        newButton.onclick = () => window.location = "appstream://" + pathname.split("/")[3]

        oldButton.parentNode.replaceChild(newButton, oldButton);
    }
}
