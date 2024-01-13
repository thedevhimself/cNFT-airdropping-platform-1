const bs58 = require("bs58");


(async () => {
     const privateKey = Uint8Array.from([
          200, 149, 188, 248, 38, 23, 115, 229, 118, 167, 141, 55, 169, 120, 107, 228,
          254, 183, 83, 85, 59, 50, 25, 23, 51, 1, 206, 184, 19, 104, 64, 73, 74, 231, 223, 220, 108, 169, 97, 149, 176, 144, 146, 4, 55,]);


     const secretKey = bs58.encode(privateKey);
     console.log(secretKey);
})();