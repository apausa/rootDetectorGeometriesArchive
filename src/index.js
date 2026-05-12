import root2gltf from "@hep-fcc/root2gltf";
import { openFile } from "jsroot";
import { readFile, writeFile } from "node:fs/promises";

(async () => {
  try {
    const configPath = "./src/lib/ALLEGRO/config/ALLEGRO_o1_v01.config.json";
    const inputPath = "./src/lib/ALLEGRO/root/ALLEGRO_o1_v01.root";
    const outputPath = "./src/lib/ALLEGRO/gltf/ALLEGRO_o1_v01-package.gltf";

    const input = await openFile(inputPath);
    const config = JSON.parse(await readFile(configPath, "utf8"));
    const gltfContent = await root2gltf({ input, config });

    await writeFile(outputPath, JSON.stringify(gltfContent), "utf8");
  } catch (error) {
    console.log(error);
  }
})();
