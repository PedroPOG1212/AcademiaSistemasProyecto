using Servicios_Academia.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace Servicios_Academia.Clases
{
    public class clsEstudiante
    {

       private AcademiaSistemasEntities dbAcademia = new AcademiaSistemasEntities();
      
        public Estudiante estudiante { get; set; }

            public string Insertar()
            {
                try
                {
                    dbAcademia.Estudiantes.Add(estudiante);
                    dbAcademia.SaveChanges();
                    return "El estudiante " + estudiante.Nombre +" "+ estudiante.Apellido + " se grabó correctamente";

                }
                catch (Exception ex)
                {
                    return ex.Message;

                }

            }

            public string Actualizar()
            {
                try
                {
                    dbAcademia.Estudiantes.AddOrUpdate(estudiante);
                    dbAcademia.SaveChanges();
                    return "El estudiante " + estudiante.Nombre + " " + estudiante.Apellido + "se grabó correctamente";
                }
                catch (Exception ex)
                {
                    return ex.Message;
                }
            }

            public Estudiante Consultar(int id)
            {
                return dbAcademia.Estudiantes.FirstOrDefault(p => p.EstudianteID == id);
            }

            public List<Estudiante> ConsultarTodos()
            {
                return dbAcademia.Estudiantes
                    .OrderBy(e => e.Apellido)
                    .ToList();

            }


        public string Eliminar()
        {
            Estudiante _Estudiante = Consultar(estudiante.EstudianteID);
            if (_Estudiante != null)
            {
                dbAcademia.Estudiantes.Remove(_Estudiante);
                dbAcademia.SaveChanges();
                return "El estudiante con el ID " + _Estudiante.Documento + " fue eliminado exitosamente";
            }
            else
            {
                return "No se encontró ningún estudiante con el ID " + estudiante.EstudianteID;
            }
        }

    }
}