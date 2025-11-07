const userCode = `
public class User
{
    public int Id { get; set; }
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string Role { get; set; } = "Customer"; // Customer, Admin, Employee
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public bool IsActive { get; set; } = true;

    public Customer? Customer { get; set; }
}`;

const customCode = `
public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public string? Address { get; set; }

    public int UserId { get; set; } // Foreign Key
    public User User { get; set; } = null!;
    public ICollection<Order> Orders { get; set; } = new List<Order>();
}`;

const productCode = `
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public byte[]? Image { get; set; }
    public ICollection<OrderProduct> OrderProducts { get; set; } = new List<OrderProduct>();
}`;

const orderCode = `
public class Order
{
    public int Id { get; set; }
    public DateTime OrderDate { get; set; }
    public OrderStatus Status { get; set; }
    public int CustomerId { get; set; }
    public Customer Customer { get; set; }

    public ICollection<OrderProduct> OrderProducts { get; set; } = new List<OrderProduct>();
}`;

const orderProductCode = `
public class OrderProduct
{
    public int OrderId { get; set; }
    public Order Order { get; set; }
    public int ProductId { get; set; }
    public Product Product { get; set; }
    public int Quantity { get; set; }
}`;

const orderStatusCode = `
public enum OrderStatus
{
    Accepted,
    Canceled,
    Delivered
}`;

const apiRegist = `
{
    "email": "user@example.com",
    "password": "password123",
    "name": "John Doe",
    "phone": "+36301234567",
    "address": "Budapest, Fő utca 1."
}`;

const apiAnswer =  `
{
    "userId": 1,
    "email": "user@example.com",
    "role": "Customer",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "customerId": 1
}`;

const apiLogin = `
{
    "email": "user@example.com",
    "password": "password123"
}`;

const productAnswer =  `
[
    {
        "id": 1,
        "name": "Laptop",
        "price": 350000,
        "imageUrl": "https://localhost:7000/api/products/1/image.webp"
    }
]`;

const productPut =  `
{
    "name": "Frissített termék",
    "price": 30000
}`;

const orderPost =  `
{
    "orderDate": "2025-01-15T10:30:00Z",
    "customerId": 1,
    "products": [
        {
            "productId": 1,
            "quantity": 2
        },
        {
            "productId": 2,
            "quantity": 1
        }
    ]
}`;

export {
  userCode,
  customCode,
  productCode,
  orderCode,
  orderProductCode,
  orderStatusCode,
  apiRegist,
  apiAnswer,
  apiLogin,
  productAnswer,
  productPut,
  orderPost
};
