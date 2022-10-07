const data = [
    {
        id : 1,
        picture : "../img/airmaxplus1.png",
        title : "Air Max Plus 1",
        price : 250,
        categoria : "Air Max"
    },

    {
        id : 2,
        picture : "../img/airmaxplus2.png",
        title : "Air Max Plus 2",
        price : 250,
        categoria : "Air Max"
    },

    {
        id : 3,
        picture : "../img/airmaxplus3.png",
        title : "Air Max Plus 3",
        price : 250,
        categoria : "Air Max"
    },

    {
        id : 4,
        picture : "../img/airmaxplus4.png",
        title : "Air Max Plus 4",
        price : 250,
        categoria : "Air Max"
    },

    {
        id : 5,
        picture : "../img/airmaxplus5.png",
        title : "Air Max Plus 5",
        price : 250,
        categoria : "Air Max"
    },

    {
        id : 6,
        picture : "../img/airmaxterrascapeplus1.png",
        title : "Terrascape Plus 1",
        price : 180,
        categoria : "Terrascape"
    },

    {
        id : 7,
        picture : "../img/airmaxterrascapeplus2.png",
        title : "Terrascape Plus 2",
        price : 180,
        categoria : "Terrascape"
    },

    {
        id : 8,
        picture : "../img/airmaxterrascapeplus3.png",
        title : "Terrascape Plus 3",
        price : 180,
        categoria : "Terrascape"
    },

    {
        id : 9,
        picture : "../img/airmaxterrascapeplus4.png",
        title : "Terrascape Plus 4",
        price : 180,
        categoria : "Terrascape"
    },

    {
        id : 10,
        picture : "../img/airvapormaxplus1.png",
        title : "Air Vapor Max 1",
        price : 300,
        categoria : "Vapor Max"
    },

    {
        id : 11,
        picture : "../img/airvapormaxplus2.png",
        title : "Air Vapor Max 2",
        price : 300,
        categoria : "Vapor Max"
    },

    {
        id : 12,
        picture : "../img/airvapormaxplus3.png",
        title : "Air Vapor Max 3",
        price : 300,
        categoria : "Vapor Max"
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