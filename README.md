# Project Overview

## Project Name

Avy Savy

## Project Description

Avy Savy is an avalanche observation and reporting app built with Airtable and React where the user can view previous avalanche reports and add a report themselves.   

## Wireframes

![desktop wireframe](https://i.imgur.com/tlQMDVv.jpg)
![mobile wireframe](https://i.imgur.com/193LAXp.jpg)

## Component Hierarchy
![component hierarchy](https://i.imgur.com/VzYIcbI.jpg)

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below:

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
|Feb 15| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Feb 16| Project Approval | Incomplete
|Feb 17| Core Application Structure/ Componenet creation | Incomplete
|Feb 18| Get / Post / Delete Data / CSS | Incomplete
|Feb 19| Route and clickable links / MVP / CSS | Incomplete
|Feb 22| Post MVP goals / CSS | Incomplete
|Feb 23| Presentations | Incomplete

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create API | H | 2hrs| hrs | hrs |
| Initial React App setup | H | 3hrs| hrs | hrs |
| Render Axios Data | H | 3hrs| hrs | hrs |
| Post Data to Airtable | H | 2hrs| hrs | hrs |
| Delete From Airtable | H | 3hrs| hrs | hrs |
| Routes and path configuration | H | 3hrs| hrs | hrs |
| Clickable Links | H | 3hrs| hrs | hrs |
| CSS | H | 10hrs| hrs | hrs |
| Debugging | H | 10hrs| hrs | hrs |
| Media Query | H | 2hrs| hrs | hrs |
| Total | H | 41hrs| hrs | hrs |

