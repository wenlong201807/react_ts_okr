import { ProxyTable } from '../typings/server';

const proxyTable: ProxyTable = {
  '/okr': {
    target: 'http://128.195.0.2:8802/okr/',
    changeOrigin: true,
    secure: true,
    pathRewrite: {
      '^/okr': '',
    },
  },
  '/appurl': {
    target: 'http://128.195.0.1:8000/',
    changeOrigin: true,
    secure: true,
    pathRewrite: {
      '^/appurl': '',
    },
  },
  '/geteway': {
    target: 'http://128.195.0.2:8802/',
    changeOrigin: true,
    secure: true, // https false
    pathRewrite: {
      '^/geteway': '',
    },
  },
};

export default proxyTable;
