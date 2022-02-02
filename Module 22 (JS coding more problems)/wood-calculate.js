/* woodChair = 3cft/chair
   woodTable = 10cft/table
   woodBed = 50cft/bed
*/
function woodCalculate(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    console.log("Chair wood is: "+chairWoodQuantity+"$")
    console.log("Table wood is: "+tableWoodQuantity+"$")
    console.log("Bed wood is: "+bedWoodQuantity+"$")

    // total wood cost 
    const totalWoodNeed = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWoodNeed;

}

let quantity = woodCalculate(1, 1, 1);
console.log("Total wood need: "+quantity+"$");