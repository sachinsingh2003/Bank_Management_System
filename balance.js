document.addEventListener("DOMContentLoaded", function () {
    // Dummy Transaction Data
    const transactions = [
        { date: "2025-02-01", description: "Salary Credit", amount: 30000, type: "Credit" },
        { date: "2025-02-03", description: "Online Shopping", amount: -5000, type: "Debit" },
        { date: "2025-02-05", description: "Electricity Bill", amount: -2000, type: "Debit" },
        { date: "2025-02-10", description: "Bonus", amount: 5000, type: "Credit" },
        { date: "2025-02-01", description: "Salary Credit", amount: 30000, type: "Credit" },
        { date: "2025-02-03", description: "Online Shopping", amount: -5000, type: "Debit" },
        { date: "2025-02-05", description: "Electricity Bill", amount: -2000, type: "Debit" },
    ];

    // Get Elements
    const transactionList = document.getElementById("transaction-list");
    const balanceAmount = document.getElementById("balance-amount");

    // Calculate Total Balance
    let totalBalance = 50000; // Initial balance

    transactions.forEach(tx => {
        const row = document.createElement("tr");

        // Set color for Credit/Debit
        const amountClass = tx.type === "Credit" ? "credit" : "debit";

        row.innerHTML = `
            <td>${tx.date}</td>
            <td>${tx.description}</td>
            <td class="${amountClass}">${tx.type === "Credit" ? "+" : "-"}₹${Math.abs(tx.amount)}</td>
            <td>${tx.type}</td>
        `;

        transactionList.appendChild(row);

        // Update Balance
        totalBalance += tx.amount;
    });

    // Update Balance Amount
    balanceAmount.textContent = totalBalance;
});
