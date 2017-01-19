import fs from 'fs';
import editer from 'editer';
import _ from 'lodash';
import {mkdirsSync, outputFileSync} from 'fs-extra';
import { removeSync} from 'fs-extra';
import locater from 'locater';
import {logger} from './logger';

function editFile(type, pathToFile, string, options) {
  const fileContent = fs.readFileSync(pathToFile, {encoding: 'utf-8'});
  let updatedContent;
  if (type === 'insert') {
    updatedContent = editer.insert(string, fileContent, options);
  } else if (type === 'remove') {
    updatedContent = editer.remove(string, fileContent, options);
  }
  fs.writeFileSync(pathToFile, updatedContent);
}
function getFileContent(templatePath, templateVariables) {
  const templateContent = fs.readFileSync(templatePath);
  if (templateVariables) {
    return _.template(templateContent)(templateVariables);
  }
  return templateContent;
}

// 新建项目的时候，用来生成文件目录
export function createDir(path) {
  mkdirsSync(path);
  const displayPath = path.replace(/^\.\//, '').replace(/$/, '/');
  logger.create(displayPath);
}
// 根据模板生成文件
export function createFile(templatePath, targetPath, templateVariables) {
  const fileContent = getFileContent(templatePath, templateVariables);
  outputFileSync(targetPath, fileContent);
  const displayPath = targetPath.replace(/^\.\//, '');
  logger.create(displayPath);
}
// 检查文件是否存在
export function checkFileExists(path) {
  try {
    fs.lstatSync(path);
  } catch (e) {
    if (e.code === 'ENOENT') {
      return false;
    }
    throw e;
  }
  return true;
}
// 删除文件(夹)
export function removeFile(path) {
  logger.remove(path);
  removeSync(path);
}
// 从文件中删除行
export function removeWholeLine(string, pattern) {
  function nthIndexOf(str, part, n) {
    const len = str.length;
    let i = -1;
    let _n = n;
    while (_n-- && i++ < len) {
      i = str.indexOf(part, i);
      if (i < 0) break;
    }
    return i;
  }
  const position = locater.findOne(pattern, string);

  if (! position) {
    return string;
  }

  const lineNumber = position.line;
  const lineStartIndex = nthIndexOf(string, '\n', lineNumber - 1) + 1;
  const lineEndIndex = nthIndexOf(string, '\n', lineNumber);

  return string.substring(0, lineStartIndex) + string.substring(lineEndIndex + 1);
}
// 从文件中添加行
export function insertToFile(pathToFile, string, options) {
  editFile('insert', pathToFile, string, options);
}
