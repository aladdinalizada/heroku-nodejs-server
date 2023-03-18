import express from "express";

const router = express.Router();

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
    position: "Developer",
  },
  {
    id: 2,
    name: "Bob Williams",
    age: 30,
    position: "Designer",
  },
  {
    id: 3,
    name: "Shannon Jackson",
    age: 25,
    position: "The Boss",
  },
];

router.get("/", (req, res) => {
  res.send(data);
});

export default router;
