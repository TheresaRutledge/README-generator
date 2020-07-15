
const generateBadge = license => {
  
}


// function to generate markdown for README
function generateMarkdown(data) {
  const {title,description,installation,usage,contributing,test,username,email,license} = data;
  return `# ${title}  ${generateBadge(license)}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${description}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  This application is covered wtih a ${license} license

  ## Contributing
  ${contributing}

  ## Tests
  ${test}

  ## Questions
  * Checkout my GitHub profile: https://github.com/${username}
  OR  
  * Email me at: ${email}

`;
}

module.exports = generateMarkdown;
