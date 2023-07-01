function filter_list(l) {
  // Return a new array with the strings filtered out
  return (newList = l.filter((a) => typeof a !== "string"));
}

filter_list([1, 2, "a", "b", "c"]);
