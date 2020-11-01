let newWindow;

function openWindow() {
    if (confirm('¿Seguro que quieres abrir la nueva ventana?')) {
        // Save it!
        console.log('Opening window.');
         newWindow = open("newWindow.html","","height=80,width=200,location=no,toolbar=no,menubar=no,resizable=no,left=500,top=500");
      } else {
        // Do nothing!
        console.log('aborting window opening');
      }
}

function closeNewWindow() {
    if (!newWindow) {
        alert("No hay ninguna ventana que cerrar");
    }else{
        newWindow.close();
    }
}

function closeActualWindow() {
    close();
}

function moveWin() {
    myWindow.moveBy(10, 10);
    myWindow.focus();
}

function moveWinTo() {
    myWindow.moveTo(100, 100);
    myWindow.focus();
  }

  function resizeWin() {
    myWindow.resizeBy(10, 10);
    myWindow.focus();
  }

  function resizeWinTo() {
    myWindow.resizeTo(400, 200);
    myWindow.focus();
  }

  function scrollWin() {
    window.scrollTo(0, 0);
  }
  function scrollWinSpecified() {
    window.scrollTo(0, 10);
  }