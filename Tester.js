function alphabetSubsequence(s: string): boolean {
  let s = s.toLowerCase();
  for (var i = 0; i < s.length - 1; i++) {
    if (s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122) {
      if (s[i].charCodeAt(0) >= s[i + 1].charCodeAt(0)) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
