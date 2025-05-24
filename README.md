# 📚 Book Review API

A RESTful API built with **Node.js**, **Express**, and **MongoDB** that allows users to sign up, log in, manage books, and leave reviews. JWT-based authentication is implemented to protect certain routes.

---

## 🚀 Features

- User Signup and Login (JWT Auth)
- Add/Search/List/View Books
- Add/View/Update/Delete Reviews
- Pagination and Search Filters
- MongoDB with Mongoose ODM
- Protected Routes using Middleware



## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (Authentication)
- bcryptjs (Password Hashing)
- EJS (View Engine)



## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/book-review-api.git
cd book-review-api

### 2. Install Dependencies
npm install


### 3. Configure Environment Variables
Create a .env file in the root directory and add the following:

PORT=3000
MONGO_URI=mongodb://localhost:27017/bookreview
JWT_SECRET=jaishreeram


4. Start the Server
npm start

Server runs on http://localhost:3000



📬 API Endpoints

🔐 Auth Routes


| Method | Endpoint           | Description     |
| ------ | ------------------ | --------------- |
| POST   | `/api/auth/signup` | Register a user |
| POST   | `/api/auth/login`  | Login a user    |



📚 Book Routes


| Method | Endpoint               | Description                      |
| ------ | ---------------------- | -------------------------------- |
| GET    | `/api/books`           | Get all books                    |
| GET    | `/api/books/search?q=` | Search books by title or author  |
| GET    | `/api/books/:id`       | Get single book by ID            |
| POST   | `/api/books`           | Add a new book *(auth required)* |


📝 Review Routes


| Method | Endpoint                 | Description                            |
| ------ | ------------------------ | -------------------------------------- |
| POST   | `/api/books/:id/reviews` | Add review to a book *(auth required)* |
| PUT    | `/api/reviews/:id`       | Update a review *(auth required)*      |
| DELETE | `/api/reviews/:id`       | Delete a review *(auth required)*      |

🔐 Authentication
Send JWT token in the header as:

Authorization: Bearer <token>

🧪 Testing the API

You can use tools like Postman  to test the API endpoints.

Sample Signup Request

POST /api/auth/signup
{
  "username": "testuser",
  "password": "123456"
}


Sample Login Request

POST /api/auth/login
{
  "username": "testuser",
  "password": "123456"
}

Returns a token:
{
  "token": "your_jwt_token"
}

Use this token for protected routes.


📘 BOOK API
📚 Get All Books 
Endpoint: GET /api/books

![Screenshot 2025-05-24 221521](https://github.com/user-attachments/assets/2f342172-1b54-4b7f-bce5-a7381dc707e1)

📚 Get  Books By Id
:id  is a bookid
Endpoint: GET /api/books/:id

![Screenshot 2025-05-24 221658](https://github.com/user-attachments/assets/d68c9ebc-1543-4724-8e8a-f30cc20ae9f7)


📚 Add  Books 
:id  is a bookid
Endpoint: POST /api/books/

![Screenshot 2025-05-24 221819](https://github.com/user-attachments/assets/a759e126-78a4-4eb4-9c61-021c97c8c142)


📚 Search Book by using query parameter by title ,author ,genre 
Endpoint: GET /api/books/search?q=Paulo



![Screenshot 2025-05-24 221930](https://github.com/user-attachments/assets/67cad831-6b16-4e72-af21-c3a9c37b4bfd)


📚 Update Review:-
:id is a review id
Endpoint: PUT /api/reviews/:id

![Screenshot 2025-05-24 222129](https://github.com/user-attachments/assets/7e077b72-0e6a-411f-a12f-2437fc13d289)



📚 Delete Review:-
:id is a review id
Endpoint:DELETE /api/reviews/:id

![Screenshot 2025-05-24 222420](https://github.com/user-attachments/assets/c550cf74-0dcd-4413-a474-b4996df40839)




