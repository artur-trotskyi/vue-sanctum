# ROCKET9

**Technologies:** VUEJS 3

## Initial Local Setup (Ubuntu)

### 1. Clone the Project

Clone this repository:

```
git clone <rocket9-vue-repo-url>
```

Clone the Docker Compose repository:

```
git clone <rocket9-vue-docker-compose-repo-url>
```

### 2. Start Containers

Navigate to the `rocket9-vue-docker-compose` folder and start the containers in the background:

```
docker compose up -d
```

### 3. Access the Web Container

Launch Bash in the `vue` container:

```
docker compose exec vue bash
```

### 4. Configure Hosts File on Host Machine

Open `/etc/hosts`:

```
sudo nano /etc/hosts
```

Add the following line:
```
127.0.0.1   rocket9-vue.local
```

### 5. Visit the Vue.js application at `http://rocket9-vue.local`
```
visit http://rocket9-vue.local
```

#### Other commands
```
docker compose down
docker compose stop
docker compose up -d
```