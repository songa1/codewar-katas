function generateHashtag(str) {
  let hashStr;
  if (str.trim().length === 0 || str.trim().includes("#")) {
    return false;
  } else {
    let strArr = str.split(" ");
    let newArr = strArr.map((st) => st.charAt(0).toUpperCase() + st.slice(1));
    console.log(newArr);
    let finStr = newArr.join("");
    if (finStr.length > 140) {
      return false;
    } else {
      hashStr = "#".concat(finStr);
    }

    console.log(hashStr);
  }
}

generateHashtag("guru   works") 