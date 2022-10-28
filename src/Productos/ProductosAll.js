const data = [
    {
        id : 1,
        picture : "../img/airmaxplus1.png",
        title : "Air Max Plus 1",
        description: "Lorem ipsum",
        price : 250,
        categoria : "Air Max",
        stock: 5,
    },

    {
        id : 2,
        picture : "../img/airmaxplus2.png",
        title : "Air Max Plus 2",
        description: "Lorem ipsum",
        price : 250,
        categoria : "Air Max",
        stock: 5,
    },

    {
        id : 3,
        picture : "../img/airmaxplus3.png",
        title : "Air Max Plus 3",
        description: "Lorem ipsum",
        price : 250,
        categoria : "Air Max",
        stock: 5,
    },

    {
        id : 4,
        picture : "../img/airmaxplus4.png",
        title : "Air Max Plus 4",
        description: "Lorem ipsum",
        price : 250,
        categoria : "Air Max",
        stock: 5,
    },

    {
        id : 5,
        picture : "../img/airmaxplus5.png",
        title : "Air Max Plus 5",
        description: "Lorem ipsum",
        price : 250,
        categoria : "Air Max",
        stock: 5,
    },

    {
        id : 6,
        picture : "../img/airmaxterrascapeplus1.png",
        title : "Terrascape Plus 1",
        description: "Lorem ipsum",
        price : 180,
        categoria : "Terrascape",
        stock: 8,
    },

    {
        id : 7,
        picture : "../img/airmaxterrascapeplus2.png",
        title : "Terrascape Plus 2",
        description: "Lorem ipsum",
        price : 180,
        categoria : "Terrascape",
        stock: 8,
    },

    {
        id : 8,
        picture : "../img/airmaxterrascapeplus3.png",
        title : "Terrascape Plus 3",
        description: "Lorem ipsum",
        price : 180,
        categoria : "Terrascape",
        stock: 8,
    },

    {
        id : 9,
        picture : "../img/airmaxterrascapeplus4.png",
        title : "Terrascape Plus 4",
        description: "Lorem ipsum",
        price : 180,
        categoria : "Terrascape",
        stock: 8,
    },

    {
        id : 10,
        picture : "../img/airvapormaxplus1.png",
        title : "Air Vapor Max 1",
        description: "Lorem ipsum",
        price : 300,
        categoria : "Vapor Max",
        stock: 12,
    },

    {
        id : 11,
        picture : "../img/airvapormaxplus2.png",
        title : "Air Vapor Max 2",
        description: "Lorem ipsum",
        price : 300,
        categoria : "Vapor Max",
        stock: 12,
    },

    {
        id : 12,
        picture : "../img/airvapormaxplus3.png",
        title : "Air Vapor Max 3",
        description: "Lorem ipsum",
        price : 300,
        categoria : "Vapor Max",
        stock: 12,
    },   
];

export function getProductos () {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 2000);   
    });
};

export function getUnProducto (id) {
    return new Promise((resolve) => {
        let productoReq = data.find ( (elemento) => {
            return elemento.id === parseInt(id)
        });
        setTimeout(() => resolve([productoReq]), 2000);   
    });
};

export function getProductoCategoria (idCategoriaParams) {
    return new Promise((resolve) => {
        let filtroProductos = data.filter (
            (elemento) => elemento.categoria === idCategoriaParams
        )
        setTimeout(() => resolve(filtroProductos), 2000);   
    });
};