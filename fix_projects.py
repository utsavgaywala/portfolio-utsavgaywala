import re

# Read the HTML file
with open(r'd:\My Portfolio\UtsavGaywalaPortfolio\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find project cards that don't have project-content wrapper
# This will match project card with image but content not wrapped
pattern = r'(<div class="project-card group">)\s*(<img src="(fitness|drobe)\.png"[^>]*>)\s*(<h3)'

# Function to wrap content
def wrap_content(match):
    card_open = match.group(1)
    img_tag = match.group(2)
    h3_start = match.group(4)
    return f'{card_open}\n                    {img_tag}\n                    <div class="project-content">\n                        {h3_start}'

# Replace
content = re.sub(pattern, wrap_content, content)

# Now we need to add the closing </div> before the card closes
# Find Where each card ends and add closing div
lines = content.split('\n')
new_lines = []
in_project_card = False
needs_closing_div = False

for i, line in enumerate(lines):
    if 'class="project-card group"' in line:
        in_project_card = True
    
    if in_project_card and '<div class="project-content">' in line:
        needs_closing_div = True
    
    # If we're at the end of a card and need closing div
    if needs_closing_div and line.strip() == '</div>' and i + 1 < len(lines):
        # Check if next line is not another closing div for the card
        next_line = lines[i + 1].strip() if i + 1 < len(lines) else ''
        # Add extra closing div for project-content before card closes
        if i > 0:
            # Look back to see if this is the last div of content
            prev_context = '\n'.join(lines[max(0, i-5):i])
            if '</ul>' in prev_context or '</div>' in prev_context:
                new_lines.append('                    </div>')  # Close project-content
        
    new_lines.append(line)
    
    if in_project_card and line.strip() == '</div>' and '</div>' in line:
        in_project_card = False
        needs_closing_div = False

# Write back
with open(r'd:\My Portfolio\UtsavGaywalaPortfolio\index.html', 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print("Project cards updated successfully!")
