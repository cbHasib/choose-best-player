document
  .getElementById("calculate-player-expense")
  .addEventListener("click", function () {
    const numberOfPlayer = numberOfSelectedPlayer();
    const perPlayerExpense = getInputValue("per-player-input-field");
    const playerExpenses = numberOfPlayer * perPlayerExpense;

    if (isNaN(playerExpenses) || perPlayerExpense < 0) {
      window.location.href = "#errorWarning";
      return;
    }

    setElementValue("player-expense", playerExpenses);
  });

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const playerExpenses = getElementValue("player-expense");
    const managerExpense = getInputValue("manager-input-field");
    const coachExpense = getInputValue("coach-input-field");
    const totalExpenses = playerExpenses + managerExpense + coachExpense;

    if (isNaN(totalExpenses) || managerExpense < 0 || coachExpense < 0) {
      window.location.href = "#errorWarning";
      return;
    }

    setElementValue("total-expense", totalExpenses);
  });
