import cpy from "cpy";
import { resolve, dirname } from "path";
import { promises as fs } from "fs";
import scss from "scss";
import glob from "fast-glob";
const sourceDir = resolve(__dirname, "../packages/legendary-ui");
//lib文件目录
const targetLib = resolve(__dirname, "../packages/legendary-ui/dist/lib");
//es文件目录
const targetEs = resolve(__dirname, "../packages/legendary-ui/dist/es");
//src目录
const srcDir = resolve(__dirname, "../src");
const buildScss = async () => {
  //直接将scss文件复制到打包后目录
  await cpy(`${sourceDir}/**/*.scss`, targetLib);
  await cpy(`${sourceDir}/**/*.scss`, targetEs); //获取打包后.scss文件目录(lib和es一样)
  const scssFils = await glob("**/*.scss", { cwd: srcDir, onlyFiles: true }); //遍历含有scss的目录
  for (let path in scssFils) {
    const filePath = `${srcDir}/${scssFils[path]}`; //获取scss文件字符串
    const scssCode = await fs.readFile(filePath, "utf-8"); //将scss解析成css
    const code = await scss.render(scssCode, {
      //指定src下对应scss文件的文件夹为目录
      paths: [srcDir, dirname(filePath)],
    }); //拿到.css后缀path
    const cssPath = scssFils[path].replace(".scss", ".css"); //将css写入对应目录
    await fs.writeFile(resolve(targetLib, cssPath), code.css);
    await fs.writeFile(resolve(targetEs, cssPath), code.css);
  }
};
buildScss();
