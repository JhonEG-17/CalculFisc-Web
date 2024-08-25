document.getElementById("back-button").addEventListener("click", function() {
    window.history.back();
});

/*// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_DOMINIO.firebaseapp.com",
    databaseURL: "https://TU_DOMINIO.firebaseio.com",
    projectId: "TU_ID_PROYECTO",
    storageBucket: "TU_BUCKET.appspot.com",
    messagingSenderId: "TU_ID_MENSAJERIA",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();*/

// Evento de clic para el botón de descarga
document.getElementById('download-button').addEventListener('click', function() {
    
    
    /*// Incrementar el contador en Firebase
    downloadRef.transaction(function(currentCount) {
        return (currentCount || 0) + 1;
    });*/

    // Redirigir al archivo de descarga
    window.location.href = '../assets/program_instaler/Calculadora-de-impuestos.exe';
});