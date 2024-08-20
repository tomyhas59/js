const fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("3");

    setTimeout(() => {
      console.log("5");
      const data = { message: "Data fetched successfully!", id: 7 };
      resolve(data);
      console.log("6");
    }, 2000);
  });

/* console.log("1");

fetchData()
  .then((result) => {
    console.log(result.id);
    return result.id;
  })
  .then((id) => {
    console.log(id + 1);
    console.log("9");
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => console.log("무조건 실행")); //함수형으로 래핑

console.log("4"); */

async function fetchDataAsync() {
  try {
    console.log("2");
    const result = await fetchData();
    const id = result.id;
    console.log(id);
    const b = await Promise.resolve(9);
    console.log("8");
    console.log(b);
    return id + b;
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("무조건 실행");
  }
}

console.log("1");

fetchDataAsync().then((result) => {
  console.log("결과", result);
});

console.log("4");
