# Script to reorder sections in portfolio HTML
import re

# Read the current HTML
with open(r'd:\My Portfolio\UtsavGaywalaPortfolio\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract sections using regex
# Find About section
about_match = re.search(r'(\s*<!-- About Section -->.*?</section>)', content, re.DOTALL)
# Find Education section  
education_match = re.search(r'(\s*<!-- Education Section -->.*?</section>)', content, re.DOTALL)
# Find Skills section
skills_match = re.search(r'(\s*<!-- Skills Section -->.*?</section>)', content, re.DOTALL)
# Find Projects section
projects_match = re.search(r'(\s*<!-- Projects Section -->.*?</section>)', content, re.DOTALL)
# Find Contact section
contact_match = re.search(r'(\s*<!-- Contact Section -->.*?</section>)', content, re.DOTALL)

if all([about_match, education_match, skills_match, projects_match, contact_match]):
    # Extract the sections
    about_section = about_match.group(1)
    education_section = education_match.group(1)
    skills_section = skills_match.group(1)
    projects_section = projects_match.group(1)
    contact_section = contact_match.group(1)
    
    # Find where About section ends
    about_end = about_match.end()
    
    # Remove all sections from content first
    content = content[:about_end]
    
    # Find footer
    footer_match = re.search(r'(\s*<!-- Footer -->.*)', content, re.DOTALL)
    if footer_match:
        before_footer = content[:footer_match.start()]
        footer_part = content[footer_match.start():]
    else:
        before_footer = content
        footer_part = ""
    
    # Reconstruct with new order: About, Education, Skills, Projects (remove Contact)
    new_content = before_footer + education_section + skills_section + projects_section + footer_part
    
    # Write back
    with open(r'd:\My Portfolio\UtsavGaywalaPortfolio\index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("Sections reordered successfully!")
    print("New order: About -> Education -> Skills -> Projects")
    print("Contact section removed (info now in header)")
else:
    print("Could not find all sections")
