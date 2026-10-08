import { SSCMockTest } from '../types/sscTest';

export const defaultSSCMockTest: SSCMockTest = {
  test_id: "SSC-CGL-TIER1-FULL100-MOCK-2025",
  test_title: "SSC CGL/CHSL Tier-1 Full Length Bilingual Mock Test (100 Questions - 60 Mins)",
  sections: [
    {
      section_id: "reasoning",
      section_name: {
        en: "General Intelligence & Reasoning",
        hi: "सामान्य बुद्धिमत्ता और तर्कशक्ति (General Intelligence & Reasoning)"
      },
      time_limit_minutes: 15,
      questions: [
        {
          question_id: 1,
          topic: "Letter Analogy (अक्षर सादृश्यता)",
          question_text: {
            en: "Select the option that is related to the third term in the same way as the second term is related to the first term:\nNUMERICAL : MVLFQJDBM :: ALPHABET : ?",
            hi: "उस विकल्प का चयन करें जो तीसरे पद से उसी प्रकार संबंधित है जैसे दूसरा पद पहले पद से संबंधित है:\nNUMERICAL : MVLFQJDBM :: ALPHABET : ?"
          },
          options: {
            en: ["BMOQIBGFU", "ZOSHAEDS", "BKOICFGU", "ZKQGZADS"],
            hi: ["BMOQIBGFU", "ZOSHAEDS", "BKOICFGU", "ZKQGZADS"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Alternating alphabetical shift pattern (+1, -1, +1, -1...). Applying the rule systematically to ALPHABET gives BMOQIBGFU.",
            hi: "एकांतर वर्णमाला विस्थापन नियम (+1, -1, +1...). ALPHABET पर यह नियम क्रमिक रूप से लागू करने पर BMOQIBGFU प्राप्त होता है।"
          }
        },
        {
          question_id: 2,
          topic: "Syllogism (न्याय निगमन)",
          question_text: {
            en: "Statements:\n1. All metals are solids.\n2. Some solids are conductors.\nConclusions:\nI. Some conductors are metals.\nII. Some solids are metals.",
            hi: "कथन:\n1. सभी धातुएं ठोस हैं।\n2. कुछ ठोस सुचालक हैं।\nनिष्कर्ष:\nI. कुछ सुचालक धातुएं हैं।\nII. कुछ ठोस धातुएं हैं।"
          },
          options: {
            en: [
              "Only conclusion I follows",
              "Only conclusion II follows",
              "Both conclusions I and II follow",
              "Neither conclusion I nor II follows"
            ],
            hi: [
              "केवल निष्कर्ष I अनुसरण करता है",
              "केवल निष्कर्ष II अनुसरण करता है",
              "दोनों निष्कर्ष I और II अनुसरण करते हैं",
              "न तो निष्कर्ष I और न ही II अनुसरण करता है"
            ]
          },
          correct_option_index: 1,
          explanation: {
            "en": "Universal Affirmative 'All metals are solids' converts to 'Some solids are metals'. Hence conclusion II definitely follows.",
            "hi": "'सभी धातुएं ठोस हैं' का वैध परिवर्तन 'कुछ ठोस धातुएं हैं' होता है। अतः केवल निष्कर्ष II निश्चित रूप से अनुसरण करता है।"
          }
        },
        {
          question_id: 3,
          topic: "Blood Relations (रक्त संबंध)",
          question_text: {
            en: "Pointing to a photograph of a boy, Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?",
            hi: "एक लड़के की तस्वीर की ओर इशारा करते हुए सुरेश ने कहा, 'वह मेरी माँ के इकलौते बेटे का बेटा है।' सुरेश उस लड़के से किस प्रकार संबंधित है?"
          },
          options: {
            en: ["Brother", "Uncle", "Father", "Cousin"],
            hi: ["भाई", "चाचा/मामा", "पिता", "चचेरा भाई"]
          },
          correct_option_index: 2,
          explanation: {
            en: "'The only son of my mother' refers to Suresh himself. Therefore, the boy is Suresh's son, making Suresh his father.",
            hi: "मेरी माँ का इकलौता बेटा स्वयं सुरेश है। अतः वह लड़का सुरेश का बेटा है और सुरेश उसका पिता है।"
          }
        },
        {
          question_id: 4,
          topic: "Number Series (संख्या श्रृंखला)",
          question_text: {
            en: "Which number will replace the question mark (?) in the following series?\n7, 11, 19, 35, 67, ?",
            hi: "निम्नलिखित श्रृंखला में प्रश्नचिह्न (?) के स्थान पर कौन सी संख्या आएगी?\n7, 11, 19, 35, 67, ?"
          },
          options: {
            en: ["131", "135", "129", "143"],
            hi: ["131", "135", "129", "143"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Differences: +4, +8, +16, +32, next is +64. 67 + 64 = 131.",
            hi: "पदों का अंतर दोगुना हो रहा है: +4, +8, +16, +32, अगला अंतर +64 होगा। 67 + 64 = 131।"
          }
        },
        {
          question_id: 5,
          topic: "Coding-Decoding (कूटलेखन-कूटवाचन)",
          question_text: {
            en: "In a certain code language, 'ROBUST' is written as 'QNATRS'. How will 'STABLE' be written in that code language?",
            hi: "एक निश्चित कूट भाषा में, 'ROBUST' को 'QNATRS' लिखा जाता है। उसी कूट भाषा में 'STABLE' को कैसे लिखा जाएगा?"
          },
          options: {
            en: ["RSZAKD", "TUCBMF", "RSZBMD", "RTAAKD"],
            hi: ["RSZAKD", "TUCBMF", "RSZBMD", "RTAAKD"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Each letter is shifted backward by 1 position (-1 rule). STABLE -> RSZAKD.",
            hi: "प्रत्येक वर्ण में -1 का विस्थापन किया गया है। STABLE -> RSZAKD।"
          }
        },
        {
          question_id: 6,
          topic: "Direction Sense (दिशा ज्ञान परीक्षण)",
          question_text: {
            en: "A person walks 12 km towards North, then turns right and walks 5 km. How far and in which direction is he from his initial starting point?",
            hi: "एक व्यक्ति उत्तर दिशा की ओर 12 किमी चलता है, फिर दाएँ मुड़ता है और 5 किमी चलता है। वह अपने प्रारंभिक बिंदु से कितनी दूरी पर और किस दिशा में है?"
          },
          options: {
            en: ["13 km North-East", "17 km North", "13 km South-West", "15 km North-East"],
            hi: ["13 किमी उत्तर-पूर्व", "17 किमी उत्तर", "13 किमी दक्षिण-पश्चिम", "15 किमी उत्तर-पूर्व"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Pythagoras theorem: √(12² + 5²) = √169 = 13 km towards North-East.",
            hi: "पाइथागोरस प्रमेय: √(12² + 5²) = √169 = 13 किमी, दिशा उत्तर-पूर्व।"
          }
        },
        {
          question_id: 7,
          topic: "Letter Analogy (अक्षर सादृश्यता)",
          question_text: {
            en: "Select the letter-cluster that is related to the third cluster in the same way as the second is related to the first:\nAZBY : CXDW :: EVFU : ?",
            hi: "उस अक्षर-समूह का चयन करें जो तीसरे से उसी प्रकार संबंधित है जैसे दूसरा पहले से संबंधित है:\nAZBY : CXDW :: EVFU : ?"
          },
          options: {
            en: ["GTHS", "HSIR", "TGSH", "IRJQ"],
            hi: ["GTHS", "HSIR", "TGSH", "IRJQ"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Opposite letter pairs with a +2 position step. E(+2)=G (opp T), F(+2)=H (opp S) -> GTHS.",
            hi: "विपरीत वर्ण युग्म एवं +2 स्थिति वृद्धि। E(+2)=G (विपरीत T), F(+2)=H (विपरीत S) -> GTHS।"
          }
        },
        {
          question_id: 8,
          topic: "Order & Ranking (क्रम और व्यवस्था)",
          question_text: {
            en: "In a row of 45 students facing North, Ramesh is 18th from the left end. What is his position from the right end?",
            hi: "उत्तर की ओर उन्मुख 45 विद्यार्थियों की एक पंक्ति में रमेश बाएं छोर से 18वें स्थान पर है। दाएं छोर से उसका स्थान क्या होगा?"
          },
          options: {
            en: ["28th", "27th", "29th", "26th"],
            hi: ["28वाँ", "27वाँ", "29वाँ", "26वाँ"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Right position = Total - Left + 1 = 45 - 18 + 1 = 28th.",
            hi: "दाएँ छोर से स्थिति = कुल - बायाँ + 1 = 45 - 18 + 1 = 28वाँ।"
          }
        },
        {
          question_id: 9,
          topic: "Venn Diagram (वेन आरेख)",
          question_text: {
            en: "Which Venn diagram best represents: 'Engineers, Doctors, Human Beings'?",
            hi: "निम्नलिखित में से कौन सा वेन आरेख 'इंजीनियर, डॉक्टर, मानव' के संबंध को सर्वोत्तम दर्शाता है?"
          },
          options: {
            en: [
              "Two disjoint circles inside a large containing circle",
              "Three mutually intersecting circles",
              "Three concentric circles",
              "Two intersecting circles completely outside the third"
            ],
            hi: [
              "एक बड़े वृत्त के अंदर दो अलग-अलग वृत्त",
              "तीन परस्पर प्रतिच्छेदी वृत्त",
              "तीन संकेंद्री वृत्त",
              "तीसरे वृत्त से बाहर दो वृत्त"
            ]
          },
          correct_option_index: 0,
          explanation: {
            en: "Both Engineers and Doctors are distinct professions inside the set of Human Beings.",
            hi: "इंजीनियर और डॉक्टर दोनों मानव जाति के अंतर्गत दो पृथक पेशे हैं।"
          }
        },
        {
          question_id: 10,
          topic: "Mirror Image (दर्पण प्रतिबिंब)",
          question_text: {
            en: "Select the correct mirror image of the word 'REASONING' when a vertical mirror is placed to its right.",
            hi: "जब 'REASONING' के दाईं ओर एक लंबवत दर्पण रखा जाए, तो सही दर्पण छवि का चयन करें।"
          },
          options: {
            en: [
              "Lateral inversion starting with reversed G, N, I, N, O, S, A, E, R",
              "Water image of REASONING",
              "Identical word REASONING",
              "Lateral inversion starting with R"
            ],
            hi: [
              "उल्टे G, N, I, N, O, S, A, E, R से शुरू होने वाली पार्श्व छवि",
              "REASONING की जल छवि",
              "समान शब्द REASONING",
              "R से शुरू होने वाला पार्श्व परिवर्तन"
            ]
          },
          correct_option_index: 0,
          explanation: {
            en: "Right vertical mirror causes lateral inversion starting from the rightmost letter 'G'.",
            hi: "दाईं ओर रखे दर्पण में सबसे दायां वर्ण 'G' पार्श्व परिवर्तन के साथ सबसे पहले दिखेगा।"
          }
        },
        {
          question_id: 11,
          topic: "Number Analogy (संख्या सादृश्यता)",
          question_text: {
            en: "Select the option related to the third number in the same way as the second is related to the first:\n14 : 210 :: 18 : ?",
            hi: "उस विकल्प का चयन करें जो तीसरी संख्या से उसी प्रकार संबंधित है जैसे दूसरी पहली से संबंधित है:\n14 : 210 :: 18 : ?"
          },
          options: {
            en: ["342", "324", "360", "306"],
            hi: ["342", "324", "360", "306"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Pattern: n : n(n + 1). 14 × 15 = 210. Similarly, 18 × 19 = 342.",
            hi: "पैटर्न: n : n(n + 1)। 14 × 15 = 210। उसी प्रकार, 18 × 19 = 342।"
          }
        },
        {
          question_id: 12,
          topic: "Word Analogy (शब्द सादृश्यता)",
          question_text: {
            en: "Seismograph : Earthquake :: Barometer : ?",
            hi: "सिस्मोग्राफ : भूकंप :: बैरोमीटर : ?"
          },
          options: {
            en: ["Atmospheric Pressure", "Temperature", "Humidity", "Wind Speed"],
            hi: ["वायुमंडलीय दबाव", "तापमान", "आर्द्रता", "वायु गति"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Seismograph measures earthquakes; Barometer measures atmospheric pressure.",
            hi: "सिस्मोग्राफ से भूकंप मापा जाता है, जबकि बैरोमीटर से वायुमंडलीय दबाव मापा जाता है।"
          }
        },
        {
          question_id: 13,
          topic: "Alphabet Series (वर्णमाला श्रृंखला)",
          question_text: {
            en: "Which letter will replace the question mark (?) in the following series?\nB, D, G, K, P, ?",
            hi: "निम्नलिखित श्रृंखला में प्रश्नचिह्न (?) के स्थान पर कौन सा अक्षर आएगा?\nB, D, G, K, P, ?"
          },
          options: {
            en: ["V", "U", "W", "T"],
            hi: ["V", "U", "W", "T"]
          },
          correct_option_index: 0,
          explanation: {
            en: "B(2)+2=D(4), D(4)+3=G(7), G(7)+4=K(11), K(11)+5=P(16), P(16)+6=V(22).",
            hi: "वर्णों की स्थिति में क्रमिक वृद्धि: +2, +3, +4, +5, +6। P(16)+6 = V(22)।"
          }
        },
        {
          question_id: 14,
          topic: "Mathematical Operations (गणितीय संक्रियाएं)",
          question_text: {
            en: "If '+' means '÷', '-' means '×', '×' means '+', and '÷' means '-', then evaluate:\n36 + 6 - 3 × 5 ÷ 3",
            hi: "यदि '+' का अर्थ '÷', '-' का अर्थ '×', '×' का अर्थ '+', और '÷' का अर्थ '-' है, तो मान ज्ञात करें:\n36 + 6 - 3 × 5 ÷ 3"
          },
          options: {
            en: ["20", "22", "18", "25"],
            hi: ["20", "22", "18", "25"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Replacing signs: 36 ÷ 6 × 3 + 5 - 3 = 6 × 3 + 5 - 3 = 18 + 5 - 3 = 20.",
            hi: "चिह्नों को बदलने पर: 36 ÷ 6 × 3 + 5 - 3 = 6 × 3 + 5 - 3 = 18 + 5 - 3 = 20।"
          }
        },
        {
          question_id: 15,
          topic: "Dice & Cube (पासा और घन)",
          question_text: {
            en: "In a standard dice, what is the number on the face opposite to 3?",
            hi: "एक मानक पासे (Standard Dice) में, 3 के विपरीत फलक पर कौन सी संख्या होगी?"
          },
          options: {
            en: ["4", "5", "2", "6"],
            hi: ["4", "5", "2", "6"]
          },
          correct_option_index: 0,
          explanation: {
            en: "In a standard dice, the sum of numbers on opposite faces is always 7. Opposite of 3 is 7 - 3 = 4.",
            hi: "मानक पासे में विपरीत फलकों का योग सदैव 7 होता है। अतः 3 का विपरीत 7 - 3 = 4 होगा।"
          }
        },
        {
          question_id: 16,
          topic: "Classification / Odd One Out (वर्गीकरण)",
          question_text: {
            en: "Three of the following four letter-clusters are alike in a certain way. Select the odd one out:",
            hi: "निम्नलिखित चार अक्षर-समूहों में से तीन किसी प्रकार समान हैं। विषम का चयन करें:"
          },
          options: {
            en: ["CEG", "IKM", "OQS", "PRT"],
            hi: ["CEG", "IKM", "OQS", "PRT"]
          },
          correct_option_index: 3,
          explanation: {
            en: "CEG (+2, +2), IKM (+2, +2), OQS (+2, +2) all start with odd positional values (3, 9, 15). PRT starts with even (16, 18, 20).",
            hi: "CEG, IKM, OQS विषम स्थानों से शुरू होते हैं (3, 9, 15), जबकि PRT सम स्थान से शुरू होता है।"
          }
        },
        {
          question_id: 17,
          topic: "Coded Blood Relations (कूटबद्ध रक्त संबंध)",
          question_text: {
            en: "If 'P + Q' means P is father of Q, and 'P × Q' means P is sister of Q, what does 'A + B × C' mean?",
            hi: "यदि 'P + Q' का अर्थ है P, Q का पिता है, और 'P × Q' का अर्थ है P, Q की बहन है, तो 'A + B × C' का क्या अर्थ है?"
          },
          options: {
            en: [
              "A is the father of C",
              "A is the uncle of C",
              "A is the brother of C",
              "A is the son of C"
            ],
            hi: [
              "A, C का पिता है",
              "A, C का चाचा है",
              "A, C का भाई है",
              "A, C का पुत्र है"
            ]
          },
          correct_option_index: 0,
          explanation: {
            en: "A is father of B, and B is sister of C. Therefore, A is also the father of C.",
            hi: "A, B का पिता है और B, C की बहन है। अतः A, C का भी पिता है।"
          }
        },
        {
          question_id: 18,
          topic: "Missing Number in Matrix (लुप्त संख्या)",
          question_text: {
            en: "Find the missing number in the 3x3 pattern:\nRow 1: [3, 4, 25]\nRow 2: [5, 12, 169]\nRow 3: [7, 24, ?]",
            hi: "दिए गए 3x3 आव्यूह में लुप्त संख्या ज्ञात करें:\nपंक्ति 1: [3, 4, 25]\nपंक्ति 2: [5, 12, 169]\nपंक्ति 3: [7, 24, ?]"
          },
          options: {
            en: ["625", "576", "676", "529"],
            hi: ["625", "576", "676", "529"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Pattern: a² + b² = c. 3² + 4² = 25; 5² + 12² = 169; 7² + 24² = 49 + 576 = 625.",
            hi: "नियम: a² + b² = c। 3² + 4² = 25; 5² + 12² = 169; 7² + 24² = 49 + 576 = 625।"
          }
        },
        {
          question_id: 19,
          topic: "Clock & Angle (घड़ी और कोण)",
          question_text: {
            en: "What is the angle between the hour hand and the minute hand of a clock at 3:30?",
            hi: "3:30 बजे घड़ी की घंटे और मिनट की सुइयों के बीच का कोण क्या होगा?"
          },
          options: {
            en: ["75°", "90°", "80°", "70°"],
            hi: ["75°", "90°", "80°", "70°"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Angle = |30H - (11/2)M| = |30(3) - (11/2)(30)| = |90 - 165| = 75°.",
            hi: "कोण सूत्र = |30H - (11/2)M| = |30(3) - 165| = |90 - 165| = 75°।"
          }
        },
        {
          question_id: 20,
          topic: "Calendar (कैलेंडर)",
          question_text: {
            en: "If 1st January 2024 was a Monday, what day of the week was 31st December 2024?",
            hi: "यदि 1 जनवरी 2024 को सोमवार था, तो 31 दिसंबर 2024 को सप्ताह का कौन सा दिन था?"
          },
          options: {
            en: ["Tuesday", "Monday", "Wednesday", "Sunday"],
            hi: ["मंगलवार", "सोमवार", "बुधवार", "रविवार"]
          },
          correct_option_index: 0,
          explanation: {
            en: "2024 is a leap year (366 days). In a leap year, the last day is one day ahead of the first day: Monday + 1 = Tuesday.",
            hi: "2024 एक लीप वर्ष (366 दिन) है। लीप वर्ष का अंतिम दिन पहले दिन से 1 दिन आगे होता है: सोमवार + 1 = मंगलवार।"
          }
        },
        {
          question_id: 21,
          topic: "Statement & Assumption (कथन एवं पूर्वधारणा)",
          question_text: {
            en: "Statement: 'Please switch off mobile phones inside the library.'\nAssumptions:\nI. People carry mobile phones to the library.\nII. Mobile phones can cause noise disturbance in the library.",
            hi: "कथन: 'कृपया पुस्तकालय के अंदर मोबाइल फोन बंद रखें।'\nपूर्वधारणाएँ:\nI. लोग पुस्तकालय में मोबाइल फोन लेकर आते हैं।\nII. मोबाइल फोन से पुस्तकालय में व्यवधान हो सकता है।"
          },
          options: {
            en: [
              "Both assumptions I and II are implicit",
              "Only assumption I is implicit",
              "Only assumption II is implicit",
              "Neither I nor II is implicit"
            ],
            hi: [
              "दोनों पूर्वधारणाएं I और II अंतर्निहित हैं",
              "केवल पूर्वधारणा I अंतर्निहित है",
              "केवल पूर्वधारणा II अंतर्निहित है",
              "न तो I और न ही II अंतर्निहित है"
            ]
          },
          correct_option_index: 0,
          explanation: {
            en: "A notice assumes visitors carry phones and that ringing phones disturb silence. Both I and II are validly implicit.",
            hi: "पुस्तकालय की सूचना यह मानती है कि लोग फोन लाते हैं तथा रिंगटोन से शांति भंग हो सकती है। दोनों अंतर्निहित हैं।"
          }
        },
        {
          question_id: 22,
          topic: "Paper Folding (कागज मोड़ना)",
          question_text: {
            en: "A circular sheet of paper is folded in half twice and a triangle is punched at the edge. How many triangular cuts appear when unfolded?",
            hi: "एक गोलाकार कागज को दो बार मोड़ा जाता है और किनारे पर एक त्रिकोण काटा जाता है। खोलने पर कितने त्रिकोणीय कट दिखाई देंगे?"
          },
          options: {
            en: ["4", "2", "8", "6"],
            hi: ["4", "2", "8", "6"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Folding twice creates 4 layers. One punch cuts through all 4 layers, yielding 4 cuts.",
            hi: "कागज को दो बार मोड़ने से 4 परतें बनती हैं। एक कट 4 परतों से होकर गुजरता है, अतः 4 त्रिकोण बनेंगे।"
          }
        },
        {
          question_id: 23,
          topic: "Embedded Figures (सन्नहित आकृतियाँ)",
          question_text: {
            en: "Select the option figure in which the given question pattern is embedded (rotation is not allowed).",
            hi: "उस विकल्प आकृति का चयन करें जिसमें दी गई प्रश्न आकृति अंतर्निहित है (घूर्णन की अनुमति नहीं है)।"
          },
          options: {
            en: ["Figure A", "Figure B", "Figure C", "Figure D"],
            hi: ["आकृति A", "आकृति B", "आकृति C", "आकृति D"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Figure A clearly contains the continuous geometric contour of the target shape without modification.",
            hi: "आकृति A में बिना किसी घूर्णन के प्रश्न आकृति की सटीक रूपरेखा निहित है।"
          }
        },
        {
          question_id: 24,
          topic: "Logical Sequence of Words (शब्दों का तार्किक क्रम)",
          question_text: {
            en: "Arrange the following words in a logical and meaningful order:\n1. Admission\n2. Application\n3. Examination\n4. Merit List\n5. Interview",
            hi: "निम्नलिखित शब्दों को तार्किक और सार्थक क्रम में व्यवस्थित करें:\n1. प्रवेश\n2. आवेदन\n3. परीक्षा\n4. मेरिट सूची\n5. साक्षात्कार"
          },
          options: {
            en: ["2, 3, 5, 4, 1", "2, 1, 3, 4, 5", "3, 2, 4, 5, 1", "2, 3, 4, 1, 5"],
            hi: ["2, 3, 5, 4, 1", "2, 1, 3, 4, 5", "3, 2, 4, 5, 1", "2, 3, 4, 1, 5"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Correct sequence: Application (2) -> Examination (3) -> Interview (5) -> Merit List (4) -> Admission (1).",
            hi: "सही क्रम: आवेदन (2) -> परीक्षा (3) -> साक्षात्कार (5) -> मेरिट सूची (4) -> प्रवेश (1)।"
          }
        },
        {
          question_id: 25,
          topic: "Counting of Figures (आकृतियों की गिनती)",
          question_text: {
            en: "How many triangles are there in a square with both diagonals drawn intersecting at the center?",
            hi: "एक वर्ग में दोनों विकर्णों को केंद्र पर प्रतिच्छेद करने पर कुल कितने त्रिभुज बनते हैं?"
          },
          options: {
            en: ["8", "6", "4", "10"],
            hi: ["8", "6", "4", "10"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Formula: A quadrilateral divided by 2 diagonals forms 4 small triangles. Total triangles = 4 × 2 = 8.",
            hi: "नियम: दो विकर्णों द्वारा विभाजित वर्ग में 4 छोटे त्रिभुज होते हैं। कुल त्रिभुज = 4 × 2 = 8।"
          }
        }
      ]
    },
    {
      section_id: "general_awareness",
      section_name: {
        en: "General Awareness",
        hi: "सामान्य जागरूकता (General Awareness)"
      },
      time_limit_minutes: 15,
      questions: [
        {
          question_id: 26,
          topic: "Indian Polity (भारतीय राजव्यवस्था)",
          question_text: {
            en: "Under which Article of the Indian Constitution is the 'Right to Protection of Life and Personal Liberty' guaranteed?",
            hi: "भारतीय संविधान के किस अनुच्छेद के तहत 'प्राण और दैहिक स्वतंत्रता का संरक्षण' प्रदान किया गया है?"
          },
          options: {
            en: ["Article 19", "Article 21", "Article 14", "Article 32"],
            hi: ["अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 14", "अनुच्छेद 32"]
          },
          correct_option_index: 1,
          explanation: {
            en: "Article 21 ensures that no person shall be deprived of his life or personal liberty except according to procedure established by law.",
            hi: "अनुच्छेद 21 के अनुसार किसी भी व्यक्ति को विधि द्वारा स्थापित प्रक्रिया के अतिरिक्त प्राण या दैहिक स्वतंत्रता से वंचित नहीं किया जाएगा।"
          }
        },
        {
          question_id: 27,
          topic: "Indian Polity (भारतीय राजव्यवस्था)",
          question_text: {
            en: "Fundamental Duties were incorporated into Part IV-A of the Indian Constitution by which Constitutional Amendment Act?",
            hi: "भारतीय संविधान के भाग IV-A में मौलिक कर्तव्यों को किस संविधान संशोधन अधिनियम द्वारा शामिल किया गया था?"
          },
          options: {
            en: ["42nd Amendment Act, 1976", "44th Amendment Act, 1978", "86th Amendment Act, 2002", "73rd Amendment Act, 1992"],
            hi: ["42वाँ संशोधन अधिनियम, 1976", "44वाँ संशोधन अधिनियम, 1978", "86वाँ संशोधन अधिनियम, 2002", "73वाँ संशोधन अधिनियम, 1992"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Added by the 42nd Amendment in 1976 on the recommendation of the Swaran Singh Committee (Article 51A).",
            hi: "स्वर्ण सिंह समिति की सिफारिश पर 42वें संविधान संशोधन 1976 द्वारा अनुच्छेद 51A जोड़ा गया।"
          }
        },
        {
          question_id: 28,
          topic: "Indian Polity (भारतीय राजव्यवस्था)",
          question_text: {
            en: "Which Article of the Indian Constitution deals with the Election Commission of India?",
            hi: "भारतीय संविधान का कौन सा अनुच्छेद भारत के निर्वाचन आयोग (Election Commission) से संबंधित है?"
          },
          options: {
            en: ["Article 324", "Article 280", "Article 312", "Article 356"],
            hi: ["अनुच्छेद 324", "अनुच्छेद 280", "अनुच्छेद 312", "अनुच्छेद 356"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Article 324 vests the superintendence, direction and control of elections in the Election Commission.",
            hi: "अनुच्छेद 324 के तहत निर्वाचनों के अधीक्षण, निर्देशन और नियंत्रण का अधिकार निर्वाचन आयोग में निहित है।"
          }
        },
        {
          question_id: 29,
          topic: "Indian Polity (भारतीय राजव्यवस्था)",
          question_text: {
            en: "Uniform Civil Code (UCC) is mentioned in which Article of the Directive Principles of State Policy?",
            hi: "समान नागरिक संहिता (Uniform Civil Code) का उल्लेख राज्य के नीति निर्देशक तत्वों के किस अनुच्छेद में है?"
          },
          options: {
            en: ["Article 44", "Article 40", "Article 48", "Article 50"],
            hi: ["अनुच्छेद 44", "अनुच्छेद 40", "अनुच्छेद 48", "अनुच्छेद 50"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Article 44 directs the State to secure for citizens a Uniform Civil Code throughout India.",
            hi: "अनुच्छेद 44 के तहत राज्य भारत के समस्त राज्यक्षेत्र में नागरिकों के लिए एक समान नागरिक संहिता लागू करने का प्रयास करेगा।"
          }
        },
        {
          question_id: 30,
          topic: "Indian History - Ancient (प्राचीन इतिहास)",
          question_text: {
            en: "The 'Great Bath' of the Indus Valley Civilization was discovered at which archaeological site?",
            hi: "सिंधु घाटी सभ्यता का प्रसिद्ध 'विशाल स्नानागार' (Great Bath) किस स्थल पर पाया गया था?"
          },
          options: {
            en: ["Mohenjo-daro", "Harappa", "Kalibangan", "Lothal"],
            hi: ["मोहनजोदड़ो", "हड़प्पा", "कालीबंगन", "लोथल"]
          },
          correct_option_index: 0,
          explanation: {
            en: "The Great Bath was unearthed at Mohenjo-daro in Sindh (Pakistan), built with fine fired bricks.",
            hi: "विशाल स्नानागार मोहनजोदड़ो (सिंध) में पक्की ईंटों से निर्मित पाया गया था।"
          }
        },
        {
          question_id: 31,
          topic: "Indian History - Modern (आधुनिक इतिहास)",
          question_text: {
            en: "Who founded the 'Brahmo Samaj' in Kolkata in the year 1828?",
            hi: "वर्ष 1828 में कोलकाता में 'ब्रह्म समाज' की स्थापना किसने की थी?"
          },
          options: {
            en: ["Raja Ram Mohan Roy", "Swami Dayanand Saraswati", "Ishwar Chandra Vidyasagar", "Keshab Chandra Sen"],
            hi: ["राजा राम मोहन राय", "स्वामी दयानंद सरस्वती", "ईश्वर चंद्र विद्यासागर", "केशव चंद्र सेन"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Raja Ram Mohan Roy established Brahmo Sabha in 1828 to promote monotheism and social reform.",
            hi: "राजा राम मोहन राय ने एकेश्वरवाद और सामाजिक सुधार के प्रसार हेतु 1828 में ब्रह्म सभा (बाद में ब्रह्म समाज) की स्थापना की।"
          }
        },
        {
          question_id: 32,
          topic: "Indian History - Modern (आधुनिक इतिहास)",
          question_text: {
            en: "The Battle of Plassey was fought in which year?",
            hi: "प्लासी का ऐतिहासिक युद्ध किस वर्ष लड़ा गया था?"
          },
          options: {
            en: ["1757", "1764", "1857", "1761"],
            hi: ["1757", "1764", "1857", "1761"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Fought on 23 June 1757 between Robert Clive and Siraj-ud-Daulah, Nawab of Bengal.",
            hi: "23 जून 1757 को रॉबर्ट क्लाइव और बंगाल के नवाब सिराजुद्दौला के मध्य लड़ा गया था।"
          }
        },
        {
          question_id: 33,
          topic: "Indian History - Medieval (मध्यकालीन इतिहास)",
          question_text: {
            en: "Who built the famous Grand Trunk Road (GT Road) across Northern India?",
            hi: "उत्तरी भारत में प्रसिद्ध ग्रांड ट्रंक रोड (GT Road) का निर्माण किसने करवाया था?"
          },
          options: {
            en: ["Sher Shah Suri", "Akbar", "Alauddin Khilji", "Babur"],
            hi: ["शेर शाह सूरी", "अकबर", "अलाउद्दीन खिलजी", "बाबर"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Sher Shah Suri reconstructed the ancient Sadak-e-Azam (Grand Trunk Road) connecting Chittagong to Kabul.",
            hi: "शेर शाह सूरी ने सड़क-ए-आज़म का पुनर्निर्माण कराया जिसे बाद में ग्रांड ट्रंक रोड कहा गया।"
          }
        },
        {
          question_id: 34,
          topic: "Indian Geography (भारतीय भूगोल)",
          question_text: {
            en: "Which is the longest river flowing in peninsular India?",
            hi: "प्रायद्वीपीय भारत में बहने वाली सबसे लम्बी नदी कौन सी है?"
          },
          options: {
            en: ["Godavari", "Krishna", "Mahanadi", "Cauvery"],
            hi: ["गोदावरी", "कृष्णा", "महानदी", "कावेरी"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Godavari is 1,465 km long, originating at Trimbakeshwar, Maharashtra, and is called 'Dakshin Ganga'.",
            hi: "गोदावरी की लंबाई 1,465 किमी है। यह नासिक के त्र्यंबकेश्वर से निकलती है और इसे 'दक्षिण गंगा' कहा जाता है।"
          }
        },
        {
          question_id: 35,
          topic: "Indian Geography (भारतीय भूगोल)",
          question_text: {
            en: "The Tropic of Cancer passes through how many Indian States?",
            hi: "कर्क रेखा (Tropic of Cancer) भारत के कितने राज्यों से होकर गुजरती है?"
          },
          options: {
            en: ["8", "7", "9", "6"],
            hi: ["8", "7", "9", "6"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Passes through 8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram.",
            hi: "8 राज्यों से गुजरती है: गुजरात, राजस्थान, मध्य प्रदेश, छत्तीसगढ़, झारखंड, पश्चिम बंगाल, त्रिपुरा और मिजोरम।"
          }
        },
        {
          question_id: 36,
          topic: "Indian Geography (भारतीय भूगोल)",
          question_text: {
            en: "Majuli, the world's largest river island, is located on which river in Assam?",
            hi: "विश्व का सबसे बड़ा नदी द्वीप माजुली असम में किस नदी पर स्थित है?"
          },
          options: {
            en: ["Brahmaputra", "Ganga", "Barak", "Teesta"],
            hi: ["ब्रह्मपुत्र", "गंगा", "बराक", "तीस्ता"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Majuli is situated in the Brahmaputra River in Assam, declared India's first island district.",
            hi: "माजुली असम में ब्रह्मपुत्र नदी पर स्थित विश्व का सबसे बड़ा नदी द्वीप है।"
          }
        },
        {
          question_id: 37,
          topic: "General Science - Physics (भौतिक विज्ञान)",
          question_text: {
            en: "What is the SI unit of electric potential difference (voltage)?",
            hi: "विद्युत विभवान्तर (Voltage) की SI इकाई क्या है?"
          },
          options: {
            en: ["Volt", "Ampere", "Ohm", "Watt"],
            hi: ["वोल्ट (Volt)", "एम्पीयर (Ampere)", "ओम (Ohm)", "वाट (Watt)"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Volt (V) is the SI unit of electric potential difference, defined as 1 Joule per Coulomb.",
            hi: "विद्युत विभवान्तर का SI मात्रक वोल्ट है, जो 1 जूल/कूलम्ब के बराबर होता है।"
          }
        },
        {
          question_id: 38,
          topic: "General Science - Physics (भौतिक विज्ञान)",
          question_text: {
            en: "The optical phenomenon responsible for the sparkling of diamonds and optical fiber transmission is:",
            hi: "हीरे की चमक और ऑप्टिकल फाइबर में डेटा संचरण के लिए कौन सी प्रकाशीय परिघटना उत्तरदायी है?"
          },
          options: {
            en: [
              "Total Internal Reflection",
              "Diffraction",
              "Scattering",
              "Refraction"
            ],
            hi: [
              "पूर्ण आंतरिक परावर्तन (Total Internal Reflection)",
              "विवर्तन",
              "प्रकीर्णन",
              "अपवर्तन"
            ]
          },
          correct_option_index: 0,
          explanation: {
            en: "Total Internal Reflection (TIR) occurs when light travels from denser to rarer medium at an angle greater than critical angle.",
            hi: "क्रांतिक कोण से अधिक आपतन कोण पर सघन से विरल माध्यम में प्रकाश का पूर्ण आंतरिक परावर्तन होता है।"
          }
        },
        {
          question_id: 39,
          topic: "General Science - Chemistry (रसायन विज्ञान)",
          question_text: {
            en: "What is the chemical name and formula of Baking Soda?",
            hi: "बेकिंग सोडा (खाने का सोडा) का रासायनिक नाम और सूत्र क्या है?"
          },
          options: {
            en: [
              "Sodium Hydrogen Carbonate (NaHCO3)",
              "Sodium Carbonate (Na2CO3)",
              "Sodium Hydroxide (NaOH)",
              "Calcium Oxychloride (CaOCl2)"
            ],
            hi: [
              "सोडियम हाइड्रोजन कार्बोनेट (NaHCO3)",
              "सोडियम कार्बोनेट (Na2CO3)",
              "सोडियम हाइड्रॉक्साइड (NaOH)",
              "कैल्शियम ऑक्सीक्लोराइड (CaOCl2)"
            ]
          },
          correct_option_index: 0,
          explanation: {
            en: "Baking soda is Sodium Bicarbonate / Sodium Hydrogen Carbonate (NaHCO3).",
            hi: "बेकिंग सोडा का रासायनिक नाम सोडियम बाइकार्बोनेट (NaHCO3) है।"
          }
        },
        {
          question_id: 40,
          topic: "General Science - Chemistry (रसायन विज्ञान)",
          question_text: {
            en: "Which gas is released when dilute hydrochloric acid reacts with active zinc metal?",
            hi: "जब तनु हाइड्रोक्लोरिक अम्ल सक्रिय जिंक धातु से क्रिया करता है, तो कौन सी गैस निकलती है?"
          },
          options: {
            en: ["Hydrogen (H2)", "Oxygen (O2)", "Chlorine (Cl2)", "Carbon dioxide (CO2)"],
            hi: ["हाइड्रोजन (H2)", "ऑक्सीजन (O2)", "क्लोरीन (Cl2)", "कार्बन डाइऑक्साइड (CO2)"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Zn + 2HCl -> ZnCl2 + H2(g). Hydrogen gas burns with a pop sound.",
            hi: "Zn + 2HCl -> ZnCl2 + H2। धातु अम्ल से क्रिया कर हाइड्रोजन गैस मुक्त करती है।"
          }
        },
        {
          question_id: 41,
          topic: "General Science - Biology (जीव विज्ञान)",
          question_text: {
            en: "Which cell organelle is commonly referred to as the 'Powerhouse of the Cell'?",
            hi: "किस कोशिकांग को आमतौर पर 'कोशिका का पावरहाउस' (Powerhouse of the Cell) कहा जाता है?"
          },
          options: {
            en: ["Mitochondria", "Ribosome", "Golgi apparatus", "Lysosome"],
            hi: ["माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी काय", "लाइसोसोम"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Mitochondria produce cellular energy in the form of ATP through aerobic cellular respiration.",
            hi: "माइटोकॉन्ड्रिया में कोशिकीय श्वसन द्वारा ऊर्जा एटीपी (ATP) के रूप में उत्पन्न होती है।"
          }
        },
        {
          question_id: 42,
          topic: "General Science - Biology (जीव विज्ञान)",
          question_text: {
            en: "Which vitamin is synthesized in the human body through sunlight exposure?",
            hi: "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर में कौन सा विटामिन संश्लेषित होता है?"
          },
          options: {
            en: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
            hi: ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन K"]
          },
          correct_option_index: 0,
          explanation: {
            en: "UVB rays catalyze the synthesis of Vitamin D3 in the epidermis from 7-dehydrocholesterol.",
            hi: "सूर्य के प्रकाश की UVB किरणें त्वचा में 7-डीहाइड्रोकोलेस्ट्रॉल से विटामिन D का संश्लेषण करती हैं।"
          }
        },
        {
          question_id: 43,
          topic: "General Science - Biology (जीव विज्ञान)",
          question_text: {
            en: "Which blood group is universally recognized as the 'Universal Donor'?",
            hi: "किस रक्त समूह को 'सर्वदाता' (Universal Donor) माना जाता है?"
          },
          options: {
            en: ["O Negative (O-)", "AB Positive (AB+)", "O Positive (O+)", "A Negative (A-)"],
            hi: ["O नेगेटिव (O-)", "AB पॉजिटिव (AB+)", "O पॉजिटिव (O+)", "A नेगेटिव (A-)"]
          },
          correct_option_index: 0,
          explanation: {
            en: "O negative red blood cells lack A, B, and Rh antigens, preventing immune rejection in any recipient.",
            hi: "O नेगेटिव में A, B या Rh एंटीजन नहीं पाए जाते, जिससे यह किसी भी व्यक्ति को दिया जा सकता है।"
          }
        },
        {
          question_id: 44,
          topic: "Indian Economy (भारतीय अर्थव्यवस्था)",
          question_text: {
            en: "What does the term 'Repo Rate' signify in the Indian monetary policy?",
            hi: "भारतीय मौद्रिक नीति में 'रेपो दर' (Repo Rate) का क्या अर्थ है?"
          },
          options: {
            en: [
              "Rate at which RBI lends short-term funds to commercial banks",
              "Rate at which commercial banks deposit surplus funds with RBI",
              "Prime lending rate for industrial loans",
              "Dividend rate on government bonds"
            ],
            hi: [
              "वह दर जिस पर RBI वाणिज्यिक बैंकों को अल्पकालिक ऋण देता है",
              "वह दर जिस पर बैंक RBI के पास अधिशेष जमा रखते हैं",
              "औद्योगिक ऋणों के लिए प्राइम लेंडिंग दर",
              "सरकारी बॉन्ड पर लाभांश दर"
            ]
          },
          correct_option_index: 0,
          explanation: {
            en: "Repo rate is the benchmark lending rate charged by the RBI when commercial banks borrow funds against government securities.",
            hi: "रेपो दर वह ब्याज दर है जिस पर RBI वाणिज्यिक बैंकों को सरकारी प्रतिभूतियों के बदले अल्पकालिक ऋण प्रदान करता है।"
          }
        },
        {
          question_id: 45,
          topic: "Indian Economy (भारतीय अर्थव्यवस्था)",
          question_text: {
            en: "Which institution replaced the Planning Commission of India on 1st January 2015?",
            hi: "1 जनवरी 2015 को योजना आयोग के स्थान पर किस संस्था की स्थापना की गई?"
          },
          options: {
            en: ["NITI Aayog", "Finance Commission", "National Development Council", "Competition Commission"],
            hi: ["नीति आयोग (NITI Aayog)", "वित्त आयोग", "राष्ट्रीय विकास परिषद", "प्रतिस्पर्धा आयोग"]
          },
          correct_option_index: 0,
          explanation: {
            en: "NITI Aayog (National Institution for Transforming India) was formed on 1 Jan 2015 with Prime Minister as Chairperson.",
            hi: "1 जनवरी 2015 को योजना आयोग के स्थान पर नीति आयोग का गठन किया गया, जिसके अध्यक्ष प्रधानमंत्री होते हैं।"
          }
        },
        {
          question_id: 46,
          topic: "Environmental Science (पर्यावरण अध्ययन)",
          question_text: {
            en: "Which layer of the atmosphere contains the ozone layer that absorbs harmful ultraviolet rays?",
            hi: "वायुमंडल की किस परत में ओजोन परत पाई जाती है जो हानिकारक पराबैंगनी किरणों को अवशोषित करती है?"
          },
          options: {
            en: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
            hi: ["समताप मंडल (Stratosphere)", "क्षोभ मंडल (Troposphere)", "मध्य मंडल (Mesosphere)", "ताप मंडल (Thermosphere)"]
          },
          correct_option_index: 0,
          explanation: {
            en: "The ozone layer is located in the lower stratosphere between 15 km to 35 km above Earth's surface.",
            hi: "ओजोन परत समताप मंडल (Stratosphere) में लगभग 15 से 35 किमी की ऊंचाई पर स्थित है।"
          }
        },
        {
          question_id: 47,
          topic: "Current Affairs & Space (समसामयिकी एवं अंतरिक्ष)",
          question_text: {
            en: "What name was given to the landing point of Chandrayaan-3's Vikram Lander on the Moon's South Pole?",
            hi: "चंद्रमा के दक्षिणी ध्रुव पर चंद्रयान-3 के विक्रम लैंडर के लैंडिंग स्थल को क्या नाम दिया गया?"
          },
          options: {
            en: ["Shiv Shakti Point", "Tiranga Point", "Atal Point", "Kalam Point"],
            hi: ["शिव शक्ति पॉइंट", "तिरंगा पॉइंट", "अटल पॉइंट", "कलाम पॉइंट"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Prime Minister Narendra Modi announced that the Chandrayaan-3 landing site is named 'Shiv Shakti Point', and August 23 is National Space Day.",
            hi: "चंद्रयान-3 के टचडाउन पॉइंट को 'शिव शक्ति पॉइंट' नाम दिया गया और 23 अगस्त को राष्ट्रीय अंतरिक्ष दिवस घोषित किया गया।"
          }
        },
        {
          question_id: 48,
          topic: "Current Affairs & Summits (समसामयिकी एवं शिखर सम्मेलन)",
          question_text: {
            en: "Which multilateral bloc was inducted as a permanent member into the G20 under India's presidency in 2023?",
            hi: "भारत की अध्यक्षता में 2023 में किस बहुपक्षीय गुट को G20 का स्थायी सदस्य बनाया गया?"
          },
          options: {
            en: ["African Union (AU)", "ASEAN", "European Council", "SAARC"],
            hi: ["अफ्रीकी संघ (African Union)", "आसियान", "यूरोपीय परिषद", "सार्क"]
          },
          correct_option_index: 0,
          explanation: {
            en: "The 55-nation African Union was formally inducted as a permanent member of the G20 at the New Delhi Summit.",
            hi: "नई दिल्ली शिखर सम्मेलन में 55 सदस्यीय अफ्रीकी संघ को G20 का स्थायी सदस्य बनाया गया।"
          }
        },
        {
          question_id: 49,
          topic: "Art & Culture (कला एवं संस्कृति)",
          question_text: {
            en: "Kathakali is a major classical dance drama originating from which Indian state?",
            hi: "कथकली प्रमुख शास्त्रीय नृत्य-नाट्य शैली किस भारतीय राज्य से संबंधित है?"
          },
          options: {
            en: ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Karnataka"],
            hi: ["केरल", "तमिलनाडु", "आंध्र प्रदेश", "कर्नाटक"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Kathakali originated in Kerala, renowned for its elaborate makeup, colorful costumes, and facial expressions.",
            hi: "कथकली केरल की प्रसिद्ध शास्त्रीय नृत्य शैली है, जिसमें विस्तृत वेशभूषा और मुखौटे का प्रयोग होता है।"
          }
        },
        {
          question_id: 50,
          topic: "Sports & Honors (खेल एवं पुरस्कार)",
          question_text: {
            en: "Major Dhyan Chand Khel Ratna Award is the highest sporting honour of India. In which year was Dhyan Chand born?",
            hi: "मेजर ध्यानचंद खेल रत्न पुरस्कार भारत का सर्वोच्च खेल सम्मान है। ध्यानचंद का जन्म किस वर्ष हुआ था?"
          },
          options: {
            en: ["1905", "1902", "1911", "1915"],
            hi: ["1905", "1902", "1911", "1915"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Major Dhyan Chand was born on 29 August 1905 in Prayagraj; his birthday is celebrated as National Sports Day.",
            hi: "हॉकी के जादूगर मेजर ध्यानचंद का जन्म 29 अगस्त 1905 को हुआ था, जिसे राष्ट्रीय खेल दिवस के रूप में मनाया जाता है।"
          }
        }
      ]
    },
    {
      section_id: "quantitative_aptitude",
      section_name: {
        en: "Quantitative Aptitude",
        hi: "मात्रात्मक अभिरुचि (Quantitative Aptitude)"
      },
      time_limit_minutes: 15,
      questions: [
        {
          question_id: 51,
          topic: "Profit & Loss (लाभ और हानि)",
          question_text: {
            en: "An article is sold at a discount of 20% on the marked price and still earns a profit of 20%. If the marked price is ₹750, what was the cost price of the article?",
            hi: "एक वस्तु को अंकित मूल्य पर 20% की छूट देकर बेचा जाता है और फिर भी 20% का लाभ प्राप्त होता है। यदि अंकित मूल्य ₹750 है, तो उस वस्तु का क्रय मूल्य क्या था?"
          },
          options: {
            en: ["₹500", "₹520", "₹480", "₹550"],
            hi: ["₹500", "₹520", "₹480", "₹550"]
          },
          correct_option_index: 0,
          explanation: {
            en: "SP = 750 × 0.80 = ₹600. SP = CP × 1.20 => CP = 600 / 1.20 = ₹500.",
            hi: "विक्रय मूल्य (SP) = 750 × 0.80 = ₹600। क्रय मूल्य (CP) = 600 / 1.20 = ₹500।"
          }
        },
        {
          question_id: 52,
          topic: "Time & Work (समय और कार्य)",
          question_text: {
            en: "A can complete a work in 12 days, and B can complete it in 18 days. If they work together for 4 days, what fraction of the work remains unfinished?",
            hi: "A किसी काम को 12 दिनों में और B 18 दिनों में पूरा कर सकता है। यदि वे दोनों एक साथ 4 दिनों तक काम करते हैं, तो काम का कितना भाग शेष रह जाएगा?"
          },
          options: {
            en: ["4/9", "5/9", "1/3", "2/9"],
            hi: ["4/9", "5/9", "1/3", "2/9"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Total work = 36. Efficiency = 3 + 2 = 5 units/day. Work in 4 days = 20 units. Remaining = 16/36 = 4/9.",
            hi: "कुल कार्य = 36 इकाई। दोनों की क्षमता = 3 + 2 = 5 इकाई/दिन। 4 दिनों में कार्य = 20 इकाई। शेष = 16/36 = 4/9।"
          }
        },
        {
          question_id: 53,
          topic: "Algebra (बीजगणित)",
          question_text: {
            en: "If x + 1/x = 5, find the numerical value of x³ + 1/x³.",
            hi: "यदि x + 1/x = 5 है, तो x³ + 1/x³ का मान ज्ञात कीजिए।"
          },
          options: {
            en: ["110", "125", "115", "140"],
            hi: ["110", "125", "115", "140"]
          },
          correct_option_index: 0,
          explanation: {
            en: "x³ + 1/x³ = k³ - 3k = 5³ - 3(5) = 125 - 15 = 110.",
            hi: "सर्वसमिका: x³ + 1/x³ = k³ - 3k = 5³ - 15 = 110।"
          }
        },
        {
          question_id: 54,
          topic: "Geometry - Circles (ज्यामिति - वृत्त)",
          question_text: {
            en: "Two parallel chords of lengths 16 cm and 12 cm are on the same side of the center of a circle of radius 10 cm. Find the distance between them.",
            hi: "10 सेमी त्रिज्या वाले वृत्त के केंद्र के एक ही तरफ 16 सेमी और 12 सेमी लंबाई की दो समानांतर जीवाएं खींची गई हैं। उनके बीच की दूरी ज्ञात करें।"
          },
          options: {
            en: ["2 cm", "4 cm", "1 cm", "3 cm"],
            hi: ["2 सेमी", "4 सेमी", "1 सेमी", "3 सेमी"]
          },
          correct_option_index: 0,
          explanation: {
            en: "d1 = √(10² - 8²) = 6 cm. d2 = √(10² - 6²) = 8 cm. Distance = 8 - 6 = 2 cm.",
            hi: "d1 = √(100 - 64) = 6 सेमी। d2 = √(100 - 36) = 8 सेमी। अंतर = 8 - 6 = 2 सेमी।"
          }
        },
        {
          question_id: 55,
          topic: "Trigonometry (त्रिकोणमिति)",
          question_text: {
            en: "If tan θ = 4/3, what is the value of (3 sin θ + 2 cos θ) / (3 sin θ - 2 cos θ)?",
            hi: "यदि tan θ = 4/3 है, तो (3 sin θ + 2 cos θ) / (3 sin θ - 2 cos θ) का मान क्या है?"
          },
          options: {
            en: ["3", "2.5", "4", "5"],
            hi: ["3", "2.5", "4", "5"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Dividing by cos θ: (3 tan θ + 2) / (3 tan θ - 2) = (3(4/3) + 2) / (3(4/3) - 2) = 6 / 2 = 3.",
            hi: "cos θ से भाग देने पर: (3 tan θ + 2) / (3 tan θ - 2) = (4 + 2) / (4 - 2) = 6 / 2 = 3।"
          }
        },
        {
          question_id: 56,
          topic: "Simple & Compound Interest (ब्याज)",
          question_text: {
            en: "The difference between CI and SI on a sum for 2 years at 10% per annum is ₹85. Find the sum.",
            hi: "किसी धनराशि पर 10% वार्षिक दर से 2 वर्ष के चक्रवृद्धि और साधारण ब्याज का अंतर ₹85 है। वह धनराशि ज्ञात करें।"
          },
          options: {
            en: ["₹8,500", "₹7,500", "₹9,000", "₹8,000"],
            hi: ["₹8,500", "₹7,500", "₹9,000", "₹8,000"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Difference = P(R/100)² => 85 = P(1/100) => P = ₹8,500.",
            hi: "अंतर = P(R/100)² => 85 = P(10/100)² => P = ₹8,500।"
          }
        },
        {
          question_id: 57,
          topic: "Speed, Time & Distance (चाल, समय और दूरी)",
          question_text: {
            en: "A train 240 m long crosses a telegraph post in 16 seconds. What is the speed of the train in km/h?",
            hi: "240 मीटर लंबी एक ट्रेन 16 सेकंड में एक खंभे को पार करती है। ट्रेन की चाल किमी/घंटा में क्या है?"
          },
          options: {
            en: ["54 km/h", "48 km/h", "60 km/h", "72 km/h"],
            hi: ["54 किमी/घंटा", "48 किमी/घंटा", "60 किमी/घंटा", "72 किमी/घंटा"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Speed = 240 / 16 = 15 m/s = 15 × (18/5) = 54 km/h.",
            hi: "चाल = 240 / 16 = 15 मीटर/सेकंड = 15 × (18/5) = 54 किमी/घंटा।"
          }
        },
        {
          question_id: 58,
          topic: "Successive Discount (क्रमिक छूट)",
          question_text: {
            en: "Find the single discount equivalent to two successive discounts of 20% and 15%.",
            hi: "20% और 15% की दो क्रमिक छूटों के समतुल्य एकल छूट ज्ञात कीजिए।"
          },
          options: {
            en: ["32%", "35%", "30%", "28%"],
            hi: ["32%", "35%", "30%", "28%"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Equivalent Discount = 20 + 15 - (20 × 15)/100 = 35 - 3 = 32%.",
            hi: "समतुल्य छूट = 20 + 15 - (20 × 15)/100 = 35 - 3 = 32%।"
          }
        },
        {
          question_id: 59,
          topic: "Trigonometric Values (त्रिकोणमितीय मान)",
          question_text: {
            en: "Evaluate: sin² 30° + cos² 60° + tan² 45°.",
            hi: "मान ज्ञात कीजिए: sin² 30° + cos² 60° + tan² 45°."
          },
          options: {
            en: ["1.5 (or 3/2)", "1", "2", "2.5"],
            hi: ["1.5 (या 3/2)", "1", "2", "2.5"]
          },
          correct_option_index: 0,
          explanation: {
            en: "(1/2)² + (1/2)² + 1² = 1/4 + 1/4 + 1 = 1.5.",
            hi: "(1/2)² + (1/2)² + 1² = 1/4 + 1/4 + 1 = 1.5।"
          }
        },
        {
          question_id: 60,
          topic: "Mensuration 3D (क्षेत्रमिति 3D)",
          question_text: {
            en: "If the radius of a cylinder is 7 cm and height is 10 cm, find its Total Surface Area (π = 22/7).",
            hi: "यदि एक बेलन की त्रिज्या 7 सेमी और ऊंचाई 10 सेमी है, तो इसका कुल पृष्ठीय क्षेत्रफल ज्ञात करें (π = 22/7)।"
          },
          options: {
            en: ["748 cm²", "616 cm²", "880 cm²", "720 cm²"],
            hi: ["748 वर्ग सेमी", "616 वर्ग सेमी", "880 वर्ग सेमी", "720 वर्ग सेमी"]
          },
          correct_option_index: 0,
          explanation: {
            en: "TSA = 2πr(r + h) = 2 × (22/7) × 7 × (7 + 10) = 44 × 17 = 748 cm².",
            hi: "कुल पृष्ठीय क्षेत्रफल = 2πr(r + h) = 44 × 17 = 748 वर्ग सेमी।"
          }
        },
        {
          question_id: 61,
          topic: "Pipes & Cisterns (पाइप और टंकी)",
          question_text: {
            en: "Pipe A can fill a tank in 10 hours, and Pipe B can fill it in 15 hours. How long will both take together?",
            hi: "पाइप A एक टंकी को 10 घंटे में और पाइप B 15 घंटे में भर सकता है। दोनों मिलकर इसे कितने समय में भरेंगे?"
          },
          options: {
            en: ["6 hours", "8 hours", "5 hours", "7 hours"],
            hi: ["6 घंटे", "8 घंटे", "5 घंटे", "7 घंटे"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Combined time = (10 × 15) / (10 + 15) = 150 / 25 = 6 hours.",
            hi: "संयुक्त समय = (10 × 15) / (10 + 15) = 150 / 25 = 6 घंटे।"
          }
        },
        {
          question_id: 62,
          topic: "Ratio & Proportion (अनुपात और समानुपात)",
          question_text: {
            en: "If A : B = 2 : 3 and B : C = 4 : 5, find the ratio A : B : C.",
            hi: "यदि A : B = 2 : 3 और B : C = 4 : 5 है, तो A : B : C का मान ज्ञात कीजिए।"
          },
          options: {
            en: ["8 : 12 : 15", "6 : 12 : 15", "8 : 10 : 15", "2 : 4 : 5"],
            hi: ["8 : 12 : 15", "6 : 12 : 15", "8 : 10 : 15", "2 : 4 : 5"]
          },
          correct_option_index: 0,
          explanation: {
            en: "A : B = 8 : 12, B : C = 12 : 15 => A : B : C = 8 : 12 : 15.",
            hi: "A:B = 8:12, B:C = 12:15 => A : B : C = 8 : 12 : 15।"
          }
        },
        {
          question_id: 63,
          topic: "Boats & Streams (नाव और धारा)",
          question_text: {
            en: "A boat's speed in still water is 12 km/h and stream speed is 3 km/h. How long will it take to travel 45 km downstream?",
            hi: "शांत जल में एक नाव की चाल 12 किमी/घंटा और धारा की चाल 3 किमी/घंटा है। धारा के अनुकूल 45 किमी जाने में कितना समय लगेगा?"
          },
          options: {
            en: ["3 hours", "4 hours", "2.5 hours", "5 hours"],
            hi: ["3 घंटे", "4 घंटे", "2.5 घंटे", "5 घंटे"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Downstream speed = 12 + 3 = 15 km/h. Time = 45 / 15 = 3 hours.",
            hi: "अनुकूल चाल = 12 + 3 = 15 किमी/घंटा। समय = 45 / 15 = 3 घंटे।"
          }
        },
        {
          question_id: 64,
          topic: "Average (औसत)",
          question_text: {
            en: "The average age of 30 students in a class is 15 years. If the teacher's age is included, the average increases by 1 year. Find the teacher's age.",
            hi: "एक कक्षा के 30 विद्यार्थियों की औसत आयु 15 वर्ष है। यदि शिक्षक की आयु शामिल कर ली जाए तो औसत 1 वर्ष बढ़ जाता है। शिक्षक की आयु ज्ञात करें।"
          },
          options: {
            en: ["46 years", "45 years", "48 years", "50 years"],
            hi: ["46 वर्ष", "45 वर्ष", "48 वर्ष", "50 वर्ष"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Teacher's age = New average + (Old students × Increase) = 16 + (30 × 1) = 46 years.",
            hi: "शिक्षक की आयु = 16 + (30 × 1) = 46 वर्ष।"
          }
        },
        {
          question_id: 65,
          topic: "Percentage Change (प्रतिशत परिवर्तन)",
          question_text: {
            en: "If the price of sugar increases by 25%, by what percent must consumption be reduced to keep expenditure constant?",
            hi: "यदि चीनी के मूल्य में 25% की वृद्धि होती है, तो खर्च समान रखने के लिए खपत में कितने प्रतिशत की कमी करनी होगी?"
          },
          options: {
            en: ["20%", "25%", "16.66%", "15%"],
            hi: ["20%", "25%", "16.66%", "15%"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Reduction = [r / (100 + r)] × 100 = [25 / 125] × 100 = 20%.",
            hi: "कमी = [25 / (100 + 25)] × 100 = 20%।"
          }
        },
        {
          question_id: 66,
          topic: "Algebra Identities (बीजगणितीय सर्वसमिकाएं)",
          question_text: {
            en: "If a + b + c = 0, what is the value of (a³ + b³ + c³) / (3abc)?",
            hi: "यदि a + b + c = 0 है, तो (a³ + b³ + c³) / (3abc) का मान क्या होगा?"
          },
          options: {
            en: ["1", "0", "3", "-1"],
            hi: ["1", "0", "3", "-1"]
          },
          correct_option_index: 0,
          explanation: {
            en: "When a + b + c = 0, a³ + b³ + c³ = 3abc. Therefore the ratio is 1.",
            hi: "जब a + b + c = 0 हो, तो a³ + b³ + c³ = 3abc होता है। अतः अनुपात 1 है।"
          }
        },
        {
          question_id: 67,
          topic: "Geometry - Tangents (ज्यामिति - स्पर्श रेखा)",
          question_text: {
            en: "From an external point P, a tangent PT of length 12 cm is drawn to a circle of radius 5 cm. Find the distance OP from the center.",
            hi: "एक बाह्य बिंदु P से 5 सेमी त्रिज्या वाले वृत्त पर 12 सेमी लंबी स्पर्श रेखा PT खींची जाती है। केंद्र O से बिंदु P की दूरी OP ज्ञात करें।"
          },
          options: {
            en: ["13 cm", "17 cm", "15 cm", "14 cm"],
            hi: ["13 सेमी", "17 सेमी", "15 सेमी", "14 सेमी"]
          },
          correct_option_index: 0,
          explanation: {
            en: "OP² = OT² + PT² = 5² + 12² = 25 + 144 = 169 => OP = 13 cm.",
            hi: "OP = √(5² + 12²) = √169 = 13 सेमी।"
          }
        },
        {
          question_id: 68,
          topic: "Heights & Distances (ऊंचाई और दूरी)",
          question_text: {
            en: "From a point on the ground 60 m away from the foot of a vertical tower, the angle of elevation of the top is 30°. Find the height of the tower.",
            hi: "एक ऊर्ध्वाधर मीनार के पाद से 60 मीटर दूर जमीन पर एक बिंदु से मीनार के शीर्ष का उन्नयन कोण 30° है। मीनार की ऊंचाई ज्ञात करें।"
          },
          options: {
            en: ["20√3 m", "30√3 m", "20 m", "60√3 m"],
            hi: ["20√3 मीटर", "30√3 मीटर", "20 मीटर", "60√3 मीटर"]
          },
          correct_option_index: 0,
          explanation: {
            en: "tan 30° = h / 60 => 1/√3 = h / 60 => h = 60 / √3 = 20√3 m.",
            hi: "tan 30° = h / 60 => h = 60 / √3 = 20√3 मीटर।"
          }
        },
        {
          question_id: 69,
          topic: "Mensuration 2D (क्षेत्रमिति 2D)",
          question_text: {
            en: "What is the area of an equilateral triangle with side length 12 cm?",
            hi: "12 सेमी भुजा वाले एक समबाहु त्रिभुज का क्षेत्रफल क्या है?"
          },
          options: {
            en: ["36√3 cm²", "72√3 cm²", "144√3 cm²", "24√3 cm²"],
            hi: ["36√3 वर्ग सेमी", "72√3 वर्ग सेमी", "144√3 वर्ग सेमी", "24√3 वर्ग सेमी"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Area = (√3 / 4) × a² = (√3 / 4) × 144 = 36√3 cm².",
            hi: "क्षेत्रफल = (√3 / 4) × a² = (√3 / 4) × 144 = 36√3 वर्ग सेमी।"
          }
        },
        {
          question_id: 70,
          topic: "Mensuration 3D - Sphere (गोला)",
          question_text: {
            en: "Find the volume of a sphere of radius 21 cm (take π = 22/7).",
            hi: "21 सेमी त्रिज्या वाले गोले का आयतन ज्ञात कीजिए (π = 22/7 लें)।"
          },
          options: {
            en: ["38,808 cm³", "36,400 cm³", "42,200 cm³", "32,808 cm³"],
            hi: ["38,808 घन सेमी", "36,400 घन सेमी", "42,200 घन सेमी", "32,808 घन सेमी"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Volume = (4/3)πr³ = (4/3) × (22/7) × 21 × 21 × 21 = 4 × 22 × 21 × 21 = 38,808 cm³.",
            hi: "आयतन = (4/3) × (22/7) × 21³ = 38,808 घन सेमी।"
          }
        },
        {
          question_id: 71,
          topic: "Mixtures & Alligation (मिश्रण और सम्मिश्रण)",
          question_text: {
            en: "In 60 liters of a mixture, the ratio of milk to water is 2 : 1. How much water should be added to make the ratio 1 : 2?",
            hi: "60 लीटर के मिश्रण में दूध और पानी का अनुपात 2 : 1 है। अनुपात को 1 : 2 बनाने के लिए इसमें कितना पानी मिलाना चाहिए?"
          },
          options: {
            en: ["60 liters", "40 liters", "50 liters", "30 liters"],
            hi: ["60 लीटर", "40 लीटर", "50 लीटर", "30 लीटर"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Milk = 40 L, Water = 20 L. For 1:2 ratio with 40 L milk, water needed = 80 L. Water to add = 80 - 20 = 60 L.",
            hi: "दूध = 40 ली, पानी = 20 ली। 1:2 अनुपात के लिए पानी चाहिए = 80 ली। मिलाया गया पानी = 80 - 20 = 60 लीटर।"
          }
        },
        {
          question_id: 72,
          topic: "Number System - Remainder (शेषफल प्रमेय)",
          question_text: {
            en: "When a number is divided by 56, the remainder is 29. What will be the remainder when the same number is divided by 8?",
            hi: "जब किसी संख्या को 56 से विभाजित किया जाता है, तो शेषफल 29 प्राप्त होता है। उसी संख्या को 8 से विभाजित करने पर शेषफल क्या होगा?"
          },
          options: {
            en: ["5", "3", "4", "2"],
            hi: ["5", "3", "4", "2"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Since 56 is divisible by 8, divide remainder 29 by 8: 29 = 8 × 3 + 5. Remainder is 5.",
            hi: "चूंकि 56, 8 से पूर्णतः विभाज्य है, अतः 29 को 8 से भाग दें: 29 = 8 × 3 + 5। शेषफल = 5।"
          }
        },
        {
          question_id: 73,
          topic: "LCM & HCF (ल.स. और म.स.)",
          question_text: {
            en: "The HCF and LCM of two numbers are 12 and 240 respectively. If one number is 48, find the other number.",
            hi: "दो संख्याओं का HCF और LCM क्रमशः 12 और 240 है। यदि एक संख्या 48 है, तो दूसरी संख्या ज्ञात कीजिए।"
          },
          options: {
            en: ["60", "72", "48", "80"],
            hi: ["60", "72", "48", "80"]
          },
          correct_option_index: 0,
          explanation: {
            en: "First × Second = HCF × LCM => 48 × Second = 12 × 240 => Second = (12 × 240) / 48 = 60.",
            hi: "पहली × दूसरी = HCF × LCM => दूसरी = (12 × 240) / 48 = 60।"
          }
        },
        {
          question_id: 74,
          topic: "Compound Interest - Growth (चक्रवृद्धि ब्याज)",
          question_text: {
            en: "A sum of money doubles itself in 4 years at compound interest. In how many years will it become 8 times of itself?",
            hi: "कोई धनराशि चक्रवृद्धि ब्याज पर 4 वर्षों में दोगुनी हो जाती है। कितने वर्षों में यह 8 गुनी हो जाएगी?"
          },
          options: {
            en: ["12 years", "16 years", "8 years", "10 years"],
            hi: ["12 वर्ष", "16 वर्ष", "8 वर्ष", "10 वर्ष"]
          },
          correct_option_index: 0,
          explanation: {
            en: "8 = 2³. Years needed = 3 × 4 = 12 years.",
            hi: "8 = 2³। समय = 3 × 4 = 12 वर्ष।"
          }
        },
        {
          question_id: 75,
          topic: "Coordinate Geometry (निर्देशांक ज्यामिति)",
          question_text: {
            en: "Find the distance between the two points A(3, 4) and B(7, 1).",
            hi: "दो बिंदुओं A(3, 4) और B(7, 1) के बीच की दूरी ज्ञात कीजिए।"
          },
          options: {
            en: ["5 units", "6 units", "4 units", "7 units"],
            hi: ["5 इकाई", "6 इकाई", "4 इकाई", "7 इकाई"]
          },
          correct_option_index: 0,
          explanation: {
            en: "Distance = √[(7 - 3)² + (1 - 4)²] = √[4² + (-3)²] = √[16 + 9] = √25 = 5 units.",
            hi: "दूरी = √[(7 - 3)² + (1 - 4)²] = √[16 + 9] = 5 इकाई।"
          }
        }
      ]
    },
    {
      section_id: "english_comprehension",
      section_name: {
        en: "English Comprehension & Grammar",
        hi: "अंग्रेजी समझ और व्याकरण (English Comprehension & Grammar)"
      },
      time_limit_minutes: 15,
      questions: [
        {
          question_id: 76,
          topic: "Spotting the Error (त्रुटि पहचान)",
          question_text: {
            en: "Identify the segment that contains a grammatical error:\n'Neither the supervisor nor the workers (A) / was present in the factory (B) / when the fire broke out (C) / No error (D)'",
            hi: "दिए गए वाक्य के उस भाग की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है:\n'Neither the supervisor nor the workers (A) / was present in the factory (B) / when the fire broke out (C) / No error (D)'"
          },
          options: {
            en: ["(A)", "(B)", "(C)", "(D) No error"],
            hi: ["(A)", "(B)", "(C)", "(D) कोई त्रुटि नहीं"]
          },
          correct_option_index: 1,
          explanation: {
            en: "In 'neither... nor', the verb agrees with the closer subject. 'workers' is plural, so replace 'was present' with 'were present'. Error is in (B).",
            "hi": "'neither... nor' में क्रिया निकटतम कर्ता के अनुसार आती है। 'workers' बहुवचन है, अतः 'were present' आएगा। त्रुटि भाग (B) में है।"
          }
        },
        {
          question_id: 77,
          topic: "Spotting the Error (त्रुटि पहचान)",
          question_text: {
            en: "Find the grammatical error:\n'Hardly had he stepped out of the office (A) / than it started raining (B) / heavily (C) / No error (D)'",
            hi: "व्याकरण संबंधी त्रुटि ज्ञात करें:\n'Hardly had he stepped out of the office (A) / than it started raining (B) / heavily (C) / No error (D)'"
          },
          options: {
            en: ["(A)", "(B)", "(C)", "(D) No error"],
            hi: ["(A)", "(B)", "(C)", "(D) कोई त्रुटि नहीं"]
          },
          correct_option_index: 1,
          explanation: {
            en: "Correlative conjunction pair for 'Hardly/Scarcely' is 'when', not 'than'. Replace 'than' with 'when' in part (B).",
            hi: "'Hardly/Scarcely' के साथ 'when' का प्रयोग होता है, 'than' का नहीं। भाग (B) में त्रुटि है।"
          }
        },
        {
          question_id: 78,
          topic: "Spotting the Error (त्रुटि पहचान)",
          question_text: {
            en: "Identify the error:\n'One of the candidates (A) / have forgotten to submit (B) / his admit card (C) / No error (D)'",
            hi: "त्रुटि पहचानें:\n'One of the candidates (A) / have forgotten to submit (B) / his admit card (C) / No error (D)'"
          },
          options: {
            en: ["(A)", "(B)", "(C)", "(D) No error"],
            hi: ["(A)", "(B)", "(C)", "(D) कोई त्रुटि नहीं"]
          },
          correct_option_index: 1,
          explanation: {
            en: "'One of + Plural Noun' takes a singular verb. 'have forgotten' should be replaced with 'has forgotten'. Error in (B).",
            hi: "'One of' के साथ क्रिया एकवचन आती है। 'have forgotten' की जगह 'has forgotten' होगा।"
          }
        },
        {
          question_id: 79,
          topic: "Synonyms (समानार्थी शब्द)",
          question_text: {
            en: "Select the most appropriate SYNONYM of the given word:\nEPHEMERAL",
            hi: "दिए गए शब्द का सबसे उपयुक्त समानार्थी चुनें:\nEPHEMERAL"
          },
          options: {
            en: ["Transient", "Permanent", "Eternal", "Perpetual"],
            hi: ["Transient (अल्पकालिक)", "Permanent (स्थायी)", "Eternal (शाश्वत)", "Perpetual (लगातार)"]
          },
          correct_option_index: 0,
          explanation: {
            en: "'Ephemeral' means lasting a very short time; synonym is 'Transient'.",
            hi: "'Ephemeral' का अर्थ क्षणिक या अल्पकालिक होता है, जिसका पर्यायवाची 'Transient' है।"
          }
        },
        {
          question_id: 80,
          topic: "Synonyms (समानार्थी शब्द)",
          question_text: {
            en: "Select the most appropriate SYNONYM of:\nDILIGENT",
            hi: "दिए गए शब्द का सबसे उपयुक्त पर्यायवाची चुनें:\nDILIGENT"
          },
          options: {
            en: ["Industrious", "Lethargic", "Careless", "Hesitant"],
            hi: ["Industrious (मेहनती)", "Lethargic (सुस्त)", "Careless (लापरवाह)", "Hesitant (संकोची)"]
          },
          correct_option_index: 0,
          explanation: {
            en: "'Diligent' means hardworking and conscientious; synonym is 'Industrious'.",
            hi: "'Diligent' का अर्थ परिश्रमी या कर्मठ होता है, जिसका समानार्थी 'Industrious' है।"
          }
        },
        {
          question_id: 81,
          topic: "Antonyms (विलोम शब्द)",
          question_text: {
            en: "Select the most appropriate ANTONYM of the given word:\nMETICULOUS",
            hi: "दिए गए शब्द का सबसे उपयुक्त विलोम शब्द चुनें:\nMETICULOUS"
          },
          options: {
            en: ["Careless", "Thorough", "Painstaking", "Accurate"],
            hi: ["Careless (लापरवाह)", "Thorough (गहन)", "Painstaking (कठिन परिश्रमी)", "Accurate (सटीक)"]
          },
          correct_option_index: 0,
          explanation: {
            en: "'Meticulous' means very careful and precise; its antonym is 'Careless'.",
            hi: "'Meticulous' का अर्थ अत्यंत सावधान व सूक्ष्म होता है; इसका विलोम 'Careless' है।"
          }
        },
        {
          question_id: 82,
          topic: "Antonyms (विलोम शब्द)",
          question_text: {
            en: "Select the most appropriate ANTONYM of:\nHOSTILE",
            hi: "दिए गए शब्द का सबसे उपयुक्त विलोम शब्द चुनें:\nHOSTILE"
          },
          options: {
            en: ["Friendly", "Aggressive", "Belligerent", "Unpleasant"],
            hi: ["Friendly (मैत्रीपूर्ण)", "Aggressive (आक्रामक)", "Belligerent (युद्धरत)", "Unpleasant (अप्रिय)"]
          },
          correct_option_index: 0,
          explanation: {
            en: "'Hostile' means antagonistic or unfriendly; opposite is 'Friendly'.",
            hi: "'Hostile' का अर्थ शत्रुतापूर्ण होता है; इसका विपरीत 'Friendly' (मैत्रीपूर्ण) है।"
          }
        },
        {
          question_id: 83,
          topic: "Idioms & Phrases (मुहावरे और लोकोक्तियाँ)",
          question_text: {
            en: "Select the meaning of the idiom:\n'To burn the midnight oil'",
            hi: "दिए गए मुहावरे का सबसे उपयुक्त अर्थ चुनें:\n'To burn the midnight oil'"
          },
          options: {
            en: [
              "To work or study late into the night",
              "To waste fuel carelessly",
              "To set fire to property",
              "To suffer from insomnia"
            ],
            hi: [
              "देर रात तक कड़ी मेहनत या पढ़ाई करना",
              "ईंधन बर्बाद करना",
              "आग लगाना",
              "अनिद्रा से पीड़ित होना"
            ]
          },
          correct_option_index: 0,
          explanation: {
            en: "Means to work hard or study late into the night.",
            hi: "देर रात तक कठिन परिश्रम या अध्ययन करना।"
          }
        },
        {
          question_id: 84,
          topic: "Idioms & Phrases (मुहावरे और लोकोक्तियाँ)",
          question_text: {
            en: "Select the meaning of the idiom:\n'A blessing in disguise'",
            hi: "दिए गए मुहावरे का अर्थ चुनें:\n'A blessing in disguise'"
          },
          options: {
            en: [
              "An apparent misfortune that eventually results in good",
              "A gift from an enemy",
              "A curse hidden as an award",
              "A sudden disaster"
            ],
            hi: [
              "एक अप्रिय घटना जो बाद में लाभकारी सिद्ध हो",
              "शत्रु से मिला उपहार",
              "अभिशाप",
              "अचानक आई विपत्ति"
            ]
          },
          correct_option_index: 0,
          explanation: {
            en: "Something that seems bad at first but turns out to have good results.",
            hi: "छिपा हुआ वरदान या आपदा में अवसर।"
          }
        },
        {
          question_id: 85,
          topic: "Idioms & Phrases (मुहावरे और लोकोक्तियाँ)",
          question_text: {
            en: "What does the idiom 'Spill the beans' mean?",
            hi: "मुहावरे 'Spill the beans' का क्या अर्थ है?"
          },
          options: {
            en: [
              "To disclose a secret prematurely",
              "To drop food accidentally",
              "To cook poorly",
              "To create trouble"
            ],
            hi: [
              "समय से पहले गुप्त बात उजागर कर देना",
              "भोजन गिरा देना",
              "खराब खाना पकाना",
              "मुसीबत खड़ी करना"
            ]
          },
          correct_option_index: 0,
          explanation: {
            en: "'Spill the beans' means revealing confidential information.",
            hi: "किसी रहस्य या गुप्त बात को उजागर करना।"
          }
        },
        {
          question_id: 86,
          topic: "One Word Substitution (अनेक शब्दों के लिए एक शब्द)",
          question_text: {
            en: "Select the one-word substitute:\n'A person who loves, supports, and seeks to promote human welfare, especially by donating money'",
            hi: "दिए गए वाक्यांश के लिए एक शब्द चुनें:\n'वह व्यक्ति जो जनकल्याण हेतु धन दान करता है'"
          },
          options: {
            en: ["Philanthropist", "Misanthrope", "Somnambulist", "Egoist"],
            hi: ["Philanthropist (परोपकारी)", "Misanthrope (मानवद्वेषी)", "Somnambulist (नींद में चलने वाला)", "Egoist (अहंकारी)"]
          },
          correct_option_index: 0,
          explanation: {
            en: "'Philanthropist' promotes the welfare of others through generous giving.",
            hi: "'Philanthropist' का अर्थ परोपकारी या जनहितैषी होता है।"
          }
        },
        {
          question_id: 87,
          topic: "One Word Substitution (अनेक शब्दों के लिए एक शब्द)",
          question_text: {
            en: "Select the one-word substitute:\n'One who knows everything'",
            hi: "वाक्यांश के लिए एक शब्द चुनें:\n'जो सब कुछ जानता हो'"
          },
          options: {
            en: ["Omniscient", "Omnipotent", "Omnipresent", "Invincible"],
            hi: ["Omniscient (सर्वज्ञ)", "Omnipotent (सर्वशक्तिमान)", "Omnipresent (सर्वव्यापी)", "Invincible (अजेय)"]
          },
          correct_option_index: 0,
          explanation: {
            en: "'Omniscient' knows everything. 'Omnipotent' is all-powerful; 'Omnipresent' is present everywhere.",
            hi: "'Omniscient' का अर्थ सर्वज्ञ होता है जो सब कुछ जानता है।"
          }
        },
        {
          question_id: 88,
          topic: "One Word Substitution (अनेक शब्दों के लिए एक शब्द)",
          question_text: {
            en: "Select the one-word substitute:\n'Something that cannot be corrected or reformed'",
            hi: "वाक्यांश के लिए एक शब्द चुनें:\n'जिसमें सुधार न किया जा सके'"
          },
          options: {
            en: ["Incorrigible", "Ineligible", "Inaudible", "Inevitable"],
            hi: ["Incorrigible (असुधार्य)", "Ineligible (अयोग्य)", "Inaudible (अश्रव्य)", "Inevitable (अपरिहार्य)"]
          },
          correct_option_index: 0,
          explanation: {
            en: "'Incorrigible' describes habits or people incapable of being reformed.",
            hi: "'Incorrigible' का अर्थ असुधार्य होता है जिसे सुधारा न जा सके।"
          }
        },
        {
          question_id: 89,
          topic: "Sentence Improvement (वाक्य सुधार)",
          question_text: {
            en: "Select the correct option to substitute the bracketed part:\nHe could not cope [up with] the heavy workload and resigned.",
            hi: "कोष्ठक वाले भाग को सुधारने के लिए सही विकल्प चुनें:\nHe could not cope [up with] the heavy workload and resigned."
          },
          options: {
            en: ["cope with", "cope down with", "cope through with", "No substitution required"],
            hi: ["cope with", "cope down with", "cope through with", "किसी सुधार की आवश्यकता नहीं"]
          },
          correct_option_index: 0,
          explanation: {
            en: "The correct idiom is 'cope with' (not 'cope up with').",
            hi: "सही मुहावरा 'cope with' है, 'cope up with' गलत प्रयोग है।"
          }
        },
        {
          question_id: 90,
          topic: "Sentence Improvement (वाक्य सुधार)",
          question_text: {
            en: "Select the correct option:\nIf I [was] the Prime Minister, I would increase the education budget.",
            hi: "सही विकल्प चुनें:\nIf I [was] the Prime Minister, I would increase the education budget."
          },
          options: {
            en: ["were", "am", "had been", "No substitution required"],
            hi: ["were", "am", "had been", "किसी सुधार की आवश्यकता नहीं"]
          },
          correct_option_index: 0,
          explanation: {
            en: "In hypothetical conditional sentences (subjunctive mood), 'were' is used with all subjects.",
            hi: "काल्पनिक स्थिति (Subjunctive Mood) में 'I' के साथ भी 'were' का प्रयोग होता है।"
          }
        },
        {
          question_id: 91,
          topic: "Active & Passive Voice (वाच्य परिवर्तन)",
          question_text: {
            en: "Select the correct passive form:\n'The government is constructing a new highway.'",
            hi: "सही कर्मवाच्य (Passive Voice) चुनें:\n'The government is constructing a new highway.'"
          },
          options: {
            en: [
              "A new highway is being constructed by the government.",
              "A new highway has been constructed by the government.",
              "A new highway was constructed by the government.",
              "A new highway is constructed by the government."
            ],
            hi: [
              "A new highway is being constructed by the government.",
              "A new highway has been constructed by the government.",
              "A new highway was constructed by the government.",
              "A new highway is constructed by the government."
            ]
          },
          correct_option_index: 0,
          explanation: {
            en: "Present continuous passive: is/am/are + being + V3. 'A new highway is being constructed by the government.'",
            hi: "Present Continuous Passive: is + being + V3।"
          }
        },
        {
          question_id: 92,
          topic: "Active & Passive Voice (वाच्य परिवर्तन)",
          question_text: {
            en: "Select the passive voice:\n'She has written an inspiring article.'",
            hi: "सही Passive Voice चुनें:\n'She has written an inspiring article.'"
          },
          options: {
            en: [
              "An inspiring article has been written by her.",
              "An inspiring article was written by her.",
              "An inspiring article is written by her.",
              "An inspiring article had been written by her."
            ],
            hi: [
              "An inspiring article has been written by her.",
              "An inspiring article was written by her.",
              "An inspiring article is written by her.",
              "An inspiring article had been written by her."
            ]
          },
          correct_option_index: 0,
          explanation: {
            en: "Present perfect passive: has/have + been + V3. 'An inspiring article has been written by her.'",
            hi: "Present Perfect Passive: has been + V3।"
          }
        },
        {
          question_id: 93,
          topic: "Direct & Indirect Speech (कथन परिवर्तन)",
          question_text: {
            en: "Select the indirect speech:\nShe said to me, 'I will call you tomorrow.'",
            hi: "सही Indirect Speech चुनें:\nShe said to me, 'I will call you tomorrow.'"
          },
          options: {
            en: [
              "She told me that she would call me the next day.",
              "She said to me that she will call me tomorrow.",
              "She told me that she will call me the next day.",
              "She said to me that she would call you tomorrow."
            ],
            hi: [
              "She told me that she would call me the next day.",
              "She said to me that she will call me tomorrow.",
              "She told me that she will call me the next day.",
              "She said to me that she would call you tomorrow."
            ]
          },
          correct_option_index: 0,
          explanation: {
            en: "'said to' -> 'told', 'will' -> 'would', 'tomorrow' -> 'the next day'.",
            hi: "'said to' -> 'told', 'will' -> 'would', 'tomorrow' -> 'the next day'।"
          }
        },
        {
          question_id: 94,
          topic: "Spelling Correction (वर्तनी शुद्धि)",
          question_text: {
            en: "Select the correctly spelled word:",
            hi: "सही वर्तनी वाले शब्द का चयन करें:"
          },
          options: {
            en: ["Accommodation", "Accomodation", "Acommodation", "Acomodation"],
            hi: ["Accommodation", "Accomodation", "Acommodation", "Acomodation"]
          },
          correct_option_index: 0,
          explanation: {
            en: "'Accommodation' has double 'c' and double 'm'.",
            hi: "'Accommodation' में दो 'c' और दो 'm' होते हैं।"
          }
        },
        {
          question_id: 95,
          topic: "Spelling Correction (वर्तनी शुद्धि)",
          question_text: {
            en: "Select the correctly spelled word:",
            hi: "सही वर्तनी वाले शब्द का चयन करें:"
          },
          options: {
            en: ["Millennium", "Millenium", "Milennium", "Milenium"],
            hi: ["Millennium", "Millenium", "Milennium", "Milenium"]
          },
          correct_option_index: 0,
          explanation: {
            en: "'Millennium' has double 'l' and double 'n' (M-i-l-l-e-n-n-i-u-m).",
            hi: "'Millennium' में दो 'l' और दो 'n' आते हैं।"
          }
        },
        {
          question_id: 96,
          topic: "Fill in the Blanks - Preposition (रिक्त स्थान पूर्ति)",
          question_text: {
            en: "All citizens are required to abide ______ the Constitution and respect its ideals.",
            hi: "सभी नागरिकों से संविधान का पालन करने और उसके आदर्शों का सम्मान करने की अपेक्षा की जाती है:\nAll citizens are required to abide ______ the Constitution..."
          },
          options: {
            en: ["by", "with", "to", "for"],
            hi: ["by", "with", "to", "for"]
          },
          correct_option_index: 0,
          explanation: {
            en: "The correct preposition phrase is 'abide by' (meaning to obey or adhere to a rule).",
            hi: "'Abide by' का अर्थ नियमों का पालन करना होता है।"
          }
        },
        {
          question_id: 97,
          topic: "Fill in the Blanks - Vocabulary (रिक्त स्थान पूर्ति)",
          question_text: {
            en: "The doctor strictly advised the patient to abstain ______ sugary drinks.",
            hi: "डॉक्टर ने मरीज को मीठे पेय पदार्थों से परहेज करने की सख्त सलाह दी:\nThe doctor strictly advised the patient to abstain ______ sugary drinks."
          },
          options: {
            en: ["from", "of", "with", "in"],
            hi: ["from", "of", "with", "in"]
          },
          correct_option_index: 0,
          explanation: {
            en: "The verb 'abstain' is followed by the preposition 'from' (to refrain from doing something).",
            hi: "'Abstain' के साथ 'from' प्रिपोज़िशन आता है (परहेज करना)।"
          }
        },
        {
          question_id: 98,
          topic: "Cloze Test - Context (क्लोज टेस्ट)",
          question_text: {
            en: "Select the most appropriate word to fill in the blank:\n'Continuous technological innovations have ______ transformed modern communication.'",
            hi: "रिक्त स्थान के लिए सर्वाधिक उपयुक्त शब्द चुनें:\n'Continuous technological innovations have ______ transformed modern communication.'"
          },
          options: {
            en: ["radically", "scarcely", "reluctantly", "adversely"],
            hi: ["radically (मौलिक रूप से)", "scarcely (शायद ही)", "reluctantly (अनिच्छा से)", "adversely (प्रतिकूल रूप से)"]
          },
          correct_option_index: 0,
          explanation: {
            en: "'Radically transformed' colits naturally, indicating fundamental and thorough change.",
            hi: "'Radically' (गहन या व्यापक रूप से) यहाँ सबसे उपयुक्त क्रियाविशेषण है।"
          }
        },
        {
          question_id: 99,
          topic: "Antonyms (विलोम शब्द)",
          question_text: {
            en: "Select the most appropriate ANTONYM of:\nOBSOLETE",
            hi: "दिए गए शब्द का सबसे उपयुक्त विलोम शब्द चुनें:\nOBSOLETE"
          },
          options: {
            en: ["Contemporary", "Outdated", "Archaic", "Antique"],
            hi: ["Contemporary (समकालीन/आधुनिक)", "Outdated (पुराना)", "Archaic (प्राचीन)", "Antique (पुरातन)"]
          },
          correct_option_index: 0,
          explanation: {
            en: "'Obsolete' means no longer produced or used (outdated). Its antonym is 'Contemporary' (modern/current).",
            hi: "'Obsolete' का अर्थ अप्रचलित या पुराना होता है; इसका विलोम 'Contemporary' (आधुनिक/समकालीन) है।"
          }
        },
        {
          question_id: 100,
          topic: "Idioms & Phrases (मुहावरे और लोकोक्तियाँ)",
          question_text: {
            en: "Select the meaning of the idiom:\n'Through thick and thin'",
            hi: "दिए गए मुहावरे का सही अर्थ चुनें:\n'Through thick and thin'"
          },
          options: {
            en: [
              "Under all conditions, both good and bad times",
              "Passing through dense forest",
              "Losing and gaining weight rapidly",
              "Living in extreme luxury"
            ],
            hi: [
              "हर परिस्थिति में, अच्छे और बुरे दोनों समय में",
              "घने जंगल से गुजरना",
              "वजन घटना-बढ़ना",
              "अत्यधिक विलासिता में रहना"
            ]
          },
          correct_option_index: 0,
          explanation: {
            en: "'Through thick and thin' means supporting someone under all circumstances, no matter how difficult.",
            hi: "सुख-दुख में, हर स्थिति में साथ निभाना।"
          }
        }
      ]
    }
  ]
};
