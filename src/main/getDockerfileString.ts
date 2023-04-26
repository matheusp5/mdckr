
export default function getDockerfileString(image: string, version: string = "latest", buildCommand: string, runCommand: Array<String>, port: string = "80") {
  return `# generated with mdckr\nFROM ${image}:${version}\nWORKDIR /app\nCOPY . /app\nRUN ${buildCommand}\nEXPOSE ${port}\nCMD ${`["${runCommand.join('", "')}"]`}`
}