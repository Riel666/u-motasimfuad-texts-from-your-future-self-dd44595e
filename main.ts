import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Hey, it's you from 2046. Stop buying the extended warranty. Also, the plant dies. It was never the watering. It was you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", LINE, "utf8");
