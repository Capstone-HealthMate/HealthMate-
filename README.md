# Documentation

## 📌 Steps to Run the Application Locally

This project is built using **React** for the frontend and **Node.js** for the backend. Follow the steps below to set up and run the project locally.

1. **Extract the Application Files**
   - After extracting, you will get two folders: `frontend` and `backend`.

2. **Create a Database in MySQL**
   - Ensure MySQL is installed and running on your system.
   - Create a new database as required by the application.

3. **Open the Application Folder**
   - Do not use Visual Studio Code.
   - Navigate to the extracted application folder using the terminal.

4. **Configure the `.env` File**
   - Copy `.env.example` and rename it to `.env`.
   - Adjust the settings inside the `.env` file according to your preferences, especially database configurations.

5. **Install Dependencies**
   Run the following command to install all required modules:
   ```sh
   npm i
   ```

6. **Synchronize the Database**
   ```sh
   npm run sync
   ```
   - This command synchronizes the database with the project before running it.

7. **Run the Application**
   - To start the frontend:
     ```sh
     npm run dev
     ```
   - To start the backend:
     ```sh
     npm run start
     ```

## 📞 Contact
For any inquiries, feel free to reach out via email: mochaimin.9@gmail.com.
