const serverUrl = "https://mzrhanzmogsu.moralishost.com:2053/server";
const appId = "gFnTLmvgt8ZDUYMXF80FIonsCRqosKxXcfzmO2bM";

Moralis.start({ serverUrl, appId });
initUser();
async function login() {
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate();
    }
    console.log("logged in user:", user);

    try {
        await Moralis.authenticate();
        initUser();
    } catch (error) {
        alert(error)
    }
}


initUser = async() => {
    if (await moralis.User.current()) {
        hideElement(userConnectButton);
        showElement(userProfileButton);
    } else {
        showElement(userConnectButton);
        hideElement(userProfileButton);

    }
}

hideElement = (element) => element.style.display = "none";
showElement = (element) => element.style.display = "block";

const userConnectButton = document.getElementById("btnConnect");
userConnectButton.onclick = login;
const userProfileButton = document.getElementById("btnUserInfo");