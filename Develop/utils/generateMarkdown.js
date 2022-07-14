// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'APACHE 2.0') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === 'GPL 3.0') {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === 'BSD 3') {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === 'None') {
    return "";
  }
}
// TODO: Create a function that returns the license link // TODO: Create a function that returns the license section of README
// If there is no license, return an empty string // If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === 'MIT') {
    return 'This project\'s type license is MIT. You can find out more about this license [here](https://opensource.org/licenses/MIT).';
  } else if (license === 'APACHE 2.0') {
    return 'This project\'s type license is MIT. You can find out more about this license [here](https://opensource.org/licenses/Apache-2.0).';
  } else if (license === 'GPL 3.0') {
    return 'This project\'s type license is MIT. You can find out more about this license [here](https://www.gnu.org/licenses/gpl-3.0).';
  } else if (license === 'BSD 3') {
    return 'This project\'s type license is MIT. You can find out more about this license [here](https://opensource.org/licenses/BSD-3-Clause).';
  } else if (license === 'None') {
    return "This project has no license.";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

---

## Project Description

${data.description}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

---

## Installation

To install the necessary dependencies, please run the following command(s):

` + "```" + `
${data.install}
` + "```" + `

## Usage

${data.repoInfo}

## License

${renderLicenseLink(data.license)}

## Contributing

${data.contribute}

## Tests

To run tests, please run the following command(s):

` + "```" + `
${data.install}
` + "```" + `

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}

You can find more of my work at [${data.github}](https://github.com/${data.github})

---

[![Repo](https://badgen.net/badge/icon/GitHub?icon=github&label)](https://github.com/${data.github})
---

`;
}

module.exports = generateMarkdown;
