
# colorful-console

log-glow is a versatile logging tool designed to enhance the development experience across various JavaScript environments, including Node.js, web browsers, and React Native. It brings clarity and organization to your console logs with color coding and environment-specific functionality.





## Features

Developers often struggle with cluttered and hard-to-read console logs, especially when dealing with complex applications. log-glow addresses this issue by:

- **Color-Coding Logs**: Making logs more readable and distinguishable.

- **Environment-Specific Logging**: Reducing noise in production logs by enabling verbose logging only in development environments.


## Problems Solved


During development, it's common to encounter the following challenges:

- Difficulty in distinguishing between various types of log messages.

- Console logs becoming cluttered and overwhelming, especially in production environments.

- Spending excessive time debugging due to unclear log outputs.
log-glow tackles these problems by providing a clear, customizable, and environment-aware logging solution.









## How to use

Install log-glow using npm:

```npm install log-glow```

or using yarn

```yarn add log-glow```

## Usage

### Import log-glow into your project:

```import {cls} from 'log-glow';```

#### Basic Logging

```cls('Hello, world!', { label: 'info', color: 'blue' });```

## Props

- **message**: The message you want to log.

- **options**: An object containing:
 - **label**: A string indicating the type of log (e.g., 'error', 'red').

- **color**: (Optional) A string specifying the color for the log message.

## Color to pass

- **red** - Red for error.

- **yellow** - Yellow for warning.

- **green** - green for success.

- **blue** - Blue for info

- **purple** - Purple for any custom message.




## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/riteish-vishwakarma)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/rvritesh07)


## Feedback

If you have any feedback, please reach out to us at rvritesh11@gmail.com

