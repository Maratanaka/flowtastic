<template>
  <aside class="md:sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto bg-gray-800 rounded-xl p-4 custom-scrollbar">
    <h3 class="text-lg font-semibold mb-3 text-white">Tartalomjegyzék</h3>
    <ul class="space-y-2 text-gray-300">

    <li><a href="#database" class="text-cyan-400">1. Adatbázis Kapcsolatok</a></li>
    <li><a href="#user" class="hover:text-cyan-500">1.1 User</a></li>
    <li><a href="#customer" class="hover:text-cyan-500">1.2 Customer</a></li>
    <li><a href="#product" class="hover:text-cyan-500">1.3 Product</a></li>
    <li><a href="#order" class="hover:text-cyan-500">1.4 Order</a></li>
    <li><a href="#orderproduct" class="hover:text-cyan-500">1.5 OrderProduct</a></li>
    <li><a href="#orderstatus" class="hover:text-cyan-500">1.6 OrderStatus</a></li>
    <li><a href="#relationships" class="hover:text-cyan-500">1.7 Adatbázis Kapcsolatok</a></li>

    <li><a href="#api" class="text-indigo-400">2. API Végpontok</a></li>
    <li><a href="#authcon" class="hover:text-indigo-500">2.1 AuthController (/api/auth)</a></li>
    <li><a href="#custcon" class="hover:text-indigo-500">2.2 CustomersController (/api/customers)</a></li>
    <li><a href="#prodcon" class="hover:text-indigo-500">2.3 ProductsController (/api/products)</a></li>
    <li><a href="#ordcon" class="hover:text-indigo-500">2.4 OrdersController (/api/orders)</a></li>

    <li><a href="#services" class="text-pink-400">Szolgáltatási Réteg (Services)</a></li>
    <li><a href="#authser" class="hover:text-pink-500">1. AuthService</a></li>
    <li><a href="#custser" class="hover:text-pink-500">2. CustomerService</a></li>
    <li><a href="#prodser" class="hover:text-pink-500">3. ProductService</a></li>
    <li><a href="#ordser" class="hover:text-pink-500">4. OrderService</a></li>

    <li><a href="#repsitories" class="text-yellow-400">Adatelérési Réteg (Repositories)</a></li>
    <li><a href="#repatimp" class="hover:text-yellow-500">Repository Pattern Implementáció</a></li>
    
    <li><a href="#helpers" class="text-green-400">Segédszolgáltatások(Helpers)</a></li>
    <li><a href="#imageservice" class="hover:text-green-500">ImageService</a></li>
    <li><a href="#generateinvoice" class="hover:text-green-500">GenerateInvoice</a></li>

    <li><a href="#dtos" class="text-fuchsia-400">Data Transfer Objects (DTOs)</a></li>
    <li><a href="#authdtos" class="hover:text-fuchsia-500">Auth DTOs</a></li>
    <li><a href="#productdtos" class="hover:text-fuchsia-500">Product DTOs</a></li>
    <li><a href="#orderdtos" class="hover:text-fuchsia-500">Order DTOs</a></li>

    <li><a href="#configuration" class="text-rose-400">Konfiguráció</a></li>
    <li><a href="#appsettings" class="hover:text-rose-500">appsettings.json</a></li>
    <li><a href="#programconfig" class="hover:text-rose-500">Program.cs Konfiguráció</a></li>
    <li><a href="#jwt" class="hover:text-rose-500">JWT Hitelesítés</a></li>
    <li><a href="#cors" class="hover:text-rose-500">CORS Konfiguráció</a></li>
    
    <li><a href="#databaseconfig" class="text-lime-400">Adatbázis Configuráció</a></li>
    <li><a href="#entityframe" class="hover:text-lime-500">Entity Framework Setup</a></li>
    <li><a href="#seed" class="hover:text-lime-500">Seed Adatok</a></li>

    </ul>
  </aside>
</template>

<style scoped>
/* WebKit (Chrome, Edge, Safari) görgetősáv */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px; /* scrollbar szélessége */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent; /* háttér */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(100, 100, 100, 0.4); /* szürke, átlátszó thumb */
  border-radius: 10px;
  transition: background-color 0.3s;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.8); /* világosabb hover */
}

/* Firefox támogatás */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(100, 100, 100, 0.4) transparent;
}

@media (prefers-color-scheme: dark) {
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.4);
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(229, 231, 235, 0.6);
  }
  .custom-scrollbar {
    scrollbar-color: rgba(156, 163, 175, 0.4) transparent;
  }
}
</style>

<script>

</script>