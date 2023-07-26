function throwError(message: string): never {
  throw new Error(message);
}

// The function above never returns, so it has a return type of 'never'.
