export const modelCards = [
{
    id: 'user',
    title: '1.1 User (Felhasználó)',
    code: 'userCode',
    color: 'cyan',
    description: `Felelősségek:

- Felhasználói hitelesítés és jogosultságkezelés  
- Jelszó biztonságos tárolása BCrypt hasheléssel  
- Szerepkör alapú hozzáférés szabályozás`
},

{
    id: 'customer', 
    title: '1.2 Customer (Ügyfél)', 
    code: 'customCode', 
    color: 'cyan', 
    description: `Felelősségek:

- Ügyfél profil információk tárolása
- User entitással 1:1 kapcsolat
- Rendelésekhez való kapcsolódás`
},

{ 
    id: 'product', 
    title: '1.3 Product (Termék)', 
    code: 'productCode', 
    color: 'cyan', 
    description: `Felelősségek:

- Termék információk és árak tárolása
- Képfájlok bináris formátumban tárolása
- Many-to-Many kapcsolat rendelésekkel` 

},

{ 
    id: 'order', 
    title: '1.4 Order (Rendelés)', 
    code: 'orderCode', 
    color: 'cyan',
    description: `Felelősségek:

- Rendelések nyilvántartása
- Rendelés státusz követése (Accepted, Canceled, Delivered)
- Termékekhez való kapcsolódás` 
},

{ 
    id: 'orderproduct', 
    title: '1.5 OrderProduct (Kapcsolótábla)', 
    code: 'orderProductCode', color: 'cyan',
    description: `Felelősségek:

- Many-to-Many kapcsolat megvalósítása Order és Product között
- Mennyiség információ tárolása` 
},

{ 
    id: 'orderstatus', 
    title: '1.6 OrderStatus (Enum)', 
    code: 'orderStatusCode', 
    color: 'cyan' 
}

];

export const apiCards = [
{ 
    id: 'authcon', 
    title: '2.1.1 AuthController (Regisztráció)',
    description: `<b>POST /api/auth/register</b><br><br>
    Content-Type: application/json` ,
    code: 'apiRegist', 
    color: 'indigo'
},

{ 
    id: 'apianswer', 
    title: '2.1.2 AuthController (Válaszok)', 
    code: 'apiAnswer', 
    color: 'indigo' 
},

{ 
    id: 'apilogin', 
    title: '2.1.3 AuthController (Bejelentkezés)',
    description: `<b>POST /api/auth/login</b><br><br>
    Content-Type: application/json` ,
    code: 'apiLogin', 
    color: 'indigo' 
},

{ 
    id: 'custcon', 
    title: '2.2 CustomersController (/api/customers)', 
    description: `
    Összes ügyfél lekérése<br>
    <b>GET /api/customers</b><br><br>
    Ügyfél lekérése ID alapján<br>
    <b>GET /api/customers/{id}</b>
  `,
    type: 'text' 
},

{ 
    id: 'prodcon', 
    title: '2.3.1 ProductsController (/api/products)',
    description: `
    Összes termék lekérése<br>
    <b>GET /api/products</b><br><br>
    Válasz: Termékek listája képek URL-jeivel<br>
    `,
    code: 'productAnswer',
    color: 'indigo' 
},

{
    id: 'productget',
    title: '2.3.2 Termék lekérése ID alapján',
    description: `
    <b>GET /api/products/{id}</b>
    `,
},

{
    id: 'productpost', 
    title: '2.3.3 Termék létrehozása', 
    description: `
    <b>POST /api/products</b><br>
    Content-Type: multipart/form-data<br><br>

    name: "Új termék"<br>
    price: 25000<br>
    imageFile: [fájl]
    `,
    color: 'indigo'
},

{ 
    id: 'productput', 
    title: '2.3.4 Termék frissítése', 
    description: `
    <b>PUT /api/products/{id}</b><br><br>
    Content-Type: application/json
}
    `,
    code: 'productPut', 
    color: 'indigo' 
},

{
    id: 'productdelete', 
    title: '2.3.5 Termék törlése', 
    description: `
    <b>DELETE /api/products/{id}</b>
    `,
},

{
    id: 'orderimage', 
    title: '2.3.6 Termék kép lekérése', 
    description: `
    <b>GET /api/products/{id}/image.webp</b>
    `,
},

{ 
    id: 'ordcon', 
    title: '2.4.1 OrdersController (/api/orders)',
    description: `
    Összes rendelés lekérése<br>
    <b>GET /api/orders</b><br><br>
    Rendelés lekérése ID alapján<br>
    <b>GET /api/orders/{id}</b><br><br>
    Ügyfél rendelései<br>
    <b>GET /api/orders/customer/{customerId}</b><br><br>
    Rendelés létrehozása<br>
    <b>POST /api/orders</b><br><br>
    Content-Type: application/json
    `,
    code: 'orderPost', 
    color: 'indigo' 
},

{
    id: 'orderdelete', 
    title: '2.4.2 Rendelés törlése', 
    description: `
    <b>DELETE /api/orders/{id}</b>
    `,
},

{
    id: 'orderinvoice', 
    title: '2.4.3 PDF számla generálása', 
    description: `
    <b>GET /api/orders/invoice/{orderId}</b>
    `,
},

];
