import { ProxyTable } from '../typings/server';

const proxyTable: ProxyTable = {
    '/api': { target: 'http://106.54.207.247:8086', changeOrigin: true },
};

export default proxyTable;
