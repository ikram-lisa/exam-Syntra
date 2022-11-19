function Text(string) {
  this.str = string;
  this.string = function () {
    let taal = "nedelands";
    let jaar = 2;
    return "ze " + taal + " studeren en " + string + " lees het bijna " + jaar;
  };
  this.charCount = function () {
    return string.length;
  };
  this.wordCount = function () {
    return string.replace(
      /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g,
      " "
    );
  };
  this.capitalsCount = function () {
    return string.replace(/[^A-Z]/g, "").length;
  };

  this.voyelleCount = function (string) {
    let vowelsCount = 0;
    for (let i = 0; i <= string.length; i++) {
      if (
        string.charAt(i) == "a" ||
        string.charAt(i) == "e" ||
        string.charAt(i) == "i" ||
        string.charAt(i) == "o" ||
        string.charAt(i) == "u"
      ) {
        vowelsCount += 1;
      }

      return vowelsCount;
    }
  };
}

const MijnText = new Text("Ikram***");
console.log(MijnText.charCount());
console.log(MijnText.string());
console.log(MijnText.wordCount());
console.log(MijnText.voyelleCount());
console.log(MijnText.capitalsCount());
