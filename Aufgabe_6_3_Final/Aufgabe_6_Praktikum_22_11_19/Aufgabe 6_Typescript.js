//Emissions 2018
var emissionAfrica18 = 1235.5;
var emissionSouthAmerica18 = 1261.5;
var emissionEurope18 = 4209.3;
var emissionNorthAmerica18 = 6035.6;
var emissionAsia18 = 16274.1;
var emissionAustralia18 = 2100.5;
var emissionTotal18 = emissionAfrica18 + emissionSouthAmerica18 + emissionEurope18 + emissionNorthAmerica18 + emissionAsia18 + emissionAustralia18;
//Emissions 2008
var emissionAfrica08 = 1028;
var emissionSouthAmerica08 = 1132.6;
var emissionEurope08 = 4965.7;
var emissionNorthAmerica08 = 6600.4;
var emissionAsia08 = 12954.7;
var emissionAustralia08 = 1993;
var emissionTotal08 = emissionAfrica18 + emissionSouthAmerica18 + emissionEurope18 + emissionNorthAmerica18 + emissionAsia18 + emissionAustralia18;
// PercentAfrika
var percentAfrica1 = emissionAfrica18 * 100 / emissionTotal18;
var percentAfrica2 = emissionAfrica18 - emissionAfrica08;
var percentAfrica3 = percentAfrica2 / emissionAfrica08 * 100;
// PercentSouthMurica
var percentSA1 = emissionSouthAmerica18 * 100 / emissionTotal18;
var percentSA2 = emissionSouthAmerica18 - emissionSouthAmerica08;
var percentSA3 = percentSA2 / emissionSouthAmerica08 * 100;
// PercentEurope
var percentE1 = emissionEurope18 * 100 / emissionTotal18;
var percentE2 = emissionEurope18 - emissionEurope08;
var percentE3 = percentE2 / emissionEurope08 * 100;
// PercentNA
var percentNA1 = emissionNorthAmerica18 * 100 / emissionTotal18;
var percentNA2 = emissionNorthAmerica18 - emissionNorthAmerica08;
var percentNA3 = percentNA2 / emissionNorthAmerica08 * 100;
// PercentAsia
var percentA1 = emissionAsia18 * 100 / emissionTotal18;
var percentA2 = emissionAsia18 - emissionAsia08;
var percentA3 = percentA2 / emissionAsia08 * 100;
// PercentAus
var percentAU1 = emissionAustralia18 * 100 / emissionTotal18;
var percentAU2 = emissionAustralia18 - emissionAustralia08;
var percentAU3 = percentAU2 / emissionAustralia08 * 100;
// Sentences
var a = "Die Emission von ";
var b = "ist: ";
var c = "kg CO2. ";
var d = "Relativ zur Gesamtemission der Welt verursacht ";
var e = "damit ";
var ee = "% ";
var f = "Für ";
var g = "hat sich 2018 im Vergleich zu 2008 die Emission um ";
var h = "verändert. ";
var i = "2018 im Vergleich zu 2008 sind das ";
var j = "kg CO2";
var Afr = "Afrika ";
var SA = "Süd Amerika ";
var E = "Europa ";
var NA = "Nord Amerika ";
var As = "Asien ";
var Aus = "Australien ";
var dot = ".";
// Consolerio
console.log(a + Afr + b + emissionAfrica18 + c + d + Afr + e + percentAfrica1 + ee + dot + f + Afr + g + percentAfrica3 + ee + h + i + percentAfrica2 + j + dot);
console.log(a + SA + b + emissionSouthAmerica18 + c + d + SA + e + percentSA1 + ee + dot + f + SA + g + percentSA3 + ee + h + i + percentSA2 + j + dot);
console.log(a + E + b + emissionEurope18 + c + d + E + e + percentE1 + ee + dot + f + E + g + percentE3 + ee + h + i + percentE2 + j + dot);
console.log(a + NA + b + emissionNorthAmerica18 + c + d + NA + e + percentNA1 + ee + dot + f + NA + g + percentNA3 + ee + h + i + percentNA2 + j + dot);
console.log(a + As + b + emissionAsia18 + c + d + As + e + percentA1 + ee + dot + f + As + g + percentA3 + ee + h + i + percentA2 + j + dot);
console.log(a + Aus + b + emissionAustralia18 + c + d + Aus + e + percentAU1 + ee + dot + f + Aus + g + percentAU3 + ee + h + i + percentAU2 + j + dot);
//-----------Afrika-----------
function Afrika() {
    document.querySelector("#Titel").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#Wert1").innerHTML = "1235.5";
    document.querySelector("#WertText1").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#Wert2").innerHTML = "3.9%";
    document.querySelector("#Wert3").innerHTML = "20.18%";
    document.querySelector("#Wert4").innerHTML = "207,5kg CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + percentAfrica1 + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".africa").addEventListener("click", Afrika);
});
//------------Europa------------------
function Europa() {
    document.querySelector("#Titel").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#Wert1").innerHTML = "4209.3";
    document.querySelector("#WertText1").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#Wert2").innerHTML = "13.5%";
    document.querySelector("#Wert3").innerHTML = "-15.2%";
    document.querySelector("#Wert4").innerHTML = "756.4kg CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + percentE1 + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", Europa);
});
//----------------Süd Amerika-------------
function SüdAmerika() {
    document.querySelector("#Titel").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector("#Wert1").innerHTML = "1261.5";
    document.querySelector("#WertText1").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector("#Wert2").innerHTML = "4.05%";
    document.querySelector("#Wert3").innerHTML = "11.38%";
    document.querySelector("#Wert4").innerHTML = "128.9kg CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + percentSA1 + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".southamerica").addEventListener("click", SüdAmerika);
});
//------------------Nord Amerika-------------------------
function NordAmerika() {
    document.querySelector("#Titel").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector("#Wert1").innerHTML = "16274.1";
    document.querySelector("#WertText1").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector("#Wert2").innerHTML = "19.3%";
    document.querySelector("#Wert3").innerHTML = "-8.5%";
    document.querySelector("#Wert4").innerHTML = "-564.8kg CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + percentNA1 + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".northamerica").addEventListener("click", NordAmerika);
});
//----------------Asien-------------------------------------
function Asien() {
    document.querySelector("#Titel").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("#Wert1").innerHTML = "6035.6";
    document.querySelector("#WertText1").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#Wert2").innerHTML = "52.3%";
    document.querySelector("#Wert3").innerHTML = "25.6%";
    document.querySelector("#Wert4").innerHTML = "3319.4kg CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + percentA1 + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".asia").addEventListener("click", Asien);
});
function Australien() {
    document.querySelector("#Titel").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("#Wert1").innerHTML = "2100.5";
    document.querySelector("#WertText1").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#Wert2").innerHTML = "6.8%";
    document.querySelector("#Wert3").innerHTML = "5.4%";
    document.querySelector("#Wert4").innerHTML = "107.5kg CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + percentAU1 + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".australia").addEventListener("click", Australien);
});
//# sourceMappingURL=Aufgabe 6_Typescript.js.map