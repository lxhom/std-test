import chalk from 'chalk';

let infoLog = (msg: string) => {
    console.log(chalk.bgBlue.white.bold(" INFO ") + " " + chalk.blue(msg));
}

export default infoLog;
