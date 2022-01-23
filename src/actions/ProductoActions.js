import HttpCliente from '../servicios/HttpCliente'
import axios from 'axios';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const getProductos = (request) => {
    return new Promise((resolve, eject)  => {
        instancia.get(`/producto?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}`).then(response => {
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