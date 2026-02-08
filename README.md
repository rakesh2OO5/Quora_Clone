# Quora Clone – RESTful API Project

A simple Quora-like platform built to learn RESTful APIs using Node.js, Express, and EJS.

## Features
- Create a new post
- View all posts
- View a single post in detail
- Edit a post
- Delete a post

## Tech Stack
- Node.js
- Express.js
- EJS
- UUID
- HTML / CSS

## REST Routes

| Method | Route | Description |
|------|------|------------|
| GET | /posts | View all posts |
| GET | /posts/:id | View a single post |
| POST | /posts | Create a new post |
| PATCH | /posts/:id | Edit a post |
| DELETE | /posts/:id | Delete a post |

## Installation

```bash
git clone https://github.com/your-username/quora-clone.git
cd quora-clone
npm install
nodemon index.js
