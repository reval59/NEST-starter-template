import fs, {PathLike} from 'fs';

export const readFileAsync = (path: PathLike) => new Promise((resolve, reject)=> {
  fs.readFile(path, (err, data)=> {
    if (err) reject(err);
    resolve(data);
  });
});

export const writeFileAsync = (path: PathLike, data: string | NodeJS.ArrayBufferView) => new Promise((resolve, reject)=> {
  fs.writeFile(path, data, (err)=> {
    if (err) reject(err);
    resolve(data);
  });
});