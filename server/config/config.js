// ========================
// PUERTO
// ========================

process.env.PORT = process.env.PORT || 3000;

// ========================
// Entorno
// ========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ========================
// DB
// ========================

let urlDB;

if( process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = 'mongodb://cafe-node:12345666Cr@ds037518.mlab.com:37518/cafe-curso-node';
}

process.env.URLDB = urlDB;