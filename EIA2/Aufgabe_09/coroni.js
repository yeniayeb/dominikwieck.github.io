"use strict";
// Ursprungscode von Aufgabe_08 von Luzia Gunzenhauser und abgeändert
//Aufgabe 09_
var L09CoronaVirus;
(function (L09CoronaVirus) {
    console.log("load");
    let crc2;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawHumanCell({ x: 350, y: 170 }, { x: 450, y: 450 });
        showAntibodies({ x: 250, y: 370 });
        buildKillercells({ x: 50, y: 670 });
        buildCorona({ x: 10, y: 20 });
        drawParticles({ x: 40, y: 500 }, { x: 600, y: 600 });
    }
    function drawBackground() {
        console.log("Background");
        //Eigener Background 
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.fillStyle = '#db305e';
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(5, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();
        //Punkt in Zelle
        pattern.beginPath();
        pattern.arc(50, 20, 2, 0, 2 * Math.PI);
        pattern.fillStyle = "#88888844";
        pattern.fill();
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawHumanCell(_position, _size) {
        //Zeichnen der Cellen sowie das duplizieren dieser 
        console.log("HumanCell", _position, _size);
        let nParticles = 40;
        let radiusParticle = 20;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "black");
        gradient.addColorStop(0.3, "#48803c");
        gradient.addColorStop(0.7, "#E6E6FA");
        gradient.addColorStop(1, "#E6E6FA");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawAntibodies(_position, _size) {
        //Zeichnen der Antikörper 
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x + 22, _position.y - 12);
        crc2.lineWidth = 2.5;
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_position.x + 31, _position.y - 18, 12, 0.7, 1.4 * Math.PI);
        crc2.stroke();
        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
    }
    function showAntibodies(_position) {
        //Double the Anti-cells 
        for (let drawn = 0; drawn < 7; drawn++) {
            _position.x = Math.random() * crc2.canvas.width / 1.4; //Variieren der Werte
            _position.y = 450 + (20 * Math.random());
            drawAntibodies(_position, { x: 450, y: 650 });
        }
    }
    function buildKillercells(_position) {
        for (let drawn = 0; drawn < 5; drawn++) {
            _position.x = Math.random() * crc2.canvas.width / 1.8;
            _position.y = 300 + (20 * Math.random());
        }
    }
    function drawCoronaCell(_position, _size) {
        //Zeichen der Stängel 
        for (let i = 0; i < 8; i++) {
            crc2.beginPath();
            crc2.rotate(20);
            crc2.moveTo(_position.x + 0, _position.y + 0);
            crc2.lineTo(_position.x + 0, _position.y + 10);
            crc2.strokeStyle = "#B43104";
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.closePath();
        }
        //Zeichnen des Kreises 
        crc2.beginPath();
        crc2.arc(_position.x + 0, _position.y + 0, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#822414";
        crc2.fill();
        crc2.closePath();
    }
    function buildCorona(_position) {
        let radius;
        let position = 20;
        //Fünf Coronazellen sollen gezeichnet werden 
        for (let i = 0; i < 5; i++) {
            radius = 5;
            _position.x = position + radius;
            position = _position.x + radius;
            _position.y = 300 + (50 * Math.random());
            drawCoronaCell(_position, { x: 20, y: 20 });
        }
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
    }
    //Luftpartikel werden gezeichnet und dubliziert 
    function drawParticles(_position, _size) {
        let nParticles = 90;
        let radiusParticle = 4;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
        gradient.addColorStop(1, "#ffcc01");
        crc2.fillStyle = gradient;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        let coronii = new L09CoronaVirus.CoronaVirus(1);
        console.log(coronii);
    }
})(L09CoronaVirus || (L09CoronaVirus = {}));
//# sourceMappingURL=coroni.js.map