export function logger(req, res, next) {
  console.log(`Request..global`);
  next();
}
