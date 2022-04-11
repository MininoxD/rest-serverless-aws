# Rest-serverless-aws

### Scrips
* **npm install** --> Scrip para instalar las dependencias
* **npm run dev** --> Scrip para correr en local
* **npm run deploy** --> Scrip para subir en aws 
### Configurar las siguientes varibles de entorno
* IS_OFFLINE --> deve ser **true** en para hacer pruebas local
* PEOPLE_TABLE --> No crearlo por por que se creara al ejecutar el script de **dev** o **deploy**
### Configurar la URL de Prod para los test en produccion
* Ejemplo para ejecutar los test en desarrollo
    `let URL_TEST = 'http://localhost:3000/dev'
        const IS_OFFLINE = true
        if (!IS_OFFLINE) {
            URL_TEST = 'Set your url Production'
    }`
    
* Ejemplo para ejecutar los test en Production
    `let URL_TEST = 'http://localhost:3000/dev'
        const IS_OFFLINE = false
        if (!IS_OFFLINE) {
            URL_TEST = 'Set your url Production'
    }`

