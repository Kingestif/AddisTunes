# AddisTunes

A full-stack music management application built with Node.js, Express, and MongoDB. Easily manage songs with RESTful APIs.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Backend Setup](#backend-setup)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Add, update, delete, and list songs
- Pagination support for listing songs
- MongoDB integration
- RESTful API design
- CORS enabled for frontend integration
- Logging with Morgan

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Morgan (logging)
- CORS
- dotenv

## Backend Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Kingestif/AddisTunes.git
   cd AddisTunes/Backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the `Backend` folder:
     ```
     MONGO_URL=your_mongodb_connection_string
     PORT=5000
     ```

4. **Run the server:**
   ```sh
   npm run dev
   ```
   The server will start on the port specified in `.env`.

## API Endpoints

Base URL: `/api/v1/songs`

| Method | Endpoint         | Description                |
|--------|------------------|---------------------------|
| GET    | `/`              | List all songs (paginated)|
| POST   | `/`              | Add a new song            |
| GET    | `/:id`           | Get song by ID            |
| PATCH  | `/:id`           | Update song by ID         |
| DELETE | `/:id`           | Delete song by ID         |

### Example Song Object

```json
{
  "title": "Levitating",
  "artist": "Dua Lipa",
  "album": "Future Nostalgia",
  "year": 2020,
  "genre": "Pop",
  "duration": "3:23"
}
```

## Environment Variables

- `MONGO_URL`: MongoDB connection string
- `PORT`: Port for the server (default: 3000)

## Project Structure

```
ZemenayTunes/
├── Backend/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── controllers/
│   │   └── songController.js
│   ├── models/
│   │   └── songs.js
│   ├── routes/
│   │   └── songRoutes.js
│   └── .env (not committed)
├── Frontend/
│   └── (empty for now)
└── README.md
```

## Frontend

The `Frontend` folder is reserved for future development. You can use any frontend framework (React, Vue, Angular, etc.) to consume the API.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the ISC License.

---
