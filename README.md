# Layered Architecture for Fullstack Next.js Applications

### Folder Structure

```
- app
- applications
- infrastructure
- utils
```

### App

The `app` folder contains the Next.js application. This is where the frontend code lives which is the presentation
layer of the application.

### Applications

The `applications` folder contains the business logic of the application. This is where the application services and
use cases live.

### Infrastructure

The `infrastructure` folder contains the implementation details of the application. This is where the database operations happen.

### Utils

The `utils` folder contains utility functions that can be used across the application.

## Presentation Layer

The presentation layer is the frontend of the application. It is responsible for rendering the user interface and
interacting with the user. The presentation layer is built using Next.js which is a React framework.

It would be in the `app` folder. And it would contain the following folders:

```
- _components
- api
- all other frontend code
```

### Components

The `_components` folder contains all the reusable components that are used across the application. This is conventional next.js folder to make certain folder private inside the app folder.
