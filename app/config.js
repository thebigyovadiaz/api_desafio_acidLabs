const port = process.env.PORT || 5001;
const key_dark_api = '0560b81fee6e7c7890f5c4c081336fab';
const portRedis = process.env.REDISCLOUD_URL || 6379;

module.exports = {
  port,
  key_dark_api,
  portRedis
}
