/* Descripcion*/
/*

HelpHttp encapsula la Peticion Fech, definiendo solamente el Metodo Get.

Dentro de customFetch, que recibe los endpoints y las options, se define:
-defaultHeader, el cual define la cabecera por defecto
-controller, el cual define el AbortController, el cual se aplica para abortar 
la peticion al cabo de 8 segundos, si la api no responde.

.Si no se establece el metodo, sera por defecto GET.
.Si no se establece la cabecera, sera por defecto defaultHeader.

.Si la promesa es rechazada se optienen algunos detalles del error.

*/

export const helpHttp = () => {
    const customFetch = (endpoint, options) => {
        const defaultHeader = {
            accept: "application/json",
        };

        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || "GET";
        options.headers = options.headers 
        ? { ...defaultHeader, ...options.headers } 
        : defaultHeader;

        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body;

        //console.log(options);
        setTimeout(() => controller.abort()
        , 8000);

        return fetch(endpoint, options)
            .then((res) => 
                res.ok 
                    ? res.json() 
                    : Promise.reject({
                        err: true,
                        status: res.status || "00",
                        statusText: res.statusText || "Ocurrió un error",
                    }))
            .catch((err) => err);
    };


    const get = (url, options = {}) => customFetch(url, options);


    return {
        get,
    };
};