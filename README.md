# Fitness-Tracker

## Description

This project is a workout tracker that can log multiple exercies in a workout. When tracking a workout you can choose from two categories resistance or cardio, for a resistance exercise you can track the name, type, weight, sets, reps and duration. For a cardio exercise you can track the distance. My motivation for this project was to help track my workouts daily and able to see my progress throught the week. This project helped me improve my skills on MongoDB and Mongoose as well as setting up and using MongoDB Atlas on Heroku.

## Link to the Project

-   [GitHub Repository][github-repo]
-   [Deployed Link][deployed-link]

## Table of Contents

-   [Installation](#installation)
-   [Project Demo](#project-demo)
-   [Usage](#usage)
-   [License](#license)
-   [Contributing](#contributing)
-   [Tests](#tests)
-   [Questions](#questions)

## Installation

-   To clone the repository
    -   Make sure you have right access to pull in the repository either by applying 'ssh' keys or by providing a username and password'
    -   Make sure your path is proper
    -   Copy the git command to where you want to clone the repository
    ```
    git clone git@github.com:ByteSizeError/Fitness-Tracker.git
    ```
    -   You will see a `Fitness-Tracker` folder.
-   An alternate document to clone a repo can also be found at [github][github-link]

## Project Demo

### Homepage

![homepage][01-homepage]

-   Shows the latest workout the user has added to

### Adding Exercise

![add exercise][02-add-exercise]

-   Here the user has an option to choose between resistance or cardio exercise to add

### Adding Resistance Workout

![resistance exercise][03-add-resistance]

-   For the resistance exercise the user has to fill in the name, weight, sets, reps, and duration of the exercise

### Adding Cardio Workout

![cardio exercise][04-add-cardio]

-   For the cardio exercise the user has to fill in the name, distance, and duration of the exercise

### Last Workout Updated

![last workout][05-last-workout]

-   Shows the users the last workout they added

### Stats Page

![stats page][06-stats-page]

-   Shows the users their duration for the cardio on the left and the total amount of weights for each workout on the right

## Usage

-   Users can add exercise to their most recent workout plan
-   Users can add exercise to a new workout plan
-   Users can view the combined weight of multiple exercises from the past seven workouts
-   Users can view total duration of each workout from the past seven workouts

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

https://www.mit.edu/~amini/LICENSE.md

```MIT License

      Copyright (c) 2021 Jimmy Zheng

      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
```

## Contributing

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, caste, color, religion, or sexual identity
and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

Examples of behavior that contributes to a positive environment for our
community include:

-   Demonstrating empathy and kindness toward other people.
-   Being respectful of differing opinions, viewpoints, and experiences.
-   Giving and gracefully accepting constructive feedback.
-   Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience.
-   Focusing on what is best not just for us as individuals, but for the overall community.

Examples of unacceptable behavior include:

-   The use of sexualized language or imagery, and sexual attention or advances of any kind
-   Trolling, insulting or derogatory comments, and personal or political attacks
-   Public or private harassment
-   Publishing others' private information, such as a physical or email address, without their explicit permission
-   Other conduct which could reasonably be considered inappropriate in a professional setting

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.1, available at
[https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].

Community Impact Guidelines were inspired by
[Mozilla's code of conduct enforcement ladder][mozilla coc].

For answers to common questions about this code of conduct, see the FAQ at
[https://www.contributor-covenant.org/faq][faq]. Translations are available
at [https://www.contributor-covenant.org/translations][translations].

## Tests

Testing can be performed in the command line after installation of the project on the machine. To test the proeject go into the command line and type in

```
npm i
```

to install all the required modules.
To run and test the program refer to the project demo as a walkthrough to get started.
Type in

```
npm run watch
```

If modules are missing type in

```
npm i
```

and follow the instructions for how to fix package issues.

After all required modules are installed should be able to run the program. It will prompt you for project information. Here is where you can test the project.

## Questions

For questions you can reach me at https://github.com/ByteSizeError.

You can also reach me at jimmyz0622@gmail.com for additional questions.

[01-homepage]: https://github.com/ByteSizeError/Fitness-Tracker/blob/c31708ad4331fe5d3153258d1e78673dec3eba2b/assets/images/01-homepage.png
[02-add-exercise]: https://github.com/ByteSizeError/Fitness-Tracker/blob/c31708ad4331fe5d3153258d1e78673dec3eba2b/assets/images/02-add-exercise.png
[03-add-resistance]: https://github.com/ByteSizeError/Fitness-Tracker/blob/c31708ad4331fe5d3153258d1e78673dec3eba2b/assets/images/03-add-resistance.png
[04-add-cardio]: https://github.com/ByteSizeError/Fitness-Tracker/blob/c31708ad4331fe5d3153258d1e78673dec3eba2b/assets/images/04-add-cardio.png
[05-last-workout]: https://github.com/ByteSizeError/Fitness-Tracker/blob/c31708ad4331fe5d3153258d1e78673dec3eba2b/assets/images/05-last-workout.png
[06-stats-page]: https://github.com/ByteSizeError/Fitness-Tracker/blob/c31708ad4331fe5d3153258d1e78673dec3eba2b/assets/images/06-stats-page.png
[deployed-link]: https://still-tundra-24344.herokuapp.com/
[faq]: https://www.contributor-covenant.org/faq
[github-link]: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository
[github-repo]: https://github.com/ByteSizeError/Fitness-Tracker
[homepage]: https://www.contributor-covenant.org
[mozilla coc]: https://github.com/mozilla/diversity
[translations]: https://www.contributor-covenant.org/translations
[v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
