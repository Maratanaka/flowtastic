<template>
  <h1 class="title">Teljes Dokumentáció 🖊️</h1>
  <section class="flex justify-center p-8 pt-28 pb-10">
    <div class="grid grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-8 max-w-7xl w-full">
    <!-- Sidebar -->
      
      <Sidebar />

    <!-- Main Content -->
    <div class="space-y-8 scroll-smooth">
        <h2 id="database" class="text-3xl font-semibold mb-10 text-cyan-400 scroll-mt-24">
            Adatmodell és Kapcsolatok
        </h2>
        <!-- User Card -->
        <fwb-card id="user" variant="horizontal" class="w-full scroll-mt-24 dark-card">
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold text-white">
        1. User (Felhasználó)
      </h5>

      <!-- Itt már nem kell backtick a template-ben -->
      <CodeBlock lang="csharp" :code="userCode" />

      <h6 class="mt-3 font-semibold text-white">Felelősségek:</h6>
      <ul class="list-disc ml-5 text-gray-400">
        <li>Felhasználói hitelesítés és jogosultságkezelés</li>
        <li>Jelszó biztonságos tárolása BCrypt hasheléssel</li>
        <li>Szerepkör alapú hozzáférés szabályozás</li>
      </ul>
    </div>
  </fwb-card>


        <!-- Customer -->
        <fwb-card id="customer" variant="horizontal" class="w-full scroll-mt-24 dark-card">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold text-white">2. Customer (Ügyfél)</h5>
            
            <CodeBlock lang="csharp" :code="customCode" />

            <h6 class="mt-3 font-semibold text-white">Felelősségek:</h6>
            <ul class="list-disc ml-5 text-gray-400">
              <li>Ügyfél profil információk tárolása</li>
              <li>User entitással 1:1 kapcsolat</li>
              <li>Rendelésekhez való kapcsolódás</li>
            </ul>
          </div>
        </fwb-card>

        <!-- Product -->
        <fwb-card id="product" variant="horizontal" class="w-full scroll-mt-24 dark-card">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold text-white">3. Product (Termék)</h5>
                <CodeBlock lang="csharp" :code="productCode" />
            <h6 class="mt-3 font-semibold text-white">Felelősségek:</h6>
            <ul class="list-disc ml-5 text-gray-400">
              <li>Termék információk és árak tárolása</li>
              <li>Képfájlok bináris formátumban tárolása</li>
              <li>Many-to-Many kapcsolat rendelésekkel</li>
            </ul>
          </div>
        </fwb-card>

        <!-- Order -->
        <fwb-card id="order" variant="horizontal" class="w-full scroll-mt-24 dark-card">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold text-white">4. Order (Rendelés)</h5>
                <CodeBlock lang="csharp" :code="orderCode" />
            <h6 class="mt-3 font-semibold text-white">Felelősségek:</h6>
            <ul class="list-disc ml-5 text-gray-400">
              <li>Rendelések nyilvántartása</li>
              <li>Rendelés státusz követése</li>
              <li>Termékekhez való kapcsolódás</li>
            </ul>
          </div>
        </fwb-card>

        <!-- OrderProduct -->
        <fwb-card id="orderproduct" variant="horizontal" class="w-full scroll-mt-24 dark-card">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold text-white">5. OrderProduct (Kapcsolótábla)</h5>
            <CodeBlock lang="csharp" :code="orderProductCode" />
            <h6 class="mt-3 font-semibold text-white">Felelősségek:</h6>
            <ul class="list-disc ml-5 text-gray-400">
              <li>Order és Product közötti kapcsolat kezelése</li>
              <li>Mennyiség információ tárolása</li>
            </ul>
          </div>
        </fwb-card>

        <!-- Enum -->
        <fwb-card id="orderstatus" variant="horizontal" class="w-full scroll-mt-24 dark-card">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold text-white">6. OrderStatus (Enum)</h5>
            <CodeBlock lang="csharp" :code="orderStatusCode" />
          </div>
        </fwb-card>

        <!-- Relationships -->
        <fwb-card id="relationships" variant="horizontal" class="w-full scroll-mt-24 dark-card">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold text-white">Adatbázis Kapcsolatok</h5>
            <ul class="list-disc ml-5 text-gray-400">
              <li>User ↔ Customer: 1:1 kapcsolat</li>
              <li>Customer ↔ Order: 1:N kapcsolat</li>
              <li>Order ↔ Product: N:N kapcsolat (OrderProduct-on keresztül)</li>
            </ul>
          </div>
        </fwb-card>

  

            <h2 id="api" class="text-3xl font-semibold mb-10 text-indigo-400 scroll-mt-24">
                API Végpontok
            </h2>

            <!-- User Card -->
        <fwb-card id="authcon" variant="horizontal" class="w-full scroll-mt-24 dark-card">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold text-white">1. AuthController</h5>
            <pre class="bg-gray-800 text-white p-3 rounded-md overflow-x-auto text-sm">
<code>
        <h6 class="font-bold">Regisztáció:</h6>
    POST /api/auth/register
    Content-Type: application/json

            <CodeBlock lang="csharp" :code="apiRegist" />

        <h6 class="font-bold">Válasz:</h6>

            <CodeBlock lang="csharp" :code="apiAnswer" />

        <h6 class="font-bold">Bejelentkezés:</h6>
    POST /api/auth/login
    Content-Type: application/json

            <CodeBlock lang="csharp" :code="apiLogin" />
</code>
            </pre>
          </div>
        </fwb-card>

         <!-- User Card -->
        <fwb-card id="custcon" variant="horizontal" class="w-full scroll-mt-24 dark-card">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold text-white">2.  CustomersController (/api/customers)</h5>
            <pre class="bg-gray-800 text-white p-3 rounded-md overflow-x-auto text-sm">
<code>
    
    <h6 class="font-bold">Összes ügyfél lekérése:</h6>
        GET /api/customers

    <h6 class="font-bold">Ügyfél lekérése ID alapján:</h6>
        GET /api/customers/{id}
     
</code>
            </pre>
          </div>
        </fwb-card>

        <!-- User Card -->
        <fwb-card id="prodcon" variant="horizontal" class="w-full scroll-mt-24 dark-card">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold text-white">3.  ProductsController (/api/products)</h5>
            <pre class="bg-gray-800 text-white p-3 rounded-md overflow-x-auto text-sm">
<code>
    
    <h6 class="font-bold">Összes termék lekérése:</h6>
        GET /api/products
    
    <h6 class="font-bold">Válasz:</h6>
    Termékek listája képek URL-jeivel

            <CodeBlock lang="csharp" :code="productAnswer" />

    <h6 class="font-bold">Termék lekérése ID alapján:</h6>
        GET /api/products/{id}

    <h6 class="font-bold">Termék létrehozása:</h6>
        POST /api/products
        Content-Type: multipart/form-data

        name: "Új termék"
        price: 25000
        imageFile: [fájl]

    <h6 class="font-bold">Termék frissítése:</h6>
        PUT /api/products/{id}
        Content-Type: application/json

            <CodeBlock lang="csharp" :code="productPut" />

    <h6 class="font-bold">Termék törlése:</h6>
        DELETE /api/products/{id}
        
    <h6 class="font-bold">Termék kép lekérése:</h6>
        GET /api/products/{id}/image.webp
     
</code>
            </pre>
          </div>
        </fwb-card>

        <!-- User Card -->
        <fwb-card id="ordcon" variant="horizontal" class="w-full scroll-mt-24 dark-card">
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold text-white">4.  OrdersController (/api/orders)</h5>
            <pre class="bg-gray-800 text-white p-3 rounded-md overflow-x-auto text-sm">
<code>
    
    <h6 class="font-bold">Összes rendelés lekérése:</h6>
        GET /api/orders

    <h6 class="font-bold">Rendelés lekérése ID alapján:</h6>
        GET /api/orders/{id}

    <h6 class="font-bold">Ügyfél rendelései:</h6>
        GET /api/orders/customer/{customerId}

    <h6 class="font-bold">Rendelés létrehozása:</h6>
        POST /api/orders
        Content-Type: application/json

            <CodeBlock lang="csharp" :code="orderPost" />

    <h6 class="font-bold">Rendelés törlése:</h6>
        DELETE /api/orders/{id}

    <h6 class="font-bold">PDF számla generálás:</h6>
        GET /api/orders/invoice/{orderId}
     
</code>
            </pre>
          </div>
        </fwb-card>
<!--
        <h2 id="" class="text-3xl font-semibold mb-10 text-pink-400 scroll-mt-24">
                Szolgáltatási Réteg (Services)
        </h2>
        <h2 id="" class="text-3xl font-semibold mb-10 text-orange-400 scroll-mt-24">
                Adatelérési Réteg (Repositories)
        </h2>
-->
            


      </div>
    </div>

  </section>
</template>

<script setup>
import { FwbCard, FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'
import Sidebar from '../components/Sidebar.vue'



// A megjelenítendő kártyák (például)
const cards = ref([
  { id: 'user', title: 'User (Felhasználó)', code: 'userCode', color: 'cyan' },
  { id: 'customer', title: 'Customer (Ügyfél)', code: 'customCode', color: 'cyan' },
  { id: 'product', title: 'Product (Termék)', code: 'productCode', color: 'cyan' },
  { id: 'order', title: 'Order (Rendelés)', code: 'orderCode', color: 'cyan' },
  { id: 'orderproduct', title: 'OrderProduct (Kapcsolótábla)', code: 'orderProductCode', color: 'cyan' },
  { id: 'orderstatus', title: 'OrderStatus (Enum)', code: 'orderStatusCode', color: 'cyan' },
  // ide jöhetnek további API, service stb. kártyák is
])



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

</script>


<style>
html {
  scroll-behavior: smooth;
}

.dark-card {
  background-color: #1e293b !important; /* Tailwind bg-slate-800 színe */
  color: white !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem; /* kerekített sarkok */
}

.title {
  font-size: 2.25rem; /* text-4xl */
  font-weight: 600; /* font-semibold */
  text-align: center;
  color: #06b6d4; /* text-cyan-400 */
  margin-top: 4rem;
}
</style>
