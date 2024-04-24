# Appointment Scheduler Project (Vue-Pinia)

This is an in progress sample project to demonstrate my knowledge and abilities with Vue and Pinia. I specifically chose these technologies because I wanted to learn more about them. Currently, this project is using mock data retrieved from a JSON file. A backend will be created in the future.

## Getting Started

In terminal or command prompt, run `npm install` then `npm run dev`.

## Current Features

GOAL: An application that manages appointments, patients, providers and users for a medical facility. This application will have the ability to create, read, update and delete appointments, users and patients.

### Backend

-   TODO

### Frontend

-   Display appointments in day view calendar.

## Current Todo and In Progess Items

Frontend application

-   Appointments
    -   Calendar to display all appointments for facility within a calendar month (in progress).
    -   View appointment details.
    -   Update appointment details.
    -   Create new appointment.

## File Restructure Idea

public/
src/
--assets/
--shared/
----components/
----directives/
----types/
----helpers.ts
--layouts/
--middlewares/
--modules/
----moduleName/
------**tests**/
------components/
--------ComponentA.vue
--------ComponentB.vue
------store/
--------moduleState.ts
------helpers.ts
------types.ts
--router/
--services/
--store/
--views/
