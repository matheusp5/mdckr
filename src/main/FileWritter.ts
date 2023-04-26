import {writeFile} from "fs"

export default class FileWritter {
  writeDockerfile(dockerfileContent: string) {
    writeFile('Dockerfile', dockerfileContent, (err) => {
      if (err) {
        console.log(err.message);
        return;
      }
    });
  } 

  writeDockercompose(dockercomposeContent: string) {
    writeFile('docker-compose.yaml', dockercomposeContent, (err) => {
      if (err) {
        console.log(err.message);
        return;
      }
    });
  }

}
