/* • • • • • • • • • • • • • • • •
Copyright (C) 2026 Yuna2077 - All rights Reserved
You may use, distribute or modify this code under the terms of AGPLv3 license.
    License: https://choosealicense.com/licenses/agpl-3.0/
 • • • • • • • • • • • • • • • • */

var site = {};
site.themes = { // idk why themes but it makes it easier to just test themes
    Yuna2077: {
        light: {
            bg: "rgb(255, 245, 248)",
            bgl: "rgb(255, 245, 248)",
            surface: "rgb(255 255 255)",
            ink: "rgb(43, 20, 32)",
            muted: "rgba(43, 20, 32, 0.65)",
            line: "hsl(340, 45%, 90%)",
            teal: "rgb(194, 24, 91)",
            pink: "rgb(123, 75, 214)",
            px: "rgb(43, 20, 32)",
            pxon: "rgb(194, 24, 91)"
        },
        dark: {
            bg: "rgb(25, 25, 25)",
            bgl: "rgb(61, 30, 48)",
            surface: "rgb(43, 22, 33)",
            ink: "rgb(255, 234, 242)",
            muted: "rgb(201, 160, 179)",
            line: "rgb(74, 37, 56)",
            teal: "rgb(255, 126, 182)",
            pink: "rgb(183, 155, 255)",
            px: "rgb(255, 234, 242)",
            pxon: "rgb(255, 126, 182)"
        }
    },

    halloween: {
        light: {
            bg: "rgb(255, 244, 230)",
            surface: "rgb(255, 252, 246)",
            ink: "rgb(43, 20, 8)",
            muted: "rgb(110, 72, 48)",
            line: "rgb(240, 208, 170)",
            teal: "rgb(190, 78, 0)",
            pink: "rgb(106, 44, 160)",
            px: "rgb(43, 20, 8)",
            pxon: "rgb(190, 78, 0)"
        },
        dark: {
            bg: "rgb(16, 10, 24)",
            surface: "rgb(28, 18, 40)",
            ink: "rgb(255, 238, 220)",
            muted: "rgb(190, 165, 190)",
            line: "rgb(62, 40, 80)",
            teal: "rgb(255, 133, 27)",
            pink: "rgb(150, 90, 235)",
            px: "rgb(255, 238, 220)",
            pxon: "rgb(255, 133, 27)"
        }
    },

    default: {
        light: {
            bg: "rgb(243, 246, 250)",
            bgl: "rgb(243, 246, 250)",
            surface: "rgb(255, 255, 255)",
            ink: "rgb(20, 24, 43)",
            muted: "rgb(86, 96, 121)",
            line: "rgb(211, 219, 232)",
            teal: "rgb(14, 156, 146)",
            pink: "rgb(214, 51, 108)",
            px: "rgb(20, 24, 43)",
            pxon: "rgb(14, 156, 146)"
        },
        dark: {
            bg: "rgb(13, 16, 34)",
            bgl: "rgb(13, 16, 34)",
            surface: "rgb(22, 26, 51)",
            ink: "rgb(238, 241, 251)",
            muted: "rgb(154, 163, 196)",
            line: "rgb(42, 48, 88)",
            teal: "rgb(57, 213, 200)",
            pink: "rgb(255, 111, 165)",
            px: "rgb(238, 241, 251)",
            pxon: "rgb(57, 213, 200)"
        }
    }
};

function escapeRegExp(str) { return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); };
function escapeSpace(str) { return str.replace(" ", ""); }; // seems like what i needed was so easy to make
function choose(arr) { return arr[Math.floor(Math.random()*arr.length)]; };
function toCss(colors) { return Object.entries(colors).map(function (e) { return "--" + e[0] + ":" + e[1] + ";"; }).join(""); };

add_project = function(vars) {
    document.querySelector("#section-projects").innerHTML += `
    <a class="card" href="${vars.link}">
        <span class="tag">${vars.lang}</span>
        <h3>${vars.name}</h3>
        <p>${vars.desc}</p>
     </a>`
}

site.startup = function() {
    //#region Adding Projects
    add_project({
        link: "https://github.com/Yuna2077/Yuco",
        lang: "JavaScript",
        name: "Yuco",
        desc: "This is a 2.0 revamp of Yeco with a focus on removing all the ai bs that was used at first to create this simple bot. I still aim at making it lightweight to run on as little software as a raspberry pi."
    });
    add_project({
        link: "https://github.com/Yuna2077/Daily-Polls",
        lang: "JavaScript",
        name: "Daily Polls",
        desc: "N/A"
    });
    add_project({
        link: "https://github.com/Yuna2077/Utilities",
        lang: "JavaScript / Luau / GML",
        name: "Utilities",
        desc: "Random collection of my utilities"
    });
    add_project({
        link: "https://github.com/Yuna2077/Yunas-Worker",
        lang: "JavaScript",
        name: "Yunas-Worker",
        desc: "N/A"
    });
    add_project({
        link: "https://github.com/Yuna2077/Vocaloid-Clicker",
        lang: "JavaScript / CSS / HTML",
        name: "Vocaloid-Clicker",
        desc: 'This "Game" is heavily inspired by cookie clicker. Simple progression • Beta Build'
    });
    add_project({
        link: "https://github.com/Yuna2077/GLB-Generic-Leveling-Bot",
        lang: "JavaScript",
        name: "GLB-Generic-Leveling-Bot",
        desc: "This is a work in progress template for a generic leveling bot template, feel free to use it be aware of the AGPL v3 license on this project."
    });
    add_project({
        link: "https://github.com/Yuna2077/Yeco",
        lang: "JavaScript",
        name: "Yeco",
        desc: "A Lightweight, Global Economy Bot for Discord"
    });
    add_project({
        link: "https://github.com/Yuna2077/Roblox-Studio-OPS",
        lang: "RBXL Files",
        name: "Roblox-Studio-OPS",
        desc: "Some of my past work on roblox studio over 5 years"
    });
    add_project({
        link: "https://github.com/Yuna2077/RCC",
        lang: "Luau",
        name: "RCC-Roblox-Custom-Chat",
        desc: "This project provides tools and scripts for Roblox developers, but the author does not control how Roblox’s Terms of Use are enforced."
    });
    //#endregion

    
      var rows = ["100000001", "010000010", "001000100", "000101000", "000010000", "000010000", "000010000", "000010000", "000010000"];
      var hi = { "0,0": 1, "0,8": 1, "4,4": 1 };
      var el = document.getElementById("mark"), h = "";
      rows.forEach(function (r, y) {
        r.split("").forEach(function (c, x) {
          h += '<i class="' + (c === "1" ? (hi[y + "," + x] ? "hi" : "on") : "") + '"></i>';
        });
      });
      el.innerHTML = h;

    //#region Site Theme
    var theme = site.themes.halloween;
    var style = document.getElementById("theme-override");
    if (!style) {
        style = document.createElement("style");
        style.id = "theme-override";
        document.head.appendChild(style); // after style.css, so it wins
    }

    style.textContent =
        ":root{" + toCss(theme.light) + "}" +
        "@media (prefers-color-scheme: dark){:root:not([data-theme=\"light\"]){" + toCss(theme.dark) + "}}" +
        ":root[data-theme=\"dark\"]{" + toCss(theme.dark) + "}";
};

document.addEventListener("DOMContentLoaded", site.startup);
 
 /*  • • • • • • • • • • • • • • • •
    ╔═══════════════════════════════════════════════════════════════════════════════╗
    ║ ██╗   ██╗██╗   ██╗███╗   ██╗ █████╗       ██████╗ ██████╗ ██████╗ ███████╗
    ║ ╚██╗ ██╔╝██║   ██║████╗  ██║██╔══██╗     ██╔════╝██╔═══██╗██╔══██╗██╔════╝
    ║  ╚████╔╝ ██║   ██║██╔██╗ ██║███████║     ██║     ██║   ██║██║  ██║█████╗
    ║   ╚██╔╝  ██║   ██║██║╚██╗██║██╔══██║     ██║     ██║   ██║██║  ██║██╔══╝
    ║    ██║   ╚██████╔╝██║ ╚████║██║  ██║     ╚██████╗╚██████╔╝██████╔╝███████╗
    ║    ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝      ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
    ╚═══════════════════════════════════════════════════════════════════════════════╝
 • • • • • • • • • • • • • • • • */