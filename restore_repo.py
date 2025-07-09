import os
import subprocess

def restore_repo_from_tree(tree_file, src_repo, dest_dir):
    with open(tree_file, 'r') as f:
        for line in f:
            parts = line.strip().split('	')
            if len(parts) == 2:
                info, filename = parts
                file_hash = info.split(' ')[2]
                new_filename = filename.strip()
                if new_filename.endswith('.'):
                    new_filename = new_filename[:-1]

                dest_path = os.path.join(dest_dir, new_filename)
                os.makedirs(os.path.dirname(dest_path), exist_ok=True)

                process = subprocess.run(
                    ['git', 'show', file_hash],
                    cwd=src_repo,
                    capture_output=True,
                )

                if process.returncode == 0:
                    with open(dest_path, 'wb') as out_f:
                        out_f.write(process.stdout)
                else:
                    print(f"Failed to show {file_hash} for {filename}")

if __name__ == "__main__":
    restore_repo_from_tree('tree.txt', '.', '../uplifttech_fixed')
