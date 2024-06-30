# BCR Challenge 5

## Endpoints

### Retrieve All Cars

- **Endpoint:** `/api/cars`
- **Method:** GET
- **Parameters:** None
- **Request Example:**

  ```bash
  curl --location '127.0.0.1:3000/api/cars'
  ```

- **Response Example:**

  ```http
  HTTP/1.1 200 OK
  Content-Type: application/json; charset=utf-8
  ETag: W/"91b-kvf4UqFKT8coejDo5o2A3fB4J+k"
  X-Powered-By: Express
  Date: Mon, 19 May 2024 12:18:08 GMT
  Content-Length: 2331

  {
    "message": "success",
    "cars": [
      {
        "id": 1,
        "name": "Honda Civic",
        "price": 22473,
        "picture": null,
        "start_rent": "2024-06-17T16:25:47.765Z",
        "finish_rent": "2024-06-18T16:25:47.765Z",
        "created_at": "2024-05-19T16:25:47.796Z",
        "updated_at": null
      },
      {
        "id": 2,
        "name": "BMW 3 Series",
        "price": 82326,
        "picture": null,
        "start_rent": "2024-06-11T16:25:47.765Z",
        "finish_rent": "2024-06-20T16:25:47.765Z",
        "created_at": "2024-05-19T16:25:47.796Z",
        "updated_at": null
      },
      ...
    ]
  }
  ```

### Retrieve a Car by ID

- **Endpoint:** `/api/cars/:id`
- **Method:** GET
- **Parameters:** id
- **Request Example:**

  ```bash
  curl --location '127.0.0.1:3000/api/cars/11'
  ```

- **Response Example:**

  ```http
  HTTP/1.1 200 OK
  Content-Type: application/json; charset=utf-8
  ETag: W/"91b-kvf4UqFKT8coejDo5o2A3fB4J+k"
  X-Powered-By: Express
  Date: Mon, 19 May 2024 12:18:08 GMT
  Content-Length: 2331

  {
    "message": "success",
    "car": {
        "id": 11,
        "name": "Tesla Model X",
        "price": 1000000000,
        "picture": "https://res.cloudinary.com/djepwirkq/image/upload/v1716136689/bcr/sumolhkyinskvk8fq3j4.png",
        "start_rent": "2024-06-16T16:25:47.765Z",
        "finish_rent": "2024-06-17T16:25:47.765Z",
        "created_at": "2024-05-19T16:38:10.124Z",
        "updated_at": null
    }
  }
  ```

### Add a Car

- **Endpoint:** `/api/cars/`
- **Method:** POST
- **Parameters:** id
- **Request Example:**

  ```bash
  curl --location '127.0.0.1:3000/api/cars' \
    --form 'name="Tesla Model X"' \
    --form 'image=@"/home/nizar/Downloads/GUID-A016FC6C-5896-4495-9DD8-2B074869A838-online-en-US.png"' \
    --form 'price="1000000000"' \
    --form 'start_rent="2024-06-16T16:25:47.765Z"' \
    --form 'finish_rent="2024-06-17T16:25:47.765Z"'
  ```

- **Response Example:**

  ```http
  HTTP/1.1 200 OK
  Content-Type: application/json; charset=utf-8
  ETag: W/"91b-kvf4UqFKT8coejDo5o2A3fB4J+k"
  X-Powered-By: Express
  Date: Mon, 19 May 2024 12:18:08 GMT
  Content-Length: 2331

  {
    "message": "success",
    "car": {
        "id": 11,
        "name": "Tesla Model X",
        "price": 1000000000,
        "picture": "https://res.cloudinary.com/djepwirkq/image/upload/v1716136689/bcr/sumolhkyinskvk8fq3j4.png",
        "start_rent": "2024-06-16T16:25:47.765Z",
        "finish_rent": "2024-06-17T16:25:47.765Z",
        "created_at": "2024-05-19T16:38:10.124Z",
        "updated_at": null
    }
  }
  ```

### Update a Car by ID

- **Endpoint:** `/api/cars/:id`
- **Method:** PUT
- **Parameters:** id
- **Request Example:**

  ```bash
  curl --location '127.0.0.1:3000/api/cars/11'
  ```

- **Response Example:**

  ```http
  {
    "message": "success",
    "car": {
        "id": 11,
        "name": "Tesla Model X",
        "price": 1000000000,
        "picture": "https://res.cloudinary.com/djepwirkq/image/upload/v1716136689/bcr/sumolhkyinskvk8fq3j4.png",
        "start_rent": "2024-06-16T16:25:47.765Z",
        "finish_rent": "2024-06-17T16:25:47.765Z",
        "created_at": "2024-05-19T16:38:10.124Z",
        "updated_at": null
    }
  }
  ```

### Delete a Car by ID

- **Endpoint:** `/api/cars/:id`
- **Method:** DELETE
- **Parameters:** id
- **Request Example:**

  ```bash
  curl --location '127.0.0.1:3000/api/cars/11'
  ```

- **Response Example:**

  ```http
  {
    "message": "success"
  }
  ```

## ERD (Entity Relationship Diagram)

![ERD in DBML dbdiagram.io](./dbml.png)
