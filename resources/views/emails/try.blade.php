<!-- resources/views/welcome.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome | My Website</title>
    <!-- Link to Tailwind CSS (add this in your public/layouts/app.blade.php if using a layout) -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-900 font-sans">
    <!-- Header -->
    <header class="bg-blue-600 text-white py-4">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-3xl font-bold">My Website</h1>
            <nav>
                <a href="#" class="text-white hover:text-gray-200 px-4">Home</a>
                <a href="#" class="text-white hover:text-gray-200 px-4">About</a>
                <a href="#" class="text-white hover:text-gray-200 px-4">Contact</a>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto py-8">
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold mb-4">Welcome to My Website!</h2>
            <p class="text-gray-700 mb-4">We're glad you're here. Explore our content and learn more about what we have to offer. If you have any questions, feel free to reach out through our contact page.</p>
            <a href="#" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Get Started</a>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4">
        <div class="container mx-auto text-center">
            <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
