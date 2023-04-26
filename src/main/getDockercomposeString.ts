
export default function getDockercomposeString(image: string, port: string = "80") {
  return `
    # generated with mdckr
    version: '3'
    services:
      ${image}:
        build:
          context: .
          dockerfile: Dockerfile
        ports:
          - '${port}:${port}'`
}