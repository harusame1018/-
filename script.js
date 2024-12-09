let mondai = [];
let kotae = [];
window.onload = function() {
    let question = document.getElementById("question");
    let anser = document.getElementById("anser");
    let sousin = document.getElementById("sousin");
    sousin.addEventListener("submit",function(e) {
        mondai.push(question);
        kotae.push(anser);
        let bom  = new Uint8Array([0xEF, 0xBB, 0xBF]);
        let blob = new Blob([bom, mondai],{type:"text/csv"});
        let blob2 = new Blob([bom,kotae],{type:"text/csv"});
        let link = document.createElement('a');
        let link2 = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link2.href = URL.createObjectURL(blob2);
        link.download = 'mondai.csv';
        link2.download = "kotae.csv";
        link.click();
        link2.click();
    });
}