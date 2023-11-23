export default function swDev()
{
  function determineAppServerKey() {
    const vapidPublicKey = 'BEgXekP9y_rA2BpELdPtfd2HDFvfhDb3L5b21K6kpKIBmcAot3O4N0TbIj39Z0MPcYm7Ye9jaAjH7xO2VybWedU'
    return urlBase64ToUint8Array(vapidPublicKey);
  }

  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  
    let swUrl=  `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((response)=>{
        console.warn("response",response)

        return response.pushManager.getSubscription()
        .then(function (subscription) {
           response.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: determineAppServerKey()
          })
          

        })

    }) 

}
// Public Key:
// BEgXekP9y_rA2BpELdPtfd2HDFvfhDb3L5b21K6kpKIBmcAot3O4N0TbIj39Z0MPcYm7Ye9jaAjH7xO2VybWedU

// Private Key:
// zmBj7L9gLdEtkWgCQusiZ7MX4qwwwpDudLSWcqLzXaw