let fernet = require("fernet");
let secret = new fernet.Secret("TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=");
let message =
  "gAAAAABcDo6RR0DC4Kd7MUxK2Q_N12DQUZy2mttDWwIRu-g38YM1hQ3kowIO1aW0SNVOZSCxFQUcir0WzOtQPJmHDdLKfoMAuHtbamurEOkekljEzCQT_BTzqpIstBGlz_0I_CiCehxF9_IWe8PSD6y6yZRHbotzcpTv8tfaPgEwd1j73ftMy46IOE9rgTf9hx8-Gd7hjRqW";
let token = new fernet.Token({ secret: secret, token: message, ttl: 0 });

console.log(token.decode());
