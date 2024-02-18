const seats = document.querySelectorAll(".seat");
let count = 1;
let leftSeatCount = 1;
let price = 0;

for (const seat of seats) {
  seat.addEventListener("click", function () {
    // console.log(count);

    // set bg
    seat.style.backgroundColor = "#1DD100";
    seat.style.color = "white";

    // get the selected seat no access
    const selectedSeat = seat.innerText;

    // get append container access
    const addingSeatContainer = document.getElementById("adding-table");
    console.log(addingSeatContainer);
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = selectedSeat;
    const td2 = document.createElement("td");
    td2.innerText = "Economy";
    const td3 = document.createElement("td");
    td3.innerText = 550;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    addingSeatContainer.appendChild(tr);

    //get access the counted seat number
    const selectSeatCount = document.getElementById("selected-seat-count");
    const convertedSeatCountNumber = parseInt(selectSeatCount.innerText);
    selectSeatCount.innerText = convertedSeatCountNumber + count;

    // get access the left seat value
    const seatLeft = document.getElementById("seats-left");
    const convertedSeatLeft = parseInt(seatLeft.innerText);
    seatLeft.innerText = convertedSeatLeft - leftSeatCount;

    // get access total prices
    const totalPrices = document.getElementById("total-price");
    const addingPrice = parseInt(td3.innerText);
    price += addingPrice;
    totalPrices.innerText = price;

    // get access grand total prices
    const grandTotal = document.getElementById("grand-total");
    grandTotal.innerText = price;

    //  coupon discount
    // get access the coupon value

    const couponApplyButton = document.getElementById("coupon-apply-btn");
    couponApplyButton.addEventListener("click", function () {
      const couponInputUser = document
        .getElementById("coupon")
        .value.toLowerCase();
      if (couponInputUser === "new15") {
        // alert("Discount1");
        const discount1 = price * 0.15;
        document.getElementById("discount-total").innerText = discount1;
        grandTotal.innerText = price - discount1;
        const discountTotal = document.getElementById(
          "discount-total-container"
        );
        discountTotal.classList.remove("hidden");
        document
          .getElementById("apply-input-container")
          .classList.add("hidden");
      } else if (couponInputUser === "couple 20") {
        // alert("Discount2");
        const discount2 = price * 0.2;
        document.getElementById("discount-total").innerText = discount2;
        grandTotal.innerText = price - discount2;
        const discountTotal = document.getElementById(
          "discount-total-container"
        );
        discountTotal.classList.remove("hidden");
        document
          .getElementById("apply-input-container")
          .classList.add("hidden");
      }
    });

    // minus 1 by per seat select
    // const seatsLeft = document.getElementById('seats-left');
    // seatsLeft.innerText = count;
  });
}

/* const couponApplyButton = document.getElementById("coupon-apply-btn");
couponApplyButton.addEventListener("click", function () {
  const couponInputUser = document.getElementById("coupon").value.toLowerCase();
  if(couponInputUser === "new15" || couponInputUser === "couple 20"){
      alert('Discount')
  } else{
    alert('no discount')
  }
}); */
