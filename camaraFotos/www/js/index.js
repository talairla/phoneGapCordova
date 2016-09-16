var app = {
  // Application Constructor
  initialize: function() {
      console.log("inicializando app");
      document.addEventListener('deviceready', this.onDeviceReady, false);
      console.log("app inicializada")
    },

  onDeviceReady: function() {
//    app.receivedEvent('deviceready');
    console.log("El dispositivo ya está preparado");
  },
  // Update DOM on a Received Event
 };

app.initialize();
