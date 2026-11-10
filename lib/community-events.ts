// Campaign mapping confirmed by Pepper Petersen, November 10, 2026.
export const foodDriveLocations = [
  { town: "Bozeman", campaign: "griz", address: "14 E. Mendenhall St.", note: "Support Can the Griz and HRDC's Gallatin Valley Food Bank. Please bring donations early so our collection can reach HRDC before its November 20, 5 p.m. weigh-in deadline." },
  { town: "Gallatin Gateway", campaign: "griz", address: "74200 Gallatin Rd.", note: "Join the Gallatin Valley's Can the Griz effort. Please bring donations early so our collection can reach HRDC before its November 20, 5 p.m. weigh-in deadline." },
  { town: "Missoula", campaign: "cats", address: "1935 Cooper St.", note: "Help Can the Cats by bringing unopened, nonperishable food to the Montana Kush collection bin. Ask the store team about the final collection time." },
  { town: "Whitefish", campaign: "cats", address: "333 1/2 Baker Ave.", note: "Whitefish is joining Can the Cats. Bring unopened, nonperishable food to the Montana Kush collection bin and check with the team for local collection details." },
  { town: "Helena", campaign: "both", address: "Montana Kush locations in Helena", note: "Pick your side and help your neighbors. Helena's combined Can the Griz and Can the Cats drive welcomes food donations for either side. Ask your store team about collection and local delivery arrangements." },
  { town: "Butte", campaign: "both", address: "3346 Harrison Ave.", note: "Cats and Griz fans can both give back in Butte. Bring unopened, nonperishable food to the combined collection drive and ask the store team about local collection details." }
] as const;

// November 4, 2026 planning notes shared by Gregory Wiens.
// Dates are the upcoming Sunday series in 2027; venue/registration work is ongoing.
export const kartStops = [
  { town: "Bozeman", date: "January 31, 2027", venue: "Venue to be announced", note: "Target date for the Bozeman regional qualifier. Gallatin Gateway racers can join this regional stop.", status: "Tentative date" },
  { town: "Helena", date: "February 7, 2027", venue: "Lewis & Clark Brewing", note: "Planned Helena regional qualifier, with advancing racers heading to the state championship in Butte.", status: "Planned" },
  { town: "Missoula", date: "February 21, 2027", venue: "Monks, pending final confirmation", note: "Planned Missoula regional qualifier. Whitefish racers can join this regional stop.", status: "Planned" },
  { town: "Butte", date: "February 28, 2027", venue: "Covellite", note: "A local qualifier followed by the statewide championship on the same day.", status: "Planned" }
] as const;
