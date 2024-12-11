# CS5200FinalProject
## Book Management System for REMO

### Overview & Developers
- We create Admin Frontend for REMO to manage the books, and a general Frontend for public users to see and save the books.
- Team members: Min-Hsin Chang, Cai Peng, Xi Guan
- This project is CS5200 final project and collaborate with REMO

### How to install it
- Prerequisites
  - Before starting, ensure you have installed: Node.js(prefer lastest version), npm(Node Package Manager), Git(optional, for cloning code)
- Installation Steps:
  1. Clone the repository(if you don't have Git, you can download the repository as ZIP file)
  2. Install Dependencies both in Frontend and Backend folders: `npm install`
    - If error occur, you can use `rm -rf node_modules rm package-lock.json` to remove the dependencies and install again
- Configuration: Create .env and add the necessary environment, like Database(Backend), Firebase(Frontend)
- Start Frontend: `npm run dev`, frontend will running on port 5173
- Start Backend: `node index.js`, running on port 5001

### Frontend - Admin Dashboard
- For Admin, using localhost:5173/dashboard or localhost:5173/admin to login, default username is admin, password is
  - The token will expire in 1 hour, if you leave for some time, we recommend you login again.
![Admin](https://github.com/CaiPeng99/CS5200FinalProject/blob/main/5200Final-frontend/pictures/user_pwd.png)
- Admin can manage their books like retrieve all the books from database, add new books, edit the exist books and delete books if they want.
![Manage Book-Admin](https://github.com/CaiPeng99/CS5200FinalProject/blob/main/5200Final-frontend/pictures/dashboard.jpg)
- Admin can add new books information here and it will shows on the dashboard, the dashboard will display the book’s title, type(Catagory), author, form, ISBN, format and publisher. And the data will store in MongoDB as well.
![Add Book-Admin 1](https://github.com/CaiPeng99/CS5200FinalProject/blob/main/5200Final-frontend/pictures/add.jpg)
![Add Book-Admin 2](https://github.com/CaiPeng99/CS5200FinalProject/blob/main/5200Final-frontend/pictures/add_2.jpg)
![Add Book-MongoDB](https://github.com/CaiPeng99/CS5200FinalProject/blob/main/5200Final-frontend/pictures/post_API.png)
- Admin can also edit the information by click “Edit”. For example, we modified the type from “Notification” to “Blended”, it will represent the updated version here, and also update the corresponding data in MongoDB.
![Edit Book-Admin](https://github.com/CaiPeng99/CS5200FinalProject/blob/main/5200Final-frontend/pictures/edit.png)
![Edit Book-MongoDB](https://github.com/CaiPeng99/CS5200FinalProject/blob/main/5200Final-frontend/pictures/edit_api.png)

### Frontend - General Users
- For general users, using localhost:5173/ to access the website Homepage, and create account if they want.
- New Books this week: which represent the newest books
- Top Save: which represent the Top Save book by users, and user can manage their saved books
- Recommended for you

### Backend - API Design
- POST/create-book: Add a new book and check if the ISBN already exists
- Get/ :Get all books in dashboard
- Get/:id: Get a single book’s information
- PUT/edit/:id : Update a book’s information by bookId
- DELETE/edit/:id: Delete a book by bookId
![POST](https://github.com/CaiPeng99/CS5200FinalProject/blob/main/5200Final-frontend/pictures/post_db.png)
![PUT](https://github.com/CaiPeng99/CS5200FinalProject/blob/main/5200Final-frontend/pictures/edit_api.png)
![Duplicate](https://github.com/CaiPeng99/CS5200FinalProject/blob/main/5200Final-frontend/pictures/flag_duplicate.png)
![Admin Check](https://github.com/CaiPeng99/CS5200FinalProject/blob/main/5200Final-frontend/pictures/backend_user_schema.png)

## Database ER Diagram
![ER Diagram](https://github.com/CaiPeng99/CS5200FinalProject/blob/main/5200Final-frontend/pictures/ER_Diagram.jpg)
![Book Schema](https://github.com/CaiPeng99/CS5200FinalProject/blob/main/5200Final-frontend/pictures/Book_Schema.png)

## Technologies Used
- Frontend: React.js, Tailwind
- Backend: Node.js, Express.js, REST APIs
- Authentication: Firebase, JWT
- Database: MongoDB
- Others: Git, Github, Postman