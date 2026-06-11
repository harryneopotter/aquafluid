import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync, renameSync } from 'fs';
import { join, extname } from 'path';

const imgDir = 'public/images';
const files = readdirSync(imgDir);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') continue;
  const path = join(imgDir, file);
  const sizeKb = statSync(path).size / 1024;
  if (sizeKb < 50) continue;

  const before = (sizeKb / 1024).toFixed(1);
  const img = sharp(path);
  const meta = await img.metadata();
  const maxDim = Math.max(meta.width || 0, meta.height || 0);
  let pipeline = img;
  if (maxDim > 1600) {
    pipeline = img.resize(1600, 1600, { fit: 'inside', withoutEnlargement: true });
  }

  const tmp = path + '.tmp';
  if (ext === '.png') {
    await pipeline.png({ palette: true, colors: 128, quality: 80 }).toFile(tmp);
  } else {
    await pipeline.jpeg({ quality: 80, mozjpeg: true }).toFile(tmp);
  }

  const after = (statSync(tmp).size / 1024 / 1024).toFixed(1);
  console.log(`${file}: ${before}MB → ${after}MB`);
  renameSync(tmp, path);
}

console.log('Done.');
