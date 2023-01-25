# ionic

#preparacion del entorno
1) instalar node npm install -g ionic
2) npm install @ionic/angular@6
3) npm install @ionic/angular-server@6
4) npm install -g ionic/cli (si tienes instalaciones pevias, primero: npm uninstall -g ionic)
5) para actualizar a la ultima version: npm install @ionic/core@6
6) opcional: instalar Android estudio

#actualizar todo
1) ir a la web de node y descargar la ultima version
2) Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
3) npm install -g npm-windows-upgrade
4) npm-windows-upgrade
5) npm install @ionic/angular@6
6) npm install @ionic/angular@6 @ionic/angular-server@6
7) npm install @ionic/core@6

#vs code desde la terminal
en powershell como admin ponemos
Set-ExecutionPolicy RemoteSigned -Force -Scope LocalMachine

#ejecucion
1) creamos el proyecto: ionic start nombreproyecto [start template]
2) accedemos a la carpeta
3) la lanzamos en local host: ionic serve

Forma Rapida: ionic start nombreproyecto sidemenu --type=angular

para que se ejecuten altiro los cambios
ir a la carpeta del archivo: cd nombreporyecto

#tips
- ionic generate: podemos ver como generar paginas u otros contenidos (ej: ionic g page home) o ionic generate page home
- ionic navigation: para navegar entre paginas (se puede usar con typescrip a travez de construcores [router])
- ion-list: para hacer listas de cosas

- para crear un login y registro: https://remotestack.io/ionic-angular-login-register-form-ui-tutorial/

- modificar la primera ventana de inicio: ir a "app-routing.module.ts" y en el primer path > redirectTo [indicarRuta]
- el css de ionic esta relacionado con flexbox

#API
- rick and morty: https://rickandmortyapi.com/api/character
- solucion al problema: https://howtojs.io/how-to-solve-property-x-does-not-exist-on-type-never-error-in-angular-or-typescript/
- mas problemas: https://stackoverflow.com/questions/66052132/angular-error-ts2564-property-users-has-no-initializer-and-is-not-definitely
- mas y mas problem: https://bobbyhadz.com/blog/typescript-type-null-is-not-assignable-to-type-string
-se agrego un parametro al tsconfig.json -> "noImplicitAny": false : https://stackoverflow.com/questions/37032857/error-ts7008-member-summary-implicitly-has-an-any-type

#Firebase
- npm install firebase @angular/fire --save
- npm i @capacitor/camera
- npm i @ionic/pwa-elements
- ng add @angular/fire
