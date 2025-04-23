import os
import frontmatter
import json
from pathlib import Path

DOCS_ROOT = Path("docs")

def parse_category_json(folder_path):
    path = folder_path / "_category_.json"
    if not path.exists():
        return None
    with open(path, "r") as f:
        data = json.load(f)
        return {
            "label": data.get("label", folder_path.name.capitalize()),
            "position": data.get("position", 9999)
        }

def parse_markdown_file(md_path):
    post = frontmatter.load(md_path)
    title = post.get("title") or md_path.stem.replace("-", " ").capitalize()
    sidebar_pos = post.get("sidebar_position", 9999)
    slug = "/docs/" + str(md_path.relative_to(DOCS_ROOT)).replace(".md", "")
    return {
        "title": title,
        "position": sidebar_pos,
        "slug": slug
    }

def walk_docs_dir(root):
    toc_structure = {}

    for dirpath, dirnames, filenames in os.walk(root):
        dirpath = Path(dirpath)
        rel_dir = dirpath.relative_to(root)

        # Category info for the directory
        cat = parse_category_json(dirpath)
        if cat:
            section_key = str(rel_dir)
            if section_key not in toc_structure:
                toc_structure[section_key] = {
                    "label": cat["label"],
                    "position": cat["position"],
                    "items": []
                }

        for filename in filenames:
            if filename.endswith(".md"):
                filepath = dirpath / filename
                item = parse_markdown_file(filepath)
                section_key = str(rel_dir)
                if section_key not in toc_structure:
                    toc_structure[section_key] = {
                        "label": rel_dir.name.capitalize(),
                        "position": 9999,
                        "items": []
                    }
                toc_structure[section_key]["items"].append(item)

    return toc_structure

def write_toc(toc_dict, output_path="docs/toc.md"):
    header = (
        "---\n"
        "id: toc\n"
        "title: Table of Contents\n"
        "sidebar_label: Table of Contents\n"
        "sidebar_position: 0\n"
        "slug: /toc\n"
        "---\n\n"
    )
    sections = sorted(toc_dict.values(), key=lambda x: x["position"])
    body = ""

    for section in sections:
        if not section["items"]:
            continue
        body += f"## {section['label']}\n\n"
        for item in sorted(section["items"], key=lambda x: x["position"]):
            body += f"- [{item['title']}]({item['slug']})\n"
        body += "\n"

    with open(output_path, "w") as f:
        f.write(header + body)
    print(f"✅ Table of Contents generated at {output_path}")

if __name__ == "__main__":
    toc_data = walk_docs_dir(DOCS_ROOT)
    write_toc(toc_data)
