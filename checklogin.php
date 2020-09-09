<?php

session_start();

?>

<?php 
require_once 'conexion.php';


$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM $tbl_name WHERE nombre_usuario = '$username'";

$result = $conexion->query($sql);

if ($result->num_rows > 0){}

$row = $result->fetch_array(MYSQLI_ASSOC);
// if (password_verify($password, $row['password])) {}

if ($password = $row['password']){
    $_SESSION['loggedin'] = TRUE;
    $_SESSION['username'] = $username;
    $_SESSION['start'] = time();
    $_SESSION['expire'] = $_SESSION['start'] + (5 * 60);

    echo "Bienvenido! " .$_SESSION['username'];
    echo "<br><br><a href=panel-control.php>Panel de control</a>";
    header("Location: panel-control.php"); // redirecciona a la pagina del usuario
} else {
    echo "Username o Password estan incorrectos";

    echo "<br><a href='login.html'>Volver a Intentar</a>";
}

$conexion->close();

?>