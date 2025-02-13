# VUE SANCTUM

**Technologies:** VUEJS 3

## Initial Local Setup (Ubuntu)

### 1. Clone the Project

Clone this repository:

```
git clone <vue-sanctum-repo-url>
```

Clone the Docker Compose repository:

```
git clone <vue-sanctum-docker-compose-repo-url>
```

### 2. Start Containers

Navigate to the `vue-sanctum-docker-compose` folder and start the containers in the background:

```
docker compose up -d
```

### 3. Access the Web Container

Launch Bash in the `vue` container:

```
docker compose exec vue bash
```

### 4. Run Project and Json Server

Yom must run server in the 'vue' container
```
npm run dev
npm run server
```

### 5. Configure Hosts File on Host Machine

Open `/etc/hosts`:

```
sudo nano /etc/hosts
```

Add the following line:
```
127.0.0.1   laravel-sanctum-vue.local
```

### 6. Visit the Vue.js application at `http://laravel-sanctum-vue.local:5173`

### 7. Change HTTP Port if Needed

If port 5173 is already in use (e.g., by an another application), you can change the HTTP port
HOST_MACHINE_UNSECURE_HOST_PORT in the .env file in the vue-sanctum-docker-compose folder

#### Other commands
```
docker compose stop
docker compose start
docker compose down
docker compose up -d
docker compose exec vue bash
docker compose build --no-cache
```

- https://github.com/bradtraversy/vue-crash-2024
- https://www.youtube.com/watch?v=VeNfHj6MhgA