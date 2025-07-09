import subprocess

def create_tree_from_file(filename):
    with open(filename, 'r') as f:
        lines = f.readlines()

    corrected_lines = []
    for line in lines:
        parts = line.strip().split('	')
        if len(parts) == 2:
            info, filename = parts
            new_filename = filename.strip()
            if new_filename.endswith('.'):
                new_filename = new_filename[:-1]
            corrected_lines.append(f"{info}	{new_filename}\n")
        else:
            corrected_lines.append(line)

    process = subprocess.run(
        ['git', 'mktree'],
        input="".join(corrected_lines),
        capture_output=True,
        text=True
    )

    if process.returncode == 0:
        return process.stdout.strip()
    else:
        raise Exception(f"git mktree failed: {process.stderr}")

if __name__ == "__main__":
    tree_sha = create_tree_from_file('tree.txt')
    print(tree_sha)
