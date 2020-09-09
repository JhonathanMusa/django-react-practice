<!-- ingresa todos los datos referentes a tu conexion de base de datos
de esta forma solo tendras que modificar un solo archivo -->
<?php
$host_db = "localhost";
$user_db = "root";
$pass_db = "";
$db_name = "basedatosmaster";
$tbl_name = "usuarios";

$conexion = new mysqli($host_db, $user_db, $pass_db, $db_name);
if ($conexion->connect_error){
    die("La conexion falló: " . $conexion->connect_error);
}

?>