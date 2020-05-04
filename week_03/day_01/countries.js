function program(input) {
  // input
  // console.log(input)
  // write code here
  switch (input) {
    case "India":
    case "China":
    case "Nepal":
    case "Singapore":
      return "Asia";

    case "Canada":
    case "United States of America":
    case "Mexico":
      return "North America";

    case "France":
    case "Germany":
    case "Sweden":
      return "Europe";

    case "South Africa":
    case "Nigeria":
      return "Africa";

    case "Australia":
      return "Australia";

    case "Argentina":
    case "Brazil":
      return "South America";

    default:
      return "Invalid";
  }

  //   // return output
  //   return "output";
}

module.exports = program;
