# Bicycle Store API 🛒🚴‍♂️

A feature-rich Bicycle Store management system built using **Express** and **TypeScript**, with MongoDB as the database and Mongoose for data modeling. This application handles product inventory, order management, and revenue calculation while ensuring data integrity through Mongoose schema validation.

---

## 🌟 Features

- **Product Management**:

  - Add, view, update, and delete bicycles.
  - Search products by `name`, `brand`, or `type` with dynamic filters.

- **Order Management**:

  - Place orders, manage inventory automatically, and handle stock levels.
  - Validate insufficient stock scenarios gracefully.

- **Revenue Calculation**:

  - Aggregate and calculate total revenue from all orders.

- **Validation and Error Handling**:

  - Comprehensive validation for user inputs (e.g., email format, positive price).
  - Detailed error responses with validation error insights.
  - Not Found and Generic Error responses with stack traces for debugging.

- **Clean Code and Architecture**:

  - TypeScript for type safety.
  - Modular structure for scalability and maintainability.
  - Well-documented codebase with meaningful variable and function names.

- **Ready for Deployment**:
  - Built-in scripts for development, production, and formatting.
  - Easily deployable to any cloud provider.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [TypeScript](https://www.typescriptlang.org/) (v4+)

---

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/your-username/bicycle-store-api.git
   cd bicycle-store-api
```

2. Go to the project directory:

```bash
  cd bicycle-store-api
```

3. Install dependencies:

```bash
  npm install
```

4. Set up your environment variables by creating a .env file:

```bash
  MONGO_URI=<Your MongoDB URI>
  PORT=5000
```

5. Build the project:

```bash
  npm run build
```

6. Start the application:

```bash
  npm run start:dev
```

## API Endpoints

### **Product Management**

### **1. Create a Bicycle**

- **Endpoint:** **`/api/products`**
- **Method:** `POST`
- **Request Body:**

```json
{
	"name": "Roadster 5000",
	"brand": "SpeedX",
	"price": 300,
	"type": "Road",
	"description": "A premium road bike designed for speed and performance.",
	"quantity": 20,
	"inStock": true
}
```

- **Response:** Success message and created bicycle details.

```json
{
	"message": "Bicycle created successfully",
	"success": true,
	"data": {
		"_id": "648a45e5f0123c45678d9012",
		"name": "Roadster 5000",
		"brand": "SpeedX",
		"price": 300,
		"type": "Road",
		"description": "A premium road bike designed for speed and performance.",
		"quantity": 20,
		"inStock": true,
		"createdAt": "2024-11-19T10:23:45.123Z",
		"updatedAt": "2024-11-19T10:23:45.123Z"
	}
}
```

---

### **2. Get All Bicycles**

- **Endpoint:** **`/api/products`**
- **Method:** `GET`
- **Response:** A list of all bicycles with details like name, brand, price, type, etc.
- **Query:** `/api/products?searchTerm=type` (`searchTerm` can be `name`, `brand`, `type`)

```json
{
	"message": "Bicycles retrieved successfully",
	"status": true,
	"data": [
		{
			"_id": "648a45e5f0123c45678d9012",
			"name": "Roadster 5000",
			"brand": "SpeedX",
			"price": 300,
			"type": "Road",
			"description": "A premium road bike designed for speed and performance.",
			"quantity": 20,
			"inStock": true,
			"createdAt": "2024-11-19T10:23:45.123Z",
			"updatedAt": "2024-11-19T10:23:45.123Z"
		}
	]
}
```

---

### **3. Get a Specific Bicycle**

- **Endpoint:** **`/api/products/:productId`**
- **Method:** `GET`
- **Response:** The details of a specific bicycle by ID.

```json
{
	"message": "Bicycle retrieved successfully",
	"status": true,
	"data": {
		"_id": "648a45e5f0123c45678d9012",
		"name": "Roadster 5000",
		"brand": "SpeedX",
		"price": 300,
		"type": "Road",
		"description": "A premium road bike designed for speed and performance.",
		"quantity": 20,
		"inStock": true,
		"createdAt": "2024-11-19T10:23:45.123Z",
		"updatedAt": "2024-11-19T10:23:45.123Z"
	}
}
```

---

### **4. Update a Bicycle**

- **Endpoint:** **`/api/products/:productId`**
- **Method:** `PUT`
- **Request Body:** (Bicycle details to update)

```json
{
	"price": 350,
	"quantity": 15
}
```

- **Response:** Success message and updated bicycle details.

```json
{
	"message": "Bicycle updated successfully",
	"status": true,
	"data": {
		"_id": "648a45e5f0123c45678d9012",
		"name": "Roadster 5000",
		"brand": "SpeedX",
		"price": 350, // Price updated
		"type": "Road",
		"description": "A premium road bike designed for speed and performance.",
		"quantity": 15, // Quantity updated
		"inStock": true,
		"createdAt": "2024-11-19T10:23:45.123Z",
		"updatedAt": "2024-11-19T11:00:00.000Z" // Updated timestamp
	}
}
```

---

### **5. Delete a Bicycle**

- **Endpoint:** **`/api/products/:productId`**
- **Method:** `DELETE`
- **Response:** Success message confirming the bicycle has been deleted.

```json
{
	"message": "Bicycle deleted successfully",
	"status": true,
	"data": {}
}
```

---

### **Product Management**

### **1. Order a Bicycle**

- **Endpoint:** **`/api/orders`**
- **Method:** `POST`
- **Request Body:**

```json
{
	"email": "customer@example.com",
	"product": "648a45e5f0123c45678d9012",
	"quantity": 2,
	"totalPrice": 600
}
```

- **Response:** Success message confirming the order.

```json
{
	"message": "Order created successfully",
	"status": true,
	"data": {
		"_id": "648b45f5e1234b56789a6789",
		"email": "customer@example.com",
		"product": "648a45e5f0123c45678d9012",
		"quantity": 2,
		"totalPrice": 600,
		"createdAt": "2024-11-19T12:00:00.000Z",
		"updatedAt": "2024-11-19T12:00:00.000Z"
	}
}
```

---

### **2. Calculate Revenue from Orders (Aggregation)**

- **Endpoint:** **`/api/orders/revenue`**
- **Method:** `GET`
- **Response:** The total revenue from all orders.

```json
{
	"message": "Revenue calculated successfully",
	"status": true,
	"data": {
		"totalRevenue": 1200 // Total revenue calculated from all orders
	}
}
```

---

## 🎥 Video Explanation

Watch the video walkthrough for a detailed explanation of features, design choices, and API testing: [Watch the Walkthrough](your-video-link-here)

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## 📜 License

This project is licensed under the MIT License.

Happy coding! 🚀
