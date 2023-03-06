import chalk from 'chalk';
let infoLog = (msg) => {
    console.log(chalk.bgBlue.white.bold(" INFO ") + " " + chalk.blue(msg));
};
export default infoLog;
