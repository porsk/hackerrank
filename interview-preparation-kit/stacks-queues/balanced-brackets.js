// https://www.hackerrank.com/challenges/balanced-brackets/problem

function isBalanced(s) {
  const N = s.length;
  const stack = [];

  const BRACKETS = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const OPENING_BRACKETS = Object.keys(BRACKETS);

  for (let i = 0; i < N; i++) {
    const char = s[i];

    if (OPENING_BRACKETS.includes(char)) {
      stack.push(BRACKETS[char]);
    } else {
      if (stack.pop() !== char) {
        return "NO";
      }
    }
  }

  if (stack.length > 0) {
    return "NO";
  }

  return "YES";
}
