import sys

def correct_tree(input_file, output_file):
    with open(input_file, 'r') as f_in, open(output_file, 'w') as f_out:
        for line in f_in:
            parts = line.strip().split('	')
            if len(parts) == 2:
                info, filename = parts
                if filename.endswith('.'):
                    new_filename = filename[:-1]
                    f_out.write(f"{info}	{new_filename}\n")
                else:
                    f_out.write(line)
            else:
                f_out.write(line)

if __name__ == "__main__":
    correct_tree("tree.txt", "new_tree.txt")
