<template>
  <section class="flex flex-col items-center justify-center p-8">
    <div class="max-w-3xl w-full bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-xl p-8 mt-10">
      <h1 class="text-3xl font-semibold text-center text-cyan-400 mb-6">Mi az E-Commerce Systems Ltd.? 🗒️</h1>
      <p class="text-gray-300 leading-relaxed mb-4">
        Az E-Commerce Systems Ltd. v4.2 egy .NET 8.0 alapú RESTful Web API alkalmazás, amely egy e-kereskedelmi rendszert valósít meg. Az alkalmazás lehetővé teszi felhasználók regisztrálását, termékek kezelését, rendelések létrehozását és számlák generálását.
      </p>
      <h2 class="mt-6 mb-3">Technológiai Stack</h2>
        <ul class="list-disc ml-5 text-gray-400">
            <li>.NET 8.0 - Főbb keretrendszer</li>
            <li>Entity Framework Core 8.0.21 - ORM (Object-Relational Mapping)</li>
            <li>MySQL - Adatbázis</li>
            <li>JWT Bearer Authentication - Hitelesítés</li>
            <li>Swagger/OpenAPI - API dokumentáció</li>
            <li>iText7 - PDF számla generálás</li>
            <li>SixLabors.ImageSharp - Képkezelés és WebP konverzió</li>
            <li>BCrypt.Net - Jelszó titkosítás</li>
          </ul>
      <h2 class="mt-6 mb-3">Projekt Struktúra</h2>
      <pre><code>
  E-Commerce Systems Ltd./
  ├── Controllers/           # API végpontok
  ├── Data/                  # Adatbázis kontextus
  ├── DTOs/                  # Data Transfer Objects
  ├── Helpers/               # Segédszolgáltatások
  ├── Models/                # Adatmodell osztályok
  ├── Repositories/          # Adatelérési réteg
  ├── Services/              # Üzleti logika
  ├── Resources/             # Statikus erőforrások
  └── Properties/            # Konfigurációs fájlok
</code></pre>

    </div>
  </section>
</template>

<script setup>

</script>

<style>
pre {
  background-color: #2b3b52;
  padding: 10px;
  border-radius: 8px;
  font-family: "Courier New", monospace;
  font-size: 14px;
  line-height: 1.4;
}
</style>

