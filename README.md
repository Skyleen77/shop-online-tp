# Shop online mirco service

## Installation

### Install dependencies (intall pnpm if you don't have it)

```bash
pnpm i
```

### Create logging db

```bash
docker run --name postgres-log-db -e POSTGRES_DB=shop_logger -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres
```

### Run logger

```bash
pnpm logger:dev
```

### Run logger studio (to see the logs)

```bash
pnpm logger:studio
```

### Run the shop online app

```bash
pnpm shop-app:dev
```

/!\ You need to have shop online app and logger running to use the app /!\
