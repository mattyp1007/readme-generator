// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'BSD 3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'BSD 3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license != 'I don\'t need a license'
  ? `## License
  This project is covered under the ${license} license:`
  : ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  let titleSec = "", descriptionSec = "", installationSec = "", usageSec = "", contributingSec = "", testsSec = "", questionsSec = "", github = "", email = "";
  let toc = '## Table of Contents\n';
  if(data.title){
    titleSec = `# ${data.title}\n`;
  }
  if(data.description){
    descriptionSec = '## Description\n'+data.description+'\n';
  }
  if(data.installation){
    installationSec = '## Installation\n'+data.installation+'\n';
    toc += '- [Installation](#installation)\n';
  }
  if(data.usage){
    usageSec = '## Usage\n'+data.usage;
    toc += '- [Usage](#usage)\n';
  }
  if(licenseSection){
    toc += '- [License](#license)\n';
  }
  if(data.contribution){
    contributingSec = '## Contributing\n'+data.contribution;
    toc += '- [Contributing](#contributing)\n';
  }
  if(data.tests){
    testsSec = '## Tests\n'+data.tests+'\n';
    toc += '- [Tests](#tests)\n'
  }
  if(data.github || data.email){
    questionsSec = '## Questions';
    if(data.github){
      github = `${data.github}
`;
    }
    if(data.email){
      email = `${data.email}
`;
    }
    toc += '- [Questions](#questions)\n';
  }
  
  
  // return titleSec + badge + descriptionSec + toc + installationSec + usageSec + '## License\n' + licenseSection + '\n' + licenseLink + '\n## Contributing\n' + testsSec + questionsSec;

return `${titleSec}
${badge}
${descriptionSec}
${toc}
${installationSec}
${usageSec}
${licenseSection}
${licenseLink}
${contributingSec}
${testsSec}
${questionsSec}
${github}
${email}
`;
}

module.exports = {generateMarkdown};
