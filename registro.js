<!DOCTYPE html>
<html lang="es">
<head><title>Registro</title></head>
<body>
    <h1>Regístrate</h1>
    <form action="/registro" method="POST">
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Registrarse</button>
    </form>
</body>
</html>

-------
server.js
------
// ...después de la ruta '/' app.get('/registro', (req, res) => { res.render('registro'); });