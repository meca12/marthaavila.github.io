<?php
$to = "itit.martha.avil@gmail.com";
 $subject = $_POST['subject'];
 $body ="Correo de portafolio Martha avila" ."De, ".$_POST['name']."\n\n"."Email, ".$_POST['email']."\n\n".$_POST['message'];
 if (mail($to, $subject, $body)) {
  $responseArray = array('class' => 'alert alert-success', 'message' => 'Mensaje enviado con éxito. Gracias, nos pondremos en contacto contigo pronto.');
  } else {
$responseArray = array('class' => 'alert alert-danger', 'message' => 'Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.');
     
  }

    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;

 ?>