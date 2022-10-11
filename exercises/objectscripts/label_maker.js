let contact = {
  name: "Brian",
  addressLine1: "2304 Roanoke springs dr",
  city: "Ruskin",
  state: "Florida",
  Zip: "33570",
};

function printContact(myInfo) {
  console.log(myInfo.name);
  console.log(myInfo.addressLine1);
  console.log(myInfo.city + "," + myInfo.state + " " + myInfo.zip);
}

printContact(contact);
