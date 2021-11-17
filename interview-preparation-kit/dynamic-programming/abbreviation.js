// https://www.hackerrank.com/challenges/abbr/problem

function isLowerCase(char) {
  return char === char.toLowerCase();
}

function abbreviation(a, b) {
  const N = a.length;
  const M = b.length;

  // dp[i][j] = true if there is a way to transform the first i characters of a into the first j characters of b
  const dp = Array.from({ length: N + 1 }, () =>
    Array.from({ length: M + 1 }, () => false)
  );

  dp[0][0] = true;

  // lower case characters can be deleted and turned into null string
  for (let i = 1; i <= N; i++) {
    dp[i][0] = dp[i - 1][0] && isLowerCase(a[i - 1]);
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      const A = a[i - 1];
      const B = b[j - 1];

      // // https://iawale.medium.com/abbreviation-hackerrank-medium-4601219c07d1
      if (A === B) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (A.toUpperCase() === B) {
        dp[i][j] = dp[i - 1][j - 1] || dp[i - 1][j];
      } else if (isLowerCase(A)) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = false;
      }
    }
  }

  if (dp[N][M]) {
    return "YES";
  } else {
    return "NO";
  }
}
