function main() {

    var btnAbrir = document.getElementById("btnAbrir");
    var btnGuardar = document.getElementById("btnGuardar");
    var btnReporte = document.getElementById("btnReporte");
    var btnEjecutar = document.getElementById("btnEjecutar");
    var SeleccionXPATH = document.getElementById("txtXPATH");
    var SeleccionXML = document.getElementById("txtXML");
    var file = document.getElementById("file");

    btnAbrir.onclick = function (e) {
        AbrirArchivo();
    }

    btnGuardar.onclick = function (e) {
        console.log("Guardar");
        console.log(idArea)
    }

    btnReporte.onclick = function (e) {
        console.log("Reporte");
    }

    btnEjecutar.onclick = function (e) {
        console.log("Ejecutar");
    }

    var idArea = "";
    SeleccionXML.onclick = function (e) {
        idArea = "txtXML"
    }

    SeleccionXPATH.onclick = function (e) {
        idArea = "txtXPATH"
    }

    function AbrirArchivo() {
        if (idArea != "") {
            file.click();
            file.onchange = function () {
                var fr = new FileReader();
                fr.onload = function () {
                    if (idArea == "txtXML") {
                        txtXML.textContent = "";
                        txtXML.textContent = this.result;
                    } else if (idArea == "txtXPATH") {
                        txtXPATH.textContent = "";
                        txtXPATH.textContent = this.result;
                    }
                }
                fr.readAsText(this.files[0]);
            }
        } else {
            alert("Error!, Seleccione un texto de area antes de arbrir un archivo");
        }
    }



}