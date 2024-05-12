document.getElementById("calculadoraForm").addEventListener("submit", function(event) {
    event.preventDefault();
    calcularImpuestos();
});

function calcularImpuestos() {
    var sueldo = parseFloat(document.getElementById("sueldo").value);
    var cuotap = parseFloat(document.getElementById("cuotap").value);
    var gastosm = parseFloat(document.getElementById("gastosm").value);
    var gastosin = parseFloat(document.getElementById("gastosin").value);
    var nombre = document.getElementById("nombre").value;

    var bandasalarial = obtenerBandaSalarial(sueldo);
    var isr = calcularISR(sueldo);
    var imss = calcularIMSS(sueldo, cuotap, gastosm, gastosin);
    var sueldoNeto = sueldo - isr - imss;

    document.getElementById("bandasalarial").innerText = "Banda Salarial: " + bandasalarial;
    document.getElementById("retencionISR").innerText = "Retención ISR: " + isr.toFixed(2);
    document.getElementById("retencionIMSS").innerText = "Retención IMSS: " + imss.toFixed(2);
    document.getElementById("sueldoNeto").innerText = "Sueldo Neto: " + sueldoNeto.toFixed(2);

    document.getElementById("resultado").style.display = "block";
}

function obtenerBandaSalarial(sueldo) {
    if (sueldo >= 31652 && sueldo <= 91284) {
        return "Sección 9 (nivel jefe de oficina)";
    } else if (sueldo >= 22789 && sueldo <= 78244) {
        return "Sección 8 (nivel jefe de oficina)";
    } else if (sueldo >= 17725 && sueldo <= 65203) {
        return "Sección 7 (nivel jefe de oficina)";
    } else if (sueldo >= 13927 && sueldo <= 52161) {
        return "Sección 6 (nivel analista)";
    } else if (sueldo >= 11902 && sueldo <= 30123) {
        return "Sección 5 (nivel operativo)";
    } else if (sueldo >= 8862 && sueldo <= 20866) {
        return "Sección 4 (nivel operativo)";
    } else if (sueldo >= 6710 && sueldo <= 15649) {
        return "Sección 3 (nivel operativo)";
    } else if (sueldo >= 5571 && sueldo <= 10693) {
        return "Sección 2 (nivel operativo)";
    } else if (sueldo >= 5063 && sueldo <= 8607) {
        return "Sección 1 (nivel operativo)";
    } else {
        return "Sueldo fuera de las bandas salariales conocidas";
    }
}

function calcularISR(sueldo) {
    if (sueldo >= 291550.01 && sueldo <= 100000000000.0) {
        return (sueldo - 291550.01) * 0.35 + 91435.02;
    } else if (sueldo >= 97183.34 && sueldo <= 291550.00) {
        return (sueldo - 97183.34) * 0.34 + 25350.35;
    } else if (sueldo >= 72887.51 && sueldo <= 97183.33) {
        return (sueldo - 72887.51) * 0.32 + 17575.69;
    } else if (sueldo >= 38177.70 && sueldo <= 72887.50) {
        return (sueldo - 38177.70) * 0.30 + 7162.74;
    } else if (sueldo >= 24222.32 && sueldo <= 38177.69) {
        return (sueldo - 24222.32) * 0.2352 + 3880.44;
    } else if (sueldo >= 12009.95 && sueldo <= 24222.31) {
        return (sueldo - 12009.95) * 0.2136 + 1271.87;
    } else if (sueldo >= 10031.08 && sueldo <= 12009.94) {
        return (sueldo - 10031.08) * 0.1792 + 917.26;
    } else if (sueldo >= 8629.21 && sueldo <= 10031.07) {
        return (sueldo - 8629.21) * 0.16 + 692.96;
    } else if (sueldo >= 4910.19 && sueldo <= 8629.20) {
        return (sueldo - 4910.19) * 0.1088 + 288.33;
    } else if (sueldo >= 578.53 && sueldo <= 4910.18) {
        return (sueldo - 578.53) * 0.064 + 11.11;
    } else if (sueldo >= 0.01 && sueldo <= 578.52) {
        return (sueldo - 0.01) * 0.0192;
    } else {
        return "Sueldo excede la cantidad calculable de ISR y es necesario realizarlo a mano";
    }
}

function calcularIMSS(sueldo, cuotap, gastosm, gastosin) {
    var UMA = 123.22;
    var DiasLabor = 30.0;
    var SDI = 0.0;
    var CAO = 0.0;

    SDI = sueldo / DiasLabor;
    CAO = SDI - UMA * 3.0 * DiasLabor * 0.011;
    if (CAO <= 0) {
        CAO = 0;
    }
    cuotap = SDI * DiasLabor * 0.25 / 100.0;
    gastosm = SDI * DiasLabor * 0.375 / 100.0;
    gastosin = SDI * DiasLabor * 0.625 / 100.0;

    return CAO + cuotap + gastosm + gastosin;
}
