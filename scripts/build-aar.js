const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const bundleAarPath = path.join(__dirname, '../android/build/outputs/aar/');

const buildPath = path.join(__dirname, '../example/android');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }

  const files = fs.readdirSync(src);

  for (const file of files) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

execSync('./gradlew assemble app:assembleRelease', {
  stdio: 'inherit',
  cwd: buildPath,
});

if (fs.existsSync(bundleAarPath)) {
  const targetPath = path.join(__dirname, '../android/build/outputs/aar');
  copyDir(bundleAarPath, targetPath);
}
