// ==UserScript==
// @name         rPlace.tk - Armée de Kameto
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  On va récuperer ce qui nous est du de droit.
// @author       Adcoss95, JulieM-Dev & LuKill
// @match        https://rplace.tk/
// @icon         https://styles.redditmedia.com/t5_4eiiz1/styles/communityIcon_ojy24r8j90o81.jpg
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementById("canvparent2").appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = "https://github.com/JulieM-dev/reddit-place-kcorp/raw/main/overlay.png";
                i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;pointer-events: none;";
                console.log(i);
                document.addEventListener("keydown", function(event) {
                    if(event.key == "F4"){
                        if (i.style.display === "none") {
                            i.style.display = "block";
                        } else {
                            i.style.display = "none";
                        }
                    }
                });
                return i;
            })())

    }, false);

}