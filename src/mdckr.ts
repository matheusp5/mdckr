
import getDockerfileString from "./main/getDockerfileString"
import getDockercomposeString from "./main/getDockercomposeString"
import FileWritter from "./main/FileWritter";

const writeFilesClass = new FileWritter()

console.log("[mdckr] Preparing to generate Dockerfile and docker-compose.yaml")

const image: string = process.argv[2]
const version: string = process.argv[3]
const build: string = process.argv[4]
const run: string = process.argv[5]
const port: string = process.argv[6]

if(image == null || version == null || build == null || run == null) {
    console.log('Check your arguments: <imagem> <versão> "<build>" "<run>" <porta>')
} else {
    setTimeout(() => {
        const dockerfile: string = getDockerfileString(image, version, build, run.split(' '), port);
        writeFilesClass.writeDockerfile(dockerfile);
        console.log('[Generator] Dockerfile created successfully!');

        const dockerCompose: string = getDockercomposeString(image, port)
        writeFilesClass.writeDockercompose(dockerCompose)
        console.log('[Generator] docker-compose.yaml created successfully!');
        
    }, 2500)
}   

