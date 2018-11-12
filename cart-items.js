const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
res.send([{id: "food", product: "eggs", price: "1", quantity: "1"}


	]);
	
});
//log body to the console//
router.post("/", (req, res) => {
if(req.body){
	res.status(201).send(req.body);
} else {
	res.sendStatus(400);
}

});

//log the _ID_ URL param and the body to the console//
router.put("/id", (req, res) => {
res.send(`updated shopping list: ${req.params.id}`);
});

//log the _ID_ URL param to the console//
router.delete("/id", (req, res) => {
res.send(`deleted shopping list: ${req.params.id}`);
});

module.exports = router;