# Playtomic test by Natacha

⚛️ La aplicación está desarrollada con React y TypeScript usando el boilerplate CRA.

🗃️ A nivel de sistema de login he usado Firebase, la parte de autentificación con el usuario y contraseña.

💚 Lo he desplegado en Netlify, esta es el enlace para poder probarla: [Playtomic test by Natacha](https://natacha-test-playtomic.netlify.app/).

👤 El usuario y contraseña para poder entrar son los suientes:

```
Email: natachaplaytomic@gmail.com
Password: natacha123
```

💜 Otra parte importante de este proyecto es la gestión del estado, la cual he gestionado con Redux tal y como pedíais en la prueba.  

En el estado he decidido solo poner el tema del usuario del login porque es la parte común que yo voy a compartir en diferentes vistas.  

La parte de Firestore he decidido no ponerla como modulo de Redux porque solo lo uso en una única parte y no es compartida en demás vistas.  



🔐 También he gestionado las rutas autentificadas para cuando una vez estes logueado te redirija al Dashboard.   

He añadido la persistencia del login. He leído que es mejor hacerlo por cookie aumque yo lo he hecho en modo Session Strage para facilitar el desarrollo.   

Una vez logueado, si recargamos la página, reconoce que estas logueado y te redirige al Dashboard.  



📄 La pagina del Login, tiene el login con los campos para loguearse.  

📄 La página del Dashboard muestra el email del usuario logueado y el menu de navegación que comparte con la página Courts.   

🎾 La página Courts, es en la que he desarrollado el CRUD. Aprovechando que ya estaba Firebase, he usado la base de datos Firestore.   
Es un CRUD muy básico, con unos campos de ejemplo en el que se puede ver como hacer un CRUD de pistas, listar, dar de alta, eliminar y actualizar pistas.  
Normalmente componetizo mucho más, lo divido en mas Componentes, creo subpaginas (como por ejemplo la página de añadir una pista) y por falta de tiempo no me he centrado en esa parte.


⬅️➡️ Lo normal en los desarrollos que suelo hacer es desacoplar mi ui de los servicios de modo que mi vista no dependa de las llamadas a terceros. También si el día de mañana cambiamos el servicio, nuestra ui no se ve afectada. He dejado un servicio desacoplado a modo de ejemplo ya que para ir más rápido en el desarrollo, los demás los he dejado todo en un único fichero. 



💅 En cuanto a la maqueación, me he saltado el diseño que teníais, ya que me disteis libertad para ello, y he aprovechado a darle unos estilos conforme a la página de playtomic.io.  

📱 La página es responsive.  

⚙️ Los estilos los he gestionado con css, con PostCSS en este caso, he sobreescrito un poco la configuración de webpack para poder dar soporte al plugin de PostCSS que me gusta, que es el `nesting-rules`.   



✅ He hecho unos Test muy básicos porque la aplicación no tiene mucha lógica.  

Hay un test unitario con JEST, test e2e con Cypress y un test de integración con Testing Library.  

✨ También me gustaría agradeceros la oportunidad que me habéis dado de realizar esta prueba, que ha sido un reto para mi en el que he disfrutado mucho. ✨











