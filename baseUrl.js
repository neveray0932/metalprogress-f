let baseUrl = "";
switch (process.env.NODE_ENV) {
    case "dev":
        baseUrl = "http://cadtech.hopto.org:80/public/api"; //开发环境url
        break;
    case "serve":
        baseUrl = "http://192.168.0.66:8777/public/api"; //生产环境url
        break;
    case "production":
        baseUrl = "http://cadtech.hopto.org:80/public/api"; //生产环境url
        break;
}

export default baseUrl;