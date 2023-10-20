const obj = {
  a: "hello",
  b: {
    c: "hi",
    d: { e: "wow" },
  },
};

const {
  a,
  b: {
    c,
    d: { e },
  },
} = obj;
