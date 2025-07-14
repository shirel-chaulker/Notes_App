# Notes App - Deployment Guide

This project includes a backend (Node.js + Express) and a frontend (React), both dockerized and deployed using Docker Compose.

---

## Requirements

- A Linux VM (I used ubuntu)
- Docker installed
- Docker Compose installed
- Ports 80 (frontend) and 5000 (backend) open on the VM firewall/security group

---

## How to Run the App on Your VM

1. SSH into your VM.

2. Clone this repository or copy the project files to the VM.

3. Navigate to the project root folder (where `docker-compose.yml` is located).

4. Run the following command to build and start both backend and frontend containers:

   ```cmd
   docker-compose up --build -d

## Screenshots

### Notes app running in browser

![Notes app UI](images/app-ui.png)

### Docker containers running on VM

![Docker ps output](images/docker-ps.png)

