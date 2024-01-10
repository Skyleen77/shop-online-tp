# Shop online mirco service

## Clone the repo

```bash
git clone https://github.com/Skyleen77/shop-online-tp.git
```

## Installation

### Install dependencies (intall pnpm if you don't have it)

```bash
pnpm i
```

### Create logging db

```bash
docker run --name postgres-log-db -e POSTGRES_DB=shop_logger -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres
```

### Generate the prisma client and migrate the db

```bash
cd apps/logger/
npx prisma generate
npx prisma db push
cd ../..
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

Go to http://localhost:3001

/!\ You need to have shop online app, logger and Java api running to use the app /!\
