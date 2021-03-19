# Playtomic test by Natacha 🇬🇧

⚛️ The application is developed with React and TypeScript using the CRA boilerplate.

🗃️ At the login system I have used Firebase, the authentication part with the username and password.

💚 I have deployed it in Netlify, this is the link to test it: [Playtomic test by Natacha] (https://natacha-test-playtomic.netlify.app/).

👤 The username and password to enter are the following:

`` ''
Email: natachaplaytomic@gmail.com
Password: natacha123
`` ''

💜 Another important part of this project is the management of the state, which I have managed with Redux as you requested in the test.

In the state I have decided to only put the theme of the login user because it is the common part that I am going to share in different components.

The part of Firestore I have decided not to put it as a Redux module because I only use it in a single part and it is not shared in other views.



🔐 I have also managed the authenticated routes for when once you are logged in I redirect you to the Dashboard.

I have added the persistence of the login. I have read that it is better to do it by cookie than I have done it in Session mode to facilitate development.

Once logged in, if we reload the page, it recognizes that you are logged in and redirects you to the Dashboard.



📄 The Login page has the login with the fields to login.

📄 The Dashboard page shows the email of the logged in user and the navigation menu that it shares with the Courts page.

🎾 The Courts page is where I have developed the CRUD. Taking advantage of the fact that I was already using Firebase, I used the Firestore database.
It is a very basic CRUD, with some example fields in which you can see how to make a CRUD of tracks, list, register, delete and update tracks.
Normally I compose much more, I divide it into more Components, I create sub-pages (such as the page to add a track) and due to lack of time I have not focused on that part.


⬅️➡️ The normal thing in the developments that I usually do is to decouple my ui from the services so that my view does not depend on calls to third parties. Also if tomorrow we change the service, our ui is not affected. I have left a decoupled service as an example since to go faster in the development, the others I have left everything in a single file.



💅 Regarding the layout, I have skipped the design you had, since you gave me the freedom to do so, and I have taken the opportunity to give it some styles according to the playtomic.io page.

📱 The page is responsive.

⚙️ I have managed the styles with css, with PostCSS in this case, I have overwritten the webpack configuration a bit to be able to support the PostCSS plugin that I like, which is the `nesting-rules`.



✅ I have done some very basic tests because the application does not have much logic.

There is a unit test with JEST, e2e test with Cypress and an integration test with Testing Library.

🚀 In the project, you can run:

- Development mode: `npm start`.
- If you want to start Cypres tests: `npm run cypress: open`.
- If you want to start the JEST tests and Test Library: `npm run test`.

✨ I would also like to thank you for the opportunity you have given me to take this test, which has been a challenge for me in which I have enjoyed a lot. ✨

# Prueba Playtomic de Natacha 🇪🇸 

⚛️ La aplicación está desarrollada con React y TypeScript usando el boilerplate CRA.

🗃️ A nivel de sistema de login he usado Firebase, la parte de autentificación con el usuario y contraseña.

💚 Lo he desplegado en Netlify, esta es el enlace para poder probarla: [Playtomic test by Natacha](https://natacha-test-playtomic.netlify.app/).

👤 El usuario y contraseña para poder entrar son los suientes:

```
Email: natachaplaytomic@gmail.com
Password: natacha123
```

💜 Otra parte importante de este proyecto es la gestión del estado, la cual he gestionado con Redux tal y como pedíais en la prueba.  

En el estado he decidido solo poner el tema del usuario del login porque es la parte común que yo voy a compartir en diferentes componentes.  

La parte de Firestore he decidido no ponerla como modulo de Redux porque solo lo uso en una única parte y no es compartida en demás vistas.  



🔐 También he gestionado las rutas autentificadas para cuando una vez estes logueado te redirija al Dashboard.   

He añadido la persistencia del login. He leído que es mejor hacerlo por cookie aumque yo lo he hecho en modo Session para facilitar el desarrollo.   

Una vez logueado, si recargamos la página, reconoce que estas logueado y te redirige al Dashboard.  



📄 La pagina del Login, tiene el login con los campos para loguearse.  

📄 La página del Dashboard muestra el email del usuario logueado y el menu de navegación que comparte con la página Courts.   

🎾 La página Courts, es en la que he desarrollado el CRUD. Aprovechando que ya estaba usando Firebase, he usado la base de datos Firestore.   
Es un CRUD muy básico, con unos campos de ejemplo en el que se puede ver como hacer un CRUD de pistas, listar, dar de alta, eliminar y actualizar pistas.  
Normalmente componetizo mucho más, lo divido en mas Componentes, creo subpaginas (como por ejemplo la página de añadir una pista) y por falta de tiempo no me he centrado en esa parte.


⬅️➡️ Lo normal en los desarrollos que suelo hacer es desacoplar mi ui de los servicios de modo que mi vista no dependa de las llamadas a terceros. También si el día de mañana cambiamos el servicio, nuestra ui no se ve afectada. He dejado un servicio desacoplado a modo de ejemplo ya que para ir más rápido en el desarrollo, los demás los he dejado todo en un único fichero. 



💅 En cuanto a la maqueación, me he saltado el diseño que teníais, ya que me disteis libertad para ello, y he aprovechado a darle unos estilos conforme a la página de playtomic.io.  

📱 La página es responsive.  

⚙️ Los estilos los he gestionado con css, con PostCSS en este caso, he sobreescrito un poco la configuración de webpack para poder dar soporte al plugin de PostCSS que me gusta, que es el `nesting-rules`.   



✅ He hecho unos Test muy básicos porque la aplicación no tiene mucha lógica.  

Hay un test unitario con JEST, test e2e con Cypress y un test de integración con Testing Library.  


🚀 Para levantar la aplicación:

- Modo desarrolo: `npm start`.
- Si quieres lanzar los tests de Cypres: `npm run cypress:open`.
- Si quieres lanzar los tests de JEST y Testing Library: `npm run test`.

✨ También me gustaría agradeceros la oportunidad que me habéis dado de realizar esta prueba, que ha sido un reto para mi en el que he disfrutado mucho. ✨











