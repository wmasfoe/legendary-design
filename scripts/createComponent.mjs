#!/usr/bin/env node

import inquirer from 'inquirer'
import fs from 'fs'
import chalk from 'chalk'
import shell from 'shelljs'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.resolve(__dirname, '..', 'packages', 'legendary-ui', 'components')

const pkg = JSON.parse(fs.readFileSync('./package.json').toString() || '{}')
function toLine(name) {
  return name.replace(/([A-Z])/g,"-$1").toLowerCase();
}

const init = () => {
  console.log(
    chalk.blue.bold.bgWhite(
      'Thanks for the contribution.\n'
    )
  );
}

const askQuestions = () => {
  const questions = [
    {
      name: "COMPONENT_NAME",
      type: "input",
      message: "component name: "
    },
  ];
  return inquirer.prompt(questions);
};

const createComponent = (fileName) => {
  let TSX = ''
  let SCSS = ''
  let TYPES = ''
  const dir = path.resolve(__dirname, 'template', '__name__')
  const templateFiles = fs.readdirSync(dir) || []
  // TODO 检查是否存在

  // 创建文件夹
  fs.mkdirSync(path.resolve(targetDir, fileName))
  for (const item of templateFiles) {
    const curPath = path.resolve(dir, item)
    let fileContent = fs.readFileSync(curPath).toString() || ''
    fileContent = fileContent.replaceAll('__name__', fileName)
    if(item.includes('scss')) {
      fileContent = fileContent.replaceAll('__cssName__', toLine(fileName))
    }
    let name = item
    if(item.includes('__name__')) {
      name = item.replaceAll('__name__', fileName)
    }

    fs.writeFileSync(path.resolve(targetDir, fileName, name),fileContent,'utf8',function(error){
      if(error){
        console.log(error);
        return false;
      }
      console.log('写入成功');
    })
  }
}

const success = (filepath) => {
  console.log(
    chalk.bgWhite.green.bold(`Done! File created at ${filepath}.`)
  );
};

const run = async () => {
  // show script introduction
  init();

  // ask questions
  const answers = await askQuestions();
  const { COMPONENT_NAME } = answers;
  console.log(COMPONENT_NAME)

  createComponent(COMPONENT_NAME)

  success()
  // create the file
  // show success message
};

run();
