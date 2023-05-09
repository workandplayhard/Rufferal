import { getDatabase, ref, set, onValue } from "firebase/database";

const database = getDatabase();

const compCreatorsRef = ref(database, "CreateCompetitions/CompCreators");

// Read data
onValue(compCreatorsRef, (snapshot) => {
  console.log("CompCreators data:", snapshot.val());
});

// Write data
set(compCreatorsRef, {
  someData: "This is some data"
}).then(() => {
  console.log("Data saved to CompCreators");
}).catch((error) => {
  console.error("Error saving data to CompCreators:", error);
});
