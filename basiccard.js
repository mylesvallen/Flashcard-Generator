function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    console.log("\n" + "\n           FRONT: " + this.front + "\n" + "\n           -- -- -- -- -- -- ---- -- -- -- -- -- -- -- -- -- -- -");
    console.log("\n           BACK: " + this.back + "\n \n");
}

var firstPresident = new BasicCard(
    "Who was the first president of the United States?",
    "George Washington");

module.exports = BasicCard;