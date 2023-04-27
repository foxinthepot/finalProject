
const calculateButton = document.getElementById("calculate-button");
const totalPriceInput = document.getElementById("total-price");

calculateButton.addEventListener("click", function() {
  let totalPrice = 0;

  const maintenanceHours = parseFloat(document.getElementById("maintenance-hours").value) || 0;
  totalPrice += maintenanceHours * 10;

  const treatmentArea = parseFloat(document.getElementById("treatment-area").value) || 0;
  totalPrice += treatmentArea * 0.003;

  const thatchingArea = parseFloat(document.getElementById("thatching-area").value) || 0;
  totalPrice += thatchingArea * 0.004;

  const grassCuttingArea = parseFloat(document.getElementById("grass-cutting-area").value) || 0;
  totalPrice += grassCuttingArea * 0.004;

  const mulchingArea = parseFloat(document.getElementById("mulching-area").value) || 0;
  totalPrice += mulchingArea * 0.001;

  const seedingArea = parseFloat(document.getElementById("seeding-area").value) || 0;
  totalPrice += seedingArea * 0.007;

  const aerationArea = parseFloat(document.getElementById("aeration-area").value) || 0;
  totalPrice += aerationArea * 0.003;

  const treeHealth = parseFloat(document.getElementById("tree-health").value) || 0;
  totalPrice += treeHealth * 5;

  const treeTrimming = parseFloat(document.getElementById("tree-trimming").value) || 0;
  totalPrice += treeTrimming * 40;

  const shrubPruningHours = parseFloat(document.getElementById("shrub-pruning-hours").value) || 0;
  totalPrice += shrubPruningHours * 10;

  const weedManagementHours = parseFloat(document.getElementById("weed-management-hours").value) || 0;
  totalPrice += weedManagementHours * 10;

  const treeRemoval = parseFloat(document.getElementById("tree-removal").value) || 0;
  totalPrice += treeRemoval * 80;

  totalPriceInput.value = "$" + totalPrice.toFixed(2);
});
