# Umbrella Logistics

A full-stack logistics and freight-tracking web application built as a personal/portfolio project. Users can browse services, view the freight network, submit quote requests, get in touch via a contact form, and track shipments by reference number.

## Tech Stack

**Frontend**
- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion

**Backend**
- Spring Boot 4 (Java 21)
- Spring Data JPA / Hibernate
- PostgreSQL
- Maven

## Features

- Shipment tracking by reference number
- Quote request submission
- Contact form
- Freight network / service overview pages
- REST API backend with a Postgres database

## Getting Started

### Prerequisites
- Node.js 18+
- Java 21 JDK
- PostgreSQL (running locally, or via a service like Docker)

### 1. Clone the repo
```bash
git clone https://github.com/YOUR-USERNAME/umbrella-logistics.git
cd umbrella-logistics
```

### 2. Set up the database
Create a Postgres database:
```bash
createdb umbrella_logistics
```
Set your database credentials as environment variables (don't hardcode them):
```bash
export DB_USERNAME=postgres
export DB_PASSWORD=your_password_here
```

### 3. Run the backend
```bash
cd backend
./mvnw spring-boot:run
```
The API will start on `http://localhost:8080`.

### 4. Load demo data (optional)
```bash
psql -U postgres -d umbrella_logistics -f backend/seed.sql
```

### 5. Run the frontend
In a new terminal, from the project root:
```bash
npm install
npm run dev
```
The site will be available at `http://localhost:5173`.

## Author

Built by Allowence Thato Mathebula — Computer Science student.  
[LinkedIn](www.linkedin.com/in/allowence-thato-mathebula-3a271a415) 