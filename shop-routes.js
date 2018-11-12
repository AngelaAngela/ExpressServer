const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
res.send([{id: "food", product: "eggs" price:"$2.00" quantity:"1"}
		   

	]);
	
});

router.post("/javascript", (req, res) => {
res.send("JavaScript is pretty neat");
});

router.put("/angular", (req, res) => {
res.send("Angular is pretty solid");
});

router.delete("/node", (req, res) => {
res.send("Node is the best.");
});

module.exports = router;