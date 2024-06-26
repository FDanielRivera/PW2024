﻿using Microsoft.EntityFrameworkCore;
using ProyectoMuebleria.Models;

namespace ProyectoMuebleria.Data
{
    public class MiContexto : DbContext
    {
        public MiContexto(DbContextOptions<MiContexto> options) : base(options) { }

        public DbSet<Producto> Producto { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Fabricante> Fabricantes { get; set; }
    }
}
