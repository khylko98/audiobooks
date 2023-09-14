# Audiobooks Application

This is a web application that allows users to access and listen to audiobooks. It consists of a frontend built with React Vite and a backend developed using Express.js. The backend connects to a PostgreSQL database to retrieve audiobook data and serves it to the frontend. Users can browse books, access chapters, and listen to audio files.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Using Docker Compose](#using-docker-compose)
- [Usage](#usage)

## Features

- Browse and search for audiobooks;
- Access book details and chapters (images, title etc.);
- Listen to audio files;
- Backend connects to a PostgreSQL database for data storage;
- Frontend built with React Vite.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Docker and Docker Compose installed.
- Git installed (for cloning the repository).

## Getting Started

### Using Docker Compose

1. Clone the repository:

```bash
git clone https://github.com/khylko98/audiobooks.git
cd audiobooks
```

2. Run docker compose:

```bash
docker-compose up
```

## Usage

Access the application by opening a web browser and navigating to `http://localhost:3001`. You can browse and search for audiobooks, access book details and chapters, and listen to audio files.
