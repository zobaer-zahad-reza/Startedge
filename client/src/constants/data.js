export const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export const DISTRICTS = [
  "Bagerhat","Bandarban","Barguna","Barisal","Bhola","Bogra","Brahmanbaria",
  "Chandpur","Chapainawabganj","Chittagong","Chuadanga","Comilla","Cox's Bazar",
  "Dhaka","Dinajpur","Faridpur","Feni","Gaibandha","Gazipur","Gopalganj",
  "Habiganj","Jamalpur","Jessore","Jhalokati","Jhenaidah","Joypurhat",
  "Khagrachari","Khulna","Kishoreganj","Kurigram","Kushtia","Lakshmipur",
  "Lalmonirhat","Madaripur","Magura","Manikganj","Meherpur","Moulvibazar",
  "Munshiganj","Mymensingh","Naogaon","Narail","Narayanganj","Narsingdi",
  "Natore","Netrokona","Nilphamari","Noakhali","Pabna","Panchagarh",
  "Patuakhali","Pirojpur","Rajbari","Rajshahi","Rangamati","Rangpur",
  "Satkhira","Shariatpur","Sherpur","Sirajganj","Sunamganj","Sylhet",
  "Tangail","Thakurgaon",
];

export const SMS_COMMANDS = [
  {
    label: "Blood Request",
    code: "BLOOD [group] [district]",
    desc: "Blood request পাঠাতে এই format ব্যবহার করুন",
    example: "Example: BLOOD A+ Dhaka",
  },
  {
    label: "Join as Donor",
    code: "JOIN [group] [district] [name]",
    desc: "Donor হিসেবে নিবন্ধন করতে এই format ব্যবহার করুন",
    example: "Example: JOIN B+ Chittagong Rahim",
  },
  {
    label: "Search Donors",
    code: "FIND [group] [district]",
    desc: "আপনার কাছের donor খুঁজে পেতে এই format ব্যবহার করুন",
    example: "Example: FIND O+ Sylhet",
  },
  {
    label: "Update Profile",
    code: "UPDATE [field] [value]",
    desc: "আপনার profile তথ্য আপডেট করতে এই format ব্যবহার করুন",
    example: "Example: UPDATE district Rajshahi",
  },
  {
    label: "Activate",
    code: "ON",
    desc: "নিজের profile activate করতে এই SMS পাঠান",
    example: "Just send: ON",
  },
  {
    label: "Deactivate",
    code: "OFF",
    desc: "নিজের profile deactivate করতে এই SMS পাঠান",
    example: "Just send: OFF",
  },
];

export const BLOOD_COMPATIBILITY = {
  "A+":  ["A+", "AB+"],
  "A-":  ["A+", "A-", "AB+", "AB-"],
  "B+":  ["B+", "AB+"],
  "B-":  ["B+", "B-", "AB+", "AB-"],
  "O+":  ["A+", "B+", "O+", "AB+"],
  "O-":  ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
  "AB+": ["AB+"],
  "AB-": ["AB+", "AB-"],
};

export const STATS = [
  { number: "2,439", label: "Registered Donors",  icon: "users" },
  { number: "64",    label: "Districts Covered",  icon: "map"   },
  { number: "8",     label: "Blood Groups",        icon: "drop"  },
  { number: "24/7",  label: "Service Available",  icon: "clock" },
];

export const NAV_LINKS = [
  { label: "Home",              href: "#"          },
  { label: "About Us",          href: "#about"     },
  { label: "Search Donors",     href: "#search"    },
  { label: "Add Blood Request", href: "#request"   },
];

export const FOOTER_LINKS = [
  "Home", "Add Blood Request", "Search Blood Donors", "FAQs", "About Us", "Contact Us",
];

export const BLOOD_INFO_LINKS = [
  "What is blood?", "What is blood donation?", "Who can donate blood?",
  "How often can I donate?", "Different Blood Terms", "Different Blood Groups",
];
