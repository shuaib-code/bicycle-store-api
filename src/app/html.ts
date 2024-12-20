export const homepaga: string = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet">
    

    <title>Bicycle Store</title>
    <style>
        /* Global Styles */
        :root {
            --primary-color: #00796b;
            --secondary-color: #004d40;
            --accent-color: #ffca28;
            --background-color: #212121;
            --text-light: #ffffff;
            --footer-bg: #333333;
            --font-family: 'Playfair Display', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            font-family: var(--font-family);
            margin: 0;
            padding: 0;
            background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
            background-size: cover;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-x: hidden;
            scroll-behavior: smooth;
            transition: background 1s ease-in-out;
        }

        /* Container Box with Glassmorphism Effect */
        .container-box {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(15px);
            border-radius: 20px;
            width: 90%;
            max-width: 1200px;
            padding: 40px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
            text-align: center;
            transform: translateY(50px);
            opacity: 0;
            animation: fadeIn 1s ease-out forwards;
            transition: transform 0.3s ease;
        }

        /* Header Styles */
        header {
            background-color: var(--primary-color);
            color: var(--text-light);
            padding: 40px 20px;
            text-align: center;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
            border-radius: 15px;
            position: relative;
            z-index: 1;
        }

        header h1 {
            margin: 0;
            font-size: 2.8em;
            font-weight: 700;
            text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
        }

        header p {
            margin: 10px 0 0;
            font-size: 1.5em;
        }

        /* Main Content Styles */
        main {
            padding: 40px;
        }

        main h2 {
            margin-bottom: 20px;
            font-size: 2em;
            font-weight: 600;
            color: var(--accent-color);
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        }

        .button {
            background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
            color: var(--text-light);
            padding: 16px 32px;
            margin: 10px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s ease;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            display: inline-block;
            font-size: 1.2em;
            position: relative;
            overflow: hidden;
            border: none;
        }

        .button:hover {
            background: linear-gradient(45deg, var(--secondary-color), var(--accent-color));
            transform: translateY(-4px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
        }

        .button:active {
            transform: scale(0.98);
        }

        .button::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300%;
            height: 300%;
            background: rgba(255, 255, 255, 0.4);
            transition: width 0.4s, height 0.4s, top 0.4s, left 0.4s;
            border-radius: 50%;
            z-index: 0;
            transform: translate(-50%, -50%);
        }

        .button:hover::before {
            width: 0;
            height: 0;
            top: 50%;
            left: 50%;
        }

        /* Footer Styles */
        footer {
            background-color: var(--footer-bg);
            color: var(--text-light);
            text-align: center;
            padding: 20px;
            font-size: 1em;
            position: relative;
            margin-top: 30px;
            box-shadow: 0 -6px 15px rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            animation: fadeIn 1s ease-out 1s forwards;
        }

        /* Animations */
        @keyframes fadeIn {
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        /* Hover effect on Container */
        .container-box:hover {
            transform: translateY(-10px);
        }

        /* Responsive Design */
        @media (min-width: 768px) {
            .button {
                padding: 16px 32px;
                font-size: 1.3em;
            }

            main h2 {
                font-size: 2.2em;
            }
        }
    </style>
</head>

<body>
    <div class="container-box">
        <header>
            <h1>Welcome to the Bicycle Store Server</h1>
            <p>Your one-stop shop for premium bicycles</p>
        </header>
        <main>
            <h2>Explore Our Shop API:</h2>
            <a href="/api/products" class="button">View Bicycles</a>
            <a href="/api/orders/revenue" class="button">Check Revenue</a>
        </main>
        <footer>
            <p>&copy; 2024 Bicycle Store. All rights reserved.</p>
        </footer>
    </div>
</body>

</html>
`;
