# Requirements
NodeJS v6.0.0

# Installation
[Download](https://nodejs.org/en/) and Install NodeJS v6.0.0.

# Update
If you already have NodeJS installed on your system but it is on another version,
update your NodeJS to lastest stable version following instructions below:

#### Run the following commands on your terminal (needs super user permission)
```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

# Application
#### Running
To run the elevator application execute the command below on your terminal:

`node elevator-runner.js`

#### Arguments
If you want, it is possible to pass arguments to override the elevator
application default configurations. The accepted arguments are the bellow:

`node elevator-runner.js {$buildingMaxFloor} {$elevatorMaxAmount} {$callsAmount}`

- **$buildingMaxFloor**: Number of floors of the building
- **$elevatorMaxAmount**: Maximum number of people in the elevator
- **$callsAmount**: Number of calls to be generated

# Test
You can run the tests of the classes individually or all at once

#### Individually
`node {$ClassName}.spec.js`

#### At once
`node elevator-specs-runner.js`

# Thank's
All of 00k (:
