import subprocess

def create_tree_from_file(filename):
    with open(filename, 'r') as f:
        content = f.read().replace('\r\n', '\n')

    process = subprocess.run(
        ['git', 'mktree'],
        input=content,
        capture_output=True,
        text=True
    )

    if process.returncode == 0:
        return process.stdout.strip()
    else:
        raise Exception(f"git mktree failed: {process.stderr}")

if __name__ == "__main__":
    tree_sha = create_tree_from_file('new_tree.txt')
    print(tree_sha)