function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = this.text.replace(this.cloze, '....');
    console.log("\nQUESTION: " + this.partial + " \n");
    console.log("\n" + "----------------------------" + "\nANSWER: " +
        this.cloze + "\n");

}


var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States", "George Washington");

module.exports = ClozeCard;