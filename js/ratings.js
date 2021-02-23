function collect_ratings() {
  let ratings = {
    count: 0,
    sum: 0,
    average: 0,
  };

  const elements = document.querySelectorAll(".rating");

  elements.forEach((element) => {
    let rating = 0;
    rating = parseInt(element.id.replace('star', ''));
    ratings.count += parseInt(element.value);
    ratings.sum += rating * parseInt(element.value);

    if (ratings.count != 0) {
      ratings.average = ratings.sum / ratings.count;
    }
  })

  return ratings;
}

document.addEventListener('change', () =>{
  const ratings = collect_ratings();
  document.querySelector("#average").value = ratings.average.toFixed(2);
})