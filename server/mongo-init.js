db.createUser({
  user: "db_user",
  pwd: "db_pwd",
  roles: [
    {
      role: "dbOwner",
      db: "database",
    },
  ],
});
