if ('serviceWorker' in navigator) {
    console.log("main.js => Vamos registrar o service worker!!!");
<<<<<<< HEAD
    navigator.serviceWorker.register('/service-worker-minimum-to-intall-pwa.js')
=======
    navigator.serviceWorker.register('/FeiraTecnologicaCPS/service-worker-minimum-to-intall-pwa.js')
>>>>>>> 6609566 (Corrigindo o erro do pwa no Github)
        .then(registration => {
            console.log("main.js => Service Worker Registrado com Sucesso");
            console.dir(registration);
        })
        .catch(error => {
            console.log("main.js => Erro ao registrar Service Worker");
            console.dir(error);
        });
}
