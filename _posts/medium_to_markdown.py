import copy
import subprocess
import re

if __name__ == "__main__":
    post_url = input("Enter post url: ")
    # Title of post
    title = "-".join(post_url.split("/")[-1].split("-")[:-1])
    date = input("Enter date (as 2018-10-05): ")

    # Read in the template
    with open("medium-to-markdown.js", "r") as f:
        template = f.readlines()

    # Copy the template
    template_mod = copy.deepcopy(template)

    # Update the js script with the url
    template_mod[2] = f'mediumToMarkdown.convertFromUrl("{post_url}")'

    # Write the new file
    with open("medium-to-markdown_mod.js", "w") as f:
        f.writelines(template_mod)

    # Directory for saving post
    # File is automatically correctly named
    post_file_name = f"{date}-{title}.md"

    try:
        # Run javascript function
        content = subprocess.Popen(
            ["node", "medium-to-markdown_mod.js"], stdout=subprocess.PIPE
        )

        # Extract html as string
        content = content.stdout.read().decode()

        # Replace noscript image duplication
        new_content = re.sub("\\n\\n<noscript>(.*?)<\/noscript>\\n\\n", "\n", content)

        # Replace source location
        new_content = re.sub(
            "\?source=post_page---------------------------", "", new_content
        )

        # Replace <pre> around code blocks
        new_content = re.sub("<pre(.*?)>", "```\\n", new_content)
        new_content = re.sub("<\/pre(.*?)>", "\\n```", new_content)

        # Replace <span> within code blocks
        new_content = re.sub("<span(.*?)>", "", new_content)
        new_content = re.sub("<\/span(.*?)>", "", new_content)

        # Replace iframe with script for github gists
        new_content = re.sub("iframe", "script", new_content)

        # Save the modified post
        with open(post_file_name, "w") as fout:
            fout.write(new_content)
        print(f"Post saved as markdown to {post_file_name}")

    # Report errors otherwise
    except Exception as e:
        print(f"Error somewhere along the way: {e}")
