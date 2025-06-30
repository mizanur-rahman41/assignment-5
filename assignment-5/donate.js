    let balance = 100000;
    const balanceDisplay = document.getElementById("balanceDisplay");
    const donateTab = document.getElementById("donateTab");
    const historyTab = document.getElementById("historyTab");
    const donateContent = document.getElementById("donateContent");
    const historyContent = document.getElementById("historyContent");
    const modal = document.getElementById("confirmationModal");

    const historyList = [];

    function showTab(tab) {
      if (tab === 'donate') {
        donateTab.classList.add('active');
        historyTab.classList.remove('active');
        donateContent.style.display = 'block';
        historyContent.style.display = 'none';
      } else {
        donateTab.classList.remove('active');
        historyTab.classList.add('active');
        donateContent.style.display = 'none';
        historyContent.style.display = 'block';
        renderHistory();
      }
    }

    function makeDonation(cause) {
      const input = document.getElementById("donationAmount");
      const value = parseInt(input.value);

      if (isNaN(value) || value <= 0) {
        alert("Please enter a valid positive amount.");
        return;
      }

      if (value > balance) {
        alert("Insufficient balance.");
        return;
      }

      balance -= value;
      balanceDisplay.textContent = `${balance} BDT`;
      const now = new Date();
      historyList.push({
        amount: value,
        cause,
        date: now.toString()
      });

      modal.classList.add("active");
      input.value = "";
    }

    function closeModal() {
      modal.classList.remove("active");
    }

    function renderHistory() {
      historyContent.innerHTML = historyList.map(h => `
        <div class="donation-box">
          <strong>${h.amount} Taka is Donated for ${h.cause}</strong>
          <p>Date: ${h.date}</p>
        </div>
      `).join("");
    }

    function goToBlog() {
      window.location.href = "#blog";
    }