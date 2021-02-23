# Project Overview

## Project Name

Avysavvy
https://affectionate-euclid-867c96.netlify.app/

## Project Description

Avy Savy is an avalanche observation and reporting app built with Airtable and React where the user can view previous avalanche reports and add a report themselves.   

## Wireframes

![desktop wireframe](https://i.imgur.com/tlQMDVv.jpg)
![desktop about page](https://i.imgur.com/tXrBdi8.jpg)
![mobile wireframe](https://i.imgur.com/193LAXp.jpg) ![Mobile about page](https://i.imgur.com/eoiKCt1.jpg)

## Component Hierarchy
![component hierarchy](https://i.imgur.com/VzYIcbI.jpg)

## API and Data Sample


```json
{
    "records": [
        {
            "id": "recGEbA9i7CZIUooP",
            "fields": {
                "type": "Avalanche",
                "location": "Flagpole Peak",
                "description": "Storm slab avalanche. 1ft crown. Human trigger. One person injured",
                "date": "2/12/2021"
            },
            "createdTime": "2021-02-15T15:20:22.000Z"
        },
        {
            "id": "recRV0eKzvoMmAEwe",
            "fields": {
                "type": "Avalanche",
                "date": "2/12/2021",
                "location": "Blue Lakes",
                "description": "Storm slab avalanche. Triggered by skier. Skier was swept over cliffs and care flighted to Reno with severe injuries. "
            },
            "createdTime": "2021-02-15T15:20:22.000Z"
        },
        {
            "id": "rec67mRXj7FTvXUFi",
            "fields": {
                "type": "Observation",
                "date": "2/13/2021",
                "location": "Castle Peak",
                "description": "A pit test revealed a persistent weak layer approximately 14\" deep. "
            },
            "createdTime": "2021-02-15T15:20:22.000Z"
        }
    ],
    "offset": "rec67mRXj7FTvXUFi"
}

```
 

#### MVP 

- Create an API using Airtable
- Render data in a feed style with newest data displayed at the top of the page
- Create a form component that allows users to add an observation
- Create a clickable delete button to remove a post
- Create an About component that explains the purpose of this site

#### PostMVP  

- Incorporate Photos
- Allow users to edit posts
- secondary external API to add a current weather page
- add an education page
- embedded map for locations of each report 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb 15| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Feb 16| Project Approval | Complete
|Feb 17| Core Application Structure/ Componenet creation / CSS | Complete
|Feb 18| Get / Post / Delete Data / CSS | Complete
|Feb 19| Route and clickable links / MVP / CSS | Complete
|Feb 22| Post MVP goals / CSS | Complete
|Feb 23| Presentations | Incomplete

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create API | H | 2hrs| 2hrs | hrs |
| Initial React App setup | H | 3hrs| 4hrs | hrs |
| Render Axios Data | H | 3hrs| 4hrs | hrs |
| Post Data to Airtable | H | 2hrs| 2hrs | hrs |
| Delete From Airtable | H | 3hrs| 1hrs | hrs |
| Routes and path configuration | H | 3hrs| 4hrs | hrs |
| Clickable Links | H | 3hrs| 2hrs | hrs |
| CSS | H | 10hrs| 12hrs | hrs |
| Debugging | H | 10hrs| 6hrs | hrs |
| Media Query | H | 2hrs| 3hrs | hrs |
| Total | H | 41hrs| hrs | hrs |


## SWOT Analysis

### Strengths: 

I am confident with API calls.

### Weaknesses:

CSS continues to be a weakness for me. I anticipate this to be timeconsuming which is why I've added it as a to-do nearly every day in my project schedule. 

### Opportunities:

I am taking this as an opportunity to put the skills we have learned in class towards something I am passionate about. Avalanche safety is something I take very seriously and it's really cool to be able to build something from stratch that is dedicated to avalanche awareness and safety. 

### Threats:

I anticipate many hiccups along the way but we've been given an incredible amount of resources to tackle these over the past 5 weeks, so I am going to focus on self sufficient debugging and problem solving instead of immediately asking for help. 
