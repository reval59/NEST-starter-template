import pinoHttp from 'pino-http';

const logger = pinoHttp({prettyPrint:true});
export default logger;