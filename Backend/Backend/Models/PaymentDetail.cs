using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class PaymentDetail
    {
        [Key]
        public int PMID {get; set;}
        [Required]
        [Column (TypeName = "nvarchar (100)")]
        public string CardOwnerName { get; set; }
        [Required]
        [Column(TypeName = "varchar (16)")]
        public string CardNumber { get; set; }
        [Required]
        [Column(TypeName = "varchar (5)")]
        public string ExpirationData { get; set; }
        [Required]
        [Column(TypeName = "varchar (3)")]
        public string CVV { get; set; }
    }
}
