export type Lang = "en" | "hi";

export type Publication = {
  name: string;
  url: string;
  language: string; // human-readable
  region?: string;
  description_en: string;
  description_hi: string;
};

export type Category = {
  slug: string;
  title_en: string;
  title_hi: string;
  description_en: string;
  description_hi: string;
  group: "dailies-national" | "dailies-regional" | "online" | "magazines";
  publications: Publication[];
};

export const categories: Category[] = [
  {
    slug: "national-dailies",
    title_en: "National Daily Newspapers",
    title_hi: "राष्ट्रीय दैनिक समाचार पत्र",
    description_en:
      "Leading daily newspapers with nationwide circulation across India, in English and Hindi.",
    description_hi:
      "भारत भर में राष्ट्रीय स्तर पर प्रसारित होने वाले प्रमुख दैनिक समाचार पत्र, अंग्रेज़ी और हिंदी में।",
    group: "dailies-national",
    publications: [
      { name: "The Times of India", url: "https://timesofindia.indiatimes.com", language: "English", description_en: "India's largest-circulated English daily.", description_hi: "भारत का सबसे बड़ा अंग्रेज़ी दैनिक।" },
      { name: "Hindustan Times", url: "https://www.hindustantimes.com", language: "English", description_en: "Major English national daily based in Delhi.", description_hi: "दिल्ली से प्रकाशित प्रमुख अंग्रेज़ी राष्ट्रीय दैनिक।" },
      { name: "The Hindu", url: "https://www.thehindu.com", language: "English", description_en: "Respected English daily known for in-depth reporting.", description_hi: "गहन रिपोर्टिंग के लिए प्रसिद्ध अंग्रेज़ी दैनिक।" },
      { name: "The Indian Express", url: "https://indianexpress.com", language: "English", description_en: "Independent national daily focused on investigative journalism.", description_hi: "खोजी पत्रकारिता पर केंद्रित स्वतंत्र राष्ट्रीय दैनिक।" },
      { name: "The Economic Times", url: "https://economictimes.indiatimes.com", language: "English", description_en: "Leading business and financial daily.", description_hi: "अग्रणी व्यापारिक और वित्तीय दैनिक।" },
      { name: "Business Standard", url: "https://www.business-standard.com", language: "English", description_en: "Business and economy national daily.", description_hi: "व्यापार और अर्थव्यवस्था पर राष्ट्रीय दैनिक।" },
      { name: "Mint", url: "https://www.livemint.com", language: "English", description_en: "Business newspaper from the HT Media group.", description_hi: "एचटी मीडिया समूह का व्यापारिक समाचार पत्र।" },
      { name: "Dainik Jagran", url: "https://www.jagran.com", language: "Hindi", description_en: "Most-read Hindi daily in India.", description_hi: "भारत का सबसे अधिक पढ़ा जाने वाला हिंदी दैनिक।" },
      { name: "Dainik Bhaskar", url: "https://www.bhaskar.com", language: "Hindi", description_en: "Major multi-edition Hindi daily.", description_hi: "बहु-संस्करणीय प्रमुख हिंदी दैनिक।" },
      { name: "Amar Ujala", url: "https://www.amarujala.com", language: "Hindi", description_en: "Widely circulated Hindi national daily.", description_hi: "व्यापक रूप से प्रसारित हिंदी राष्ट्रीय दैनिक।" },
      { name: "Hindustan", url: "https://www.livehindustan.com", language: "Hindi", description_en: "Hindi national daily from HT Media.", description_hi: "एचटी मीडिया का हिंदी राष्ट्रीय दैनिक।" },
      { name: "Rajasthan Patrika", url: "https://www.patrika.com", language: "Hindi", description_en: "Major Hindi daily originating in Rajasthan.", description_hi: "राजस्थान से प्रकाशित प्रमुख हिंदी दैनिक।" },
    ],
  },
  {
    slug: "regional-dailies",
    title_en: "Regional Daily Newspapers",
    title_hi: "क्षेत्रीय दैनिक समाचार पत्र",
    description_en:
      "State and language-based daily newspapers covering regional news across India.",
    description_hi:
      "भारत भर के राज्यों और भाषाओं के अनुसार क्षेत्रीय समाचार कवर करने वाले दैनिक समाचार पत्र।",
    group: "dailies-regional",
    publications: [
      { name: "Malayala Manorama", url: "https://www.manoramaonline.com", language: "Malayalam", region: "Kerala", description_en: "Leading Malayalam daily in Kerala.", description_hi: "केरल का अग्रणी मलयालम दैनिक।" },
      { name: "Mathrubhumi", url: "https://www.mathrubhumi.com", language: "Malayalam", region: "Kerala", description_en: "Major Malayalam newspaper.", description_hi: "प्रमुख मलयालम समाचार पत्र।" },
      { name: "Daily Thanthi", url: "https://www.dailythanthi.com", language: "Tamil", region: "Tamil Nadu", description_en: "Largest Tamil daily.", description_hi: "सबसे बड़ा तमिल दैनिक।" },
      { name: "Dinakaran", url: "https://www.dinakaran.com", language: "Tamil", region: "Tamil Nadu", description_en: "Popular Tamil daily.", description_hi: "लोकप्रिय तमिल दैनिक।" },
      { name: "Dinamalar", url: "https://www.dinamalar.com", language: "Tamil", region: "Tamil Nadu", description_en: "Tamil newspaper with statewide presence.", description_hi: "राज्यव्यापी उपस्थिति वाला तमिल समाचार पत्र।" },
      { name: "Eenadu", url: "https://www.eenadu.net", language: "Telugu", region: "Andhra Pradesh / Telangana", description_en: "Largest Telugu daily.", description_hi: "सबसे बड़ा तेलुगू दैनिक।" },
      { name: "Sakshi", url: "https://www.sakshi.com", language: "Telugu", region: "Andhra Pradesh / Telangana", description_en: "Major Telugu newspaper.", description_hi: "प्रमुख तेलुगू समाचार पत्र।" },
      { name: "Anandabazar Patrika", url: "https://www.anandabazar.com", language: "Bengali", region: "West Bengal", description_en: "Leading Bengali daily.", description_hi: "अग्रणी बंगाली दैनिक।" },
      { name: "Bartaman", url: "https://bartamanpatrika.com", language: "Bengali", region: "West Bengal", description_en: "Bengali daily newspaper.", description_hi: "बंगाली दैनिक समाचार पत्र।" },
      { name: "Lokmat", url: "https://www.lokmat.com", language: "Marathi", region: "Maharashtra", description_en: "Largest Marathi daily.", description_hi: "सबसे बड़ा मराठी दैनिक।" },
      { name: "Maharashtra Times", url: "https://maharashtratimes.com", language: "Marathi", region: "Maharashtra", description_en: "Major Marathi newspaper.", description_hi: "प्रमुख मराठी समाचार पत्र।" },
      { name: "Sakal", url: "https://www.esakal.com", language: "Marathi", region: "Maharashtra", description_en: "Marathi daily based in Pune.", description_hi: "पुणे आधारित मराठी दैनिक।" },
      { name: "Gujarat Samachar", url: "https://www.gujaratsamachar.com", language: "Gujarati", region: "Gujarat", description_en: "Leading Gujarati daily.", description_hi: "अग्रणी गुजराती दैनिक।" },
      { name: "Divya Bhaskar", url: "https://www.divyabhaskar.co.in", language: "Gujarati", region: "Gujarat", description_en: "Popular Gujarati newspaper.", description_hi: "लोकप्रिय गुजराती समाचार पत्र।" },
      { name: "Prajavani", url: "https://www.prajavani.net", language: "Kannada", region: "Karnataka", description_en: "Major Kannada daily.", description_hi: "प्रमुख कन्नड़ दैनिक।" },
      { name: "Vijaya Karnataka", url: "https://vijaykarnataka.com", language: "Kannada", region: "Karnataka", description_en: "Widely read Kannada newspaper.", description_hi: "व्यापक रूप से पढ़ा जाने वाला कन्नड़ समाचार पत्र।" },
      { name: "The Tribune", url: "https://www.tribuneindia.com", language: "English", region: "Punjab / Haryana", description_en: "English daily covering North India.", description_hi: "उत्तर भारत को कवर करने वाला अंग्रेज़ी दैनिक।" },
      { name: "The Telegraph", url: "https://www.telegraphindia.com", language: "English", region: "Eastern India", description_en: "English newspaper based in Kolkata.", description_hi: "कोलकाता आधारित अंग्रेज़ी समाचार पत्र।" },
      { name: "Deccan Chronicle", url: "https://www.deccanchronicle.com", language: "English", region: "South India", description_en: "English daily from South India.", description_hi: "दक्षिण भारत का अंग्रेज़ी दैनिक।" },
      { name: "Deccan Herald", url: "https://www.deccanherald.com", language: "English", region: "Karnataka", description_en: "Bangalore-based English daily.", description_hi: "बेंगलुरु आधारित अंग्रेज़ी दैनिक।" },
    ],
  },
  {
    slug: "online-news",
    title_en: "Online News Portals",
    title_hi: "ऑनलाइन समाचार पोर्टल",
    description_en: "Digital-first news portals and online journalism platforms in India.",
    description_hi: "भारत में डिजिटल-प्रथम समाचार पोर्टल और ऑनलाइन पत्रकारिता प्लेटफ़ॉर्म।",
    group: "online",
    publications: [
      { name: "Scroll.in", url: "https://scroll.in", language: "English", description_en: "Independent digital news publication.", description_hi: "स्वतंत्र डिजिटल समाचार प्रकाशन।" },
      { name: "The Wire", url: "https://thewire.in", language: "English / Hindi", description_en: "Independent online news outlet.", description_hi: "स्वतंत्र ऑनलाइन समाचार आउटलेट।" },
      { name: "The Print", url: "https://theprint.in", language: "English", description_en: "Digital news platform focused on politics and policy.", description_hi: "राजनीति और नीति पर केंद्रित डिजिटल समाचार प्लेटफ़ॉर्म।" },
      { name: "The Quint", url: "https://www.thequint.com", language: "English / Hindi", description_en: "Mobile-first digital news outlet.", description_hi: "मोबाइल-प्रथम डिजिटल समाचार आउटलेट।" },
      { name: "News18", url: "https://www.news18.com", language: "Multi", description_en: "Multilingual digital news network.", description_hi: "बहुभाषी डिजिटल समाचार नेटवर्क।" },
      { name: "NDTV", url: "https://www.ndtv.com", language: "English / Hindi", description_en: "Major news website and broadcaster.", description_hi: "प्रमुख समाचार वेबसाइट और प्रसारक।" },
      { name: "Firstpost", url: "https://www.firstpost.com", language: "English", description_en: "Digital news and opinion platform.", description_hi: "डिजिटल समाचार और विचार प्लेटफ़ॉर्म।" },
      { name: "OpIndia", url: "https://www.opindia.com", language: "English / Hindi", description_en: "Online news and commentary portal.", description_hi: "ऑनलाइन समाचार और टिप्पणी पोर्टल।" },
      { name: "Swarajya", url: "https://swarajyamag.com", language: "English", description_en: "Long-form digital magazine.", description_hi: "लंबी कहानी वाली डिजिटल पत्रिका।" },
      { name: "Moneycontrol", url: "https://www.moneycontrol.com", language: "English", description_en: "Top financial news portal.", description_hi: "शीर्ष वित्तीय समाचार पोर्टल।" },
    ],
  },
  {
    slug: "magazines-news",
    title_en: "News & Current Affairs Magazines",
    title_hi: "समाचार और सामयिक मामलों की पत्रिकाएँ",
    description_en: "Weekly and monthly magazines covering news, politics and current affairs.",
    description_hi: "समाचार, राजनीति और सामयिक मामलों को कवर करने वाली साप्ताहिक और मासिक पत्रिकाएँ।",
    group: "magazines",
    publications: [
      { name: "India Today", url: "https://www.indiatoday.in", language: "English / Hindi", description_en: "Leading weekly news magazine.", description_hi: "अग्रणी साप्ताहिक समाचार पत्रिका।" },
      { name: "Outlook", url: "https://www.outlookindia.com", language: "English", description_en: "Weekly news and current affairs magazine.", description_hi: "साप्ताहिक समाचार और सामयिक मामलों की पत्रिका।" },
      { name: "The Week", url: "https://www.theweek.in", language: "English", description_en: "Weekly English news magazine.", description_hi: "साप्ताहिक अंग्रेज़ी समाचार पत्रिका।" },
      { name: "Frontline", url: "https://frontline.thehindu.com", language: "English", description_en: "Fortnightly current affairs magazine.", description_hi: "पाक्षिक सामयिक मामलों की पत्रिका।" },
      { name: "Open Magazine", url: "https://openthemagazine.com", language: "English", description_en: "Weekly features and culture magazine.", description_hi: "साप्ताहिक फीचर और संस्कृति पत्रिका।" },
      { name: "Tehelka", url: "https://tehelka.com", language: "English", description_en: "Investigative news magazine.", description_hi: "खोजी समाचार पत्रिका।" },
    ],
  },
  {
    slug: "magazines-business",
    title_en: "Business & Finance Magazines",
    title_hi: "व्यापार और वित्त पत्रिकाएँ",
    description_en: "Magazines covering business, finance, markets and the Indian economy.",
    description_hi: "व्यापार, वित्त, बाज़ार और भारतीय अर्थव्यवस्था को कवर करने वाली पत्रिकाएँ।",
    group: "magazines",
    publications: [
      { name: "Business Today", url: "https://www.businesstoday.in", language: "English", description_en: "Fortnightly business magazine.", description_hi: "पाक्षिक व्यापारिक पत्रिका।" },
      { name: "Forbes India", url: "https://www.forbesindia.com", language: "English", description_en: "Indian edition of Forbes.", description_hi: "फोर्ब्स का भारतीय संस्करण।" },
      { name: "Fortune India", url: "https://www.fortuneindia.com", language: "English", description_en: "Business magazine and rankings.", description_hi: "व्यापारिक पत्रिका और रैंकिंग।" },
      { name: "Outlook Business", url: "https://business.outlookindia.com", language: "English", description_en: "Business edition of Outlook.", description_hi: "आउटलुक का व्यापारिक संस्करण।" },
      { name: "Business India", url: "https://businessindia.co", language: "English", description_en: "Long-running business magazine.", description_hi: "लंबे समय से चली आ रही व्यापारिक पत्रिका।" },
    ],
  },
  {
    slug: "magazines-women",
    title_en: "Women's Magazines",
    title_hi: "महिला पत्रिकाएँ",
    description_en: "Magazines focused on fashion, lifestyle and stories for women in India.",
    description_hi: "भारत में महिलाओं के लिए फ़ैशन, जीवनशैली और कहानियों पर केंद्रित पत्रिकाएँ।",
    group: "magazines",
    publications: [
      { name: "Femina", url: "https://www.femina.in", language: "English", description_en: "Iconic women's lifestyle magazine.", description_hi: "प्रसिद्ध महिला जीवनशैली पत्रिका।" },
      { name: "Vogue India", url: "https://www.vogue.in", language: "English", description_en: "Indian edition of Vogue.", description_hi: "वोग का भारतीय संस्करण।" },
      { name: "Elle India", url: "https://elle.in", language: "English", description_en: "Fashion magazine for women.", description_hi: "महिलाओं के लिए फ़ैशन पत्रिका।" },
      { name: "Cosmopolitan India", url: "https://www.cosmopolitan.in", language: "English", description_en: "Lifestyle magazine for young women.", description_hi: "युवा महिलाओं के लिए जीवनशैली पत्रिका।" },
      { name: "Grazia India", url: "https://graziamagazine.in", language: "English", description_en: "Weekly fashion and beauty magazine.", description_hi: "साप्ताहिक फ़ैशन और सौंदर्य पत्रिका।" },
      { name: "Harper's Bazaar India", url: "https://www.harpersbazaar.in", language: "English", description_en: "High-fashion magazine.", description_hi: "उच्च-फ़ैशन पत्रिका।" },
      { name: "Gruhalakshmi", url: "https://www.manoramaonline.com/gruhalakshmi.html", language: "Malayalam", description_en: "Popular Malayalam women's magazine.", description_hi: "लोकप्रिय मलयालम महिला पत्रिका।" },
    ],
  },
  {
    slug: "magazines-men",
    title_en: "Men's Magazines",
    title_hi: "पुरुष पत्रिकाएँ",
    description_en: "Magazines covering style, grooming and lifestyle for men.",
    description_hi: "पुरुषों के लिए स्टाइल, ग्रूमिंग और जीवनशैली से संबंधित पत्रिकाएँ।",
    group: "magazines",
    publications: [
      { name: "GQ India", url: "https://www.gqindia.com", language: "English", description_en: "Men's style and culture magazine.", description_hi: "पुरुषों की स्टाइल और संस्कृति पत्रिका।" },
      { name: "Man's World India", url: "https://www.mansworldindia.com", language: "English", description_en: "Indian men's lifestyle magazine.", description_hi: "भारतीय पुरुष जीवनशैली पत्रिका।" },
      { name: "FHM India (archive)", url: "https://www.fhmindia.com", language: "English", description_en: "Classic men's lifestyle magazine.", description_hi: "क्लासिक पुरुष जीवनशैली पत्रिका।" },
      { name: "Men's Health India", url: "https://www.menshealth.com", language: "English", description_en: "Fitness and health for men.", description_hi: "पुरुषों के लिए फ़िटनेस और स्वास्थ्य।" },
    ],
  },
  {
    slug: "magazines-auto",
    title_en: "Auto & Motoring Magazines",
    title_hi: "ऑटो और मोटरिंग पत्रिकाएँ",
    description_en: "Magazines on cars, bikes and the Indian automotive industry.",
    description_hi: "कारों, बाइकों और भारतीय ऑटोमोटिव उद्योग पर पत्रिकाएँ।",
    group: "magazines",
    publications: [
      { name: "Autocar India", url: "https://www.autocarindia.com", language: "English", description_en: "Leading car and bike magazine.", description_hi: "अग्रणी कार और बाइक पत्रिका।" },
      { name: "Car India", url: "https://www.carindia.in", language: "English", description_en: "Monthly automotive magazine.", description_hi: "मासिक ऑटोमोटिव पत्रिका।" },
      { name: "Overdrive", url: "https://www.overdrive.in", language: "English", description_en: "Cars, bikes and motoring reviews.", description_hi: "कार, बाइक और मोटरिंग समीक्षाएँ।" },
      { name: "BikeIndia", url: "https://www.bikeindia.in", language: "English", description_en: "Dedicated motorcycle magazine.", description_hi: "समर्पित मोटरसाइकिल पत्रिका।" },
      { name: "Motoring World", url: "https://motoringworld.in", language: "English", description_en: "Auto and motoring reviews.", description_hi: "ऑटो और मोटरिंग समीक्षाएँ।" },
    ],
  },
  {
    slug: "magazines-sports",
    title_en: "Sports Magazines",
    title_hi: "खेल पत्रिकाएँ",
    description_en: "Magazines covering cricket, football and Indian sports.",
    description_hi: "क्रिकेट, फ़ुटबॉल और भारतीय खेलों को कवर करने वाली पत्रिकाएँ।",
    group: "magazines",
    publications: [
      { name: "Sportstar", url: "https://sportstar.thehindu.com", language: "English", description_en: "Weekly sports magazine from The Hindu Group.", description_hi: "द हिंदू समूह की साप्ताहिक खेल पत्रिका।" },
      { name: "Cricket Today", url: "https://www.crickettoday.com", language: "English", description_en: "Cricket-focused publication.", description_hi: "क्रिकेट केंद्रित प्रकाशन।" },
      { name: "Wisden India", url: "https://www.wisdenindia.com", language: "English", description_en: "Cricket coverage and analysis.", description_hi: "क्रिकेट कवरेज और विश्लेषण।" },
    ],
  },
  {
    slug: "magazines-lifestyle",
    title_en: "Lifestyle, Travel & Culture Magazines",
    title_hi: "जीवनशैली, यात्रा और संस्कृति पत्रिकाएँ",
    description_en: "Magazines on travel, food, design, culture and lifestyle in India.",
    description_hi: "भारत में यात्रा, भोजन, डिज़ाइन, संस्कृति और जीवनशैली पर पत्रिकाएँ।",
    group: "magazines",
    publications: [
      { name: "Condé Nast Traveller India", url: "https://www.cntraveller.in", language: "English", description_en: "Premium travel magazine.", description_hi: "प्रीमियम यात्रा पत्रिका।" },
      { name: "Outlook Traveller", url: "https://www.outlooktraveller.com", language: "English", description_en: "Travel magazine from Outlook group.", description_hi: "आउटलुक समूह की यात्रा पत्रिका।" },
      { name: "Architectural Digest India", url: "https://www.architecturaldigest.in", language: "English", description_en: "Design and architecture magazine.", description_hi: "डिज़ाइन और वास्तुकला पत्रिका।" },
      { name: "Better Homes & Gardens India", url: "https://www.bhgindia.in", language: "English", description_en: "Home and lifestyle magazine.", description_hi: "घर और जीवनशैली पत्रिका।" },
      { name: "Reader's Digest India", url: "https://www.readersdigest.in", language: "English", description_en: "General interest monthly magazine.", description_hi: "सामान्य रुचि की मासिक पत्रिका।" },
      { name: "Filmfare", url: "https://www.filmfare.com", language: "English / Hindi", description_en: "Iconic Bollywood and film magazine.", description_hi: "प्रसिद्ध बॉलीवुड और फ़िल्म पत्रिका।" },
    ],
  },
];

export const groupOrder: { id: Category["group"]; title_en: string; title_hi: string }[] = [
  { id: "dailies-national", title_en: "National Daily Press", title_hi: "राष्ट्रीय दैनिक प्रेस" },
  { id: "dailies-regional", title_en: "Regional Daily Press", title_hi: "क्षेत्रीय दैनिक प्रेस" },
  { id: "online", title_en: "Online News", title_hi: "ऑनलाइन समाचार" },
  { id: "magazines", title_en: "Magazines by Theme", title_hi: "विषय अनुसार पत्रिकाएँ" },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export const totalPublications = categories.reduce((n, c) => n + c.publications.length, 0);