# OAuth 2 in Node JS

## Building process

1. Create the database model in PostgreSQL

```sql
CREATE TABLE public.users
(
    id serial,
    username text,
    user_password text,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.users
    OWNER to postgres;



CREATE TABLE public.access_tokens
(
    id serial,
    access_token text,
    user_id integer,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.access_tokens
    OWNER to postgres;
```
2. Initialize the Node JS project

```bash
git init
```

```bash
git remote add origin <your-remote-here>
```

```bash
npm init
```

3. Install dependencies
```bash
npm install body-parser express pg node-oauth2-server
```

4. Make 3 directories: auth, db and test

5. Touch the `pgWrapper.js` file into the `db` folder to wrap the queries to the database.

6. Add two repositories to handle the users and access tokens operations.

## Installation


## Execution

