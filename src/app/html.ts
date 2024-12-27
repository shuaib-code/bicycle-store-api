export const homepaga: string = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bicycle Store API Overview</title>
  <link rel="icon" href="data:," />
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 font-sans leading-relaxed">

  <!-- Navigation -->
  <nav class="bg-blue-600 p-4 text-white">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">Bicycle Store API</h1>
      <ul class="flex space-x-6">
        <li><a href="#overview" class="hover:text-yellow-300">Overview</a></li>
        <li><a href="#api-endpoints" class="hover:text-yellow-300">API Endpoints</a></li>
        <li><a href="#contact" class="hover:text-yellow-300">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="bg-blue-500 text-white py-16 text-center">
    <h2 class="text-4xl font-bold mb-4">Welcome to the Bicycle Store API</h2>
    <p class="text-xl">Manage bicycles, orders, and more with our RESTful API. Easily integrate with your application!</p>
  </section>

  <!-- Overview Section -->
  <section id="overview" class="container mx-auto p-6 mt-8 bg-white shadow-lg rounded-lg hover-effect">
    <h2 class="text-3xl font-semibold text-gray-800 mb-4">API Overview</h2>
    <p class="text-lg text-gray-600 mb-4">Our Bicycle Store API allows you to manage bicycles and orders, with endpoints to create, retrieve, update, and delete products. It also supports order creation and revenue tracking.</p>
    <p class="text-lg text-gray-600">Key Features:</p>
    <ul class="list-disc pl-6 text-gray-600">
      <li>CRUD operations for bicycles</li>
      <li>Order management with inventory updates</li>
      <li>Revenue calculation using MongoDB aggregation</li>
      <li>Data validation with Mongoose schemas</li>
    </ul>
  </section>

  <!-- API Endpoints Section -->
  <section id="api-endpoints" class="container mx-auto p-6 mt-8 bg-gray-50 shadow-lg rounded-lg hover-effect">
    <h2 class="text-3xl font-semibold text-gray-800 mb-4">API Endpoints</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Create Bicycle -->
      <div class="bg-white p-6 shadow-lg rounded-lg hover-effect">
        <h3 class="text-xl font-semibold text-blue-600 mb-2">1. Create a Bicycle</h3>
        <p class="text-gray-600 mb-2">POST /api/products</p>
        <p class="text-sm text-gray-500">Request Body: { name, brand, price, type, description, quantity, inStock }</p>
      </div>

      <!-- Get All Bicycles -->
      <div class="bg-white p-6 shadow-lg rounded-lg hover-effect">
        <h3 class="text-xl font-semibold text-blue-600 mb-2">2. Get All Bicycles</h3>
        <p class="text-gray-600 mb-2">GET /api/products</p>
        <p class="text-sm text-gray-500">Query Params: ?searchTerm={name, brand, type}</p>
      </div>

      <!-- Get Specific Bicycle -->
      <div class="bg-white p-6 shadow-lg rounded-lg hover-effect">
        <h3 class="text-xl font-semibold text-blue-600 mb-2">3. Get a Specific Bicycle</h3>
        <p class="text-gray-600 mb-2">GET /api/products/:productId</p>
        <p class="text-sm text-gray-500">Retrieve details of a specific bicycle using its ID.</p>
      </div>

      <!-- Order a Bicycle -->
      <div class="bg-white p-6 shadow-lg rounded-lg hover-effect">
        <h3 class="text-xl font-semibold text-blue-600 mb-2">4. Order a Bicycle</h3>
        <p class="text-gray-600 mb-2">POST /api/orders</p>
        <p class="text-sm text-gray-500">Request Body: { email, product, quantity, totalPrice }</p>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="bg-blue-600 text-white py-8 mt-8">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-semibold mb-4">Contact Us</h2>
      <p class="text-xl mb-4">For any inquiries or support, feel free to reach out!</p>
      <a href="mailto:support@bicyclestore.com" class="text-yellow-300 text-lg">support@bicyclestore.com</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-4 text-center">
    <p>&copy; 2024 Bicycle Store API. All rights reserved.</p>
  </footer>

</body>

</html>

`;
