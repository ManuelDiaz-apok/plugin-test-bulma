import {Model, Server, Response} from 'miragejs';

export function makeServer({ environment = "development" } = {}) {
    const instrumentos = [
        {name: 'Guitarra', type: 'Cuerdas', price: '$200'},
        {name: 'Cuatro', type: 'Cuerdas', price: '$85'},
        {name: 'Bajo', type: 'Cuerdas', price: '$247'},
        {name: 'Batería', type: 'Percusión', price: '$320'},
        {name: 'Trombón', type: 'Viento', price: '$460'},
        {name: 'Saxofón', type: 'Viento', price: '$1200'},
    ];

    const usuarios = [
        {name: 'Manuel', lastname: 'Díaz', username: 'mdiaz1994', password: '1994'},
    ];
    return new Server({
        environment,

        models: {
            instrument: Model,
            user: Model,
        },

        seeds(server) {
            for (let i = 0; i < instrumentos.length ; i++) {
                server.create('instrument', instrumentos[i]);
            }
            for (let i = 0; i < usuarios.length ; i++) {
                server.create('user', usuarios[i]);
            }
        },

        routes() {
            this.namespace = "api";

            this.get("/instruments", (schema) => {
                return schema.instruments.all()
            })

            this.post("/login", (schema, request) => {
                let json = JSON.parse(request.requestBody);
                let serverResponse = schema.users.findBy({username: json.email});
                let response;

                if(serverResponse !== null){
                    if(json.password === serverResponse.password){
                        response = new Response(201, {}, {message: 'logueado', access_token: '12345', status: 201});
                    }else{
                        response =  new Response(401, {}, {message: 'error autenticando', status: 401});
                    }
                }else{
                    response =  new Response(404, {}, {message: 'no existe el usuario', status: 404});
                }
                return response;
            })
        },
    })
}