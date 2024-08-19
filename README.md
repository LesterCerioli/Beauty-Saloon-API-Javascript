# Beauty Saloon API

## Overview

The Beauty Saloon API is a Node.js application designed to manage and facilitate operations for a beauty salon. It provides endpoints to manage salons, appointments, attendants, and customers. The API is built with Express and connects to a PostgreSQL database.

## Features

- **Salon Management:** Create, read, update, and delete beauty salons.
- **Appointment Scheduling:** Manage appointments with CRUD operations.
- **Attendant Management:** Handle attendants with CRUD operations.
- **Customer Management:** Manage customer details with CRUD operations.
- **Data Validation:** Ensures data integrity and validation for all entities.
- **Debugging Support:** Integrated with debugging tools for development.
- **Hot Reloading:** Uses Nodemon for automatic application restarts on code changes.

## Getting Started

### Prerequisites

- **Node.js:** Ensure you have Node.js (v18 or later) installed.
- **PostgreSQL:** Make sure PostgreSQL is installed and running.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/beauty-saloon-api.git
   cd beauty-saloon-api

2. **Install Dependencies**
   ```bash
   npm install

3. **Set Up Environment Variables**
   ```bash
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=yourusername
   DB_PASSWORD=yourpassword
   DB_NAME=beautysaloon

