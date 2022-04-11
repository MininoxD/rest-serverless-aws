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
### Configuracion de Postman 
Los archivos de configuracion de postman estan en ***src/Postman*** 
Importar en su postman para hacer las pruebas 
###### Ejmeplo de codigo
    let URL_TEST = 'http://localhost:3000/dev'
        const IS_OFFLINE = true
        if (!IS_OFFLINE) {
            URL_TEST = 'Set your url Production'
    }

* Ejemplo para ejecutar los test en Production
###### Ejmeplo de codigo
    let URL_TEST = 'http://localhost:3000/dev'
        const IS_OFFLINE = false
        if (!IS_OFFLINE) {
            URL_TEST = 'Set your url Production'
    }

### Arquitectura
![Imagen_de_la_arquitectura](https://media.discordapp.net/attachments/910240419965710428/962920099008901160/arquitectura.jpg)
