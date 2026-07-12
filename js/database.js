// Districts Mapping Database
const districtData = {
  bihar: ["Bhagalpur", "Patna", "Gaya", "Muzaffarpur"],
  up: ["Lucknow", "Varanasi", "Kanpur", "Noida / GB Nagar"],
  jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"]
};

// Hyper-Local Services Database
const localServicesDatabase = [
  // BHAGALPUR, BIHAR
  {
    state: "bihar",
    district: "Bhagalpur",
    category: "administration",
    title: "Bhagalpur Collectorate (DM Office)",
    desc: "Official District Portal, Public Grievances & Circulars",
    link: "https://bhagalpur.nic.in/",
    icon: "fa-building-columns",
    color: "#0b2545"
  },
  {
    state: "bihar",
    district: "Bhagalpur",
    category: "municipal",
    title: "Bhagalpur Municipal Corporation",
    desc: "Property Tax, Holding Tax & Birth/Death Certificates",
    link: "https://bhagalpurnagarnigam.in/",
    icon: "fa-city",
    color: "#d35400"
  },
  {
    state: "bihar",
    district: "Bhagalpur",
    category: "certificates",
    title: "RTPS Bhagalpur Circle Office",
    desc: "Apply Income, Caste, Land Possession (LPC)",
    link: "https://serviceonline.bihar.gov.in/",
    icon: "fa-file-contract",
    color: "#16a085"
  },

  // PATNA, BIHAR
  {
    state: "bihar",
    district: "Patna",
    category: "administration",
    title: "Patna Collectorate Portal",
    desc: "DM Office Services, E-Courts & District Orders",
    link: "https://patna.nic.in/",
    icon: "fa-landmark",
    color: "#0b2545"
  },
  {
    state: "bihar",
    district: "Patna",
    category: "health",
    title: "PMCH & IGIMS Emergency",
    desc: "Patna Sadar Hospital & Emergency Medical Contact",
    link: "https://patna.nic.in/helpline/",
    icon: "fa-hospital",
    color: "#c0392b"
  },

  // LUCKNOW, UP
  {
    state: "up",
    district: "Lucknow",
    category: "administration",
    title: "Lucknow District Administration",
    desc: "Tehsil Services, Collectorate & Local Orders",
    link: "https://lucknow.nic.in/",
    icon: "fa-building-columns",
    color: "#0b2545"
  },
  {
    state: "up",
    district: "Lucknow",
    category: "municipal",
    title: "Lucknow Nagar Nigam (LMC)",
    desc: "House Tax, Water Bill & Local Civic Complaints",
    link: "https://lmc.up.nic.in/",
    icon: "fa-city",
    color: "#27ae60"
  }
];