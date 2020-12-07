const helper = (m, n) => {
    const r = m % n;

    if (r === 0) {
        console.log(`The greatest common divisor is: ${n}.`);
        return n;
    }

    return helper(n, r);
}

const getGreatestCommonDivisor = (m, n) => {
    if (isNaN(m) || isNaN(n)) {
        throw new Error("Invalid inputs - m and n must be positive integers.");
    }
    if (m > Number.MAX_SAFE_INTEGER || n > Number.MAX_SAFE_INTEGER) {
        throw new Error("Invalid inputs - m and n must be safe integers.")
    }

    if (Math.sign(m) !== 1 || Math.sign(n) !== 1) {
        throw new Error("Invalid inputs - m and n must be positive integers.");
    }

    if (m < n) {
        const tmp = m;
        m = n;
        n = tmp;
    }

    return helper(m, n);
}

module.exports = { getGreatestCommonDivisor };