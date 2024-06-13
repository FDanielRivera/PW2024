using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoMuebleria.Data;
using ProyectoMuebleria.Models;

namespace ProyectoMuebleria.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MuebleriaController : Controller
    {
        private readonly MiContexto _miContexto;
        public MuebleriaController(MiContexto miContexto) {
            _miContexto = miContexto;
        }
        [HttpGet("ListadoCategorias")]
        public async Task<IActionResult> ListadoCategorias()
        {
            var categorias = await _miContexto.Categorias.ToListAsync();
            return Ok(categorias);
        }

        [HttpGet("DameCategoria")]
        public async Task<IActionResult> DameCategoria(int idCategoria)
        {
            bool existe = await _miContexto.Categorias.Where( c => c.IdCategoria == idCategoria).AnyAsync();
            if(existe)
            {
                Categoria categoria = await _miContexto.Categorias.Where(c => c.IdCategoria == idCategoria).FirstOrDefaultAsync();
                return Ok(categoria);
            }
            else
            {
                return BadRequest("No se encontro la categoria");
            }
        }

        [HttpPost("AgregarCategoria")]
        public async Task<IActionResult> AgregarCategoria(string nombreAgregar)
        {
            bool existeCategoria = await _miContexto.
                Categorias.Where(c => c.Nombre.ToLower().Trim() == nombreAgregar.ToLower().Trim()).AnyAsync();
            if(existeCategoria)
            {
                return BadRequest("Categoria en Existencia");
            }
            else
            {
                Categoria nuevaCategoria = new Categoria();
                nuevaCategoria.Nombre = nombreAgregar;
                _miContexto.Categorias.Add(nuevaCategoria);
                _miContexto.SaveChanges();
                return Ok(nuevaCategoria);

            }
        }

        [HttpPut("ActualizarCategoria")]
        public async Task<IActionResult> ActualizarCategoria(int idCategoriaActualizar, string nombreActualizado)
        {
            bool existe = await _miContexto.Categorias.Where(c => c.IdCategoria == idCategoriaActualizar).AnyAsync();
            if(existe)
            {
                Categoria categoriaActualizar = await _miContexto.Categorias.
                    Where(c => c.IdCategoria == idCategoriaActualizar).FirstOrDefaultAsync();
                categoriaActualizar.Nombre = nombreActualizado;
                _miContexto.Update(categoriaActualizar);
                _miContexto.SaveChanges();
                return Ok(categoriaActualizar);
            }
            else
            {
                return BadRequest("No se encontro la categoria que desea actualizar");
            }
        }

        [HttpDelete("EliminaCategoria")]
        public async Task<IActionResult> EliminarCategoria(int idCategoriaEliminar)
        {
            Categoria categoriaEliminar = await _miContexto.Categorias.
                Where(c => c.IdCategoria == idCategoriaEliminar).FirstOrDefaultAsync();
            if(categoriaEliminar != null)
            {
                _miContexto.Remove(categoriaEliminar);
                _miContexto.SaveChanges();
                return Ok("Categoria Eliminada");
            }
            else
            {
                return BadRequest("No se encontro la Categoria");
            }
        }


        [HttpGet("ListadoFabricantes")]
        public async Task<IActionResult> ListadoFabricantes()
        {
            var fabricantes = await _miContexto.Fabricantes.ToListAsync();
            return Ok(fabricantes);
        }

        [HttpGet("DameFabricantes")]
        public async Task<IActionResult> DameFabricantes(int idFabricante)
        {
            bool existe = await _miContexto.Fabricantes.Where(c => c.IdFabricante == idFabricante).AnyAsync();
            if (existe)
            {
                Fabricante fabricantes = await _miContexto.Fabricantes.Where(c => c.IdFabricante == idFabricante).FirstOrDefaultAsync();
                return Ok(fabricantes);
            }
            else
            {
                return BadRequest("No se encontro el Fabricante");
            }
        }

        [HttpPost("AgregarFabricante")]
        public async Task<IActionResult> AgregarFabricante(string nombreAgregar)
        {
            bool existeFabricante = await _miContexto.
                Fabricantes.Where(c => c.Nombre.ToLower().Trim() == nombreAgregar.ToLower().Trim()).AnyAsync();
            if (existeFabricante)
            {
                return BadRequest("Fabricante en Existencia");
            }
            else
            {
                Fabricante nuevoFabricante = new Fabricante();
                nuevoFabricante.Nombre = nombreAgregar;
                _miContexto.Fabricantes.Add(nuevoFabricante);
                _miContexto.SaveChanges();
                return Ok(nuevoFabricante);

            }
        }

        [HttpPut("ActualizarFabricante")]
        public async Task<IActionResult> ActualizarFabricante(int idFabricanteActualizar, string nombreActualizado)
        {
            bool existe = await _miContexto.Fabricantes.Where(c => c.IdFabricante == idFabricanteActualizar).AnyAsync();
            if (existe)
            {
                Fabricante FabricanteActualizar = await _miContexto.Fabricantes.
                    Where(c => c.IdFabricante == idFabricanteActualizar).FirstOrDefaultAsync();
                FabricanteActualizar.Nombre = nombreActualizado;
                _miContexto.Update(FabricanteActualizar);
                _miContexto.SaveChanges();
                return Ok(FabricanteActualizar);
            }
            else
            {
                return BadRequest("No se encontro el Fabricante que desea actualizar");
            }
        }

        [HttpDelete("EliminarFabricante")]
        public async Task<IActionResult> EliminarFabricante(int idFabricanteEliminar)
        {
            Fabricante fabricanteEliminar = await _miContexto.Fabricantes.
                Where(c => c.IdFabricante == idFabricanteEliminar).FirstOrDefaultAsync();
            if (fabricanteEliminar != null)
            {
                _miContexto.Remove(fabricanteEliminar);
                _miContexto.SaveChanges();
                return Ok("Fabricante Eliminado");
            }
            else
            {
                return BadRequest("No se encontro el Fabricante");
            }
        }
    }
}
