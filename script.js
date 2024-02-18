const seats = document.querySelectorAll(".seat");
let count = 1;
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
    td3.innerText = "550";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    addingSeatContainer.appendChild(tr)

    //get access the counted seat number
    
    const selectSeatCount = document.getElementById('selected-seat-count');
    const convertedSeatCountNumber = parseInt(selectSeatCount.innerText);
    selectSeatCount.innerText = convertedSeatCountNumber + count


    // minus 1 by per seat select
    // const seatsLeft = document.getElementById('seats-left');
    // seatsLeft.innerText = count;
  });
}
