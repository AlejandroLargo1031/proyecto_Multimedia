<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];
    $confirmar_contrasena = $_POST['confirmar_contrasena'];

    if ($contrasena === $confirmar_contrasena) {
        // Hash de la contraseña antes de almacenarla en la base de datos
        $contrasena_hash = password_hash($contrasena, PASSWORD_DEFAULT);

        $sql = "INSERT INTO registro (nombre, direccion, telefono, correo, contrasena) VALUES ('$nombre', '$direccion', '$telefono', '$correo', '$contrasena_hash')";

        if ($conn->query($sql) === TRUE) {
            echo "<script>alert('Registro exitoso'); window.location.href='login.html';</script>";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "<script>alert('Las contraseñas no coinciden'); window.location.href='register.html';</script>";
    }
}

$conn->close();
?>
