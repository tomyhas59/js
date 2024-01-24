const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { message: "Data fetched successfully!" };
    resolve(data);
  }, 2000);
});

fetchData
  .then((result) => {
    console.log(result.message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
