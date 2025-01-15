export const EvyAILogger = new Proxy(console, {
  get(target, prop) {
    if (process.env.MODE === "release") {
      return () => {};
    }

    //@ts-ignore
    return target[prop].bind(target);
  },
});
