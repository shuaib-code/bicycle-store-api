export const homepaga: string = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=.7">
  <title>Bicycle Store API Overview</title>
  <link rel="icon" href="data:," />
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Custom Styles */
    body {
      font-family: 'Roboto Slab', serif;
    }

    .btn-primary {
      background-color: #f8c10c;
      color: #2c3e50;
      padding: 12px 24px;
      border-radius: 30px;
      font-weight: 700;
      transition: all 0.3s ease;
    }

    .btn-primary:hover {
      background-color: #e6b800;
      transform: scale(1.05);
    }

    .section-shadow {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
    }

    .section-shadow:hover {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
    }

    .gradient-bg {
      background: linear-gradient(135deg, #6e7f80, #93a5cf);
    }

    .header-link {
      transition: color 0.3s ease;
    }

    .header-link:hover {
      color: #f8c10c;
    }

    .cta-button {
      background-color: #f8c10c;
      color: #2c3e50;
      padding: 16px 32px;
      font-weight: 700;
      border-radius: 50px;
      transition: background-color 0.3s ease;
    }

    .cta-button:hover {
      background-color: #e6b800;
    }
  </style>
</head>

<body class="bg-gray-50">

  <!-- Navigation -->
  <nav class="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-6 text-white">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-3xl font-bold">Bicycle Store API</h1>
      <ul class="flex space-x-8">
        <li><a href="#overview" class="header-link text-lg">Overview</a></li>
        <li><a href="#api-endpoints" class="header-link text-lg">API Endpoints</a></li>
        <li><a href="#contact" class="header-link text-lg">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="gradient-bg text-white py-20 text-center">
    <h2 class="text-5xl font-semibold mb-6">Welcome to the Bicycle Store API</h2>
    <p class="text-xl mb-8">A robust API to manage bicycles, orders, and more. Integrate seamlessly with your application!</p>
    <a href="#api-endpoints" class="cta-button">Explore the API</a>
  </section>

  <!-- Overview Section -->
  <section id="overview" class="container mx-auto p-10 mt-12 bg-white rounded-lg section-shadow">
    <h2 class="text-4xl font-semibold text-gray-800 mb-6">API Overview</h2>
    <p class="text-lg text-gray-700 mb-6">The Bicycle Store API helps you manage bicycles and orders efficiently. It supports creating, retrieving, updating, and deleting bicycles, along with order management and revenue tracking.</p>
    <p class="text-lg text-gray-700">Key Features:</p>
    <ul class="list-disc pl-6 text-gray-700 mb-6">
      <li>CRUD operations for bicycles</li>
      <li>Order management with inventory updates</li>
      <li>Revenue calculation using MongoDB aggregation</li>
      <li>Data validation with Mongoose schemas</li>
    </ul>
    <a href="#api-endpoints" class="text-blue-600 hover:text-yellow-300">View API Endpoints &rarr;</a>
  </section>

  <!-- API Endpoints Section -->
  <section id="api-endpoints" class="container mx-auto p-10 mt-12 bg-gray-50 rounded-lg section-shadow">
    <h2 class="text-4xl font-semibold text-gray-800 mb-6">API Endpoints</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Endpoint Card -->
      <div class="bg-white p-8 rounded-lg section-shadow">
        <h3 class="text-xl font-semibold text-blue-600 mb-4">1. Create a Bicycle</h3>
        <p class="text-gray-600 mb-2">POST /api/products</p>
        <p class="text-sm text-gray-500">Request Body: { name, brand, price, type, description, quantity, inStock }</p>
        <a href="#" class="text-blue-600 hover:text-yellow-300">Learn More &rarr;</a>
      </div>

      <!-- Endpoint Card -->
      <div class="bg-white p-8 rounded-lg section-shadow">
        <h3 class="text-xl font-semibold text-blue-600 mb-4">2. Get All Bicycles</h3>
        <p class="text-gray-600 mb-2">GET /api/products</p>
        <p class="text-sm text-gray-500">Query Params: ?searchTerm={name, brand, type}</p>
        <a href="#" class="text-blue-600 hover:text-yellow-300">Learn More &rarr;</a>
      </div>

      <!-- Endpoint Card -->
      <div class="bg-white p-8 rounded-lg section-shadow">
        <h3 class="text-xl font-semibold text-blue-600 mb-4">3. Get a Specific Bicycle</h3>
        <p class="text-gray-600 mb-2">GET /api/products/:productId</p>
        <p class="text-sm text-gray-500">Retrieve details of a specific bicycle using its ID.</p>
        <a href="#" class="text-blue-600 hover:text-yellow-300">Learn More &rarr;</a>
      </div>

      <!-- Endpoint Card -->
      <div class="bg-white p-8 rounded-lg section-shadow">
        <h3 class="text-xl font-semibold text-blue-600 mb-4">4. Order a Bicycle</h3>
        <p class="text-gray-600 mb-2">POST /api/orders</p>
        <p class="text-sm text-gray-500">Request Body: { email, product, quantity, totalPrice }</p>
        <a href="#" class="text-blue-600 hover:text-yellow-300">Learn More &rarr;</a>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="bg-blue-600 text-white py-12 mt-12">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-semibold mb-6">Contact Us</h2>
      <p class="text-xl mb-8">For any inquiries or support, feel free to reach out!</p>
      <a href="mailto:support@bicyclestore.com" class="text-yellow-300 text-lg">support@bicyclestore.com</a>

      <!-- Contact Form -->
      <form action="#" method="post" class="mt-8 max-w-lg mx-auto space-y-6">
        <input type="text" name="name" placeholder="Your Name" class="p-4 w-full bg-white text-gray-700 border rounded-lg" required>
        <input type="email" name="email" placeholder="Your Email" class="p-4 w-full bg-white text-gray-700 border rounded-lg" required>
        <textarea name="message" placeholder="Your Message" class="p-4 w-full bg-white text-gray-700 border rounded-lg" required></textarea>
        <button type="submit" class="btn-primary w-full">Send Message</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-6 text-center">
    <p>&copy; 2024 Bicycle Store API. All rights reserved.</p>
  </footer>

</body>

</html>

`;
