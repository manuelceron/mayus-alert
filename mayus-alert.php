<?php
/*
Plugin Name: Mayus Alert Plugin
Description: Un plugin que alerta cuando la tecla Mayúsculas está activada en un campo de contraseña.
Version: 1.0
Author: Manuel Cerón
*/

// Hook para cargar el script en la página
add_action('wp_enqueue_scripts', 'mayus_alert_enqueue_script');

function mayus_alert_enqueue_script() {
    // Registrar el script de JavaScript
    wp_register_script('mayus-alert-script', plugins_url('mayus-alert.js', __FILE__), array(), '1.0', true);
    
    // Cargar el script solo si la página tiene inputs con la clase "mayus-alert"
    if (has_class_in_page('mayus-alert')) {
        wp_enqueue_script('mayus-alert-script');
    }
}

// Función para verificar si un input con la clase "mayus-alert" existe en la página
function has_class_in_page($class) {
    global $post;
    if (has_shortcode($post->post_content, 'mayus-alert')) {
        return true;
    }
    
    // Alternativamente, podrías hacer una verificación más avanzada del contenido HTML
    return false;
}

// Hook para cargar el estilo (opcional)
add_action('wp_enqueue_scripts', 'mayus_alert_enqueue_styles');

function mayus_alert_enqueue_styles() {
    wp_register_style('mayus-alert-style', plugins_url('mayus-alert.css', __FILE__));
    wp_enqueue_style('mayus-alert-style');
}
