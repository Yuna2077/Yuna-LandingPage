/* • • • • • • • • • • • • • • • •
Copyright (C) 2026 Yuna2077 - All rights Reserved
You may use, distribute or modify this code under the terms of AGPLv3 license.
    License: https://choosealicense.com/licenses/agpl-3.0/
 • • • • • • • • • • • • • • • • */

var site = {};

function escapeRegExp(str) { return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); };
function escapeSpace(str) { return str.replace(" ", ""); }; // seems like what i needed was so easy to make
function choose(arr) { return arr[Math.floor(Math.random()*arr.length)]; };

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
        name: "Roblox-Studiop-OPS",
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