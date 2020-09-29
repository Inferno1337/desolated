var presence = new Presence({
    clientId: "759896910991065088"
}), strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
const browsingStamp = Math.floor(Date.now() / 1000);
var nauber = "1";
presence.on("UpdateData", async () => {
    var presenceData = {
        largeImageKey: "lg_desolated",
        smallImageKey: "small_desolated",
        smallImageText: "desolated.tk",
        details: "Listening to",
        state: "𝕕𝕖𝕤𝕠𝕝𝕒𝕥𝕖𝕕.𝕥𝕜"
    };
    if (nauber = "1") {
        presenceData.startTimestamp = browsingStamp;
    }
    if (presenceData.details == null) {
        presence.setTrayTitle();
        presence.setActivity();
    }
    else {
        presence.setActivity(presenceData);
    }
});
