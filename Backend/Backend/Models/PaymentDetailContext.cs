using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    public class PaymentDetailContext:DbContext
    {
        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options) : base(options)
        {

        }

        public DbSet<PaymentDetail>PaymentDetails { get; set; }
    }
}
