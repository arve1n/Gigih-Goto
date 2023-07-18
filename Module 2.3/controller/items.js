const { v4 } = require("uuid");

let itemData = [
    {
       "artist": "Ariel",
       "songname": "Yuhu",
       "played": 213
    },
    {
        "artist": "Dewa 19",
        "songname": "Puous",
        "played": 200
     },
     {
        "artist": "John Mayer",
        "songname": "Gravity",
        "played": 300
     }
];

const getItem  = ("/", (req, res) => {
    res.json(itemData);
  });

const addItem=("/", (req, res) => {
    const item = req.body;
    itemData.push({ ...item, id: v4() });
    res.send(`Lagu "${item.artist}" oleh "${item.songname}" has been added successfully.`);
  });

const getItemId=("/:id", (req, res) => {
    const { id } = req.params;
    const itemFound = itemData.find((item) => item.id === id);
    console.log(itemFound);
    res.send(itemFound);
  });
  
const deleteItem=("/:id", (req, res) => {
    const { id } = req.params;
    itemData = itemData.filter((item) => item.id !== id);
    console.log(itemData);
    res.send(`Item with id ${id} has been deleted successfully.`);
  });

const sortMusic = (req, res) => {
    console.log(itemData);
    const sortedMusic = itemData.sort((a, b) => b.played - a.played);
    res.json(sortedMusic);
  };
  
const updateItem =("/:id", (req, res) => {
    const { id } = req.params;
    const { artist, songname, status } = req.body;
  
    const item = itemData.find((item) => item.id === id);
  
    if (artist) item.artist = artist;
    if (songname) item.songname = songname;
    if (status) item.status = status;
  
    res.send(
      `Item with id ${id} and name ${item.name} has been updated successfully`
    );
  });
  module.exports = { getItem, addItem, getItemId, deleteItem, updateItem,sortMusic };