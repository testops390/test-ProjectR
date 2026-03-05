import { spawnSync } from "node:child_process";

function run(cmd: string, args: string[]) {
  const r = spawnSync(cmd, args, { stdio: "inherit", shell: true });
  if (r.status !== 0) process.exit(r.status ?? 1);
}

run("npm", ["run", "gen"]);
run("git", ["add", "-A"]);

// 変更が無いとcommitが失敗するので、失敗しても続行したい場合はここを分岐してもいい
run("git", ["commit", "-m", "update data/photos"]);
run("git", ["push"]);

console.log("push完了 → GitHub Actions → Pages更新");