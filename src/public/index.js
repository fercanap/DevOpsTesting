<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso GitHub Actions</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        .header {
            background: #f4f4f4;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .endpoint {
            background: #f9f9f9;
            padding: 10px;
            margin: 10px 0;
            border-left: 4px solid #007acc;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🚀 Curso de GitHub Actions</h1>
        <p>Esta es una aplicación de ejemplo para practicar CI/CD con GitHub Actions</p>
    </div>

    <h2>Endpoints disponibles:</h2>
    
    <div class="endpoint">
        <strong>GET /</strong> - Información de la API
    </div>
    
    <div class="endpoint">
        <strong>GET /health</strong> - Estado del servidor
    </div>
    
    <div class="endpoint">
        <strong>POST /calculate</strong> - Calculadora matemática
        <p><em>Body:</em> {"operation": "add|subtract|multiply|divide", "a": number, "b": number}</p>
    </div>

    <h2>Comandos útiles:</h2>
    <ul>
        <li><code>npm start</code> - Iniciar servidor</li>
        <li><code>npm test</code> - Ejecutar tests</li>
        <li><code>npm run lint</code> - Verificar código</li>
        <li><code>npm run build</code> - Build completo</li>
    </ul>
</body>
</html>