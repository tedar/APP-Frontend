import HttpCliente from '../servicios/HttpCliente'

export const getProductos = (request) => {
    return new Promise((resolve, eject)  => {
        HttpCliente.get(`/producto?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}`).then(response => {
            resolve(response);
        })
    })    
};

/*
response:
    count
    pageIndex
    pageSize
    pageCount
    data: [
        {...}
        {...}
    ]
*/