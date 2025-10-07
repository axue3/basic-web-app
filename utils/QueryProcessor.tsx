export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    // Extract all numbers from the query
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      // Convert to integers and add them
      const num1 = parseInt(numbers[0], 10);
      const num2 = parseInt(numbers[1], 10);
      const sum = num1 + num2;
      return sum.toString();
    }
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    // Extract all numbers from the query
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      // Convert to integers and find the largest
      const intNumbers = numbers.map(n => parseInt(n, 10));
      const largest = Math.max(...intNumbers);
      return largest.toString();
    }
  }

  if (query.toLowerCase().includes("what is your name") || query.toLowerCase().includes("what's your name")) {
    return "andrewx";
  }
  
  if (query.toLowerCase().includes("name")) {
    return "andrewx";
  }
  if (query.toLowerCase().includes("andrewid")) {
    return "andrewx";
  }

  return "";
}
