const fs = require('fs');
const path = require('path');

const components = [
  'About', 'Experience', 'Skills', 'ToolsGrid', 
  'Certifications', 'Education', 'Portfolio', 
  'Languages', 'Contact', 'Footer', 
  'FloatingSocials', 'ScrollToTop'
];

components.forEach(comp => {
  const filePath = path.join(__dirname, 'src', 'components', `${comp}.jsx`);
  const content = `export default function ${comp}() {\n  return (\n    <section id="${comp.toLowerCase()}" className="section container">\n      <h2 className="section-title">${comp}</h2>\n    </section>\n  );\n}\n`;
  fs.writeFileSync(filePath, content);
});

console.log('Stubs created successfully');
