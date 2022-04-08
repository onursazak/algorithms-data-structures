export const log = (varObject) => {
  const varName = Object.keys(varObject)[0];
  console.log(`${varName}: `, varObject[varName]);
};
