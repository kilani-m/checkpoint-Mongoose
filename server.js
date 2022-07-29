const express = require("express");
const db_Connect = require("./db_Connect/db_Connect");
const Person = require("./models/Person");

db_Connect();
const app = express();

//create person

const arrayOfPeople = async () => {
  try {
    const manyPerson = await Person.create([
      {
        name: "Marwar",
        age: 29,
        favoriteFoods: ["salade", "spaguethi"],
      },
      {
        name: "meryouma",
        age: 3,
        favoriteFoods: ["mama", "mmmmm"],
      },
      {
        name: "afef",
        age: 28,
        favoriteFoods: ["ccccc", "ddddd"],
      },
      {
        name: "yassouna",
        age: 28,
        favoriteFoods: ["mamamamama", "mamamamamamamamamamaS"],
      },
    ]);
    console.log(manyPerson);
  } catch (error) {
    console.log(error);
  }
};
arrayOfPeople();

//find : search
const findPersone = async (name) => {
  try {
    Person.find({ name: name });
    console.log("search By Name", name);
  } catch (error) {
    console.log(error);
  }
};
findPersone("marwa");

//findone : search one food
const findOneFood = async (favoriteFoods) => {
  Person.findOne({ favoriteFoods: favoriteFoods }, function (error, per) {
    if (error) {
      console.log(error);
    } else {
      console.log(per);
    }
  });
};
findOneFood(["salade", "spaguethi"]);

//findbyid : search person with id
const findIdPerson = async (id) => {
  Person.findById({ _id: id }, function (error, per) {
    if (error) {
      console.log(error);
    } else {
      console.log(per);
    }
  });
};
findIdPerson("62cb1f46231fb8934a96bbbb");

// Edit, then Save
const findandedit = (id, food) => {
  Person.findById({ _id: id }, (error, per) => {
    if (error) {
      console.log(error);
    } else {
      per.favoriteFoods.push(food);
      per.save();
      console.log(per);
    }
  });
};
findandedit("62cb1f46231fb8934a96bbbb", "ma9loub");

//Updates by Running Find
const findandupdate = (name, age) => {
  Person.findOneAndUpdate(
    { name: name },
    { $set: { age: age } },
    { new: true },
    (error, per) => {
      if (error) {
        console.log(error);
      } else {
        console.log(per);
      }
    }
  );
};
findandupdate("noura", 50);

//delete
const removeMany = (name) => {
  Person.remove({ name: name }, (error, per) => {
    if (error) {
      console.log(error);
    } else {
      console.log(per);
    }
  });
};
removeMany("azer");

//Chain Search Query
const searchQuery = (favoriteFoods) => {
  Person.find({ favoriteFoods: favoriteFoods })
    .sort({ name: 1 })
    .limit(2)
    .select({ age: 0 })
    .exec((error, per) => {
      if (error) {
        console.log(error);
      } else {
        console.log(per);
      }
    });
};
searchQuery("ma9loub");

const port = 5000;

app.listen(port, () => console.log(`Port ${port}!`));
