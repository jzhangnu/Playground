function flatten(input) {
  return input.reduce((flattened, toFlatten) => {
    return Array.isArray(toFlatten)? flattened.concat(flatten(toFlatten)): flattened.concat(toFlatten);
  }, []);
}