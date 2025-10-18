export default function error(message, statusCode, req, res) {
    res.statusCode = statusCode;
    res.end();
}
