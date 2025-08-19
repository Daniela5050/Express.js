<!DOCTYPE html>
<html lang="es">
<head><title>Login</title></head>
<body>
    <h1>Inicia Sesión</h1>
    <form action="/login" method="POST">
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Entrar</button>
    </form>
</body>
</html>



server.js
----------------------

app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/perfil');
        }
        res.clearCookie('connect.sid'); // Limpia la cookie de sesión
        res.redirect('/');
    });
});


const isAuth = (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    next();
};



// Usamos el middleware 'isAuth' aquí
app.get('/perfil', isAuth, (req, res) => {
    res.render('perfil');
});


--------------------
perfil.ejs
-----------------------
<!DOCTYPE html>
<html lang="es">
<head><title>Mi Perfil</title></head>
<body>
    <h1>¡Bienvenido al Club Secreto!</h1>
    <p>Este contenido es exclusivo para miembros.</p>

    <form action="/logout" method="POST">
        <button type="submit">Cerrar Sesión</button>
    </form>
</body>
</html>
