jQuery(function () {
    //Registrar los botones para responder al evento click
    $("#dvMenu").load("../Paginas/Menu.html");
    //Levantar el evento "click" del botón insertar
    $("#btnInsertar").on("click", function () {
        EjecutarComando("POST");
    });
    $("#btnActualizar").on("click", function () {
        EjecutarComando("PUT");
    });
    $("#btnEliminar").on("click", function () {
        EjecutarComando("DELETE");
    });
    $("#btnConsultar").on("click", function () {
        Consultar();
    });
});
async function LlenarTablaEstudiantes() {
    LlenarTablaXServicios("http://localhost:50866/api/Estudiante", "#tblEstudiantes");
}
async function LlenarComboEstudiantes() {
    LlenarComboXServicios("http://localhost:50866/api/Estudiante", "#cboTipoProducto");
}

/*
async function LlenarTablaProductos() {
    //Invoca el fetch
    try {
        const Respuesta = await fetch("http://localhost:50866/api/Productos",
            {
                method: "GET",
                mode: "cors",
                headers: { "Content-Type": "application/json" }
            });
        //Leer la respuesta y presentarla en el div
        const Resultado = await Respuesta.json();
        //Se llena la información
        //Llena el encabezado
        var Columnas = [];
        NombreColumnas = Object.keys(Resultado[0]);
        for (var i in NombreColumnas) {
            Columnas.push({
                data: NombreColumnas[i],
                title: NombreColumnas[i]
            });
        }
        //Llena los datos
        $("#tblProductos").DataTable({
            data: Resultado,
            columns: Columnas,
            destroy: true
        });
    }
    catch (error) {
        $("#dvMensaje").html(error);
    }
}
async function LlenarComboTipoProductos() {
    //Invoca el fetch
    try {
        const Respuesta = await fetch("http://localhost:50866/api/Estudiante",
            {
                method: "GET",
                mode: "cors",
                headers: { "Content-Type": "application/json" }
            });
        //Leer la respuesta y presentarla en el div
        const Resultado = await Respuesta.json();
        //Con la respuesta se llena el combo
        for (i = 0; i < Resultado.length; i++) {
            $("#cboTipoProducto").append('<option value="' + Resultado[i].Codigo + '">' +  Resultado[i].Nombre + '</option>');
        }
    }
    catch (error) {
        $("#dvMensaje").html(error);
    }
}
*/
async function Consultar() {
    //Capturar los datos de entrada
    let Documento = $("#txtDocumento").val();
    //Invoca el fetch
    try {
        const Respuesta = await fetch("http://localhost:50866/api/Estudiante?Documento=" + Documento,
            {
                method: "GET",
                mode: "cors",
                headers: { "Content-Type": "application/json" }
            });
        //Leer la respuesta y presentarla en el div
        const Resultado = await Respuesta.json();
        //La respuesta se escribe en los campos
        $("#txtNombre").val(Resultado.Nombre);
        $("#txtApellido").val(Resultado.Apellido);
        $("#txtDocumento").val(Resultado.Documento);
        $("#txtFechaNacimiento").val(Resultado.fecha_nacimiento);
        $("#txtGenero").val(Resultado.Genero);
        $("txtCorreo").val(Resultado.Correo);
        $("#txtTelefono").val(Resultado.Telefono);
        $("#txtDireccion").val(Resultado.Direccion);
        $("txtEstadoPago").val(Resultado.Estado_pago);
           }
    catch (error) {
        $("#dvMensaje").html(error);
    }
}
async function EjecutarComando(Comando)
{
    //Capturar los datos de entrada
    let Documento = $("#txtDocumento").val();
    let Nombre = $("#txtNombre").val();
    let Apellido = $("#txtApellido").val();
   // let Documento = $("#txtDocumento").val();
    let fecha_nacimiento = $("#txtFechaNacimiento").val();
    let Genero = $("#txtGenero").val();
    let Correo = $("#txtCorreo").val();
    let Telefono = $("#txtTelefono").val();
    let Direccion = $("#txtDireccion").val();
    let Estado_pago = $("#txtEstadoPago").val();

   

    let DatosEstudiante = {
        Nombre: Nombre,
        Apellido: Apellido,
        Documento: Documento,
        fecha_nacimiento: fecha_nacimiento,
        Genero: Genero,
        Correo: Correo,
        Telefono: Telefono,
        Direccion: Direccion,
        Estado_pago: Estado_pago
    }

    try {
        const Respuesta = await fetch("http://localhost:50866/api/Estudiante",
            {
                method: Comando,
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(DatosEstudiante)
            });
        //Leer la respuesta y presentarla en el div
        const Resultado = await Respuesta.json();
        $("#dvMensaje").html(Resultado);
    }
    catch (error) {
        $("#dvMensaje").html(error);
    }
}

async function Insertar() {
    //Capturar los datos de entrada
    let Documento = $("#txtDocumento").val();
    let Nombre = $("#txtNombre").val();
    let Apellido = $("#txtApellido").val();
  //  let Documento = $("#txtDocumento").val();
    let fecha_nacimiento = $("#txtFechaNacimiento").val();
    let Genero = $("#txtGenero").val();
    let Correo = $("#txtCorreo").val();
    let Telefono = $("#txtTelefono").val();
    let Direccion = $("#txtDireccion").val();
    let Estado_pago = $("#txtEstadoPago").val();

    let DatosEstudiante = {
        Nombre: Nombre,
        Apellido: Apellido,
        Documento: Documento,
        fecha_nacimiento: fecha_nacimiento,
        Genero: Genero,
        Correo: Correo,
        Telefono: Telefono,
        Direccion: Direccion,
        Estado_pago: Estado_pago
    }

    try {
        const Respuesta = await fetch("http://localhost:50866/api/Estudiante",
            {
                method: Comando,
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(DatosEstudiante)
            });
        //Leer la respuesta y presentarla en el div
        const Resultado = await Respuesta.json();
        $("#dvMensaje").html(Resultado);
    }
    catch (error) {
        $("#dvMensaje").html(error);
    }
}