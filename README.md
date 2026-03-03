# NanoURL 🔗

NanoURL is a full-stack URL shortening web application built using Node.js, Express.js, and MongoDB.

## 🚀 Features

- Generate unique short URLs
- Redirect to original long URLs
- Click analytics tracking
- RESTful API architecture
- MVC project structure
- Simple responsive frontend (HTML & CSS)

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML
- CSS

## 📂 Project Structure

```
NanoURL/
│
├── controllers/
├── models/
├── routes/
├── public/
│   ├── index.html
│   └── analytics.html
├── database/
├── index.js
└── README.md
```

## ⚙️ Installation

1. Clone the repository:

```
git clone https://github.com/your-username/NanoURL.git
```

2. Install dependencies:

```
npm install
```

3. Create a `.env` file and add:

```
MONGO_URL=your_mongodb_connection_string
PORT=9001
```

4. Run the server:

```
npm start
```

Server runs at:

```
http://localhost:9001
```

## 📊 Analytics

Track total clicks and visit timestamps for each shortened URL.

## 📌 Future Improvements

- User authentication
- URL expiration feature
- Rate limiting
- Deployment on cloud

---

Built with ❤️ by Arjun Singh Rajput
