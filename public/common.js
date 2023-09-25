export const links = [
    { title: "HOME", path: "/home" },
    {
      title: "ORGANIZATION", path: "/about",
      submenu: [
        {
          heading: "about us",
          dubmenu: [
            { title: "ABOUT US", path: "/about" },
            // { title: "OBJECTIVE", path: "/objective" },
            { title: "LEADERSHIP", path: "/about/#leadership" },
            { title: "MISSION & VISION", path: "/about/#mission" },
            { title: "ORGANIZATION & STRUCTURE", path: "/party-structure" },
            { title: "OUR CONSTITUTION", path: "/our-constitution" }
          ],
        },
        {
          heading: "OUR WINGS",
          dubmenu: [
            { title: "KISAN", path: "/wing/kisan" },
            { title: "MAHILA", path: "/wing/mahila" },
            { title: "YUVA", path: "/wing/yuva" },
            { title: "S.C", path: "/wing/sc" },
            { title: "S.T", path: "/wing/st" },
            { title: "OBC", path: "/wing/obc" },
            { title: "MINORITY", path: "/wing/minority" },
          ],
        },
        {
          heading: "MEDIA",
          dubmenu: [
            { title: "GALLERY", path: "/gallery" },
            { title: "NEWS ARTICLES", path: "/newsarticles" },
            { title: "PRESS RELEASE", path: "/pressrelease" },
          ],
        },
        {
          heading: "Social WALL",
          dubmenu: [
            { title: "INSTAGRAM", path: "https://www.instagram.com/rsspartybharat" },
            { title: "FACEBOOK", path: "https://www.facebook.com/rsspartybharat" },
            { title: "TWITTER", path: "https://twitter.com/rsspartybharat" },
            { title: "YOUTUBE", path: "https://youtube.com/@rssparty-rashtriyaswabhima4417?si=6FaUppNnyOkhpbVJ" },
  
          ],
        },
      ],
    },
    {
      title: "ELECTION", path: "/election"
    },
    {
      title: "JOIN THE MOMENT", path: "/becomeamember",
      submenu: [
        {
          heading: "JOIN THE MOMENT",
          dubmenu: [
            {
              title: "BECOME A MEMBER",
              path: "/becomeamember",
              hovermenu: [
                {
                  title: "Perks of becoming a member",
                  para: " good thing and good things",
                  img: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
                },
              ],
            },
            {
              title: "BECOME A VOLUNTEER",
              path: "/becomeavolunteer",
              hovermenu: [
                {
                  title: "Perks of becoming a volunteer",
                  para: " good things",
                  img: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "CONTACT US",
      path: "/contact",
    },
    {
      title: "DONATE",
      path: "/donate",
    }
  ];
  
  export const login = [
    { title: "Members area", path: "/membersarea" },
  
    { title: "My profile", path: "/myprofile" },
  
    // { title: "Admin", path: "/admins" },
  
    { title: "Logout", path: "/logout" },
  ];
  
  
  var AndraPradesh = ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Prakasam", "Nellore", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari"];
  var ArunachalPradesh = ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kra Daadi", "Kurung Kumey", "Lohit", "Longding", "Lower Dibang Valley", "Lower Subansiri", "Namsai", "Papum Pare", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang", "Itanagar"];
  var Assam = ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup (Rural)", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Dima Hasao", "Sivasagar", "Sonitpur", "South Salmara Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"];
  var Bihar = ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"];
  var Chhattisgarh = ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"];
  var Goa = ["North Goa", "South Goa"];
  var Gujarat = ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"];
  var Haryana = ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"];
  var HimachalPradesh = ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"];
  var JammuKashmir = ["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kargil", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Leh", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"];
  var Jharkhand = ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"];
  var Karnataka = ["Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgaum", "Bellary", "Bidar", "Vijayapura", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Gulbarga", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Ramanagara", "Shimoga", "Tumkur", "Udupi", "Uttara Kannada", "Yadgir"];
  var Kerala = ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"];
  var MadhyaPradesh = ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna",
    "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"];
  var Maharashtra = ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"];
  var Manipur = ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"];
  var Meghalaya = ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"];
  var Mizoram = ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip", "Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"];
  var Nagaland = ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"];
  var Odisha = ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Debagarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundergarh"];
  var Punjab = ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"];
  var Rajasthan = ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Ganganagar", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Tonk", "Udaipur"];
  var Sikkim = ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"];
  var TamilNadu = ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"];
  var Telangana = ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar", "Jogulamba", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahbubnagar", "Mancherial", "Medak", "Medchal", "Nagarkurnool", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"];
  var Tripura = ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"];
  var UttarPradesh = ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"];
  var Uttarakhand = ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri", "Pithoragarh", "Rudraprayag", "Tehri", "Udham Singh Nagar", "Uttarkashi"];
  var WestBengal = ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"];
  var AndamanNicobar = ["Nicobar", "North Middle Andaman", "South Andaman"];
  var Chandigarh = ["Chandigarh"];
  var DadraHaveli = ["Dadra Nagar Haveli"];
  var DamanDiu = ["Daman", "Diu"];
  var Delhi = ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"];
  var Lakshadweep = ["Lakshadweep"];
  var Puducherry = ["Karaikal", "Mahe", "Puducherry", "Yanam"];
  
  
  
  export const states = [
    {
      title: "Andhra Pradesh",
      districts: AndraPradesh,
      defaultDistrict: "",
    },
  
    {
      title: "Arunachal Pradesh",
      districts: ArunachalPradesh,
      defaultDistrict: "",
    },
  
    {
      title: "Assam",
      districts: Assam,
      defaultDistrict: "",
    },
  
    {
      title: "Bihar",
      districts: Bihar,
      defaultDistrict: "",
    },
    {
      title: "Chandigarh",
      districts: Chandigarh,
      defaultDistrict: "",
    },
    {
      title: "Chhattisgarh",
      districts: Chhattisgarh,
      defaultDistrict: "",
    },
  
    {
      title: "Goa",
      districts: Goa,
      defaultDistrict: "",
    },
  
    {
      title: "Gujarat",
      districts: Gujarat,
      defaultDistrict: "",
    },
  
    {
      title: "Haryana",
      districts: Haryana,
      defaultDistrict: "",
    },
  
    {
      title: "Himachal Pradesh",
      districts: HimachalPradesh,
      defaultDistrict: "",
    },
  
    {
      title: "Jammu and Kashmir",
      districts: JammuKashmir,
      defaultDistrict: "",
    },
  
    {
      title: "Jharkhand",
      districts: Jharkhand,
      defaultDistrict: "",
    },
  
    {
      title: "Karnataka",
      districts: Karnataka,
      defaultDistrict: "",
    },
  
    {
      title: "Kerala",
      districts: Kerala,
      defaultDistrict: "",
    },
  
    {
      title: "Madya Pradesh",
      districts: MadhyaPradesh,
      defaultDistrict: "",
    },
  
    {
      title: "Maharashtra",
      districts: Maharashtra,
      defaultDistrict: "",
    },
  
    {
      title: "Manipur",
      districts: Manipur,
      defaultDistrict: "",
    },
    {
      title: "Meghalaya",
      districts: Meghalaya,
      defaultDistrict: "",
    },
    {
      title: "Mizoram",
      districts: Mizoram,
      defaultDistrict: "",
    },
    {
      title: "Nagaland",
      districts: Nagaland,
      defaultDistrict: "",
    },
    {
      title: "Orissa",
      districts: Odisha,
      defaultDistrict: "",
    },
    {
      title: "Punjab",
      districts: Punjab,
      defaultDistrict: "",
    },
    {
      title: "Rajasthan",
      districts: Rajasthan,
      defaultDistrict: "",
    },
    {
      title: "Sikkim",
      districts: Sikkim,
      defaultDistrict: "",
    },
    {
      title: "Tamil Nadu",
      districts: TamilNadu,
      defaultDistrict: "",
    },
    {
      title: "Telangana",
      districts: Telangana,
      defaultDistrict: "",
    },
    {
      title: "Tripura",
      districts: Tripura,
      defaultDistrict: "",
    },
    {
      title: "Uttaranchal",
      districts: Uttarakhand,
      defaultDistrict: "",
    },
    {
      title: "Uttar Pradesh",
      districts: UttarPradesh,
      defaultDistrict: "",
    },
    {
      title: "West Bengal",
      districts: WestBengal,
      defaultDistrict: "",
    },
  ]