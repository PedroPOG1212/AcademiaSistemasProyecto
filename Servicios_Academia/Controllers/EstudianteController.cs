﻿using Servicios_Academia.Clases;
using Servicios_Academia.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Servicios_Academia.Controllers
{
    [EnableCors(origins: "http://localhost:58421", headers: "*", methods: "*")]
    public class EstudianteController : ApiController
    {
        public Estudiante Get(int id)
        {
            clsEstudiante _estudiante = new clsEstudiante();
            return _estudiante.Consultar(id);
        }
        public string Post([FromBody] Estudiante estudiantes)
        {
            clsEstudiante _estudiante = new clsEstudiante();
            _estudiante.estudiante = estudiantes;
            return _estudiante.Insertar();
        }
        public string Put([FromBody] Estudiante estudiantes)
        {
            clsEstudiante _estudiante = new clsEstudiante();
            _estudiante.estudiante = estudiantes;
            return _estudiante.Actualizar();
        }
        public string Delete([FromBody] Estudiante estudiantes)
           {
            clsEstudiante _estudiante = new clsEstudiante();
            _estudiante.estudiante =   estudiantes;
            return _estudiante.Eliminar();
        }
        

    }
}
