import { openFile } from "jsroot";
import { writeFileSync } from "fs";

const inputPath = "src/detectors/.../detector.root";
const input = await openFile(inputPath);
const rawGeometry = await input.readObject(input.fKeys[0].fName);

const lines = [];

// function listNodes(node, depth = 0) {
//   lines.push(`${"  ".repeat(depth)}${node.fName}`);
//   if (node.fVolume.fNodes && depth < 1) {
//     for (const child of node.fVolume.fNodes.arr) {
//       listNodes(child, depth + 1);
//     }
//   }
// }

for (const node of rawGeometry.fMasterVolume.fNodes.arr) {
  lines.push(node.fName);
}

const outputName = inputPath.replace(".root", ".config.txt");
writeFileSync(outputName, lines.join("\n"));
