`use strict`;
/* About

Author: Lev Goryachev, https://github.com/lev-goryachev
Created On: 24.10.2023
Description: codewars kata https://www.codewars.com/kata/514a024011ea4fb54200004b
Changes: 24.10.2023 - started

*/
/* Description

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/
/* Tests

const { assert } = require("chai");

describe("Sample test", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
  })  
})


*/

function domainName(url) {
  return url
    .replace(/(https?:\/\/)?(www.)?/, ``)
    .match(/^.*?(?=\.)/)
    .toString();
  //   console.log(`     start---`);
  //   console.log(`input -->`, url);
  //   console.log(`replace -->`, url.replace(/(https?:\/\/)?(www.)?/, ``));
  //   console.log(`replace + match -->`, url.replace(/(https?:\/\/)?(www.)?/, ``).match(/^.*?(?=\.)/));
  //   console.log(
  //     `replace + match + toString -->`,
  //     url
  //       .replace(/(https?:\/\/)?(www.)?/, ``)
  //       .match(/^.*?(?=\.)/)
  //       .toString()
  //   );
}

console.log(domainName(`http://mysitewww.com%27/`));
console.log(domainName(`http://www.zombie-bites.com`));
console.log(domainName(`https://www.cnet.com`));

// first regex /(https?:\/\/)?(www.)?/

// \b(\w+)\.\b
// (\w+-?_?\w+)
// ^.*?(?=\.)
