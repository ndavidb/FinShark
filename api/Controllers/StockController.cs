using System.Security.Cryptography.X509Certificates;
using api.Dtos.Stock;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Data;

[Route("api/stock")]
[ApiController]
public class StockController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IStockRepository _stockRepository;

    public StockController(ApplicationDbContext context, IStockRepository stockRepository)
    {
        _stockRepository = stockRepository;
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var stocks = await _stockRepository.GetAllAsync();

        var stockDto = stocks.Select(s => s.ToStockDto());

        return Ok(stockDto);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        var stock = await _context.Stocks.FindAsync(id);
 
        if (stock == null)
        {
            return BadRequest();
        }

        return Ok(stock.ToStockDto());
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateStockRequestDto stockDto)
    {
        var stockModel = stockDto.ToStockFromCreateDto();
        await _context.Stocks.AddAsync(stockModel);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = stockModel.Id }, stockModel.ToStockDto());

    }

    [HttpPut]
    [Route("{id}")]
    public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateStockRequestDto updateDto)
    {
        var stockModel = await _context.Stocks.FirstOrDefaultAsync(x => x.Id == id);

        if (stockModel == null)
        {
            return NotFound();
        }

        stockModel.Symbol = updateDto.Symbol;
        stockModel.CompanyName = updateDto.CompanyName;
        stockModel.Purchase = updateDto.Purchase;
        stockModel.LastDiv = updateDto.LastDiv;
        stockModel.Industry = updateDto.Industry;
        stockModel.MarketCap = updateDto.MarketCap;

        await _context.SaveChangesAsync();

        return Ok(stockModel.ToStockDto());
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        var stockModel = await _context.Stocks.FirstOrDefaultAsync(x => x.Id == id);
        if (stockModel == null)
        {
            return NotFound();
        }
        
        _context.Stocks.Remove(stockModel);

        await _context.SaveChangesAsync();

        return NoContent();
    }
}