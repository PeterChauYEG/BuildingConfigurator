export const handleError = (name: string, error: unknown): void => {
  // eslint-disable-next-line no-console
  console.log(`${name}: ${error}.`);
};
