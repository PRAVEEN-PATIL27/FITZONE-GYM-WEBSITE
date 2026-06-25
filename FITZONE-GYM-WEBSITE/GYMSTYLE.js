function calculateBMI() {
  let height = document.getElementById("height").value;

  let weight = document.getElementById("weight").value;

  if (height === "" || weight === "") {
    document.getElementById("result").innerHTML =
      "Please enter height and weight.";

    return;
  }

  height = height / 100;

  let bmi = weight / (height * height);

  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal Weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  const result = document.getElementById("result");

  let color = "";

  if (bmi < 18.5) {
    color = "#facc15"; // Yellow
  } else if (bmi < 25) {
    color = "#22c55e"; // Green
  } else if (bmi < 30) {
    color = "#f97316"; // Orange
  } else {
    color = "#ef4444"; // Red
  }

  result.style.color = color;

  result.innerHTML = `BMI: ${bmi.toFixed(1)} (${category})`;
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("contactStatus").innerHTML =
      "✅ Thank you! We will contact you soon.";

    contactForm.reset();
  });
}
