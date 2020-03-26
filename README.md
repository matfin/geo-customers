#### What is this?
This is a small exercise I put together in Typescript.

It fetches a list of users from an endpoint and displays them in a sorted manner. It makes use of the formulae outlined in this [Wikipedia article](https://en.wikipedia.org/wiki/Great-circle_distance) to calculate which users fall within a particular distance from a place.

This exercise was put together as a simple demonstration of a NodeJS command line app with full test coverage and a basic tool chain for Javascript developers.

#### How do I run it?
First, you need to have [NodeJS installed](https://nodejs.org/en/download/). Once this is set up, follow these instructions:

1) Clone this repository to your local machine
  - `you$: git clone git@github.com:matfin/geo-customers.git`

2) Install the dependencies
  - `you$: npm install`

3) Run the application to display a list of fetched users sorted by their user ID in ascending order
  - `you$: npm start`
  - `you$: npm start > output.txt` if you want to write to a file
  - `you$: DISTANCE_KM=30 npm run start` if you want to use environment variables to override values (see below)

4) Environment variables
The following environment variables when set, will override the default values:
- BASE_URL
- LAT
- LNG
- DISTANCE_KM

#### Code quality
This is covered too, so if you want run tests and see tests and coverage, run:
  - `you$: npm run test`
  - `you$: npm run coverage`

Code quality checks are carried out with ESLint, so run:
  - `you$: npm run lint`

#### What is missing?
I could have wrapped this in a nice UI - maybe creating a cool app with the latest framework, visualsing users on a Google map with individual icons for each one of them relative to the office.

I wanted to take a pragmatic approach to this problem and stick to the script as much as possible. I have a working solution full test coverage and code lint checkers making sure everything is ok.

Separation of concerns has also been dealt with. A function to fetch users, for instance, should only be concerned with fetching a list of users. We can use something else to deal with filtering and sorting.