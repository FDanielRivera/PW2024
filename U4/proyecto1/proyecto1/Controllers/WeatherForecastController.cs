using Microsoft.AspNetCore.Mvc;

namespace proyecto1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet("Mensaje")]
        public IActionResult Mensaje()
        {
            return Ok("Hola Mundo");
        }

        [HttpGet("Bienvenida")]
        public IActionResult DameBienvenida(string nombre)
        {
            return Ok("Hola " + nombre);
        }

        [HttpGet("Suma")]
        public IActionResult Suma(float numero1, float numero2)
        {
           float resultado = numero1 + numero2;
            return Ok("resultado: " + resultado);
        }
    }
}
