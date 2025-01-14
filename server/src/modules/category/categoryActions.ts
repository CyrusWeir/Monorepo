// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions

import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredcategories = categories.filter((category) =>
      category.name.includes(req.query.q as string),
    );

    res.json(filteredcategories);
  } else {
    res.json(categories);
  }
};

const read: RequestHandler = (req, res) => {
  const parsedID = Number.parseInt(req.params.id);

  const category = categories.find((p) => p.id === parsedID);

  if (category != null) {
    res.json(category);
  } else {
    res.status(404).send("Program not found");
  }
};

// Export them to import them somewhere else

export default { browse, read };
