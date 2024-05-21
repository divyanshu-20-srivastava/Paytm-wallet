### Project Description

**Project Name: PayEasy**

**Overview:**
PayEasy is a digital wallet application designed to replicate the functionality of Paytm, allowing users to make payments to merchants and transfer money to other users seamlessly. The project is built using a microservices architecture with Turborepo, encompassing three main applications: User App, Merchant App, and Bank Server. 

**Key Components:**

1. **User App:**
   - Interface for individual users to manage their digital wallet.
   - Features include adding funds, transferring money to other users, and viewing transaction history.
   - Authentication and user management are handled via NextAuth.

2. **Merchant App:**
   - Interface for merchants to receive payments from users.
   - Merchants can manage their transactions, view payment history, and handle refunds.

3. **Bank Server:**
   - Simulated bank server created using Express.js.
   - Manages user and merchant accounts, processes transactions, and ensures secure money transfers.
   - Implements PostgreSQL database transactions with row-level locking to ensure atomicity and consistency of transactions.

**Technologies Used:**

- **Frontend:** React.js (integrated in User and Merchant Apps)
- **Backend:** Express.js (for Bank Server)
- **Database:** PostgreSQL (utilizing transaction properties for reliable transactions)
- **Authentication:** NextAuth (secure authentication for users and merchants)
- **Monorepo Management:** Turborepo (for efficient handling of multiple apps)

**Project Highlights:**

- **Secure Transactions:** Uses PostgreSQL transaction properties to lock rows during transactions, ensuring data integrity and preventing concurrent transaction issues.
- **Authentication:** Robust authentication system using NextAuth, providing secure access for users and merchants.
- **Microservices Architecture:** Separation of concerns through distinct applications for users, merchants, and the bank server, enhancing scalability and maintainability.
- **Simulated Bank Server:** An Express.js server simulates a bank, managing user and merchant funds, and processing all payment and transfer operations.

PayEasy aims to provide a realistic and secure digital wallet experience, ensuring smooth and reliable financial transactions for both users and merchants.

![Screenshot 2024-05-21 121543](https://github.com/divyanshu-20-srivastava/Paytm-wallet/assets/96994877/76cc9b38-4b3a-474b-9854-5a6cb96f0efa)


- Clone the repo

```jsx
git clone https://github.com/100xdevs-cohort-2/week-17-final-code
```

- npm install
- Run postgres either locally or on the cloud (neon.tech)

```jsx
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

- Copy over all .env.example files to .env
- Update .env files everywhere with the right db url
- Go to `packages/db`
    - npx prisma migrate dev
    - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - alice (See `seed.ts`)
