// Course content: A1 (units 1-13) and A2 (units 14-26). Every word uses: { en, ar, pron, ipa, ex }
// pron = English pronunciation written in Arabic letters.
// Each unit = 5 lessons, each lesson = 5 words + 3 sentences + 1 grammar point.

const RAW_UNITS = [
  {
    id: 'A1-1',
    level: 'A1',
    topic: 'اللقاءات الأولى',
    lessons: [
      {
        title: 'التحيات',
        words: [
          { en: 'Hello', ar: 'مرحباً', pron: 'هيلو', ipa: '/həˈləʊ/', ex: 'Hello, my name is Sara.' },
          { en: 'Goodbye', ar: 'وداعاً', pron: 'غود باي', ipa: '/ˌɡʊdˈbaɪ/', ex: 'Goodbye, see you tomorrow.' },
          { en: 'Please', ar: 'من فضلك', pron: 'بليز', ipa: '/pliːz/', ex: 'Please sit down.' },
          { en: 'Thank you', ar: 'شكراً', pron: 'ثانك يو', ipa: '/ˈθæŋk juː/', ex: 'Thank you for the coffee.' },
          { en: 'Name', ar: 'اسم', pron: 'نيم', ipa: '/neɪm/', ex: 'What is your name?' },
        ],
        sentences: [
          { en: 'Hello, my name is Sara.', ar: 'مرحباً، اسمي سارة.', pron: 'هيلو، ماي نيم إز سارة', ipa: '/həˈləʊ, maɪ neɪm ɪz ˈsɑːrə/' },
          { en: 'Thank you very much.', ar: 'شكراً جزيلاً.', pron: 'ثانك يو فيري ماتش', ipa: '/ˈθæŋk juː ˈveri mʌtʃ/' },
          { en: 'Goodbye, see you tomorrow.', ar: 'وداعاً، أراك غداً.', pron: 'غود باي، سي يو تومورو', ipa: '/ˌɡʊdˈbaɪ, siː juː təˈmɒrəʊ/' },
        ],
        grammar: { rule: "I'm = I am للمتكلم (أنا)", prompt: '___ Sara.', ar: 'أنا سارة.', options: ["I'm", "You're", "He's"], answer: "I'm" },
      },
      {
        title: 'كيف حالك؟',
        words: [
          { en: 'Yes', ar: 'نعم', pron: 'يِس', ipa: '/jes/', ex: "Yes, I'm fine." },
          { en: 'No', ar: 'لا', pron: 'نو', ipa: '/nəʊ/', ex: 'No, thank you.' },
          { en: 'Sorry', ar: 'آسف', pron: 'سوري', ipa: '/ˈsɒri/', ex: "Sorry, I don't understand." },
          { en: 'Fine', ar: 'بخير', pron: 'فاين', ipa: '/faɪn/', ex: "I'm fine, thanks." },
          { en: 'Friend', ar: 'صديق', pron: 'فريند', ipa: '/frend/', ex: 'This is my friend.' },
        ],
        sentences: [
          { en: "How are you? I'm fine.", ar: 'كيف حالك؟ أنا بخير.', pron: 'هاو آر يو؟ آيم فاين', ipa: '/haʊ ɑː juː? aɪm faɪn/' },
          { en: 'This is my friend.', ar: 'هذا صديقي.', pron: 'ذِس إز ماي فريند', ipa: '/ðɪs ɪz maɪ frend/' },
          { en: 'Yes, please.', ar: 'نعم، من فضلك.', pron: 'يِس، بليز', ipa: '/jes, pliːz/' },
        ],
        grammar: { rule: 'This is = هذا / هذه (للشخص أو الشيء القريب)', prompt: '___ my friend.', ar: 'هذا صديقي.', options: ['This is', 'I am', 'You are'], answer: 'This is' },
      },
      {
        title: 'العائلة',
        words: [
          { en: 'Mother', ar: 'أم', pron: 'ماذَر', ipa: '/ˈmʌðə(r)/', ex: 'My mother is at home.' },
          { en: 'Father', ar: 'أب', pron: 'فاذَر', ipa: '/ˈfɑːðə(r)/', ex: 'This is my father.' },
          { en: 'Brother', ar: 'أخ', pron: 'براذَر', ipa: '/ˈbrʌðə(r)/', ex: "He's my brother." },
          { en: 'Sister', ar: 'أخت', pron: 'سيستَر', ipa: '/ˈsɪstə(r)/', ex: "She's my sister." },
          { en: 'Family', ar: 'عائلة', pron: 'فاميلي', ipa: '/ˈfæməli/', ex: 'I love my family.' },
        ],
        sentences: [
          { en: "He's my brother.", ar: 'هو أخي.', pron: 'هيز ماي براذَر', ipa: '/hiːz maɪ ˈbrʌðə/' },
          { en: "She's my sister.", ar: 'هي أختي.', pron: 'شيز ماي سيستَر', ipa: '/ʃiːz maɪ ˈsɪstə/' },
          { en: 'This is my family.', ar: 'هذه عائلتي.', pron: 'ذِس إز ماي فاميلي', ipa: '/ðɪs ɪz maɪ ˈfæməli/' },
        ],
        grammar: { rule: "She's = She is للبنت، He's = He is للولد", prompt: '___ my sister.', ar: 'هي أختي.', options: ["She's", "He's", "It's"], answer: "She's" },
      },
      {
        title: 'الأرقام',
        words: [
          { en: 'One', ar: 'واحد', pron: 'وَن', ipa: '/wʌn/', ex: 'I have one sister.' },
          { en: 'Two', ar: 'اثنان', pron: 'تو', ipa: '/tuː/', ex: 'I have two brothers.' },
          { en: 'Three', ar: 'ثلاثة', pron: 'ثري', ipa: '/θriː/', ex: 'We are three friends.' },
          { en: 'Four', ar: 'أربعة', pron: 'فور', ipa: '/fɔː(r)/', ex: 'I have four books.' },
          { en: 'Five', ar: 'خمسة', pron: 'فايف', ipa: '/faɪv/', ex: 'My sister is five.' },
        ],
        sentences: [
          { en: 'I have one sister.', ar: 'عندي أخت واحدة.', pron: 'آي هاف وَن سيستَر', ipa: '/aɪ hæv wʌn ˈsɪstə/' },
          { en: 'I have two brothers.', ar: 'عندي أخوان.', pron: 'آي هاف تو براذَرز', ipa: '/aɪ hæv tuː ˈbrʌðəz/' },
          { en: 'My sister is five.', ar: 'عمر أختي خمس سنوات.', pron: 'ماي سيستَر إز فايف', ipa: '/maɪ ˈsɪstər ɪz faɪv/' },
        ],
        grammar: { rule: "It's = It is للأشياء والأرقام", prompt: '___ number five.', ar: 'إنه الرقم خمسة.', options: ["It's", "She's", "I'm"], answer: "It's" },
      },
      {
        title: 'الناس من حولي',
        words: [
          { en: 'Man', ar: 'رجل', pron: 'مان', ipa: '/mæn/', ex: "He's a good man." },
          { en: 'Woman', ar: 'امرأة', pron: 'وومان', ipa: '/ˈwʊmən/', ex: 'The woman is my mother.' },
          { en: 'Boy', ar: 'ولد', pron: 'بوي', ipa: '/bɔɪ/', ex: 'The boy is my brother.' },
          { en: 'Girl', ar: 'بنت', pron: 'غيرل', ipa: '/ɡɜːl/', ex: 'The girl is my sister.' },
          { en: 'Teacher', ar: 'معلم', pron: 'تيتشَر', ipa: '/ˈtiːtʃə(r)/', ex: 'My teacher is from Egypt.' },
        ],
        sentences: [
          { en: "She's a teacher.", ar: 'هي معلمة.', pron: 'شيز أ تيتشَر', ipa: '/ʃiːz ə ˈtiːtʃə/' },
          { en: "You're my teacher.", ar: 'أنت معلمي.', pron: 'يور ماي تيتشَر', ipa: '/jɔː maɪ ˈtiːtʃə/' },
          { en: 'The boy is my brother.', ar: 'الولد أخي.', pron: 'ذا بوي إز ماي براذَر', ipa: '/ðə bɔɪ ɪz maɪ ˈbrʌðə/' },
        ],
        grammar: { rule: "You're = You are للمخاطب (أنت / أنتِ)", prompt: '___ a good teacher.', ar: 'أنت معلم جيد.', options: ["You're", "I'm", "It's"], answer: "You're" },
      },
    ],
  },
  {
    id: 'A1-2',
    level: 'A1',
    topic: 'من نحن',
    lessons: [
      {
        title: 'من أين أنت؟',
        words: [
          { en: 'I', ar: 'أنا', pron: 'آي', ipa: '/aɪ/', ex: 'I am from Sudan.' },
          { en: 'You', ar: 'أنت', pron: 'يو', ipa: '/juː/', ex: 'You are my friend.' },
          { en: 'We', ar: 'نحن', pron: 'وي', ipa: '/wiː/', ex: 'We are students.' },
          { en: 'From', ar: 'من', pron: 'فروم', ipa: '/frɒm/', ex: 'I am from Egypt.' },
          { en: 'Where', ar: 'أين', pron: 'وير', ipa: '/weə(r)/', ex: 'Where are you from?' },
        ],
        sentences: [
          { en: 'Where are you from?', ar: 'من أين أنت؟', pron: 'وير آر يو فروم', ipa: '/weər ɑː juː frɒm/' },
          { en: "I'm from Sudan.", ar: 'أنا من السودان.', pron: 'آيم فروم سودان', ipa: '/aɪm frəm suːˈdɑːn/' },
          { en: "We're from Egypt.", ar: 'نحن من مصر.', pron: 'وير فروم إيجبت', ipa: '/wɪə frəm ˈiːdʒɪpt/' },
        ],
        grammar: { rule: "We're = We are للجمع (نحن)", prompt: '___ students.', ar: 'نحن طلاب.', options: ["We're", "I'm", "He's"], answer: "We're" },
      },
      {
        title: 'أين تسكن؟',
        words: [
          { en: 'Live', ar: 'يسكن', pron: 'ليف', ipa: '/lɪv/', ex: 'I live in Riyadh.' },
          { en: 'City', ar: 'مدينة', pron: 'سيتي', ipa: '/ˈsɪti/', ex: 'Riyadh is a big city.' },
          { en: 'Country', ar: 'بلد', pron: 'كانتري', ipa: '/ˈkʌntri/', ex: 'Sudan is my country.' },
          { en: 'Street', ar: 'شارع', pron: 'ستريت', ipa: '/striːt/', ex: 'I live on this street.' },
          { en: 'Near', ar: 'قريب', pron: 'نير', ipa: '/nɪə(r)/', ex: 'The school is near my house.' },
        ],
        sentences: [
          { en: 'I live in Riyadh.', ar: 'أعيش في الرياض.', pron: 'آي ليف إن رياض', ipa: '/aɪ lɪv ɪn riˈjɑːd/' },
          { en: "It's a big city.", ar: 'إنها مدينة كبيرة.', pron: 'إتس أ بيغ سيتي', ipa: '/ɪts ə bɪɡ ˈsɪti/' },
          { en: 'Sudan is my country.', ar: 'السودان بلدي.', pron: 'سودان إز ماي كانتري', ipa: '/suːˈdɑːn ɪz maɪ ˈkʌntri/' },
        ],
        grammar: { rule: "I'm = I am، نستخدمها عندما نتكلم عن أنفسنا", prompt: '___ from Riyadh.', ar: 'أنا من الرياض.', options: ["I'm", "You're", "She's"], answer: "I'm" },
      },
      {
        title: 'العمل والدراسة',
        words: [
          { en: 'Job', ar: 'وظيفة', pron: 'جوب', ipa: '/dʒɒb/', ex: 'What is your job?' },
          { en: 'Student', ar: 'طالب', pron: 'ستيودنت', ipa: '/ˈstjuːdnt/', ex: "I'm a student." },
          { en: 'Doctor', ar: 'طبيب', pron: 'دوكتَر', ipa: '/ˈdɒktə(r)/', ex: "She's a doctor." },
          { en: 'Driver', ar: 'سائق', pron: 'درايفَر', ipa: '/ˈdraɪvə(r)/', ex: "He's a taxi driver." },
          { en: 'School', ar: 'مدرسة', pron: 'سكول', ipa: '/skuːl/', ex: 'I go to school every day.' },
        ],
        sentences: [
          { en: "I'm a student.", ar: 'أنا طالب.', pron: 'آيم أ ستيودنت', ipa: '/aɪm ə ˈstjuːdnt/' },
          { en: "She's a doctor.", ar: 'هي طبيبة.', pron: 'شيز أ دوكتَر', ipa: '/ʃiːz ə ˈdɒktə/' },
          { en: "He's a driver.", ar: 'هو سائق.', pron: 'هيز أ درايفَر', ipa: '/hiːz ə ˈdraɪvə/' },
        ],
        grammar: { rule: "He's = He is للولد أو الرجل", prompt: '___ a driver.', ar: 'هو سائق.', options: ["He's", "She's", "It's"], answer: "He's" },
      },
      {
        title: 'اللغات',
        words: [
          { en: 'Speak', ar: 'يتكلم', pron: 'سبيك', ipa: '/spiːk/', ex: 'I speak Arabic.' },
          { en: 'Language', ar: 'لغة', pron: 'لانغويج', ipa: '/ˈlæŋɡwɪdʒ/', ex: 'Arabic is my language.' },
          { en: 'English', ar: 'الإنجليزية', pron: 'إنغلِش', ipa: '/ˈɪŋɡlɪʃ/', ex: 'I study English.' },
          { en: 'Arabic', ar: 'العربية', pron: 'أرابيك', ipa: '/ˈærəbɪk/', ex: 'Do you speak Arabic?' },
          { en: 'Little', ar: 'قليلاً', pron: 'ليتل', ipa: '/ˈlɪtl/', ex: 'I speak a little English.' },
        ],
        sentences: [
          { en: 'I speak Arabic.', ar: 'أتكلم العربية.', pron: 'آي سبيك أرابيك', ipa: '/aɪ spiːk ˈærəbɪk/' },
          { en: 'Do you speak English?', ar: 'هل تتكلم الإنجليزية؟', pron: 'دو يو سبيك إنغلِش', ipa: '/duː juː spiːk ˈɪŋɡlɪʃ/' },
          { en: 'I speak a little English.', ar: 'أتكلم قليلاً من الإنجليزية.', pron: 'آي سبيك أ ليتل إنغلِش', ipa: '/aɪ spiːk ə ˈlɪtl ˈɪŋɡlɪʃ/' },
        ],
        grammar: { rule: "This isn't = This is not للنفي (هذا ليس / هذه ليست)", prompt: '___ my language.', ar: 'هذه ليست لغتي.', options: ["This isn't", 'This is', "I'm"], answer: "This isn't" },
      },
      {
        title: 'التعارف',
        words: [
          { en: 'Meet', ar: 'يقابل', pron: 'ميت', ipa: '/miːt/', ex: 'Nice to meet you.' },
          { en: 'Nice', ar: 'لطيف', pron: 'نايس', ipa: '/naɪs/', ex: "She's very nice." },
          { en: 'Phone', ar: 'هاتف', pron: 'فون', ipa: '/fəʊn/', ex: 'This is my phone.' },
          { en: 'Number', ar: 'رقم', pron: 'نامبَر', ipa: '/ˈnʌmbə(r)/', ex: "What's your phone number?" },
          { en: 'Happy', ar: 'سعيد', pron: 'هابي', ipa: '/ˈhæpi/', ex: "I'm happy to see you." },
        ],
        sentences: [
          { en: 'Nice to meet you.', ar: 'تشرفت بمعرفتك.', pron: 'نايس تو ميت يو', ipa: '/naɪs tə miːt juː/' },
          { en: "What's your phone number?", ar: 'ما رقم هاتفك؟', pron: 'ووتس يور فون نامبَر', ipa: '/wɒts jɔː fəʊn ˈnʌmbə/' },
          { en: "I'm happy today.", ar: 'أنا سعيد اليوم.', pron: 'آيم هابي توداي', ipa: '/aɪm ˈhæpi təˈdeɪ/' },
        ],
        grammar: { rule: "You're = You are عندما نتكلم مع شخص (أنت)", prompt: '___ very nice.', ar: 'أنت لطيف جداً.', options: ["You're", "I'm", "It's"], answer: "You're" },
      },
    ],
  },
  {
    id: 'A1-3',
    level: 'A1',
    topic: 'بيتي وأشيائي',
    lessons: [
      {
        title: 'بيتي',
        words: [
          { en: 'House', ar: 'بيت', pron: 'هاوس', ipa: '/haʊs/', ex: 'This is my house.' },
          { en: 'Room', ar: 'غرفة', pron: 'روم', ipa: '/ruːm/', ex: 'My room is small.' },
          { en: 'Book', ar: 'كتاب', pron: 'بوك', ipa: '/bʊk/', ex: 'I read a book at night.' },
          { en: 'Table', ar: 'طاولة', pron: 'تيبل', ipa: '/ˈteɪbl/', ex: 'The book is on the table.' },
          { en: 'Door', ar: 'باب', pron: 'دور', ipa: '/dɔː(r)/', ex: 'Please close the door.' },
        ],
        sentences: [
          { en: 'This is my house.', ar: 'هذا بيتي.', pron: 'ذِس إز ماي هاوس', ipa: '/ðɪs ɪz maɪ haʊs/' },
          { en: 'The book is on the table.', ar: 'الكتاب على الطاولة.', pron: 'ذا بوك إز أون ذا تيبل', ipa: '/ðə bʊk ɪz ɒn ðə ˈteɪbl/' },
          { en: 'Please close the door.', ar: 'من فضلك أغلق الباب.', pron: 'بليز كلوز ذا دور', ipa: '/pliːz kləʊz ðə dɔː/' },
        ],
        grammar: { rule: "It's = It is للأشياء مثل البيت والغرفة", prompt: '___ a big room.', ar: 'إنها غرفة كبيرة.', options: ["It's", "He's", "She's"], answer: "It's" },
      },
      {
        title: 'داخل البيت',
        words: [
          { en: 'Kitchen', ar: 'مطبخ', pron: 'كيتشن', ipa: '/ˈkɪtʃɪn/', ex: 'The kitchen is clean.' },
          { en: 'Bed', ar: 'سرير', pron: 'بِد', ipa: '/bed/', ex: 'My bed is big.' },
          { en: 'Chair', ar: 'كرسي', pron: 'تشير', ipa: '/tʃeə(r)/', ex: 'Sit on the chair, please.' },
          { en: 'Window', ar: 'نافذة', pron: 'ويندو', ipa: '/ˈwɪndəʊ/', ex: 'Open the window, please.' },
          { en: 'Small', ar: 'صغير', pron: 'سمول', ipa: '/smɔːl/', ex: 'My room is small.' },
        ],
        sentences: [
          { en: 'My room is small.', ar: 'غرفتي صغيرة.', pron: 'ماي روم إز سمول', ipa: '/maɪ ruːm ɪz smɔːl/' },
          { en: 'The chair is in the kitchen.', ar: 'الكرسي في المطبخ.', pron: 'ذا تشير إز إن ذا كيتشن', ipa: '/ðə tʃeər ɪz ɪn ðə ˈkɪtʃɪn/' },
          { en: 'Open the window, please.', ar: 'افتح النافذة من فضلك.', pron: 'أوبن ذا ويندو، بليز', ipa: '/ˈəʊpən ðə ˈwɪndəʊ, pliːz/' },
        ],
        grammar: { rule: "This is = هذا، و This isn't = هذا ليس", prompt: '___ my bed.', ar: 'هذا سريري.', options: ['This is', "This isn't", "I'm"], answer: 'This is' },
      },
      {
        title: 'أشيائي',
        words: [
          { en: 'Bag', ar: 'حقيبة', pron: 'باغ', ipa: '/bæɡ/', ex: 'Where is my bag?' },
          { en: 'Key', ar: 'مفتاح', pron: 'كي', ipa: '/kiː/', ex: 'This is my key.' },
          { en: 'Pen', ar: 'قلم', pron: 'بِن', ipa: '/pen/', ex: 'Can I have a pen?' },
          { en: 'Car', ar: 'سيارة', pron: 'كار', ipa: '/kɑː(r)/', ex: 'My car is new.' },
          { en: 'New', ar: 'جديد', pron: 'نيو', ipa: '/njuː/', ex: 'I have a new phone.' },
        ],
        sentences: [
          { en: 'This is my new car.', ar: 'هذه سيارتي الجديدة.', pron: 'ذِس إز ماي نيو كار', ipa: '/ðɪs ɪz maɪ njuː kɑː/' },
          { en: 'Where is my key?', ar: 'أين مفتاحي؟', pron: 'وير إز ماي كي', ipa: '/weər ɪz maɪ kiː/' },
          { en: 'The pen is in my bag.', ar: 'القلم في حقيبتي.', pron: 'ذا بِن إز إن ماي باغ', ipa: '/ðə pen ɪz ɪn maɪ bæɡ/' },
        ],
        grammar: { rule: "This isn't = This is not (هذا ليس / هذه ليست)", prompt: '___ my bag.', ar: 'هذه ليست حقيبتي.', options: ["This isn't", 'This is', "It's"], answer: "This isn't" },
      },
      {
        title: 'الألوان',
        words: [
          { en: 'Red', ar: 'أحمر', pron: 'رِد', ipa: '/red/', ex: 'I like the red car.' },
          { en: 'Blue', ar: 'أزرق', pron: 'بلو', ipa: '/bluː/', ex: 'The door is blue.' },
          { en: 'Green', ar: 'أخضر', pron: 'غرين', ipa: '/ɡriːn/', ex: 'My bag is green.' },
          { en: 'White', ar: 'أبيض', pron: 'وايت', ipa: '/waɪt/', ex: 'My car is white.' },
          { en: 'Black', ar: 'أسود', pron: 'بلاك', ipa: '/blæk/', ex: 'I have a black pen.' },
        ],
        sentences: [
          { en: 'My car is white.', ar: 'سيارتي بيضاء.', pron: 'ماي كار إز وايت', ipa: '/maɪ kɑːr ɪz waɪt/' },
          { en: 'The door is blue.', ar: 'الباب أزرق.', pron: 'ذا دور إز بلو', ipa: '/ðə dɔːr ɪz bluː/' },
          { en: 'I have a black pen.', ar: 'عندي قلم أسود.', pron: 'آي هاف أ بلاك بِن', ipa: '/aɪ hæv ə blæk pen/' },
        ],
        grammar: { rule: "نستخدم It's لوصف لون الأشياء: It's red", prompt: '___ red.', ar: 'إنه أحمر.', options: ["It's", "You're", "We're"], answer: "It's" },
      },
      {
        title: 'أين هو؟',
        words: [
          { en: 'In', ar: 'في', pron: 'إن', ipa: '/ɪn/', ex: 'The key is in my bag.' },
          { en: 'On', ar: 'على', pron: 'أون', ipa: '/ɒn/', ex: 'The phone is on the bed.' },
          { en: 'Under', ar: 'تحت', pron: 'أندَر', ipa: '/ˈʌndə(r)/', ex: 'The bag is under the table.' },
          { en: 'Here', ar: 'هنا', pron: 'هير', ipa: '/hɪə(r)/', ex: 'My bag is here.' },
          { en: 'There', ar: 'هناك', pron: 'ذير', ipa: '/ðeə(r)/', ex: 'Your book is there.' },
        ],
        sentences: [
          { en: 'My bag is here.', ar: 'حقيبتي هنا.', pron: 'ماي باغ إز هير', ipa: '/maɪ bæɡ ɪz hɪə/' },
          { en: 'The phone is on the bed.', ar: 'الهاتف على السرير.', pron: 'ذا فون إز أون ذا بِد', ipa: '/ðə fəʊn ɪz ɒn ðə bed/' },
          { en: 'The key is under the book.', ar: 'المفتاح تحت الكتاب.', pron: 'ذا كي إز أندَر ذا بوك', ipa: '/ðə kiː ɪz ˈʌndə ðə bʊk/' },
        ],
        grammar: { rule: "نجيب عن مكان الأشياء بـ It's: It's on the table", prompt: "Where's my pen? ___ on the table.", ar: 'إنه على الطاولة.', options: ["It's", "She's", "I'm"], answer: "It's" },
      },
    ],
  },
  {
    id: 'A1-4',
    level: 'A1',
    topic: 'حياتي اليومية',
    lessons: [
      {
        title: 'يومي',
        words: [
          { en: 'Morning', ar: 'صباح', pron: 'مورنينغ', ipa: '/ˈmɔːnɪŋ/', ex: 'Good morning!' },
          { en: 'Night', ar: 'ليل', pron: 'نايت', ipa: '/naɪt/', ex: 'Good night, Sara.' },
          { en: 'Work', ar: 'عمل', pron: 'وِرك', ipa: '/wɜːk/', ex: 'I go to work by bus.' },
          { en: 'Today', ar: 'اليوم', pron: 'توداي', ipa: '/təˈdeɪ/', ex: 'What do you do today?' },
          { en: 'Sleep', ar: 'ينام', pron: 'سليب', ipa: '/sliːp/', ex: 'I sleep at eleven.' },
        ],
        sentences: [
          { en: 'I go to work by bus.', ar: 'أذهب إلى العمل بالحافلة.', pron: 'آي غو تو وِرك باي باص', ipa: '/aɪ ɡəʊ tə wɜːk baɪ bʌs/' },
          { en: 'I sleep at night.', ar: 'أنام في الليل.', pron: 'آي سليب آت نايت', ipa: '/aɪ sliːp ət naɪt/' },
          { en: 'Good morning!', ar: 'صباح الخير!', pron: 'غود مورنينغ', ipa: '/ɡʊd ˈmɔːnɪŋ/' },
        ],
        grammar: { rule: "I'm = I am: أنا (I'm at work = أنا في العمل)", prompt: '___ at work today.', ar: 'أنا في العمل اليوم.', options: ["I'm", "You're", "It's"], answer: "I'm" },
      },
      {
        title: 'الوجبات',
        words: [
          { en: 'Breakfast', ar: 'فطور', pron: 'بريكفاست', ipa: '/ˈbrekfəst/', ex: 'I eat breakfast at seven.' },
          { en: 'Lunch', ar: 'غداء', pron: 'لانش', ipa: '/lʌntʃ/', ex: 'Lunch is at one.' },
          { en: 'Dinner', ar: 'عشاء', pron: 'دينَر', ipa: '/ˈdɪnə(r)/', ex: 'We eat dinner at home.' },
          { en: 'Eat', ar: 'يأكل', pron: 'إيت', ipa: '/iːt/', ex: 'I eat bread every morning.' },
          { en: 'Time', ar: 'وقت', pron: 'تايم', ipa: '/taɪm/', ex: 'What time is it?' },
        ],
        sentences: [
          { en: 'We eat dinner at home.', ar: 'نتناول العشاء في البيت.', pron: 'وي إيت دينَر آت هوم', ipa: '/wiː iːt ˈdɪnər ət həʊm/' },
          { en: 'I eat breakfast at seven.', ar: 'أتناول الفطور في السابعة.', pron: 'آي إيت بريكفاست آت سيفن', ipa: '/aɪ iːt ˈbrekfəst ət ˈsevn/' },
          { en: 'What time is it?', ar: 'كم الساعة؟', pron: 'ووت تايم إز إت', ipa: '/wɒt taɪm ɪz ɪt/' },
        ],
        grammar: { rule: "We're = We are: نحن", prompt: '___ at home.', ar: 'نحن في البيت.', options: ["We're", "He's", "It's"], answer: "We're" },
      },
      {
        title: 'أيام الأسبوع',
        words: [
          { en: 'Day', ar: 'يوم', pron: 'داي', ipa: '/deɪ/', ex: 'Have a nice day!' },
          { en: 'Week', ar: 'أسبوع', pron: 'ويك', ipa: '/wiːk/', ex: 'I work five days a week.' },
          { en: 'Monday', ar: 'الاثنين', pron: 'ماندي', ipa: '/ˈmʌndeɪ/', ex: 'Today is Monday.' },
          { en: 'Friday', ar: 'الجمعة', pron: 'فرايدي', ipa: '/ˈfraɪdeɪ/', ex: "I don't work on Friday." },
          { en: 'Tomorrow', ar: 'غداً', pron: 'تومورو', ipa: '/təˈmɒrəʊ/', ex: 'See you tomorrow.' },
        ],
        sentences: [
          { en: 'Today is Monday.', ar: 'اليوم هو الاثنين.', pron: 'توداي إز ماندي', ipa: '/təˈdeɪ ɪz ˈmʌndeɪ/' },
          { en: "I don't work on Friday.", ar: 'لا أعمل يوم الجمعة.', pron: 'آي دونت وِرك أون فرايدي', ipa: '/aɪ dəʊnt wɜːk ɒn ˈfraɪdeɪ/' },
          { en: 'See you tomorrow.', ar: 'أراك غداً.', pron: 'سي يو تومورو', ipa: '/siː juː təˈmɒrəʊ/' },
        ],
        grammar: { rule: "نستخدم It's مع الأيام والوقت: It's Monday", prompt: '___ Friday today.', ar: 'اليوم الجمعة.', options: ["It's", "She's", "You're"], answer: "It's" },
      },
      {
        title: 'الدراسة',
        words: [
          { en: 'Read', ar: 'يقرأ', pron: 'ريد', ipa: '/riːd/', ex: 'I read a book every night.' },
          { en: 'Write', ar: 'يكتب', pron: 'رايت', ipa: '/raɪt/', ex: 'Write your name here.' },
          { en: 'Study', ar: 'يدرس', pron: 'ستادي', ipa: '/ˈstʌdi/', ex: 'I study English every day.' },
          { en: 'Learn', ar: 'يتعلم', pron: 'لِيرن', ipa: '/lɜːn/', ex: 'I learn new words.' },
          { en: 'Word', ar: 'كلمة', pron: 'وِيرد', ipa: '/wɜːd/', ex: 'What does this word mean?' },
        ],
        sentences: [
          { en: 'I study English every day.', ar: 'أدرس الإنجليزية كل يوم.', pron: 'آي ستادي إنغلِش إيفري داي', ipa: '/aɪ ˈstʌdi ˈɪŋɡlɪʃ ˈevri deɪ/' },
          { en: 'I learn new words.', ar: 'أتعلم كلمات جديدة.', pron: 'آي لِيرن نيو وِيردز', ipa: '/aɪ lɜːn njuː wɜːdz/' },
          { en: 'Write your name here.', ar: 'اكتب اسمك هنا.', pron: 'رايت يور نيم هير', ipa: '/raɪt jɔː neɪm hɪə/' },
        ],
        grammar: { rule: "She's = She is: هي (للبنت أو المرأة)", prompt: '___ a good student.', ar: 'هي طالبة جيدة.', options: ["She's", "He's", "I'm"], answer: "She's" },
      },
      {
        title: 'كيف تشعر؟',
        words: [
          { en: 'Tired', ar: 'متعب', pron: 'تايرد', ipa: '/ˈtaɪəd/', ex: "I'm tired today." },
          { en: 'Busy', ar: 'مشغول', pron: 'بيزي', ipa: '/ˈbɪzi/', ex: "He's busy now." },
          { en: 'Late', ar: 'متأخر', pron: 'ليت', ipa: '/leɪt/', ex: "Sorry, I'm late." },
          { en: 'Early', ar: 'مبكراً', pron: 'إيرلي', ipa: '/ˈɜːli/', ex: 'I get up early.' },
          { en: 'Now', ar: 'الآن', pron: 'ناو', ipa: '/naʊ/', ex: "I'm at home now." },
        ],
        sentences: [
          { en: "Sorry, I'm late.", ar: 'آسف، تأخرت.', pron: 'سوري، آيم ليت', ipa: '/ˈsɒri, aɪm leɪt/' },
          { en: "He's busy now.", ar: 'هو مشغول الآن.', pron: 'هيز بيزي ناو', ipa: '/hiːz ˈbɪzi naʊ/' },
          { en: "I'm tired today.", ar: 'أنا متعب اليوم.', pron: 'آيم تايرد توداي', ipa: '/aɪm ˈtaɪəd təˈdeɪ/' },
        ],
        grammar: { rule: "He's = He is: هو (للولد أو الرجل)", prompt: '___ late today.', ar: 'هو متأخر اليوم.', options: ["He's", "She's", "We're"], answer: "He's" },
      },
    ],
  },
  {
    id: 'A1-5',
    level: 'A1',
    topic: 'الطعام والمقهى والطلب',
    lessons: [
      {
        title: 'في المقهى',
        words: [
          { en: 'Coffee', ar: 'قهوة', pron: 'كوفي', ipa: '/ˈkɒfi/', ex: 'I want a coffee, please.' },
          { en: 'Water', ar: 'ماء', pron: 'ووتَر', ipa: '/ˈwɔːtə(r)/', ex: 'Can I have a glass of water?' },
          { en: 'Bread', ar: 'خبز', pron: 'بريد', ipa: '/bred/', ex: 'The bread is fresh.' },
          { en: 'Menu', ar: 'قائمة الطعام', pron: 'مينيو', ipa: '/ˈmenjuː/', ex: 'Can I see the menu?' },
          { en: 'Bill', ar: 'الفاتورة', pron: 'بِل', ipa: '/bɪl/', ex: 'Can I have the bill, please?' },
        ],
        sentences: [
          { en: 'I want a coffee, please.', ar: 'أريد قهوة من فضلك.', pron: 'آي وونت أ كوفي، بليز', ipa: '/aɪ wɒnt ə ˈkɒfi, pliːz/' },
          { en: 'Can I see the menu?', ar: 'هل يمكنني رؤية قائمة الطعام؟', pron: 'كان آي سي ذا مينيو', ipa: '/kən aɪ siː ðə ˈmenjuː/' },
          { en: 'The bill, please.', ar: 'الفاتورة من فضلك.', pron: 'ذا بِل، بليز', ipa: '/ðə bɪl, pliːz/' },
        ],
        grammar: { rule: 'This is = هذا / هذه للأشياء القريبة منك', prompt: '___ my coffee.', ar: 'هذه قهوتي.', options: ['This is', "This isn't", "I'm"], answer: 'This is' },
      },
      {
        title: 'المشروبات',
        words: [
          { en: 'Tea', ar: 'شاي', pron: 'تي', ipa: '/tiː/', ex: 'A cup of tea, please.' },
          { en: 'Milk', ar: 'حليب', pron: 'مِلك', ipa: '/mɪlk/', ex: 'I like milk in my coffee.' },
          { en: 'Sugar', ar: 'سكر', pron: 'شوغَر', ipa: '/ˈʃʊɡə(r)/', ex: 'No sugar, please.' },
          { en: 'Juice', ar: 'عصير', pron: 'جوس', ipa: '/dʒuːs/', ex: 'Can I have an orange juice?' },
          { en: 'Cup', ar: 'كوب', pron: 'كاب', ipa: '/kʌp/', ex: 'This is my cup.' },
        ],
        sentences: [
          { en: 'A cup of tea, please.', ar: 'كوب شاي من فضلك.', pron: 'أ كاب أوف تي، بليز', ipa: '/ə kʌp əv tiː, pliːz/' },
          { en: 'No sugar, please.', ar: 'بدون سكر من فضلك.', pron: 'نو شوغَر، بليز', ipa: '/nəʊ ˈʃʊɡə, pliːz/' },
          { en: 'I like milk.', ar: 'أحب الحليب.', pron: 'آي لايك مِلك', ipa: '/aɪ laɪk mɪlk/' },
        ],
        grammar: { rule: "This isn't = This is not: هذا ليس", prompt: '___ my tea.', ar: 'هذا ليس شايي.', options: ["This isn't", 'This is', "It's"], answer: "This isn't" },
      },
      {
        title: 'الطعام',
        words: [
          { en: 'Food', ar: 'طعام', pron: 'فود', ipa: '/fuːd/', ex: 'The food is good.' },
          { en: 'Rice', ar: 'أرز', pron: 'رايس', ipa: '/raɪs/', ex: 'I eat rice every day.' },
          { en: 'Chicken', ar: 'دجاج', pron: 'تشيكن', ipa: '/ˈtʃɪkɪn/', ex: 'I want chicken and rice.' },
          { en: 'Fish', ar: 'سمك', pron: 'فِش', ipa: '/fɪʃ/', ex: 'The fish is fresh.' },
          { en: 'Egg', ar: 'بيضة', pron: 'إِغ', ipa: '/eɡ/', ex: 'I eat an egg for breakfast.' },
        ],
        sentences: [
          { en: 'I want chicken and rice.', ar: 'أريد دجاجاً وأرزاً.', pron: 'آي وونت تشيكن آند رايس', ipa: '/aɪ wɒnt ˈtʃɪkɪn ənd raɪs/' },
          { en: 'The fish is good.', ar: 'السمك جيد.', pron: 'ذا فِش إز غود', ipa: '/ðə fɪʃ ɪz ɡʊd/' },
          { en: 'I eat an egg for breakfast.', ar: 'آكل بيضة في الفطور.', pron: 'آي إيت آن إِغ فور بريكفاست', ipa: '/aɪ iːt ən eɡ fə ˈbrekfəst/' },
        ],
        grammar: { rule: "نستخدم It's لوصف الطعام: It's good", prompt: '___ very good.', ar: 'إنه جيد جداً.', options: ["It's", "You're", "We're"], answer: "It's" },
      },
      {
        title: 'ساخن وبارد',
        words: [
          { en: 'Hot', ar: 'ساخن', pron: 'هوت', ipa: '/hɒt/', ex: 'The coffee is hot.' },
          { en: 'Cold', ar: 'بارد', pron: 'كولد', ipa: '/kəʊld/', ex: 'The water is cold.' },
          { en: 'Good', ar: 'جيد', pron: 'غود', ipa: '/ɡʊd/', ex: 'This food is good.' },
          { en: 'Like', ar: 'يحب', pron: 'لايك', ipa: '/laɪk/', ex: 'I like tea.' },
          { en: 'Want', ar: 'يريد', pron: 'وونت', ipa: '/wɒnt/', ex: 'I want some water.' },
        ],
        sentences: [
          { en: 'The coffee is hot.', ar: 'القهوة ساخنة.', pron: 'ذا كوفي إز هوت', ipa: '/ðə ˈkɒfi ɪz hɒt/' },
          { en: 'The water is cold.', ar: 'الماء بارد.', pron: 'ذا ووتَر إز كولد', ipa: '/ðə ˈwɔːtər ɪz kəʊld/' },
          { en: 'I like this food.', ar: 'أحب هذا الطعام.', pron: 'آي لايك ذِس فود', ipa: '/aɪ laɪk ðɪs fuːd/' },
        ],
        grammar: { rule: "I'm = I am: أنا (I'm hungry = أنا جائع)", prompt: '___ hungry.', ar: 'أنا جائع.', options: ["I'm", "It's", "She's"], answer: "I'm" },
      },
      {
        title: 'الدفع',
        words: [
          { en: 'Money', ar: 'مال', pron: 'ماني', ipa: '/ˈmʌni/', ex: "I don't have money." },
          { en: 'Pay', ar: 'يدفع', pron: 'باي', ipa: '/peɪ/', ex: 'Can I pay now?' },
          { en: 'Price', ar: 'سعر', pron: 'برايس', ipa: '/praɪs/', ex: "What's the price?" },
          { en: 'Cheap', ar: 'رخيص', pron: 'تشيب', ipa: '/tʃiːp/', ex: 'This shop is cheap.' },
          { en: 'Expensive', ar: 'غالٍ', pron: 'إكسبنسِف', ipa: '/ɪkˈspensɪv/', ex: 'The coffee is expensive.' },
        ],
        sentences: [
          { en: 'How much is it?', ar: 'بكم هذا؟', pron: 'هاو ماتش إز إت', ipa: '/haʊ mʌtʃ ɪz ɪt/' },
          { en: 'Can I pay now?', ar: 'هل يمكنني الدفع الآن؟', pron: 'كان آي باي ناو', ipa: '/kən aɪ peɪ naʊ/' },
          { en: "It's very cheap.", ar: 'إنه رخيص جداً.', pron: 'إتس فيري تشيب', ipa: '/ɪts ˈveri tʃiːp/' },
        ],
        grammar: { rule: "You're welcome = على الرحب والسعة (رد على Thank you)", prompt: 'Thank you! — ___ welcome.', ar: 'على الرحب والسعة.', options: ["You're", "I'm", "It's"], answer: "You're" },
      },
    ],
  },

  {
    id: 'A1-6',
    level: 'A1',
    topic: 'التسوق والملابس',
    lessons: [
      {
        title: 'في المتجر',
        words: [
          { en: 'Shop', ar: 'متجر', pron: 'شوب', ipa: '/ʃɒp/', ex: 'The shop is near my house.' },
          { en: 'Buy', ar: 'يشتري', pron: 'باي', ipa: '/baɪ/', ex: 'I buy bread every morning.' },
          { en: 'Sell', ar: 'يبيع', pron: 'سِل', ipa: '/sel/', ex: 'They sell milk at this shop.' },
          { en: 'Customer', ar: 'زبون', pron: 'كَستَمَر', ipa: '/ˈkʌstəmə/', ex: 'The customer wants a blue shirt.' },
          { en: 'Closed', ar: 'مغلق', pron: 'كلوزد', ipa: '/kləʊzd/', ex: 'The shop is closed today.' },
        ],
        sentences: [
          { en: 'This is a small shop.', ar: 'هذا متجر صغير.', pron: 'ذِس إز أ سمول شوب', ipa: '/ðɪs ɪz ə smɔːl ʃɒp/' },
          { en: 'I buy bread here.', ar: 'أشتري الخبز هنا.', pron: 'آي باي بريد هير', ipa: '/aɪ baɪ bred hɪə/' },
          { en: 'The customer is happy.', ar: 'الزبون سعيد.', pron: 'ذَ كَستَمَر إز هابي', ipa: '/ðə ˈkʌstəmər ɪz ˈhæpi/' },
        ],
        grammar: { rule: 'نستخدم a قبل اسم مفرد يبدأ بصوت ساكن.', prompt: 'This is ___ shop.', ar: 'هذا متجر.', options: ['a', 'an', 'are'], answer: 'a' },
      },
      {
        title: 'الملابس',
        words: [
          { en: 'Shirt', ar: 'قميص', pron: 'شيرت', ipa: '/ʃɜːt/', ex: 'My shirt is blue and white.' },
          { en: 'Dress', ar: 'فستان', pron: 'دريس', ipa: '/dres/', ex: 'She has a new dress.' },
          { en: 'Shoes', ar: 'حذاء', pron: 'شوز', ipa: '/ʃuːz/', ex: 'My shoes are near the door.' },
          { en: 'Coat', ar: 'معطف', pron: 'كوت', ipa: '/kəʊt/', ex: 'This coat is very warm.' },
          { en: 'Hat', ar: 'قبعة', pron: 'هات', ipa: '/hæt/', ex: 'He wears a black hat.' },
        ],
        sentences: [
          { en: 'I like this shirt.', ar: 'يعجبني هذا القميص.', pron: 'آي لايك ذِس شيرت', ipa: '/aɪ laɪk ðɪs ʃɜːt/' },
          { en: 'Her dress is green.', ar: 'فستانها أخضر.', pron: 'هَر دريس إز غرين', ipa: '/hə dres ɪz ɡriːn/' },
          { en: 'These shoes are new.', ar: 'هذا الحذاء جديد.', pron: 'ذيز شوز آر نيو', ipa: '/ðiːz ʃuːz ɑː njuː/' },
        ],
        grammar: { rule: 'نستخدم an قبل اسم مفرد يبدأ بصوت متحرك.', prompt: 'This is ___ orange hat.', ar: 'هذه قبعة برتقالية.', options: ['an', 'a', 'are'], answer: 'an' },
      },
      {
        title: 'المقاسات',
        words: [
          { en: 'Big', ar: 'كبير', pron: 'بيغ', ipa: '/bɪɡ/', ex: 'This coat is too big.' },
          { en: 'Long', ar: 'طويل', pron: 'لونغ', ipa: '/lɒŋ/', ex: 'She wears a long dress.' },
          { en: 'Short', ar: 'قصير', pron: 'شورت', ipa: '/ʃɔːt/', ex: 'This shirt is too short.' },
          { en: 'Wear', ar: 'يرتدي', pron: 'وِير', ipa: '/weə/', ex: 'I wear a coat in winter.' },
          { en: 'Size', ar: 'مقاس', pron: 'سايز', ipa: '/saɪz/', ex: 'What size is this shirt?' },
        ],
        sentences: [
          { en: 'This hat is too big.', ar: 'هذه القبعة كبيرة جداً.', pron: 'ذِس هات إز تو بيغ', ipa: '/ðɪs hæt ɪz tuː bɪɡ/' },
          { en: 'I wear a long coat.', ar: 'أرتدي معطفاً طويلاً.', pron: 'آي وِير أ لونغ كوت', ipa: '/aɪ weər ə lɒŋ kəʊt/' },
          { en: 'Do you have my size?', ar: 'هل لديكم مقاسي؟', pron: 'دو يو هاف ماي سايز', ipa: '/duː juː hæv maɪ saɪz/' },
        ],
        grammar: { rule: 'نستخدم How much is للسؤال عن سعر شيء مفرد.', prompt: 'How much ___ this big coat?', ar: 'كم سعر هذا المعطف الكبير؟', options: ['is', 'are', 'am'], answer: 'is' },
      },
      {
        title: 'الأرقام 6-10',
        words: [
          { en: 'Six', ar: 'ستة', pron: 'سيكس', ipa: '/sɪks/', ex: 'I have six red pens.' },
          { en: 'Seven', ar: 'سبعة', pron: 'سيفَن', ipa: '/ˈsevn/', ex: 'There are seven shirts here.' },
          { en: 'Eight', ar: 'ثمانية', pron: 'إيت', ipa: '/eɪt/', ex: 'We need eight small bags.' },
          { en: 'Nine', ar: 'تسعة', pron: 'ناين', ipa: '/naɪn/', ex: 'She has nine blue books.' },
          { en: 'Ten', ar: 'عشرة', pron: 'تِن', ipa: '/ten/', ex: 'This hat costs ten pounds.' },
        ],
        sentences: [
          { en: 'I need six shirts.', ar: 'أحتاج إلى ستة قمصان.', pron: 'آي نيد سيكس شيرتس', ipa: '/aɪ niːd sɪks ʃɜːts/' },
          { en: 'We have seven bags.', ar: 'لدينا سبع حقائب.', pron: 'وي هاف سيفَن باغز', ipa: '/wiː hæv ˈsevn bæɡz/' },
          { en: 'This book costs eight pounds.', ar: 'ثمن هذا الكتاب ثمانية جنيهات.', pron: 'ذِس بوك كوستس إيت باوندز', ipa: '/ðɪs bʊk kɒsts eɪt paʊndz/' },
        ],
        grammar: { rule: 'نضيف -s لجمع معظم الأسماء بعد الأعداد الأكبر من واحد.', prompt: 'I have six ___.', ar: 'لدي ست قبعات.', options: ['hats', 'hat', 'a hat'], answer: 'hats' },
      },
      {
        title: 'الأرقام الكبيرة',
        words: [
          { en: 'Eleven', ar: 'أحد عشر', pron: 'إليفَن', ipa: '/ɪˈlevn/', ex: 'We have eleven books at home.' },
          { en: 'Twelve', ar: 'اثنا عشر', pron: 'تويلف', ipa: '/twelv/', ex: 'There are twelve shirts here.' },
          { en: 'Twenty', ar: 'عشرون', pron: 'توينتي', ipa: '/ˈtwenti/', ex: 'My new coat costs twenty pounds.' },
          { en: 'Hundred', ar: 'مئة', pron: 'هَندرد', ipa: '/ˈhʌndrəd/', ex: 'This phone costs a hundred pounds.' },
          { en: 'Thousand', ar: 'ألف', pron: 'ثاوزَند', ipa: '/ˈθaʊznd/', ex: 'A thousand people live here.' },
        ],
        sentences: [
          { en: 'These shoes cost twenty pounds.', ar: 'ثمن هذا الحذاء عشرون جنيهاً.', pron: 'ذيز شوز كوست توينتي باوندز', ipa: '/ðiːz ʃuːz kɒst ˈtwenti paʊndz/' },
          { en: 'I have twelve pens.', ar: 'لدي اثنا عشر قلماً.', pron: 'آي هاف تويلف بينز', ipa: '/aɪ hæv twelv penz/' },
          { en: 'We need a hundred bags.', ar: 'نحتاج إلى مئة حقيبة.', pron: 'وي نيد أ هَندرد باغز', ipa: '/wiː niːd ə ˈhʌndrəd bæɡz/' },
        ],
        grammar: { rule: 'نستخدم How much are للسؤال عن سعر أشياء بصيغة الجمع.', prompt: 'How much ___ these twelve shirts?', ar: 'كم سعر هذه القمصان الاثني عشر؟', options: ['are', 'is', 'am'], answer: 'are' },
      },
    ],
  },
  {
    id: 'A1-7',
    level: 'A1',
    topic: 'المدينة والاتجاهات',
    lessons: [
      {
        title: 'أماكن في المدينة',
        words: [
          { en: 'Bank', ar: 'مصرف', pron: 'بانك', ipa: '/bæŋk/', ex: 'The bank is near the market.' },
          { en: 'Hospital', ar: 'مستشفى', pron: 'هوسبيتَل', ipa: '/ˈhɒspɪtl/', ex: 'My mother works at the hospital.' },
          { en: 'Hotel', ar: 'فندق', pron: 'هوتيل', ipa: '/həʊˈtel/', ex: 'This hotel has big rooms.' },
          { en: 'Park', ar: 'حديقة عامة', pron: 'بارك', ipa: '/pɑːk/', ex: 'We play in the park.' },
          { en: 'Market', ar: 'سوق', pron: 'ماركِت', ipa: '/ˈmɑːkɪt/', ex: 'I buy fruit at the market.' },
        ],
        sentences: [
          { en: 'There is a bank here.', ar: 'يوجد مصرف هنا.', pron: 'ذير إز أ بانك هير', ipa: '/ðeər ɪz ə bæŋk hɪə/' },
          { en: 'The hospital is near the park.', ar: 'المستشفى قريب من الحديقة العامة.', pron: 'ذَ هوسبيتَل إز نير ذَ بارك', ipa: '/ðə ˈhɒspɪtl ɪz nɪə ðə pɑːk/' },
          { en: 'This hotel is very small.', ar: 'هذا الفندق صغير جداً.', pron: 'ذِس هوتيل إز فيري سمول', ipa: '/ðɪs həʊˈtel ɪz ˈveri smɔːl/' },
        ],
        grammar: { rule: 'نستخدم There is لوجود شيء مفرد.', prompt: 'There ___ a park here.', ar: 'توجد حديقة عامة هنا.', options: ['is', 'are', 'am'], answer: 'is' },
      },
      {
        title: 'الاتجاهات',
        words: [
          { en: 'Left', ar: 'يسار', pron: 'ليفت', ipa: '/left/', ex: 'The bank is on your left.' },
          { en: 'Right', ar: 'يمين', pron: 'رايت', ipa: '/raɪt/', ex: 'The shop is on your right.' },
          { en: 'Turn', ar: 'ينعطف', pron: 'تيرن', ipa: '/tɜːn/', ex: 'Turn left at the bank.' },
          { en: 'Go', ar: 'يذهب', pron: 'غو', ipa: '/ɡəʊ/', ex: 'Go straight to the park.' },
          { en: 'Stop', ar: 'يتوقف', pron: 'ستوب', ipa: '/stɒp/', ex: 'Please stop at the shop.' },
        ],
        sentences: [
          { en: 'Turn right at the hotel.', ar: 'انعطف يميناً عند الفندق.', pron: 'تيرن رايت أت ذَ هوتيل', ipa: '/tɜːn raɪt æt ðə həʊˈtel/' },
          { en: 'Go straight to the bank.', ar: 'اذهب مباشرة إلى المصرف.', pron: 'غو ستريت تَ ذَ بانك', ipa: '/ɡəʊ streɪt tə ðə bæŋk/' },
          { en: 'Stop here please.', ar: 'توقف هنا من فضلك.', pron: 'ستوب هير بليز', ipa: '/stɒp hɪə pliːz/' },
        ],
        grammar: { rule: 'نستخدم الفعل بصيغته الأساسية في الأمر مثل Turn left.', prompt: '___ left at the bank.', ar: 'انعطف يساراً عند المصرف.', options: ['Turn', 'Turns', 'Turning'], answer: 'Turn' },
      },
      {
        title: 'المواصلات',
        words: [
          { en: 'Bus', ar: 'حافلة', pron: 'بَس', ipa: '/bʌs/', ex: 'I take the bus to school.' },
          { en: 'Train', ar: 'قطار', pron: 'ترين', ipa: '/treɪn/', ex: 'The train is very long.' },
          { en: 'Taxi', ar: 'سيارة أجرة', pron: 'تاكسي', ipa: '/ˈtæksi/', ex: 'We need a taxi now.' },
          { en: 'Plane', ar: 'طائرة', pron: 'بلين', ipa: '/pleɪn/', ex: 'The plane is in the sky.' },
          { en: 'Ticket', ar: 'تذكرة', pron: 'تيكِت', ipa: '/ˈtɪkɪt/', ex: 'I have a train ticket.' },
        ],
        sentences: [
          { en: 'There are two buses here.', ar: 'توجد حافلتان هنا.', pron: 'ذير آر تو بَسِز هير', ipa: '/ðeər ɑː tuː ˈbʌsɪz hɪə/' },
          { en: 'This is my train ticket.', ar: 'هذه تذكرة القطار الخاصة بي.', pron: 'ذِس إز ماي ترين تيكِت', ipa: '/ðɪs ɪz maɪ treɪn ˈtɪkɪt/' },
          { en: 'The taxi is outside.', ar: 'سيارة الأجرة في الخارج.', pron: 'ذَ تاكسي إز آوتسايد', ipa: '/ðə ˈtæksi ɪz ˌaʊtˈsaɪd/' },
        ],
        grammar: { rule: 'نستخدم There are لوجود أشياء بصيغة الجمع.', prompt: 'There ___ three taxis here.', ar: 'توجد ثلاث سيارات أجرة هنا.', options: ['are', 'is', 'am'], answer: 'are' },
      },
      {
        title: 'السفر',
        words: [
          { en: 'Airport', ar: 'مطار', pron: 'إيربورت', ipa: '/ˈeəpɔːt/', ex: 'We are at the airport.' },
          { en: 'Station', ar: 'محطة', pron: 'ستيشن', ipa: '/ˈsteɪʃn/', ex: 'The station is near our hotel.' },
          { en: 'Map', ar: 'خريطة', pron: 'ماب', ipa: '/mæp/', ex: 'This map shows the city.' },
          { en: 'Road', ar: 'طريق', pron: 'رود', ipa: '/rəʊd/', ex: 'This road is very long.' },
          { en: 'Walk', ar: 'يمشي', pron: 'ووك', ipa: '/wɔːk/', ex: 'I walk to school every day.' },
        ],
        sentences: [
          { en: 'Where is the airport?', ar: 'أين المطار؟', pron: 'وِير إز ذي إيربورت', ipa: '/weər ɪz ði ˈeəpɔːt/' },
          { en: 'Look at this map.', ar: 'انظر إلى هذه الخريطة.', pron: 'لوك أت ذِس ماب', ipa: '/lʊk æt ðɪs mæp/' },
          { en: 'Walk to the station.', ar: 'امشِ إلى المحطة.', pron: 'ووك تَ ذَ ستيشن', ipa: '/wɔːk tə ðə ˈsteɪʃn/' },
        ],
        grammar: { rule: 'نستخدم Where is للسؤال عن مكان شيء مفرد.', prompt: '___ is the station?', ar: 'أين المحطة؟', options: ['Where', 'Who', 'When'], answer: 'Where' },
      },
      {
        title: 'أين المكان؟',
        words: [
          { en: 'Behind', ar: 'خلف', pron: 'بيهايند', ipa: '/bɪˈhaɪnd/', ex: 'The bank is behind the hotel.' },
          { en: 'Between', ar: 'بين', pron: 'بيتوين', ipa: '/bɪˈtwiːn/', ex: 'The shop is between two banks.' },
          { en: 'Far', ar: 'بعيد', pron: 'فار', ipa: '/fɑː/', ex: 'The airport is far from here.' },
          { en: 'Way', ar: 'طريق', pron: 'وي', ipa: '/weɪ/', ex: 'This is the way home.' },
          { en: 'Building', ar: 'مبنى', pron: 'بيلدينغ', ipa: '/ˈbɪldɪŋ/', ex: 'That building is a hospital.' },
        ],
        sentences: [
          { en: 'The park is behind this building.', ar: 'الحديقة العامة خلف هذا المبنى.', pron: 'ذَ بارك إز بيهايند ذِس بيلدينغ', ipa: '/ðə pɑːk ɪz bɪˈhaɪnd ðɪs ˈbɪldɪŋ/' },
          { en: 'Is the market far from here?', ar: 'هل السوق بعيد من هنا؟', pron: 'إز ذَ ماركِت فار فرَم هير', ipa: '/ɪz ðə ˈmɑːkɪt fɑː frəm hɪə/' },
          { en: 'This is the way home.', ar: 'هذا هو الطريق إلى المنزل.', pron: 'ذِس إز ذَ وي هوم', ipa: '/ðɪs ɪz ðə weɪ həʊm/' },
        ],
        grammar: { rule: 'نقدم Is على there في سؤال المفرد: Is there...?', prompt: '___ there a bank behind this building?', ar: 'هل يوجد مصرف خلف هذا المبنى؟', options: ['Is', 'Are', 'Am'], answer: 'Is' },
      },
    ],
  },
  {
    id: 'A1-8',
    level: 'A1',
    topic: 'الوقت والمواعيد',
    lessons: [
      {
        title: 'الساعة',
        words: [
          { en: 'Hour', ar: 'ساعة زمنية', pron: 'آوَر', ipa: '/ˈaʊə/', ex: 'The lesson lasts one hour.' },
          { en: 'Minute', ar: 'دقيقة', pron: 'مينِت', ipa: '/ˈmɪnɪt/', ex: 'Please wait for one minute.' },
          { en: 'Clock', ar: 'ساعة حائط', pron: 'كلوك', ipa: '/klɒk/', ex: 'The clock is on the wall.' },
          { en: "O'clock", ar: 'تمام الساعة', pron: 'أَكلوك', ipa: '/əˈklɒk/', ex: "It is three o'clock now." },
          { en: 'Half', ar: 'نصف', pron: 'هاف', ipa: '/hɑːf/', ex: 'It is half past six.' },
        ],
        sentences: [
          { en: "It is five o'clock.", ar: 'إنها الساعة الخامسة تماماً.', pron: 'إت إز فايف أَكلوك', ipa: '/ɪt ɪz faɪv əˈklɒk/' },
          { en: 'It is half past two.', ar: 'إنها الساعة الثانية والنصف.', pron: 'إت إز هاف باست تو', ipa: '/ɪt ɪz hɑːf pɑːst tuː/' },
          { en: 'Look at the clock.', ar: 'انظر إلى ساعة الحائط.', pron: 'لوك أت ذَ كلوك', ipa: '/lʊk æt ðə klɒk/' },
        ],
        grammar: { rule: 'نسأل عن الساعة بعبارة What time is it?', prompt: 'What time ___ it?', ar: 'كم الساعة؟', options: ['is', 'are', 'am'], answer: 'is' },
      },
      {
        title: 'أجزاء اليوم',
        words: [
          { en: 'Afternoon', ar: 'بعد الظهر', pron: 'آفتَنون', ipa: '/ˌɑːftəˈnuːn/', ex: 'I read in the afternoon.' },
          { en: 'Evening', ar: 'مساء', pron: 'إيفنينغ', ipa: '/ˈiːvnɪŋ/', ex: 'We eat dinner in the evening.' },
          { en: 'Yesterday', ar: 'أمس', pron: 'يِستَدي', ipa: '/ˈjestədeɪ/', ex: 'I was at home yesterday.' },
          { en: 'Tonight', ar: 'هذه الليلة', pron: 'تَنايت', ipa: '/təˈnaɪt/', ex: 'We are at home tonight.' },
          { en: 'Weekend', ar: 'عطلة نهاية الأسبوع', pron: 'ويك إند', ipa: '/ˌwiːkˈend/', ex: 'I visit family at the weekend.' },
        ],
        sentences: [
          { en: 'I study in the afternoon.', ar: 'أدرس بعد الظهر.', pron: 'آي ستَدي إن ذي آفتَنون', ipa: '/aɪ ˈstʌdi ɪn ði ˌɑːftəˈnuːn/' },
          { en: 'We read in the evening.', ar: 'نقرأ في المساء.', pron: 'وي ريد إن ذي إيفنينغ', ipa: '/wiː riːd ɪn ði ˈiːvnɪŋ/' },
          { en: 'My brother is home tonight.', ar: 'أخي في المنزل هذه الليلة.', pron: 'ماي براذَر إز هوم تَنايت', ipa: '/maɪ ˈbrʌðər ɪz həʊm təˈnaɪt/' },
        ],
        grammar: { rule: 'نستخدم in the مع أجزاء اليوم مثل in the afternoon.', prompt: 'I read ___ the evening.', ar: 'أقرأ في المساء.', options: ['in', 'on', 'at'], answer: 'in' },
      },
      {
        title: 'أيام الأسبوع',
        words: [
          { en: 'Sunday', ar: 'الأحد', pron: 'سَندي', ipa: '/ˈsʌndeɪ/', ex: 'We visit our grandmother on Sunday.' },
          { en: 'Tuesday', ar: 'الثلاثاء', pron: 'تيوزدي', ipa: '/ˈtjuːzdeɪ/', ex: 'My English lesson is on Tuesday.' },
          { en: 'Wednesday', ar: 'الأربعاء', pron: 'وينزدي', ipa: '/ˈwenzdeɪ/', ex: 'I play football on Wednesday.' },
          { en: 'Thursday', ar: 'الخميس', pron: 'ثيرزدي', ipa: '/ˈθɜːzdeɪ/', ex: 'We go shopping on Thursday.' },
          { en: 'Saturday', ar: 'السبت', pron: 'ساتَدي', ipa: '/ˈsætədeɪ/', ex: 'The shop is closed on Saturday.' },
        ],
        sentences: [
          { en: 'I work on Sunday.', ar: 'أعمل يوم الأحد.', pron: 'آي وِرك أون سَندي', ipa: '/aɪ wɜːk ɒn ˈsʌndeɪ/' },
          { en: 'Our lesson is on Tuesday.', ar: 'درسنا يوم الثلاثاء.', pron: 'آوَر ليسَن إز أون تيوزدي', ipa: '/aʊə ˈlesn ɪz ɒn ˈtjuːzdeɪ/' },
          { en: 'We visit family on Saturday.', ar: 'نزور العائلة يوم السبت.', pron: 'وي فيزِت فاميلي أون ساتَدي', ipa: '/wiː ˈvɪzɪt ˈfæməli ɒn ˈsætədeɪ/' },
        ],
        grammar: { rule: 'نستخدم on مع أيام الأسبوع وat مع وقت محدد.', prompt: "We meet on Thursday ___ six o'clock.", ar: 'نلتقي يوم الخميس في الساعة السادسة تماماً.', options: ['at', 'in', 'on'], answer: 'at' },
      },
      {
        title: 'الأشهر والفصول',
        words: [
          { en: 'Month', ar: 'شهر', pron: 'مَنث', ipa: '/mʌnθ/', ex: 'This month has thirty days.' },
          { en: 'Year', ar: 'سنة', pron: 'يير', ipa: '/jɪə/', ex: 'There are twelve months in a year.' },
          { en: 'January', ar: 'يناير', pron: 'جانيوَري', ipa: '/ˈdʒænjuəri/', ex: 'My birthday is in January.' },
          { en: 'Summer', ar: 'صيف', pron: 'سَمَر', ipa: '/ˈsʌmə/', ex: 'We swim in the summer.' },
          { en: 'Winter', ar: 'شتاء', pron: 'وينتَر', ipa: '/ˈwɪntə/', ex: 'I wear a coat in winter.' },
        ],
        sentences: [
          { en: 'January is the first month.', ar: 'يناير هو الشهر الأول.', pron: 'جانيوَري إز ذَ فيرست مَنث', ipa: '/ˈdʒænjuəri ɪz ðə fɜːst mʌnθ/' },
          { en: 'We travel in summer.', ar: 'نسافر في الصيف.', pron: 'وي ترافَل إن سَمَر', ipa: '/wiː ˈtrævl ɪn ˈsʌmə/' },
          { en: 'The days are short in winter.', ar: 'الأيام قصيرة في الشتاء.', pron: 'ذَ ديز آر شورت إن وينتَر', ipa: '/ðə deɪz ɑː ʃɔːt ɪn ˈwɪntə/' },
        ],
        grammar: { rule: 'نستخدم in مع الأشهر والفصول مثل in January وin summer.', prompt: 'My birthday is ___ January.', ar: 'عيد ميلادي في يناير.', options: ['in', 'at', 'on'], answer: 'in' },
      },
      {
        title: 'كم مرة؟',
        words: [
          { en: 'Always', ar: 'دائماً', pron: 'أولويز', ipa: '/ˈɔːlweɪz/', ex: 'I always wash my hands.' },
          { en: 'Never', ar: 'أبداً', pron: 'نيفَر', ipa: '/ˈnevə/', ex: 'I never sleep in class.' },
          { en: 'Usually', ar: 'عادةً', pron: 'يوجوَلي', ipa: '/ˈjuːʒuəli/', ex: 'We usually eat at home.' },
          { en: 'Sometimes', ar: 'أحياناً', pron: 'سَمتايمز', ipa: '/ˈsʌmtaɪmz/', ex: 'I sometimes walk to school.' },
          { en: 'Often', ar: 'غالباً', pron: 'أوفَن', ipa: '/ˈɒfn/', ex: 'We often visit our grandmother.' },
        ],
        sentences: [
          { en: 'I always eat breakfast.', ar: 'أتناول الإفطار دائماً.', pron: 'آي أولويز إيت بريكفَست', ipa: '/aɪ ˈɔːlweɪz iːt ˈbrekfəst/' },
          { en: 'She is never late.', ar: 'هي لا تتأخر أبداً.', pron: 'شي إز نيفَر ليت', ipa: '/ʃiː ɪz ˈnevə leɪt/' },
          { en: 'We usually walk home.', ar: 'نمشي إلى المنزل عادةً.', pron: 'وي يوجوَلي ووك هوم', ipa: '/wiː ˈjuːʒuəli wɔːk həʊm/' },
        ],
        grammar: { rule: 'ظرف التكرار قبل الفعل العادي وبعد be: always eat / is always.', prompt: 'She ___ late for school.', ar: 'هي لا تتأخر عن المدرسة أبداً.', options: ['is never', 'never is', 'never'], answer: 'is never' },
      },
    ],
  },

  {
    id: 'A1-9',
    level: 'A1',
    topic: 'الجسم والصحة',
    lessons: [
      {
        title: 'الجسم',
        words: [
          { en: 'Head', ar: 'رأس', pron: 'هِد', ipa: '/hed/', ex: 'My head hurts a little.' },
          { en: 'Hand', ar: 'يد', pron: 'هاند', ipa: '/hænd/', ex: 'Put your hand on the table.' },
          { en: 'Eye', ar: 'عين', pron: 'آي', ipa: '/aɪ/', ex: 'My left eye is red.' },
          { en: 'Face', ar: 'وجه', pron: 'فيس', ipa: '/feɪs/', ex: 'Wash your face every morning.' },
          { en: 'Foot', ar: 'قدم', pron: 'فُت', ipa: '/fʊt/', ex: 'My right foot is cold.' },
        ],
        sentences: [
          { en: 'My head hurts.', ar: 'رأسي يؤلمني.', pron: 'ماي هِد هيرتس', ipa: '/maɪ hed hɜːts/' },
          { en: 'Your hand is cold.', ar: 'يدك باردة.', pron: 'يور هاند إز كولد', ipa: '/jɔː hænd ɪz kəʊld/' },
          { en: 'I have a small foot.', ar: 'لدي قدم صغيرة.', pron: 'آي هاف أ سمول فُت', ipa: '/aɪ hæv ə smɔːl fʊt/' },
        ],
        grammar: { rule: 'نستخدم have مع I و you و we و they للتعبير عن الامتلاك.', prompt: 'I ___ two eyes.', ar: 'لدي عينان.', options: ['have', 'has', 'having'], answer: 'have' },
      },
      {
        title: 'أجزاء أخرى',
        words: [
          { en: 'Arm', ar: 'ذراع', pron: 'آم', ipa: '/ɑːm/', ex: 'His arm is very strong.' },
          { en: 'Leg', ar: 'ساق', pron: 'لِغ', ipa: '/leɡ/', ex: 'My leg hurts after football.' },
          { en: 'Ear', ar: 'أذن', pron: 'إيَر', ipa: '/ɪə/', ex: 'Her left ear is small.' },
          { en: 'Mouth', ar: 'فم', pron: 'ماوث', ipa: '/maʊθ/', ex: 'Please open your mouth now.' },
          { en: 'Hair', ar: 'شعر', pron: 'هيَر', ipa: '/heə/', ex: 'She has long black hair.' },
        ],
        sentences: [
          { en: 'He has long hair.', ar: 'لديه شعر طويل.', pron: 'هي هاز لونغ هيَر', ipa: '/hiː hæz lɒŋ heə/' },
          { en: 'Her arm is strong.', ar: 'ذراعها قوية.', pron: 'هَر آم إز سترونغ', ipa: '/hɜː ɑːm ɪz strɒŋ/' },
          { en: 'Open your mouth please.', ar: 'افتح فمك من فضلك.', pron: 'أوبَن يور ماوث بليز', ipa: '/ˈəʊpən jɔː maʊθ pliːz/' },
        ],
        grammar: { rule: 'نستخدم has مع he و she و it للتعبير عن الامتلاك.', prompt: 'She ___ long hair.', ar: 'لديها شعر طويل.', options: ['have', 'has', 'having'], answer: 'has' },
      },
      {
        title: 'عند الطبيب',
        words: [
          { en: 'Sick', ar: 'مريض', pron: 'سِك', ipa: '/sɪk/', ex: 'My brother is sick today.' },
          { en: 'Help', ar: 'يساعد', pron: 'هِلب', ipa: '/help/', ex: 'I help my sick mother.' },
          { en: 'Medicine', ar: 'دواء', pron: 'مِدسِن', ipa: '/ˈmedsən/', ex: 'Take your medicine after breakfast.' },
          { en: 'Feel', ar: 'يشعر', pron: 'فيل', ipa: '/fiːl/', ex: 'I feel much better today.' },
          { en: 'Rest', ar: 'يستريح', pron: 'رِست', ipa: '/rest/', ex: 'I rest after my work.' },
        ],
        sentences: [
          { en: 'She feels sick today.', ar: 'تشعر بالمرض اليوم.', pron: 'شي فيلز سِك توداي', ipa: '/ʃiː fiːlz sɪk təˈdeɪ/' },
          { en: 'I need some medicine.', ar: 'أحتاج إلى بعض الدواء.', pron: 'آي نيد سَم مِدسِن', ipa: '/aɪ niːd səm ˈmedsən/' },
          { en: 'He rests at home.', ar: 'هو يستريح في المنزل.', pron: 'هي رِستس أت هوم', ipa: '/hiː rests æt həʊm/' },
        ],
        grammar: { rule: 'نضيف s للفعل في المضارع البسيط مع he و she: feel → feels.', prompt: 'She ___ sick today.', ar: 'تشعر بالمرض اليوم.', options: ['feel', 'feels', 'feeling'], answer: 'feels' },
      },
      {
        title: 'الرياضة والصحة',
        words: [
          { en: 'Healthy', ar: 'بصحة جيدة', pron: 'هِلثي', ipa: '/ˈhelθi/', ex: 'My children are very healthy.' },
          { en: 'Sport', ar: 'رياضة', pron: 'سبورت', ipa: '/spɔːt/', ex: 'Sport is good for you.' },
          { en: 'Run', ar: 'يركض', pron: 'رَن', ipa: '/rʌn/', ex: 'I run in the park.' },
          { en: 'Swim', ar: 'يسبح', pron: 'سوِم', ipa: '/swɪm/', ex: 'We swim in the sea.' },
          { en: 'Body', ar: 'جسم', pron: 'بودي', ipa: '/ˈbɒdi/', ex: 'Water is good for your body.' },
        ],
        sentences: [
          { en: 'He runs every morning.', ar: 'يركض كل صباح.', pron: 'هي رَنز إفري مورنينغ', ipa: '/hiː rʌnz ˈevri ˈmɔːnɪŋ/' },
          { en: 'She swims after school.', ar: 'تسبح بعد المدرسة.', pron: 'شي سوِمز آفتر سكول', ipa: '/ʃiː swɪmz ˈɑːftə skuːl/' },
          { en: 'Sport keeps your body healthy.', ar: 'تحافظ الرياضة على صحة جسمك.', pron: 'سبورت كيبس يور بودي هِلثي', ipa: '/spɔːt kiːps jɔː ˈbɒdi ˈhelθi/' },
        ],
        grammar: { rule: 'نستخدم your قبل الاسم للدلالة على ملكية المخاطب: your body.', prompt: 'You have a healthy body. ___ body is healthy.', ar: 'لديك جسم سليم. جسمك سليم.', options: ['Your', 'His', 'Her'], answer: 'Your' },
      },
      {
        title: 'الوصف',
        words: [
          { en: 'Tall', ar: 'طويل القامة', pron: 'تول', ipa: '/tɔːl/', ex: 'My brother is very tall.' },
          { en: 'Young', ar: 'صغير السن', pron: 'يَنغ', ipa: '/jʌŋ/', ex: 'The young boy likes football.' },
          { en: 'Old', ar: 'كبير السن', pron: 'أولد', ipa: '/əʊld/', ex: 'The old man walks daily.' },
          { en: 'Beautiful', ar: 'جميل', pron: 'بيوتِفُل', ipa: '/ˈbjuːtɪfəl/', ex: 'She has a beautiful smile.' },
          { en: 'Strong', ar: 'قوي', pron: 'سترونغ', ipa: '/strɒŋ/', ex: 'My father is very strong.' },
        ],
        sentences: [
          { en: 'My father is tall.', ar: 'أبي طويل القامة.', pron: 'ماي فاذَر إز تول', ipa: '/maɪ ˈfɑːðər ɪz tɔːl/' },
          { en: 'His brother is young.', ar: 'أخوه صغير السن.', pron: 'هِز براذَر إز يَنغ', ipa: '/hɪz ˈbrʌðər ɪz jʌŋ/' },
          { en: 'Her mother is strong.', ar: 'أمها قوية.', pron: 'هَر ماذَر إز سترونغ', ipa: '/hɜː ˈmʌðər ɪz strɒŋ/' },
        ],
        grammar: { rule: 'للملكية نستخدم my للمتكلم و his للمذكر و her للمؤنث قبل الاسم.', prompt: 'Sara has a brother. ___ brother is tall.', ar: 'لسارة أخ. أخوها طويل القامة.', options: ['Her', 'His', 'My'], answer: 'Her' },
      },
    ],
  },
  {
    id: 'A1-10',
    level: 'A1',
    topic: 'الطقس والطبيعة',
    lessons: [
      {
        title: 'الطقس',
        words: [
          { en: 'Weather', ar: 'طقس', pron: 'وِذَر', ipa: '/ˈweðə/', ex: 'The weather is nice today.' },
          { en: 'Sun', ar: 'شمس', pron: 'سَن', ipa: '/sʌn/', ex: 'The sun is very bright.' },
          { en: 'Rain', ar: 'مطر', pron: 'رين', ipa: '/reɪn/', ex: 'The rain is heavy today.' },
          { en: 'Wind', ar: 'رياح', pron: 'وِند', ipa: '/wɪnd/', ex: 'The wind is cold today.' },
          { en: 'Snow', ar: 'ثلج', pron: 'سنو', ipa: '/snəʊ/', ex: 'The snow covers our garden.' },
        ],
        sentences: [
          { en: 'The weather is cold.', ar: 'الطقس بارد.', pron: 'ذا وِذَر إز كولد', ipa: '/ðə ˈweðər ɪz kəʊld/' },
          { en: 'The sun is bright.', ar: 'الشمس ساطعة.', pron: 'ذا سَن إز برايت', ipa: '/ðə sʌn ɪz braɪt/' },
          { en: 'The wind is strong.', ar: 'الرياح قوية.', pron: 'ذا وِند إز سترونغ', ipa: '/ðə wɪnd ɪz strɒŋ/' },
        ],
        grammar: { rule: 'نستخدم is مع الاسم المفرد أو غير المعدود: The weather is cold.', prompt: 'The weather ___ cold.', ar: 'الطقس بارد.', options: ['is', 'are', 'am'], answer: 'is' },
      },
      {
        title: 'وصف الطقس',
        words: [
          { en: 'Warm', ar: 'دافئ', pron: 'وورم', ipa: '/wɔːm/', ex: 'The water is warm today.' },
          { en: 'Cool', ar: 'معتدل البرودة', pron: 'كول', ipa: '/kuːl/', ex: 'The evening is cool here.' },
          { en: 'Sunny', ar: 'مشمس', pron: 'سَني', ipa: '/ˈsʌni/', ex: 'It is sunny this morning.' },
          { en: 'Wet', ar: 'مبلل', pron: 'وِت', ipa: '/wet/', ex: 'My shoes are wet now.' },
          { en: 'Dry', ar: 'جاف', pron: 'دراي', ipa: '/draɪ/', ex: 'The ground is dry today.' },
        ],
        sentences: [
          { en: "It's sunny today.", ar: 'الجو مشمس اليوم.', pron: 'إتس سَني توداي', ipa: '/ɪts ˈsʌni təˈdeɪ/' },
          { en: "It's warm outside.", ar: 'الجو دافئ في الخارج.', pron: 'إتس وورم آوتسايد', ipa: '/ɪts wɔːm ˌaʊtˈsaɪd/' },
          { en: 'My coat is wet.', ar: 'معطفي مبلل.', pron: 'ماي كوت إز وِت', ipa: '/maɪ kəʊt ɪz wet/' },
        ],
        grammar: { rule: "لوصف الطقس نستخدم It's + صفة مثل It's sunny.", prompt: '___ sunny today.', ar: 'الجو مشمس اليوم.', options: ["It's", 'They are', 'I am'], answer: "It's" },
      },
      {
        title: 'الفصول',
        words: [
          { en: 'Spring', ar: 'ربيع', pron: 'سبرينغ', ipa: '/sprɪŋ/', ex: 'We see flowers in spring.' },
          { en: 'Autumn', ar: 'خريف', pron: 'أوتَم', ipa: '/ˈɔːtəm/', ex: 'Leaves fall from trees in autumn.' },
          { en: 'Season', ar: 'فصل', pron: 'سيزَن', ipa: '/ˈsiːzən/', ex: 'Summer is my favourite season.' },
          { en: 'Sky', ar: 'سماء', pron: 'سكاي', ipa: '/skaɪ/', ex: 'The sky is blue today.' },
          { en: 'Tree', ar: 'شجرة', pron: 'تري', ipa: '/triː/', ex: 'A bird sits in the tree.' },
        ],
        sentences: [
          { en: 'The trees are green.', ar: 'الأشجار خضراء.', pron: 'ذا تريز آر غرين', ipa: '/ðə triːz ɑː ɡriːn/' },
          { en: 'The sky is blue.', ar: 'السماء زرقاء.', pron: 'ذا سكاي إز بلو', ipa: '/ðə skaɪ ɪz bluː/' },
          { en: 'Spring is my favourite season.', ar: 'الربيع فصلي المفضل.', pron: 'سبرينغ إز ماي فيفَرِت سيزَن', ipa: '/sprɪŋ ɪz maɪ ˈfeɪvərɪt ˈsiːzən/' },
        ],
        grammar: { rule: 'نستخدم are مع الأسماء الجمع: The trees are green.', prompt: 'The trees ___ green.', ar: 'الأشجار خضراء.', options: ['are', 'is', 'am'], answer: 'are' },
      },
      {
        title: 'الطبيعة',
        words: [
          { en: 'Sea', ar: 'بحر', pron: 'سي', ipa: '/siː/', ex: 'We can swim in the sea.' },
          { en: 'Beach', ar: 'شاطئ', pron: 'بيتش', ipa: '/biːtʃ/', ex: 'The children play on the beach.' },
          { en: 'River', ar: 'نهر', pron: 'رِفَر', ipa: '/ˈrɪvə/', ex: 'The river is near our house.' },
          { en: 'Mountain', ar: 'جبل', pron: 'ماونتِن', ipa: '/ˈmaʊntɪn/', ex: 'We can see a mountain.' },
          { en: 'Flower', ar: 'زهرة', pron: 'فلاوَر', ipa: '/ˈflaʊə/', ex: 'This flower is very small.' },
        ],
        sentences: [
          { en: 'We can see the sea.', ar: 'نستطيع رؤية البحر.', pron: 'وي كان سي ذا سي', ipa: '/wiː kæn siː ðə siː/' },
          { en: 'The beach is near here.', ar: 'الشاطئ قريب من هنا.', pron: 'ذا بيتش إز نيَر هيَر', ipa: '/ðə biːtʃ ɪz nɪə hɪə/' },
          { en: 'This flower is yellow.', ar: 'هذه الزهرة صفراء.', pron: 'ذِس فلاوَر إز يِلو', ipa: '/ðɪs ˈflaʊər ɪz ˈjeləʊ/' },
        ],
        grammar: { rule: 'بعد can نستخدم الفعل بصيغته الأساسية: can see.', prompt: 'We can ___ the mountain.', ar: 'نستطيع رؤية الجبل.', options: ['see', 'sees', 'seeing'], answer: 'see' },
      },
      {
        title: 'الحيوانات',
        words: [
          { en: 'Dog', ar: 'كلب', pron: 'دوغ', ipa: '/dɒɡ/', ex: 'The dog runs in the garden.' },
          { en: 'Cat', ar: 'قطة', pron: 'كات', ipa: '/kæt/', ex: 'Our cat sleeps on the chair.' },
          { en: 'Bird', ar: 'طائر', pron: 'بيرد', ipa: '/bɜːd/', ex: 'A bird can fly high.' },
          { en: 'Horse', ar: 'حصان', pron: 'هورس', ipa: '/hɔːs/', ex: 'This horse can run fast.' },
          { en: 'Animal', ar: 'حيوان', pron: 'أنِمَل', ipa: '/ˈænɪməl/', ex: 'What animal can you see?' },
        ],
        sentences: [
          { en: 'A bird can fly.', ar: 'يستطيع الطائر الطيران.', pron: 'أ بيرد كان فلاي', ipa: '/ə bɜːd kæn flaɪ/' },
          { en: "A horse can't fly.", ar: 'لا يستطيع الحصان الطيران.', pron: 'أ هورس كانت فلاي', ipa: '/ə hɔːs kɑːnt flaɪ/' },
          { en: 'The cat is small.', ar: 'القطة صغيرة.', pron: 'ذا كات إز سمول', ipa: '/ðə kæt ɪz smɔːl/' },
        ],
        grammar: { rule: "نستخدم can't + الفعل الأساسي لنفي القدرة.", prompt: 'A horse ___ fly.', ar: 'لا يستطيع الحصان الطيران.', options: ["can't", 'can', 'is'], answer: "can't" },
      },
    ],
  },
  {
    id: 'A1-11',
    level: 'A1',
    topic: 'الهوايات ووقت الفراغ',
    lessons: [
      {
        title: 'الموسيقى',
        words: [
          { en: 'Music', ar: 'موسيقى', pron: 'ميوزِك', ipa: '/ˈmjuːzɪk/', ex: 'I listen to music at home.' },
          { en: 'Song', ar: 'أغنية', pron: 'سونغ', ipa: '/sɒŋ/', ex: 'This song is very nice.' },
          { en: 'Dance', ar: 'يرقص', pron: 'دانس', ipa: '/dɑːns/', ex: 'We dance at family parties.' },
          { en: 'Sing', ar: 'يغني', pron: 'سينغ', ipa: '/sɪŋ/', ex: 'The children sing at school.' },
          { en: 'Play', ar: 'يعزف', pron: 'بلاي', ipa: '/pleɪ/', ex: 'I play the piano every day.' },
        ],
        sentences: [
          { en: 'I like singing songs.', ar: 'أحب غناء الأغاني.', pron: 'آي لايك سينغينغ سونغز', ipa: '/aɪ laɪk ˈsɪŋɪŋ sɒŋz/' },
          { en: 'She can play the piano.', ar: 'تستطيع العزف على البيانو.', pron: 'شي كان بلاي ذا بيانو', ipa: '/ʃiː kæn pleɪ ðə piˈænəʊ/' },
          { en: 'We like this music.', ar: 'نحب هذه الموسيقى.', pron: 'وي لايك ذِس ميوزِك', ipa: '/wiː laɪk ðɪs ˈmjuːzɪk/' },
        ],
        grammar: { rule: 'للتعبير عن الهوايات نستخدم like + فعل ينتهي بـ ing.', prompt: 'I like ___ songs.', ar: 'أحب غناء الأغاني.', options: ['singing', 'sing', 'sings'], answer: 'singing' },
      },
      {
        title: 'كرة القدم',
        words: [
          { en: 'Football', ar: 'كرة القدم', pron: 'فُتبول', ipa: '/ˈfʊtbɔːl/', ex: 'We play football after school.' },
          { en: 'Game', ar: 'مباراة', pron: 'غيم', ipa: '/ɡeɪm/', ex: 'The game starts at five.' },
          { en: 'Team', ar: 'فريق', pron: 'تيم', ipa: '/tiːm/', ex: 'Our team plays every Saturday.' },
          { en: 'Win', ar: 'يفوز', pron: 'وِن', ipa: '/wɪn/', ex: 'We want to win this game.' },
          { en: 'Ball', ar: 'كرة', pron: 'بول', ipa: '/bɔːl/', ex: 'Please give me the ball.' },
        ],
        sentences: [
          { en: 'Can you play football?', ar: 'هل تستطيع لعب كرة القدم؟', pron: 'كان يو بلاي فُتبول', ipa: '/kæn juː pleɪ ˈfʊtbɔːl/' },
          { en: 'Our team can win.', ar: 'يستطيع فريقنا الفوز.', pron: 'آوَر تيم كان وِن', ipa: '/aʊə tiːm kæn wɪn/' },
          { en: 'The ball is new.', ar: 'الكرة جديدة.', pron: 'ذا بول إز نيو', ipa: '/ðə bɔːl ɪz njuː/' },
        ],
        grammar: { rule: 'لسؤال القدرة نستخدم Can + الفاعل + الفعل الأساسي؟', prompt: '___ you play football?', ar: 'هل تستطيع لعب كرة القدم؟', options: ['Can', 'Are', 'Is'], answer: 'Can' },
      },
      {
        title: 'الأفلام',
        words: [
          { en: 'Film', ar: 'فيلم', pron: 'فِلم', ipa: '/fɪlm/', ex: 'We watch a film on Friday.' },
          { en: 'Watch', ar: 'يشاهد', pron: 'ووتش', ipa: '/wɒtʃ/', ex: 'I watch films with my family.' },
          { en: 'TV', ar: 'تلفاز', pron: 'تي في', ipa: '/ˌtiːˈviː/', ex: 'The TV is in our room.' },
          { en: 'Photo', ar: 'صورة', pron: 'فوتو', ipa: '/ˈfəʊtəʊ/', ex: 'This photo shows my family.' },
          { en: 'Camera', ar: 'كاميرا', pron: 'كامَرا', ipa: '/ˈkæmərə/', ex: 'My camera is in my bag.' },
        ],
        sentences: [
          { en: 'Do you watch TV?', ar: 'هل تشاهد التلفاز؟', pron: 'دو يو ووتش تي في', ipa: '/duː juː wɒtʃ ˌtiːˈviː/' },
          { en: 'I like watching films.', ar: 'أحب مشاهدة الأفلام.', pron: 'آي لايك ووتشينغ فِلمز', ipa: '/aɪ laɪk ˈwɒtʃɪŋ fɪlmz/' },
          { en: 'This camera takes good photos.', ar: 'تلتقط هذه الكاميرا صوراً جيدة.', pron: 'ذِس كامَرا تيكس غُد فوتوز', ipa: '/ðɪs ˈkæmərə teɪks ɡʊd ˈfəʊtəʊz/' },
        ],
        grammar: { rule: 'نسأل في المضارع البسيط باستخدام Do + you أو we أو they + الفعل الأساسي.', prompt: '___ you watch TV?', ar: 'هل تشاهد التلفاز؟', options: ['Do', 'Does', 'Are'], answer: 'Do' },
      },
      {
        title: 'القراءة والرسم',
        words: [
          { en: 'Story', ar: 'قصة', pron: 'ستوري', ipa: '/ˈstɔːri/', ex: 'I read a story every night.' },
          { en: 'Draw', ar: 'يرسم', pron: 'درو', ipa: '/drɔː/', ex: 'I draw pictures of animals.' },
          { en: 'Newspaper', ar: 'صحيفة', pron: 'نيوزبيبر', ipa: '/ˈnjuːzˌpeɪpə/', ex: 'My father reads the newspaper daily.' },
          { en: 'Magazine', ar: 'مجلة', pron: 'ماغَزين', ipa: '/ˌmæɡəˈziːn/', ex: 'This magazine has beautiful pictures.' },
          { en: 'Art', ar: 'فن', pron: 'آت', ipa: '/ɑːt/', ex: 'We study art at school.' },
        ],
        sentences: [
          { en: 'Does she like art?', ar: 'هل تحب الفن؟', pron: 'دَز شي لايك آت', ipa: '/dʌz ʃiː laɪk ɑːt/' },
          { en: 'He reads a newspaper.', ar: 'هو يقرأ صحيفة.', pron: 'هي ريدز أ نيوزبيبر', ipa: '/hiː riːdz ə ˈnjuːzˌpeɪpə/' },
          { en: 'I draw every day.', ar: 'أرسم كل يوم.', pron: 'آي درو إفري داي', ipa: '/aɪ drɔː ˈevri deɪ/' },
        ],
        grammar: { rule: 'نسأل مع he و she باستخدام Does ثم الفعل الأساسي دون s.', prompt: '___ she like art?', ar: 'هل تحب الفن؟', options: ['Does', 'Do', 'Is'], answer: 'Does' },
      },
      {
        title: 'عطلة نهاية الأسبوع',
        words: [
          { en: 'Visit', ar: 'يزور', pron: 'فِزِت', ipa: '/ˈvɪzɪt/', ex: 'We visit our grandparents on Saturday.' },
          { en: 'Party', ar: 'حفلة', pron: 'باتي', ipa: '/ˈpɑːti/', ex: 'The children enjoy the birthday party.' },
          { en: 'Holiday', ar: 'عطلة', pron: 'هولِداي', ipa: '/ˈhɒlədeɪ/', ex: 'We are on holiday this week.' },
          { en: 'Fun', ar: 'مرح', pron: 'فَن', ipa: '/fʌn/', ex: 'We have fun in the park.' },
          { en: 'Together', ar: 'معاً', pron: 'توغِذَر', ipa: '/təˈɡeðə/', ex: 'We eat together every evening.' },
        ],
        sentences: [
          { en: 'We like visiting family together.', ar: 'نحب زيارة العائلة معاً.', pron: 'وي لايك فِزِتينغ فاميلي توغِذَر', ipa: '/wiː laɪk ˈvɪzɪtɪŋ ˈfæməli təˈɡeðə/' },
          { en: 'The party is fun.', ar: 'الحفلة ممتعة.', pron: 'ذا باتي إز فَن', ipa: '/ðə ˈpɑːti ɪz fʌn/' },
          { en: 'Do they like holidays?', ar: 'هل يحبون العطلات؟', pron: 'دو ذاي لايك هولِدايز', ipa: '/duː ðeɪ laɪk ˈhɒlədeɪz/' },
        ],
        grammar: { rule: 'بعد Does نستخدم الفعل الأساسي: Does he visit وليس visits.', prompt: 'Does he ___ his family on holiday?', ar: 'هل يزور عائلته في العطلة؟', options: ['visit', 'visits', 'visiting'], answer: 'visit' },
      },
    ],
  },

  {
    id: 'A1-12',
    level: 'A1',
    topic: 'أفعال كل يوم',
    lessons: [
      {
        title: 'الروتين',
        words: [
          { en: 'Wash', ar: 'يغسل', pron: 'ووش', ipa: '/wɒʃ/', ex: 'I wash my hands before lunch.' },
          { en: 'Cook', ar: 'يطبخ', pron: 'كوك', ipa: '/kʊk/', ex: 'We cook rice every day.' },
          { en: 'Clean', ar: 'ينظف', pron: 'كلين', ipa: '/kliːn/', ex: 'I clean my room on Fridays.' },
          { en: 'Drink', ar: 'يشرب', pron: 'درينك', ipa: '/drɪŋk/', ex: 'I drink water with lunch.' },
          { en: 'Shower', ar: 'دش', pron: 'شاوَر', ipa: '/ˈʃaʊə/', ex: 'I have a shower every morning.' },
        ],
        sentences: [
          { en: 'I wash my face.', ar: 'أغسل وجهي.', pron: 'آي ووش ماي فيس', ipa: '/aɪ wɒʃ maɪ feɪs/' },
          { en: 'We cook at home.', ar: 'نطبخ في المنزل.', pron: 'وي كوك أت هوم', ipa: '/wiː kʊk ət həʊm/' },
          { en: 'She drinks cold water.', ar: 'هي تشرب ماء بارداً.', pron: 'شي درينكس كولد ووتَر', ipa: '/ʃiː drɪŋks kəʊld ˈwɔːtə/' },
        ],
        grammar: { rule: 'نضيف -s للفعل في المضارع البسيط مع he/she.', prompt: 'She ___ rice every day.', ar: 'هي تطبخ الأرز كل يوم.', options: ['cooks', 'cook', 'cooking'], answer: 'cooks' },
      },
      {
        title: 'الحركة',
        words: [
          { en: 'Come', ar: 'يأتي', pron: 'كَـم', ipa: '/kʌm/', ex: 'Please come to my house.' },
          { en: 'Sit', ar: 'يجلس', pron: 'سِت', ipa: '/sɪt/', ex: 'Please sit on this chair.' },
          { en: 'Stand', ar: 'يقف', pron: 'ستاند', ipa: '/stænd/', ex: 'We stand near the door.' },
          { en: 'Open', ar: 'يفتح', pron: 'أوبَن', ipa: '/ˈəʊpən/', ex: 'I open the shop at eight.' },
          { en: 'Close', ar: 'يغلق', pron: 'كلوز', ipa: '/kləʊz/', ex: 'Please close the window now.' },
        ],
        sentences: [
          { en: "I don't sit here.", ar: 'لا أجلس هنا.', pron: 'آي دونت سِت هيَر', ipa: '/aɪ dəʊnt sɪt hɪə/' },
          { en: 'Please open the door.', ar: 'من فضلك افتح الباب.', pron: 'بليز أوبَن ذا دور', ipa: '/pliːz ˈəʊpən ðə dɔː/' },
          { en: 'They come every day.', ar: 'هم يأتون كل يوم.', pron: 'ذَي كَم إفري داي', ipa: '/ðeɪ kʌm ˈevri deɪ/' },
        ],
        grammar: { rule: "نستخدم don't + الفعل الأساسي للنفي مع I/you/we/they.", prompt: 'We ___ sit here.', ar: 'نحن لا نجلس هنا.', options: ["don't", "doesn't", "isn't"], answer: "don't" },
      },
      {
        title: 'التواصل',
        words: [
          { en: 'Ask', ar: 'يسأل', pron: 'آسك', ipa: '/ɑːsk/', ex: 'Please ask your teacher for help.' },
          { en: 'Answer', ar: 'يجيب', pron: 'آنسَر', ipa: '/ˈɑːnsə/', ex: 'Please answer the question now.' },
          { en: 'Say', ar: 'يقول', pron: 'ساي', ipa: '/seɪ/', ex: 'We say hello every morning.' },
          { en: 'Tell', ar: 'يخبر', pron: 'تِل', ipa: '/tel/', ex: 'Please tell me your name.' },
          { en: 'Call', ar: 'يتصل', pron: 'كول', ipa: '/kɔːl/', ex: 'I call my mother every evening.' },
        ],
        sentences: [
          { en: 'Ask me a question.', ar: 'اسألني سؤالاً.', pron: 'آسك مي أ كويستشَن', ipa: '/ɑːsk miː ə ˈkwestʃən/' },
          { en: "He doesn't answer the phone.", ar: 'هو لا يجيب على الهاتف.', pron: 'هي دازَنت آنسَر ذا فون', ipa: '/hiː ˈdʌzənt ˈɑːnsə ðə fəʊn/' },
          { en: 'Tell me your name.', ar: 'أخبرني باسمك.', pron: 'تِل مي يور نيم', ipa: '/tel miː jɔː neɪm/' },
        ],
        grammar: { rule: "نستخدم doesn't + الفعل الأساسي للنفي مع he/she/it.", prompt: 'He ___ call me every day.', ar: 'هو لا يتصل بي كل يوم.', options: ["doesn't", "don't", "aren't"], answer: "doesn't" },
      },
      {
        title: 'التفكير',
        words: [
          { en: 'Know', ar: 'يعرف', pron: 'نو', ipa: '/nəʊ/', ex: 'I know your brother well.' },
          { en: 'Think', ar: 'يفكر', pron: 'ثينك', ipa: '/θɪŋk/', ex: 'I think about my family.' },
          { en: 'Understand', ar: 'يفهم', pron: 'أندَرستاند', ipa: '/ˌʌndəˈstænd/', ex: 'We understand this English lesson.' },
          { en: 'Remember', ar: 'يتذكر', pron: 'رِميمبَر', ipa: '/rɪˈmembə/', ex: 'I remember my first teacher.' },
          { en: 'Forget', ar: 'ينسى', pron: 'فَغِت', ipa: '/fəˈɡet/', ex: 'I sometimes forget my keys.' },
        ],
        sentences: [
          { en: 'Do you know him?', ar: 'هل تعرفه؟', pron: 'دو يو نو هِم', ipa: '/duː juː nəʊ hɪm/' },
          { en: 'We understand the question.', ar: 'نحن نفهم السؤال.', pron: 'وي أندَرستاند ذا كويستشَن', ipa: '/wiː ˌʌndəˈstænd ðə ˈkwestʃən/' },
          { en: 'I remember your name.', ar: 'أتذكر اسمك.', pron: 'آي رِميمبَر يور نيم', ipa: '/aɪ rɪˈmembə jɔː neɪm/' },
        ],
        grammar: { rule: 'نستخدم Do + you + الفعل الأساسي للسؤال في المضارع البسيط.', prompt: '___ you understand this word?', ar: 'هل تفهم هذه الكلمة؟', options: ['Do', 'Does', 'Is'], answer: 'Do' },
      },
      {
        title: 'الأخذ والعطاء',
        words: [
          { en: 'Give', ar: 'يعطي', pron: 'غِف', ipa: '/ɡɪv/', ex: 'Please give me that book.' },
          { en: 'Take', ar: 'يأخذ', pron: 'تيك', ipa: '/teɪk/', ex: 'Please take your bag home.' },
          { en: 'Bring', ar: 'يحضر', pron: 'برينغ', ipa: '/brɪŋ/', ex: 'Please bring some water today.' },
          { en: 'Find', ar: 'يجد', pron: 'فايند', ipa: '/faɪnd/', ex: 'I cannot find my phone.' },
          { en: 'Need', ar: 'يحتاج', pron: 'نيد', ipa: '/niːd/', ex: 'We need some bread today.' },
        ],
        sentences: [
          { en: 'She is bringing some water.', ar: 'هي تحضر بعض الماء الآن.', pron: 'شي إز برينغينغ سَم ووتَر', ipa: '/ʃiː ɪz ˈbrɪŋɪŋ səm ˈwɔːtə/' },
          { en: 'I need a pen.', ar: 'أحتاج إلى قلم.', pron: 'آي نيد أ بِن', ipa: '/aɪ niːd ə pen/' },
          { en: 'Please take this bag.', ar: 'من فضلك خذ هذه الحقيبة.', pron: 'بليز تيك ذِس باغ', ipa: '/pliːz teɪk ðɪs bæɡ/' },
        ],
        grammar: { rule: 'نستخدم am/is/are + الفعل-ing لحدث يجري الآن.', prompt: 'I ___ taking my bag now.', ar: 'أنا آخذ حقيبتي الآن.', options: ['am', 'is', 'are'], answer: 'am' },
      },
    ],
  },
  {
    id: 'A1-13',
    level: 'A1',
    topic: 'المدرسة والعمل',
    lessons: [
      {
        title: 'في الصف',
        words: [
          { en: 'Class', ar: 'صف', pron: 'كلاس', ipa: '/klɑːs/', ex: 'Our class starts at nine.' },
          { en: 'Lesson', ar: 'درس', pron: 'لِسَن', ipa: '/ˈlesən/', ex: 'This lesson is very easy.' },
          { en: 'Question', ar: 'سؤال', pron: 'كويستشَن', ipa: '/ˈkwestʃən/', ex: 'I have a question today.' },
          { en: 'Test', ar: 'اختبار', pron: 'تِست', ipa: '/test/', ex: 'We have a test tomorrow.' },
          { en: 'Homework', ar: 'واجب منزلي', pron: 'هوم وِرك', ipa: '/ˈhəʊmwɜːk/', ex: 'I do my homework after school.' },
        ],
        sentences: [
          { en: 'This lesson is short.', ar: 'هذا الدرس قصير.', pron: 'ذِس لِسَن إز شورت', ipa: '/ðɪs ˈlesən ɪz ʃɔːt/' },
          { en: 'That question is easy.', ar: 'ذلك السؤال سهل.', pron: 'ذات كويستشَن إز إيزي', ipa: '/ðæt ˈkwestʃən ɪz ˈiːzi/' },
          { en: 'Our homework is here.', ar: 'واجبنا المنزلي هنا.', pron: 'آوَر هوم وِرك إز هيَر', ipa: '/aʊə ˈhəʊmwɜːk ɪz hɪə/' },
        ],
        grammar: { rule: 'نستخدم This is للمفرد القريب وThat is للمفرد البعيد.', prompt: '___ is my class here.', ar: 'هذا صفي هنا.', options: ['This', 'These', 'Those'], answer: 'This' },
      },
      {
        title: 'أدوات الدراسة',
        words: [
          { en: 'Paper', ar: 'ورق', pron: 'بيبَر', ipa: '/ˈpeɪpə/', ex: 'I need some paper today.' },
          { en: 'Pencil', ar: 'قلم رصاص', pron: 'بِنسَل', ipa: '/ˈpensəl/', ex: 'My pencil is on the desk.' },
          { en: 'Computer', ar: 'حاسوب', pron: 'كَـمبيوتَر', ipa: '/kəmˈpjuːtə/', ex: 'This computer is very old.' },
          { en: 'Desk', ar: 'مكتب', pron: 'دِسك', ipa: '/desk/', ex: 'My desk is near the window.' },
          { en: 'Page', ar: 'صفحة', pron: 'بيج', ipa: '/peɪdʒ/', ex: 'Please read the first page.' },
        ],
        sentences: [
          { en: 'These pencils are new.', ar: 'أقلام الرصاص هذه جديدة.', pron: 'ذيز بِنسَلز آر نيو', ipa: '/ðiːz ˈpensəlz ɑː njuː/' },
          { en: 'Those desks are big.', ar: 'تلك المكاتب كبيرة.', pron: 'ذوز دِسكس آر بِغ', ipa: '/ðəʊz desks ɑː bɪɡ/' },
          { en: 'The paper is white.', ar: 'الورق أبيض.', pron: 'ذا بيبَر إز وايت', ipa: '/ðə ˈpeɪpər ɪz waɪt/' },
        ],
        grammar: { rule: 'نستخدم These are للجمع القريب وThose are للجمع البعيد.', prompt: '___ are my pencils here.', ar: 'هذه أقلام الرصاص الخاصة بي هنا.', options: ['These', 'This', 'That'], answer: 'These' },
      },
      {
        title: 'المكتب',
        words: [
          { en: 'Office', ar: 'مكتب', pron: 'أوفِس', ipa: '/ˈɒfɪs/', ex: 'Our office is near the bank.' },
          { en: 'Meeting', ar: 'اجتماع', pron: 'ميتينغ', ipa: '/ˈmiːtɪŋ/', ex: 'The meeting starts at ten.' },
          { en: 'Email', ar: 'بريد إلكتروني', pron: 'إيميل', ipa: '/ˈiːmeɪl/', ex: 'Please read my email today.' },
          { en: 'Manager', ar: 'مدير', pron: 'مانِجَر', ipa: '/ˈmænɪdʒə/', ex: 'Our manager is very kind.' },
          { en: 'Company', ar: 'شركة', pron: 'كَـمبَني', ipa: '/ˈkʌmpəni/', ex: 'My father works for this company.' },
        ],
        sentences: [
          { en: 'Please email me today.', ar: 'من فضلك راسلني بالبريد الإلكتروني اليوم.', pron: 'بليز إيميل مي توداي', ipa: '/pliːz ˈiːmeɪl miː təˈdeɪ/' },
          { en: 'The manager knows him.', ar: 'المدير يعرفه.', pron: 'ذا مانِجَر نوز هِم', ipa: '/ðə ˈmænɪdʒə nəʊz hɪm/' },
          { en: 'Our office is small.', ar: 'مكتبنا صغير.', pron: 'آوَر أوفِس إز سمول', ipa: '/aʊər ˈɒfɪs ɪz smɔːl/' },
        ],
        grammar: { rule: 'نستخدم me بدلاً من I عندما يكون الضمير مفعولاً به.', prompt: 'Please call ___ at the office.', ar: 'من فضلك اتصل بي في المكتب.', options: ['me', 'I', 'my'], answer: 'me' },
      },
      {
        title: 'المهن',
        words: [
          { en: 'Nurse', ar: 'ممرض', pron: 'نِرس', ipa: '/nɜːs/', ex: 'The nurse works at night.' },
          { en: 'Engineer', ar: 'مهندس', pron: 'إنجِنيَر', ipa: '/ˌendʒɪˈnɪə/', ex: 'My brother is an engineer.' },
          { en: 'Farmer', ar: 'مزارع', pron: 'فارمَر', ipa: '/ˈfɑːmə/', ex: 'The farmer has ten sheep.' },
          { en: 'Police', ar: 'شرطة', pron: 'بَليس', ipa: '/pəˈliːs/', ex: 'The police are here now.' },
          { en: 'Pilot', ar: 'طيار', pron: 'بايلَت', ipa: '/ˈpaɪlət/', ex: 'The pilot is on the plane.' },
        ],
        sentences: [
          { en: 'The nurse helps her.', ar: 'الممرض يساعدها.', pron: 'ذا نِرس هِلبس هَر', ipa: '/ðə nɜːs helps hə/' },
          { en: 'I know that farmer.', ar: 'أعرف ذلك المزارع.', pron: 'آي نو ذات فارمَر', ipa: '/aɪ nəʊ ðæt ˈfɑːmə/' },
          { en: 'The police help us.', ar: 'الشرطة تساعدنا.', pron: 'ذا بَليس هِلب أَس', ipa: '/ðə pəˈliːs help ʌs/' },
        ],
        grammar: { rule: 'نستخدم him للمذكر وher للمؤنث بعد الفعل كمفعول به.', prompt: 'My sister is a nurse. I help ___.', ar: 'أختي ممرضة. أنا أساعدها.', options: ['her', 'she', 'hers'], answer: 'her' },
      },
      {
        title: 'يوم العمل',
        words: [
          { en: 'Start', ar: 'يبدأ', pron: 'ستارت', ipa: '/stɑːt/', ex: 'We start work at eight.' },
          { en: 'Finish', ar: 'ينهي', pron: 'فِنِش', ipa: '/ˈfɪnɪʃ/', ex: 'I finish my work at five.' },
          { en: 'Hard', ar: 'صعب', pron: 'هارد', ipa: '/hɑːd/', ex: 'This test is very hard.' },
          { en: 'Easy', ar: 'سهل', pron: 'إيزي', ipa: '/ˈiːzi/', ex: 'This job is quite easy.' },
          { en: 'Interesting', ar: 'ممتع', pron: 'إنتْرِستينغ', ipa: '/ˈɪntrəstɪŋ/', ex: 'My new job is interesting.' },
        ],
        sentences: [
          { en: 'Can I start now?', ar: 'هل يمكنني أن أبدأ الآن؟', pron: 'كان آي ستارت ناو', ipa: '/kæn aɪ stɑːt naʊ/' },
          { en: 'This work is hard.', ar: 'هذا العمل صعب.', pron: 'ذِس وِرك إز هارد', ipa: '/ðɪs wɜːk ɪz hɑːd/' },
          { en: 'We finish at five.', ar: 'ننتهي في الخامسة.', pron: 'وي فِنِش أت فايف', ipa: '/wiː ˈfɪnɪʃ ət faɪv/' },
        ],
        grammar: { rule: 'نستخدم Can I + الفعل الأساسي لطلب الإذن.', prompt: 'Can I ___ work now?', ar: 'هل يمكنني أن أنهي العمل الآن؟', options: ['finish', 'finishes', 'finishing'], answer: 'finish' },
      },
    ],
  },
  {
    id: 'A2-1',
    level: 'A2',
    topic: 'ماذا حدث في الماضي؟',
    lessons: [
      {
        title: 'كان وكانوا',
        words: [
          { en: 'Was', ar: 'كان', pron: 'وُز', ipa: '/wɒz/', ex: 'I was at home yesterday.' },
          { en: 'Were', ar: 'كانوا', pron: 'وِر', ipa: '/wɜː/', ex: 'We were at school yesterday.' },
          { en: 'Ago', ar: 'منذ', pron: 'أغو', ipa: '/əˈɡəʊ/', ex: 'He left two hours ago.' },
          { en: 'Last', ar: 'الماضي', pron: 'لاست', ipa: '/lɑːst/', ex: 'We met last Monday morning.' },
          { en: 'Before', ar: 'قبل', pron: 'بِفور', ipa: '/bɪˈfɔː/', ex: 'I called her before lunch.' },
        ],
        sentences: [
          { en: 'I was tired yesterday.', ar: 'كنت متعباً أمس.', pron: 'آي وُز تايَرد يِستَداي', ipa: '/aɪ wəz ˈtaɪəd ˈjestədeɪ/' },
          { en: 'They were here last week.', ar: 'كانوا هنا الأسبوع الماضي.', pron: 'ذَي وِر هيَر لاست ويك', ipa: '/ðeɪ wə hɪə lɑːst wiːk/' },
          { en: 'She left an hour ago.', ar: 'غادرت منذ ساعة.', pron: 'شي لِفت أَن آوَر أغو', ipa: '/ʃiː left ən ˈaʊər əˈɡəʊ/' },
        ],
        grammar: { rule: 'نستخدم was مع I/he/she/it وwere مع you/we/they في الماضي.', prompt: 'They ___ at home yesterday.', ar: 'كانوا في المنزل أمس.', options: ['were', 'was', 'are'], answer: 'were' },
      },
      {
        title: 'أفعال الماضي 1',
        words: [
          { en: 'Went', ar: 'ذهب', pron: 'وِنت', ipa: '/went/', ex: 'We went to the park yesterday.' },
          { en: 'Saw', ar: 'رأى', pron: 'سو', ipa: '/sɔː/', ex: 'I saw my teacher yesterday.' },
          { en: 'Had', ar: 'تناول', pron: 'هاد', ipa: '/hæd/', ex: 'We had lunch at home.' },
          { en: 'Did', ar: 'فعل', pron: 'دِد', ipa: '/dɪd/', ex: 'I did my homework last night.' },
          { en: 'Made', ar: 'صنع', pron: 'ميد', ipa: '/meɪd/', ex: 'She made a cake yesterday.' },
        ],
        sentences: [
          { en: 'We went home early.', ar: 'ذهبنا إلى المنزل مبكراً.', pron: 'وي وِنت هوم إيرلي', ipa: '/wiː went həʊm ˈɜːli/' },
          { en: 'I saw a bird.', ar: 'رأيت طائراً.', pron: 'آي سو أ بِرد', ipa: '/aɪ sɔː ə bɜːd/' },
          { en: 'She made some tea.', ar: 'أعدت بعض الشاي.', pron: 'شي ميد سَم تي', ipa: '/ʃiː meɪd səm tiː/' },
        ],
        grammar: { rule: 'لبعض الأفعال ماضٍ غير منتظم مثل go → went.', prompt: 'We ___ to school yesterday.', ar: 'ذهبنا إلى المدرسة أمس.', options: ['went', 'go', 'going'], answer: 'went' },
      },
      {
        title: 'أفعال الماضي 2',
        words: [
          { en: 'Came', ar: 'أتى', pron: 'كيم', ipa: '/keɪm/', ex: 'My uncle came here yesterday.' },
          { en: 'Got', ar: 'حصل على', pron: 'غوت', ipa: '/ɡɒt/', ex: 'I got a new bag yesterday.' },
          { en: 'Took', ar: 'أخذ', pron: 'توك', ipa: '/tʊk/', ex: 'We took the bus to school.' },
          { en: 'Bought', ar: 'اشترى', pron: 'بوت', ipa: '/bɔːt/', ex: 'She bought some bread this morning.' },
          { en: 'Ate', ar: 'أكل', pron: 'إيت', ipa: '/eɪt/', ex: 'I ate rice for lunch.' },
        ],
        sentences: [
          { en: 'He came home late.', ar: 'أتى إلى المنزل متأخراً.', pron: 'هي كيم هوم ليت', ipa: '/hiː keɪm həʊm leɪt/' },
          { en: 'They bought a new car.', ar: 'اشتروا سيارة جديدة.', pron: 'ذَي بوت أ نيو كار', ipa: '/ðeɪ bɔːt ə njuː kɑː/' },
          { en: 'We ate together yesterday.', ar: 'أكلنا معاً أمس.', pron: 'وي إيت توغِذَر يِستَداي', ipa: '/wiː eɪt təˈɡeðə ˈjestədeɪ/' },
        ],
        grammar: { rule: 'نستخدم Did + الفاعل + الفعل الأساسي للسؤال عن الماضي.', prompt: 'Did she ___ bread yesterday?', ar: 'هل اشترت خبزاً أمس؟', options: ['buy', 'bought', 'buys'], answer: 'buy' },
      },
      {
        title: 'حياتي',
        words: [
          { en: 'Born', ar: 'مولود', pron: 'بورن', ipa: '/bɔːn/', ex: 'I was born in Cairo.' },
          { en: 'Child', ar: 'طفل', pron: 'تشايلد', ipa: '/tʃaɪld/', ex: 'I was a quiet child.' },
          { en: 'Age', ar: 'عمر', pron: 'إيج', ipa: '/eɪdʒ/', ex: 'We are the same age.' },
          { en: 'Birthday', ar: 'عيد ميلاد', pron: 'بِرثداي', ipa: '/ˈbɜːθdeɪ/', ex: 'My birthday was last week.' },
          { en: 'Life', ar: 'حياة', pron: 'لايف', ipa: '/laɪf/', ex: 'Life was quiet in our village.' },
        ],
        sentences: [
          { en: 'She was born in June.', ar: 'وُلدت في يونيو.', pron: 'شي وُز بورن إن جون', ipa: '/ʃiː wəz bɔːn ɪn dʒuːn/' },
          { en: 'The child played outside.', ar: 'لعب الطفل في الخارج.', pron: 'ذا تشايلد بلايد آوتسايد', ipa: '/ðə tʃaɪld pleɪd ˌaʊtˈsaɪd/' },
          { en: 'My birthday was yesterday.', ar: 'كان عيد ميلادي أمس.', pron: 'ماي بِرثداي وُز يِستَداي', ipa: '/maɪ ˈbɜːθdeɪ wəz ˈjestədeɪ/' },
        ],
        grammar: { rule: 'نضيف -ed لتكوين الماضي البسيط للأفعال المنتظمة مثل play → played.', prompt: 'The child ___ outside yesterday.', ar: 'لعب الطفل في الخارج أمس.', options: ['played', 'play', 'plays'], answer: 'played' },
      },
      {
        title: 'حكاية قصيرة',
        words: [
          { en: 'Happen', ar: 'يحدث', pron: 'هابَن', ipa: '/ˈhæpən/', ex: 'Did anything happen at school today?' },
          { en: 'Suddenly', ar: 'فجأة', pron: 'سَدَنلي', ipa: '/ˈsʌdənli/', ex: 'Suddenly the door opened slowly.' },
          { en: 'Then', ar: 'ثم', pron: 'ذِن', ipa: '/ðen/', ex: 'Then we went back home.' },
          { en: 'After', ar: 'بعد', pron: 'آفتَر', ipa: '/ˈɑːftə/', ex: 'We walked home after school.' },
          { en: 'First', ar: 'أولاً', pron: 'فِرست', ipa: '/fɜːst/', ex: 'First we washed our hands.' },
        ],
        sentences: [
          { en: 'What happened after lunch?', ar: 'ماذا حدث بعد الغداء؟', pron: 'ووت هابَند آفتَر لَنتش', ipa: '/wɒt ˈhæpənd ˈɑːftə lʌntʃ/' },
          { en: 'Suddenly we heard a noise.', ar: 'فجأة سمعنا صوتاً.', pron: 'سَدَنلي وي هِرد أ نويز', ipa: '/ˈsʌdənli wiː hɜːd ə nɔɪz/' },
          { en: 'Then we called our teacher.', ar: 'ثم اتصلنا بمعلمنا.', pron: 'ذِن وي كولد آوَر تيتشَر', ipa: '/ðen wiː kɔːld aʊə ˈtiːtʃə/' },
        ],
        grammar: { rule: "نستخدم didn't + الفعل الأساسي لنفي حدث في الماضي.", prompt: 'We ___ hear a noise yesterday.', ar: 'لم نسمع صوتاً أمس.', options: ["didn't", "don't", "doesn't"], answer: "didn't" },
      },
    ],
  },

  {
    id: 'A2-2',
    level: 'A2',
    topic: 'الخطط والمستقبل',
    lessons: [
      {
        title: 'المستقبل',
        words: [
          { en: 'Will', ar: 'سوف', pron: 'وِل', ipa: '/wɪl/', ex: 'I will call you tomorrow.' },
          { en: 'Plan', ar: 'خطة', pron: 'بلان', ipa: '/plæn/', ex: 'We have a good plan.' },
          { en: 'Future', ar: 'مستقبل', pron: 'فيوتشر', ipa: '/ˈfjuːtʃə/', ex: 'We talk about the future.' },
          { en: 'Next', ar: 'القادم', pron: 'نِكست', ipa: '/nekst/', ex: 'We will visit next week.' },
          { en: 'Soon', ar: 'قريباً', pron: 'سون', ipa: '/suːn/', ex: 'The bus will arrive soon.' },
        ],
        sentences: [
          { en: 'I will see you soon.', ar: 'سأراك قريباً.', pron: 'آي وِل سي يو سون', ipa: '/aɪ wɪl siː juː suːn/' },
          { en: 'Our plan is simple.', ar: 'خطتنا بسيطة.', pron: 'آوَر بلان إز سِمبَل', ipa: '/aʊə plæn ɪz ˈsɪmpəl/' },
          { en: 'We will leave next Monday.', ar: 'سنغادر يوم الاثنين القادم.', pron: 'وي وِل ليف نِكست ماندي', ipa: '/wiː wɪl liːv nekst ˈmʌndeɪ/' },
        ],
        grammar: { rule: 'will + الفعل بصيغته الأساسية للتعبير عن المستقبل', prompt: 'I will ___ you soon.', ar: 'سأتصل بك قريباً.', options: ['call', 'calls', 'called'], answer: 'call' },
      },
      {
        title: 'الأحلام',
        words: [
          { en: 'Hope', ar: 'يأمل', pron: 'هوب', ipa: '/həʊp/', ex: 'I hope to see you.' },
          { en: 'Dream', ar: 'حلم', pron: 'دريم', ipa: '/driːm/', ex: 'My dream is to teach.' },
          { en: 'Decide', ar: 'يقرر', pron: 'دِسايد', ipa: '/dɪˈsaɪd/', ex: 'We must decide before Monday.' },
          { en: 'Try', ar: 'يحاول', pron: 'تراي', ipa: '/traɪ/', ex: 'I try to learn daily.' },
          { en: 'Maybe', ar: 'ربما', pron: 'ميبي', ipa: '/ˈmeɪbi/', ex: 'Maybe we will go tomorrow.' },
        ],
        sentences: [
          { en: 'I hope to travel soon.', ar: 'آمل أن أسافر قريباً.', pron: 'آي هوب تو ترافَل سون', ipa: '/aɪ həʊp tə ˈtrævəl suːn/' },
          { en: 'Maybe she will try again.', ar: 'ربما ستحاول مرة أخرى.', pron: 'ميبي شي وِل تراي أغيِن', ipa: '/ˈmeɪbi ʃiː wɪl traɪ əˈɡen/' },
          { en: 'My dream is to swim.', ar: 'حلمي أن أسبح.', pron: 'ماي دريم إز تو سوِم', ipa: '/maɪ driːm ɪz tə swɪm/' },
        ],
        grammar: { rule: "won't + الفعل بصيغته الأساسية لنفي المستقبل", prompt: "I won't ___ trying.", ar: 'لن أتوقف عن المحاولة.', options: ['stopped', 'stops', 'stop'], answer: 'stop' },
      },
      {
        title: 'رحلة',
        words: [
          { en: 'Trip', ar: 'رحلة', pron: 'ترِب', ipa: '/trɪp/', ex: 'Our trip starts next week.' },
          { en: 'Travel', ar: 'يسافر', pron: 'ترافَل', ipa: '/ˈtrævəl/', ex: 'We travel by train often.' },
          { en: 'Passport', ar: 'جواز سفر', pron: 'باسبورت', ipa: '/ˈpɑːspɔːt/', ex: 'My passport is in here.' },
          { en: 'Suitcase', ar: 'حقيبة سفر', pron: 'سوتكيس', ipa: '/ˈsuːtkeɪs/', ex: 'This suitcase is very heavy.' },
          { en: 'Abroad', ar: 'في الخارج', pron: 'أبرود', ipa: '/əˈbrɔːd/', ex: 'My brother works abroad now.' },
        ],
        sentences: [
          { en: 'Our trip starts tomorrow.', ar: 'تبدأ رحلتنا غداً.', pron: 'آوَر ترِب ستارتس تومورو', ipa: '/aʊə trɪp stɑːts təˈmɒrəʊ/' },
          { en: 'My passport is in my suitcase.', ar: 'جواز سفري في حقيبة سفري.', pron: 'ماي باسبورت إز إن ماي سوتكيس', ipa: '/maɪ ˈpɑːspɔːt ɪz ɪn maɪ ˈsuːtkeɪs/' },
          { en: 'We are going to travel abroad.', ar: 'سنُسافر إلى الخارج.', pron: 'وي آر غوينغ تو ترافَل أبرود', ipa: '/wiː ɑː ˈɡəʊɪŋ tə ˈtrævəl əˈbrɔːd/' },
        ],
        grammar: { rule: 'am/is/are going to + الفعل للتعبير عن خطة مستقبلية', prompt: 'We ___ going to travel abroad.', ar: 'سنُسافر إلى الخارج.', options: ['am', 'are', 'is'], answer: 'are' },
      },
      {
        title: 'في الفندق',
        words: [
          { en: 'Stay', ar: 'يقيم', pron: 'ستي', ipa: '/steɪ/', ex: 'We stay here every summer.' },
          { en: 'Guest', ar: 'ضيف', pron: 'غِست', ipa: '/ɡest/', ex: 'The guest needs a room.' },
          { en: 'Reception', ar: 'مكتب الاستقبال', pron: 'رِسِبشَن', ipa: '/rɪˈsepʃən/', ex: 'Please leave your key at reception.' },
          { en: 'Lift', ar: 'مصعد', pron: 'لِفت', ipa: '/lɪft/', ex: 'The lift is near reception.' },
          { en: 'Towel', ar: 'منشفة', pron: 'تاوَل', ipa: '/ˈtaʊəl/', ex: 'I need a clean towel.' },
        ],
        sentences: [
          { en: 'I want to stay here.', ar: 'أريد أن أقيم هنا.', pron: 'آي وونت تو ستي هير', ipa: '/aɪ wɒnt tə steɪ hɪə/' },
          { en: 'The guest needs a towel.', ar: 'يحتاج الضيف إلى منشفة.', pron: 'ذا غِست نيدز أ تاوَل', ipa: '/ðə ɡest niːdz ə ˈtaʊəl/' },
          { en: 'The lift is beside reception.', ar: 'المصعد بجانب مكتب الاستقبال.', pron: 'ذا لِفت إز بِسايد رِسِبشَن', ipa: '/ðə lɪft ɪz bɪˈsaɪd rɪˈsepʃən/' },
        ],
        grammar: { rule: 'want to + الفعل للتعبير عن الرغبة', prompt: 'I want ___ stay here.', ar: 'أريد أن أقيم هنا.', options: ['for', 'at', 'to'], answer: 'to' },
      },
      {
        title: 'المواعيد',
        words: [
          { en: 'Appointment', ar: 'موعد', pron: 'أبوينتمَنت', ipa: '/əˈpɔɪntmənt/', ex: 'I have an appointment tomorrow.' },
          { en: 'Invite', ar: 'يدعو', pron: 'إنفايت', ipa: '/ɪnˈvaɪt/', ex: 'We invite our friends often.' },
          { en: 'Arrive', ar: 'يصل', pron: 'أرايف', ipa: '/əˈraɪv/', ex: 'Please arrive before nine tomorrow.' },
          { en: 'Leave', ar: 'يغادر', pron: 'ليف', ipa: '/liːv/', ex: 'We leave home at eight.' },
          { en: 'Wait', ar: 'ينتظر', pron: 'ويت', ipa: '/weɪt/', ex: 'Please wait near the door.' },
        ],
        sentences: [
          { en: 'My appointment is at ten.', ar: 'موعدي في العاشرة.', pron: 'ماي أبوينتمَنت إز أت تِن', ipa: '/maɪ əˈpɔɪntmənt ɪz æt ten/' },
          { en: 'Please wait until I arrive.', ar: 'من فضلك انتظر حتى أصل.', pron: 'بليز ويت أنتِل آي أرايف', ipa: '/pliːz weɪt ənˈtɪl aɪ əˈraɪv/' },
          { en: 'We would like to leave soon.', ar: 'نود أن نغادر قريباً.', pron: 'وي وُد لايك تو ليف سون', ipa: '/wiː wʊd laɪk tə liːv suːn/' },
        ],
        grammar: { rule: 'would like to + الفعل للتعبير عن الرغبة بأدب', prompt: 'I would ___ to invite you.', ar: 'أود أن أدعوك.', options: ['like', 'likes', 'liking'], answer: 'like' },
      },
    ],
  },
  {
    id: 'A2-3',
    level: 'A2',
    topic: 'المقارنة والوصف',
    lessons: [
      {
        title: 'أفضل وأسوأ',
        words: [
          { en: 'Than', ar: 'من للمقارنة', pron: 'ذان', ipa: '/ðæn/', ex: 'My bag is bigger than yours.' },
          { en: 'Better', ar: 'أفضل', pron: 'بِتَر', ipa: '/ˈbetə/', ex: 'This book is better than that.' },
          { en: 'Worse', ar: 'أسوأ', pron: 'وِرس', ipa: '/wɜːs/', ex: 'The weather is worse today.' },
          { en: 'Best', ar: 'الأفضل', pron: 'بِست', ipa: '/best/', ex: 'This is the best shop.' },
          { en: 'Most', ar: 'الأكثر', pron: 'موست', ipa: '/məʊst/', ex: 'This is the most comfortable chair.' },
        ],
        sentences: [
          { en: 'This chair is better than that.', ar: 'هذا الكرسي أفضل من ذاك.', pron: 'ذِس تشير إز بِتَر ذان ذات', ipa: '/ðɪs tʃeə ɪz ˈbetə ðæn ðæt/' },
          { en: 'Today is worse than yesterday.', ar: 'اليوم أسوأ من الأمس.', pron: 'تودَي إز وِرس ذان يِستَدي', ipa: '/təˈdeɪ ɪz wɜːs ðæn ˈjestədeɪ/' },
          { en: 'This is the best cake.', ar: 'هذه أفضل كعكة.', pron: 'ذِس إز ذا بِست كيك', ipa: '/ðɪs ɪz ðə best keɪk/' },
        ],
        grammar: { rule: 'good → better than و bad → worse than للمقارنة', prompt: 'This book is ___ than that book.', ar: 'هذا الكتاب أفضل من ذلك الكتاب.', options: ['good', 'best', 'better'], answer: 'better' },
      },
      {
        title: 'الصفات 1',
        words: [
          { en: 'Fast', ar: 'سريع', pron: 'فاست', ipa: '/fɑːst/', ex: 'This train is very fast.' },
          { en: 'Slow', ar: 'بطيء', pron: 'سلو', ipa: '/sləʊ/', ex: 'The bus is slow today.' },
          { en: 'Heavy', ar: 'ثقيل', pron: 'هِفي', ipa: '/ˈhevi/', ex: 'This box is too heavy.' },
          { en: 'Light', ar: 'خفيف', pron: 'لايت', ipa: '/laɪt/', ex: 'My new bag is light.' },
          { en: 'Quiet', ar: 'هادئ', pron: 'كوايَت', ipa: '/ˈkwaɪət/', ex: 'Our street is very quiet.' },
        ],
        sentences: [
          { en: 'This train is faster than ours.', ar: 'هذا القطار أسرع من قطارنا.', pron: 'ذِس ترين إز فاستَر ذان آوَرز', ipa: '/ðɪs treɪn ɪz ˈfɑːstə ðæn aʊəz/' },
          { en: 'Your bag is very light.', ar: 'حقيبتك خفيفة جداً.', pron: 'يور باغ إز فِري لايت', ipa: '/jɔː bæɡ ɪz ˈveri laɪt/' },
          { en: 'Our room is quiet.', ar: 'غرفتنا هادئة.', pron: 'آوَر روم إز كوايَت', ipa: '/aʊə ruːm ɪz ˈkwaɪət/' },
        ],
        grammar: { rule: 'الصفة القصيرة + er than للمقارنة بين شيئين', prompt: 'This train is ___ than the bus.', ar: 'هذا القطار أسرع من الحافلة.', options: ['faster', 'fast', 'fastest'], answer: 'faster' },
      },
      {
        title: 'الصفات 2',
        words: [
          { en: 'Dirty', ar: 'متسخ', pron: 'دِرتي', ipa: '/ˈdɜːti/', ex: 'My shoes are very dirty.' },
          { en: 'Empty', ar: 'فارغ', pron: 'إمبتي', ipa: '/ˈempti/', ex: 'The water bottle is empty.' },
          { en: 'Full', ar: 'ممتلئ', pron: 'فُل', ipa: '/fʊl/', ex: 'My glass is full now.' },
          { en: 'Dark', ar: 'مظلم', pron: 'دارك', ipa: '/dɑːk/', ex: 'The room is very dark.' },
          { en: 'Bright', ar: 'مشرق', pron: 'برايت', ipa: '/braɪt/', ex: 'Our kitchen is very bright.' },
        ],
        sentences: [
          { en: 'This is the darkest room.', ar: 'هذه أكثر الغرف ظلمة.', pron: 'ذِس إز ذا داركِست روم', ipa: '/ðɪs ɪz ðə ˈdɑːkɪst ruːm/' },
          { en: 'Your cup is empty.', ar: 'كوبك فارغ.', pron: 'يور كَب إز إمبتي', ipa: '/jɔː kʌp ɪz ˈempti/' },
          { en: 'These shoes are dirty.', ar: 'هذه الأحذية متسخة.', pron: 'ذيز شوز آر دِرتي', ipa: '/ðiːz ʃuːz ɑː ˈdɜːti/' },
        ],
        grammar: { rule: 'the + الصفة القصيرة + est للتفضيل داخل مجموعة', prompt: 'This is the ___ room in our house.', ar: 'هذه أكثر غرف بيتنا إشراقاً.', options: ['brighter', 'brightest', 'bright'], answer: 'brightest' },
      },
      {
        title: 'الشخصية',
        words: [
          { en: 'Kind', ar: 'لطيف', pron: 'كايند', ipa: '/kaɪnd/', ex: 'Our teacher is very kind.' },
          { en: 'Funny', ar: 'مضحك', pron: 'فَني', ipa: '/ˈfʌni/', ex: 'Your story is very funny.' },
          { en: 'Friendly', ar: 'ودود', pron: 'فرِندلي', ipa: '/ˈfrendli/', ex: 'The new neighbours are friendly.' },
          { en: 'Clever', ar: 'ذكي', pron: 'كلِفَر', ipa: '/ˈklevə/', ex: 'That clever child reads well.' },
          { en: 'Lazy', ar: 'كسول', pron: 'ليزي', ipa: '/ˈleɪzi/', ex: 'Our cat is very lazy.' },
        ],
        sentences: [
          { en: 'My teacher is very kind.', ar: 'معلمي لطيف جداً.', pron: 'ماي تيتشَر إز فِري كايند', ipa: '/maɪ ˈtiːtʃə ɪz ˈveri kaɪnd/' },
          { en: 'Her story is funny.', ar: 'قصتها مضحكة.', pron: 'هِر ستوري إز فَني', ipa: '/hɜː ˈstɔːri ɪz ˈfʌni/' },
          { en: 'He is as clever as Ali.', ar: 'هو ذكي مثل علي.', pron: 'هي إز أز كلِفَر أز علي', ipa: '/hiː ɪz əz ˈklevə əz ˈæli/' },
        ],
        grammar: { rule: 'as + الصفة + as للتعبير عن التساوي', prompt: 'Sara is as ___ as her sister.', ar: 'سارة لطيفة مثل أختها.', options: ['kinder', 'kindest', 'kind'], answer: 'kind' },
      },
      {
        title: 'المشاعر',
        words: [
          { en: 'Angry', ar: 'غاضب', pron: 'أنغري', ipa: '/ˈæŋɡri/', ex: 'He is angry about the delay.' },
          { en: 'Sad', ar: 'حزين', pron: 'ساد', ipa: '/sæd/', ex: 'She feels sad this morning.' },
          { en: 'Afraid', ar: 'خائف', pron: 'أفريد', ipa: '/əˈfreɪd/', ex: 'The child is afraid of dogs.' },
          { en: 'Bored', ar: 'ضجر', pron: 'بورد', ipa: '/bɔːd/', ex: 'I feel bored at home.' },
          { en: 'Excited', ar: 'متحمس', pron: 'إكسايتِد', ipa: '/ɪkˈsaɪtɪd/', ex: 'We are excited about the trip.' },
        ],
        sentences: [
          { en: 'I am more excited than you.', ar: 'أنا أكثر حماساً منك.', pron: 'آي أم مور إكسايتِد ذان يو', ipa: '/aɪ æm mɔːr ɪkˈsaɪtɪd ðæn juː/' },
          { en: 'The child feels sad.', ar: 'يشعر الطفل بالحزن.', pron: 'ذا تشايلد فيلز ساد', ipa: '/ðə tʃaɪld fiːlz sæd/' },
          { en: 'She is afraid of dogs.', ar: 'هي تخاف من الكلاب.', pron: 'شي إز أفريد أُف دوغز', ipa: '/ʃiː ɪz əˈfreɪd əv dɒɡz/' },
        ],
        grammar: { rule: 'more + الصفة الطويلة + than للمقارنة و the most + الصفة للتفضيل', prompt: 'Ali is the ___ excited child here.', ar: 'علي هو الطفل الأكثر حماساً هنا.', options: ['more', 'most', 'much'], answer: 'most' },
      },
    ],
  },
  {
    id: 'A2-4',
    level: 'A2',
    topic: 'المال والطعام',
    lessons: [
      {
        title: 'المال',
        words: [
          { en: 'Cost', ar: 'يكلّف', pron: 'كوست', ipa: '/kɒst/', ex: 'These shoes cost twenty pounds.' },
          { en: 'Spend', ar: 'ينفق', pron: 'سبِند', ipa: '/spend/', ex: 'I spend little money on clothes.' },
          { en: 'Save', ar: 'يدخر', pron: 'سيف', ipa: '/seɪv/', ex: 'We save money every month.' },
          { en: 'Change', ar: 'باقي النقود', pron: 'تشينج', ipa: '/tʃeɪndʒ/', ex: 'Here is your change today.' },
          { en: 'Cash', ar: 'نقود نقدية', pron: 'كاش', ipa: '/kæʃ/', ex: 'I usually pay in cash.' },
        ],
        sentences: [
          { en: 'How much do these cost?', ar: 'كم تكلّف هذه الأشياء؟', pron: 'هاو ماتش دو ذيز كوست', ipa: '/haʊ mʌtʃ duː ðiːz kɒst/' },
          { en: 'I have some cash.', ar: 'لدي بعض النقود النقدية.', pron: 'آي هاف سَم كاش', ipa: '/aɪ hæv səm kæʃ/' },
          { en: 'We save money every week.', ar: 'ندخر المال كل أسبوع.', pron: 'وي سيف مَني إفري ويك', ipa: '/wiː seɪv ˈmʌni ˈevri wiːk/' },
        ],
        grammar: { rule: 'much مع الأسماء غير المعدودة مثل money و cash', prompt: 'How ___ cash do you have?', ar: 'كم لديك من النقود النقدية؟', options: ['many', 'much', 'a'], answer: 'much' },
      },
      {
        title: 'الدفع',
        words: [
          { en: 'Card', ar: 'بطاقة', pron: 'كارد', ipa: '/kɑːd/', ex: 'Can I pay by card?' },
          { en: 'Receipt', ar: 'إيصال', pron: 'رِسيت', ipa: '/rɪˈsiːt/', ex: 'Please keep your receipt safe.' },
          { en: 'Discount', ar: 'خصم', pron: 'دِسكاونت', ipa: '/ˈdɪskaʊnt/', ex: 'Can I get a discount?' },
          { en: 'Wallet', ar: 'محفظة نقود', pron: 'وولِت', ipa: '/ˈwɒlɪt/', ex: 'My wallet is in my bag.' },
          { en: 'Coin', ar: 'قطعة نقدية', pron: 'كوين', ipa: '/kɔɪn/', ex: 'I found a small coin.' },
        ],
        sentences: [
          { en: 'My card is in my wallet.', ar: 'بطاقتي في محفظتي.', pron: 'ماي كارد إز إن ماي وولِت', ipa: '/maɪ kɑːd ɪz ɪn maɪ ˈwɒlɪt/' },
          { en: 'Please give me a receipt.', ar: 'من فضلك أعطني إيصالاً.', pron: 'بليز غِف مي أ رِسيت', ipa: '/pliːz ɡɪv miː ə rɪˈsiːt/' },
          { en: 'How many coins are there?', ar: 'كم قطعة نقدية هناك؟', pron: 'هاو مِني كوينز آر ذير', ipa: '/haʊ ˈmeni kɔɪnz ɑː ðeə/' },
        ],
        grammar: { rule: 'many مع الأسماء المعدودة في الجمع مثل coins', prompt: 'How ___ coins are in your wallet?', ar: 'كم قطعة نقدية في محفظتك؟', options: ['much', 'an', 'many'], answer: 'many' },
      },
      {
        title: 'السوبرماركت',
        words: [
          { en: 'Fruit', ar: 'فاكهة', pron: 'فروت', ipa: '/fruːt/', ex: 'We buy fresh fruit daily.' },
          { en: 'Vegetable', ar: 'نوع من الخضروات', pron: 'فِجتَبَل', ipa: '/ˈvedʒtəbəl/', ex: 'A carrot is a vegetable.' },
          { en: 'Apple', ar: 'تفاحة', pron: 'أبَل', ipa: '/ˈæpəl/', ex: 'I eat an apple daily.' },
          { en: 'Meat', ar: 'لحم', pron: 'ميت', ipa: '/miːt/', ex: 'We need some meat today.' },
          { en: 'Cheese', ar: 'جبن', pron: 'تشيز', ipa: '/tʃiːz/', ex: 'There is cheese in the fridge.' },
        ],
        sentences: [
          { en: 'We need some fruit.', ar: 'نحتاج إلى بعض الفاكهة.', pron: 'وي نيد سَم فروت', ipa: '/wiː niːd səm fruːt/' },
          { en: 'Is there any cheese?', ar: 'هل يوجد أي جبن؟', pron: 'إز ذير إني تشيز', ipa: '/ɪz ðeər ˈeni tʃiːz/' },
          { en: 'I want an apple.', ar: 'أريد تفاحة.', pron: 'آي وونت أن أبَل', ipa: '/aɪ wɒnt ən ˈæpəl/' },
        ],
        grammar: { rule: 'a/an للاسم المعدود المفرد و some لغير المعدود في الإثبات', prompt: 'I need ___ apple.', ar: 'أحتاج إلى تفاحة.', options: ['an', 'a', 'many'], answer: 'an' },
      },
      {
        title: 'الطبخ',
        words: [
          { en: 'Salt', ar: 'ملح', pron: 'سولت', ipa: '/sɔːlt/', ex: 'Please add a little salt.' },
          { en: 'Oil', ar: 'زيت', pron: 'أويل', ipa: '/ɔɪl/', ex: 'We cook with olive oil.' },
          { en: 'Recipe', ar: 'وصفة طبخ', pron: 'رِسَبي', ipa: '/ˈresəpi/', ex: 'This recipe is very easy.' },
          { en: 'Cut', ar: 'يقطع', pron: 'كَت', ipa: '/kʌt/', ex: 'Please cut the bread now.' },
          { en: 'Mix', ar: 'يخلط', pron: 'مِكس', ipa: '/mɪks/', ex: 'Mix the rice and vegetables.' },
        ],
        sentences: [
          { en: 'There is some oil here.', ar: 'يوجد بعض الزيت هنا.', pron: 'ذير إز سَم أويل هير', ipa: '/ðeər ɪz səm ɔɪl hɪə/' },
          { en: 'Do we have any salt?', ar: 'هل لدينا أي ملح؟', pron: 'دو وي هاف إني سولت', ipa: '/duː wiː hæv ˈeni sɔːlt/' },
          { en: 'Cut the apples and mix them.', ar: 'قطّع التفاح واخلطه.', pron: 'كَت ذي أبَلز أند مِكس ذِم', ipa: '/kʌt ði ˈæpəlz ənd mɪks ðəm/' },
        ],
        grammar: { rule: 'some في الإثبات و any في النفي والأسئلة عن الكمية', prompt: "We don't have ___ salt.", ar: 'ليس لدينا أي ملح.', options: ['some', 'any', 'a'], answer: 'any' },
      },
      {
        title: 'في المطعم',
        words: [
          { en: 'Order', ar: 'يطلب', pron: 'أوردَر', ipa: '/ˈɔːdə/', ex: 'We order soup for lunch.' },
          { en: 'Dish', ar: 'طبق', pron: 'دِش', ipa: '/dɪʃ/', ex: 'This dish has fresh vegetables.' },
          { en: 'Delicious', ar: 'لذيذ', pron: 'دِلِشَس', ipa: '/dɪˈlɪʃəs/', ex: 'The soup is really delicious.' },
          { en: 'Hungry', ar: 'جائع', pron: 'هَنغري', ipa: '/ˈhʌŋɡri/', ex: 'I am hungry after work.' },
          { en: 'Thirsty', ar: 'عطشان', pron: 'ثِرستي', ipa: '/ˈθɜːsti/', ex: 'We feel thirsty after walking.' },
        ],
        sentences: [
          { en: 'I am hungry and thirsty.', ar: 'أنا جائع وعطشان.', pron: 'آي أم هَنغري أند ثِرستي', ipa: '/aɪ æm ˈhʌŋɡri ənd ˈθɜːsti/' },
          { en: 'This dish has delicious rice.', ar: 'يحتوي هذا الطبق على أرز لذيذ.', pron: 'ذِس دِش هاز دِلِشَس رايس', ipa: '/ðɪs dɪʃ hæz dɪˈlɪʃəs raɪs/' },
          { en: 'We order a lot of food.', ar: 'نطلب الكثير من الطعام.', pron: 'وي أوردَر أ لوت أُف فود', ipa: '/wiː ˈɔːdər ə lɒt əv fuːd/' },
        ],
        grammar: { rule: 'a lot of مع الجمع المعدود وغير المعدود للتعبير عن الكثرة', prompt: 'This dish has a lot ___ rice.', ar: 'يحتوي هذا الطبق على الكثير من الأرز.', options: ['at', 'to', 'of'], answer: 'of' },
      },
    ],
  },

  {
    id: 'A2-5',
    level: 'A2',
    topic: 'السكن والبيت',
    lessons: [
      {
        title: 'السكن',
        words: [
          { en: 'Flat', ar: 'شقة', pron: 'فلات', ipa: '/flæt/', ex: 'Our flat has two bedrooms.' },
          { en: 'Rent', ar: 'يستأجر', pron: 'رِنت', ipa: '/rent/', ex: 'We rent a small flat.' },
          { en: 'Neighbour', ar: 'جار', pron: 'نيبَر', ipa: '/ˈneɪbə/', ex: 'My neighbour has a cat.' },
          { en: 'Garden', ar: 'حديقة', pron: 'غادَن', ipa: '/ˈɡɑːdən/', ex: 'We sit in the garden.' },
          { en: 'Floor', ar: 'أرضية', pron: 'فلور', ipa: '/flɔː/', ex: 'The floor is very clean.' },
        ],
        sentences: [
          { en: 'We rent this flat.', ar: 'نحن نستأجر هذه الشقة.', pron: 'وي رِنت ذِس فلات', ipa: '/wiː rent ðɪs flæt/' },
          { en: 'My neighbour is working now.', ar: 'جاري يعمل الآن.', pron: 'ماي نيبَر إز وِركِنغ ناو', ipa: '/maɪ ˈneɪbər ɪz ˈwɜːkɪŋ naʊ/' },
          { en: 'The garden looks lovely.', ar: 'تبدو الحديقة جميلة.', pron: 'ذا غادَن لوكس لافلي', ipa: '/ðə ˈɡɑːdən lʊks ˈlʌvli/' },
        ],
        grammar: { rule: 'نستخدم present simple للعادات وam/is/are + -ing لما يحدث الآن.', prompt: 'My neighbour ___ in the garden now.', ar: 'جاري يعمل في الحديقة الآن.', options: ['is working', 'work', 'works'], answer: 'is working' },
      },
      {
        title: 'الأثاث',
        words: [
          { en: 'Sofa', ar: 'أريكة', pron: 'سوفَ', ipa: '/ˈsəʊfə/', ex: 'The sofa is very comfortable.' },
          { en: 'Lamp', ar: 'مصباح', pron: 'لامب', ipa: '/læmp/', ex: 'This lamp is very bright.' },
          { en: 'Shelf', ar: 'رف', pron: 'شِلف', ipa: '/ʃelf/', ex: 'Put it on the shelf.' },
          { en: 'Mirror', ar: 'مرآة', pron: 'ميرَر', ipa: '/ˈmɪrə/', ex: 'The mirror is beside the door.' },
          { en: 'Cupboard', ar: 'خزانة', pron: 'كابَد', ipa: '/ˈkʌbəd/', ex: 'The cups are in the cupboard.' },
        ],
        sentences: [
          { en: 'The lamp is beside the sofa.', ar: 'المصباح بجانب الأريكة.', pron: 'ذا لامب إز بِسايد ذا سوفَ', ipa: '/ðə læmp ɪz bɪˈsaɪd ðə ˈsəʊfə/' },
          { en: 'The mirror is above the shelf.', ar: 'المرآة فوق الرف.', pron: 'ذا ميرَر إز أَبَف ذا شِلف', ipa: '/ðə ˈmɪrər ɪz əˈbʌv ðə ʃelf/' },
          { en: 'The cupboard is near the door.', ar: 'الخزانة قريبة من الباب.', pron: 'ذا كابَد إز نيَر ذا دور', ipa: '/ðə ˈkʌbəd ɪz nɪə ðə dɔː/' },
        ],
        grammar: { rule: 'نستخدم on لشيء على سطح وin لشيء داخل مكان.', prompt: 'The books are ___ the shelf.', ar: 'الكتب على الرف.', options: ['on', 'at', 'into'], answer: 'on' },
      },
      {
        title: 'أعمال البيت',
        words: [
          { en: 'Tidy', ar: 'يرتب', pron: 'تايدي', ipa: '/ˈtaɪdi/', ex: 'I tidy my room every day.' },
          { en: 'Rubbish', ar: 'قمامة', pron: 'رابِش', ipa: '/ˈrʌbɪʃ/', ex: 'Put the rubbish in the bin.' },
          { en: 'Dishes', ar: 'أطباق', pron: 'دِشِز', ipa: '/ˈdɪʃɪz/', ex: 'I wash the dishes after dinner.' },
          { en: 'Housework', ar: 'أعمال منزلية', pron: 'هاوس وِرك', ipa: '/ˈhaʊswɜːk/', ex: 'We share the housework at home.' },
          { en: 'Broken', ar: 'مكسور', pron: 'بروكَن', ipa: '/ˈbrəʊkən/', ex: 'This chair has a broken leg.' },
        ],
        sentences: [
          { en: 'I need to tidy my room.', ar: 'أحتاج إلى ترتيب غرفتي.', pron: 'آي نيد تو تايدي ماي روم', ipa: '/aɪ niːd tə ˈtaɪdi maɪ ruːm/' },
          { en: 'She is washing the dishes.', ar: 'هي تغسل الأطباق الآن.', pron: 'شي إز ووشِنغ ذا دِشِز', ipa: '/ʃiː ɪz ˈwɒʃɪŋ ðə ˈdɪʃɪz/' },
          { en: 'Please take out the rubbish.', ar: 'أخرج القمامة من فضلك.', pron: 'بليز تيك آوت ذا رابِش', ipa: '/pliːz teɪk aʊt ðə ˈrʌbɪʃ/' },
        ],
        grammar: { rule: 'نستخدم need to + الفعل الأساسي للتعبير عن الحاجة إلى فعل شيء.', prompt: 'We need ___ the dishes.', ar: 'نحتاج إلى غسل الأطباق.', options: ['to wash', 'washing', 'washed'], answer: 'to wash' },
      },
      {
        title: 'الأجهزة',
        words: [
          { en: 'Fridge', ar: 'ثلاجة', pron: 'فريج', ipa: '/frɪdʒ/', ex: 'The milk is in the fridge.' },
          { en: 'Oven', ar: 'فرن', pron: 'أَفَن', ipa: '/ˈʌvən/', ex: 'The bread is in the oven.' },
          { en: 'Machine', ar: 'آلة', pron: 'مَشين', ipa: '/məˈʃiːn/', ex: 'This machine washes our clothes.' },
          { en: 'Radio', ar: 'مذياع', pron: 'رَيْديو', ipa: '/ˈreɪdiəʊ/', ex: 'My father listens to the radio.' },
          { en: 'Battery', ar: 'بطارية', pron: 'باتَري', ipa: '/ˈbætəri/', ex: 'The clock needs a new battery.' },
        ],
        sentences: [
          { en: 'The fridge keeps food cold.', ar: 'تحافظ الثلاجة على برودة الطعام.', pron: 'ذا فريج كيبس فود كولد', ipa: '/ðə frɪdʒ kiːps fuːd kəʊld/' },
          { en: 'The machine is running now.', ar: 'الآلة تعمل الآن.', pron: 'ذا مَشين إز رانِنغ ناو', ipa: '/ðə məˈʃiːn ɪz ˈrʌnɪŋ naʊ/' },
          { en: 'This radio needs a battery.', ar: 'هذا المذياع يحتاج إلى بطارية.', pron: 'ذِس رَيْديو نيدز أ باتَري', ipa: '/ðɪs ˈreɪdiəʊ niːdz ə ˈbætəri/' },
        ],
        grammar: { rule: 'نضيف -s في present simple مع he/she/it للحقائق والعادات.', prompt: 'This fridge ___ food cold.', ar: 'تحافظ هذه الثلاجة على برودة الطعام.', options: ['keeps', 'keep', 'keeping'], answer: 'keeps' },
      },
      {
        title: 'المشاكل',
        words: [
          { en: 'Problem', ar: 'مشكلة', pron: 'برُبلَم', ipa: '/ˈprɒbləm/', ex: 'We have a small problem.' },
          { en: 'Fix', ar: 'يصلح', pron: 'فِكس', ipa: '/fɪks/', ex: 'Can you fix this chair?' },
          { en: 'Wrong', ar: 'خاطئ', pron: 'رونغ', ipa: '/rɒŋ/', ex: 'This is the wrong key.' },
          { en: 'Careful', ar: 'حذر', pron: 'كيَفُل', ipa: '/ˈkeəfəl/', ex: 'Be careful with that glass.' },
          { en: 'Danger', ar: 'خطر', pron: 'دينجَر', ipa: '/ˈdeɪndʒə/', ex: 'The children are in danger.' },
        ],
        sentences: [
          { en: 'We are fixing the problem.', ar: 'نحن نصلح المشكلة الآن.', pron: 'وي آر فِكسِنغ ذا برُبلَم', ipa: '/wiː ɑː ˈfɪksɪŋ ðə ˈprɒbləm/' },
          { en: 'What is wrong with this lamp?', ar: 'ما الخلل في هذا المصباح؟', pron: 'ووت إز رونغ وِذ ذِس لامب', ipa: '/wɒt ɪz rɒŋ wɪð ðɪs læmp/' },
          { en: 'Be careful near the oven.', ar: 'كن حذراً قرب الفرن.', pron: 'بي كيَفُل نيَر ذي أَفَن', ipa: '/biː ˈkeəfəl nɪə ði ˈʌvən/' },
        ],
        grammar: { rule: 'في سؤال present continuous نضع am/is/are قبل الفاعل.', prompt: '___ you fixing the problem now?', ar: 'هل تصلح المشكلة الآن؟', options: ['Are', 'Do', 'Does'], answer: 'Are' },
      },
    ],
  },
  {
    id: 'A2-6',
    level: 'A2',
    topic: 'الصحة واللياقة',
    lessons: [
      {
        title: 'الأعراض',
        words: [
          { en: 'Headache', ar: 'صداع', pron: 'هِد إيك', ipa: '/ˈhedeɪk/', ex: 'I have a bad headache.' },
          { en: 'Fever', ar: 'حمى', pron: 'فيفَر', ipa: '/ˈfiːvə/', ex: 'The child has a fever.' },
          { en: 'Cough', ar: 'سعال', pron: 'كوف', ipa: '/kɒf/', ex: 'My cough is getting better.' },
          { en: 'Tooth', ar: 'سن', pron: 'توث', ipa: '/tuːθ/', ex: 'This tooth hurts a lot.' },
          { en: 'Stomach', ar: 'معدة', pron: 'ستامَك', ipa: '/ˈstʌmək/', ex: 'My stomach hurts after lunch.' },
        ],
        sentences: [
          { en: 'You should rest with a fever.', ar: 'ينبغي أن ترتاح عند إصابتك بحمى.', pron: 'يو شُد رِست وِذ أ فيفَر', ipa: '/juː ʃʊd rest wɪð ə ˈfiːvə/' },
          { en: 'I have a headache today.', ar: 'لدي صداع اليوم.', pron: 'آي هاف أ هِد إيك تودَي', ipa: '/aɪ hæv ə ˈhedeɪk təˈdeɪ/' },
          { en: 'Does your stomach hurt?', ar: 'هل تؤلمك معدتك؟', pron: 'دَز يور ستامَك هِرت', ipa: '/dʌz jɔː ˈstʌmək hɜːt/' },
        ],
        grammar: { rule: 'نستخدم should + الفعل الأساسي لتقديم نصيحة.', prompt: 'You should ___ if you have a fever.', ar: 'ينبغي أن ترتاح إذا كانت لديك حمى.', options: ['rest', 'resting', 'rested'], answer: 'rest' },
      },
      {
        title: 'الطوارئ',
        words: [
          { en: 'Pharmacy', ar: 'صيدلية', pron: 'فامَسي', ipa: '/ˈfɑːməsi/', ex: 'The pharmacy opens at nine.' },
          { en: 'Dentist', ar: 'طبيب أسنان', pron: 'دِنتِست', ipa: '/ˈdentɪst/', ex: 'I must see the dentist.' },
          { en: 'Ambulance', ar: 'سيارة إسعاف', pron: 'أمبيولَنس', ipa: '/ˈæmbjələns/', ex: 'Please call an ambulance now.' },
          { en: 'Accident', ar: 'حادث', pron: 'أكسِدَنت', ipa: '/ˈæksɪdənt/', ex: 'There was an accident outside.' },
          { en: 'Hurt', ar: 'يؤلم', pron: 'هِرت', ipa: '/hɜːt/', ex: 'Does your arm hurt now?' },
        ],
        sentences: [
          { en: 'We must call an ambulance.', ar: 'يجب أن نتصل بالإسعاف.', pron: 'وي مَست كول أَن أمبيولَنس', ipa: '/wiː mʌst kɔːl ən ˈæmbjələns/' },
          { en: 'The dentist is here now.', ar: 'طبيب الأسنان هنا الآن.', pron: 'ذا دِنتِست إز هيَر ناو', ipa: '/ðə ˈdentɪst ɪz hɪə naʊ/' },
          { en: 'The pharmacy is near here.', ar: 'الصيدلية قريبة من هنا.', pron: 'ذا فامَسي إز نيَر هيَر', ipa: '/ðə ˈfɑːməsi ɪz nɪə hɪə/' },
        ],
        grammar: { rule: 'نستخدم must + الفعل الأساسي للتعبير عن ضرورة قوية.', prompt: 'We must ___ an ambulance now.', ar: 'يجب أن نتصل بالإسعاف الآن.', options: ['call', 'calling', 'called'], answer: 'call' },
      },
      {
        title: 'اللياقة',
        words: [
          { en: 'Exercise', ar: 'تمرين رياضي', pron: 'إكسَسايز', ipa: '/ˈeksəsaɪz/', ex: 'Regular exercise is good for you.' },
          { en: 'Gym', ar: 'صالة رياضية', pron: 'جِم', ipa: '/dʒɪm/', ex: 'The gym is near work.' },
          { en: 'Fit', ar: 'لائق بدنياً', pron: 'فِت', ipa: '/fɪt/', ex: 'Walking helps me stay fit.' },
          { en: 'Weight', ar: 'وزن', pron: 'وَيْت', ipa: '/weɪt/', ex: 'The nurse checks my weight.' },
          { en: 'Diet', ar: 'نظام غذائي', pron: 'دايَت', ipa: '/ˈdaɪət/', ex: 'A healthy diet includes vegetables.' },
        ],
        sentences: [
          { en: 'You should do some exercise.', ar: 'ينبغي أن تمارس بعض التمارين الرياضية.', pron: 'يو شُد دو سَم إكسَسايز', ipa: '/juː ʃʊd duː səm ˈeksəsaɪz/' },
          { en: 'She goes to the gym.', ar: 'هي تذهب إلى الصالة الرياضية.', pron: 'شي غوز تو ذا جِم', ipa: '/ʃiː ɡəʊz tə ðə dʒɪm/' },
          { en: 'A balanced diet keeps you fit.', ar: 'يحافظ النظام الغذائي المتوازن على لياقتك.', pron: 'أ بالَنست دايَت كيبس يو فِت', ipa: '/ə ˈbælənst ˈdaɪət kiːps juː fɪt/' },
        ],
        grammar: { rule: 'نستخدم have to وhas to + الفعل الأساسي للتعبير عن الالتزام.', prompt: 'She ___ wear sports shoes at the gym.', ar: 'يجب عليها ارتداء حذاء رياضي في الصالة الرياضية.', options: ['has to', 'have to', 'having to'], answer: 'has to' },
      },
      {
        title: 'العادات',
        words: [
          { en: 'Habit', ar: 'عادة', pron: 'هابِت', ipa: '/ˈhæbɪt/', ex: 'Walking daily is a good habit.' },
          { en: 'Smoke', ar: 'يدخن', pron: 'سموك', ipa: '/sməʊk/', ex: 'You must not smoke here.' },
          { en: 'Relax', ar: 'يسترخي', pron: 'رِلاكس', ipa: '/rɪˈlæks/', ex: 'I relax after a busy day.' },
          { en: 'Stress', ar: 'توتر', pron: 'سترِس', ipa: '/stres/', ex: 'Too much stress affects sleep.' },
          { en: 'Enough', ar: 'كافٍ', pron: 'إناف', ipa: '/ɪˈnʌf/', ex: 'Do you get enough sleep?' },
        ],
        sentences: [
          { en: 'You must not smoke here.', ar: 'يمنع التدخين هنا.', pron: 'يو مَست نوت سموك هيَر', ipa: '/juː mʌst nɒt sməʊk hɪə/' },
          { en: 'You should get enough sleep.', ar: 'ينبغي أن تحصل على نوم كافٍ.', pron: 'يو شُد غِت إناف سليب', ipa: '/juː ʃʊd ɡet ɪˈnʌf sliːp/' },
          { en: 'I relax in the evening.', ar: 'أسترخي في المساء.', pron: 'آي رِلاكس إن ذي إيفنِنغ', ipa: '/aɪ rɪˈlæks ɪn ði ˈiːvnɪŋ/' },
        ],
        grammar: { rule: "نستخدم mustn't + الفعل الأساسي للتعبير عن المنع.", prompt: 'Smoking is forbidden here. You ___ smoke.', ar: 'التدخين ممنوع هنا. يجب ألا تدخن.', options: ["mustn't", 'must', 'have to'], answer: "mustn't" },
      },
      {
        title: 'النصائح',
        words: [
          { en: 'Should', ar: 'ينبغي أن', pron: 'شُد', ipa: '/ʃʊd/', ex: 'You should drink some water.' },
          { en: 'Must', ar: 'يجب أن', pron: 'مَست', ipa: '/mʌst/', ex: 'You must wear a seat belt.' },
          { en: 'Advice', ar: 'نصيحة', pron: 'أدفايس', ipa: '/ədˈvaɪs/', ex: 'Thank you for your advice.' },
          { en: 'Important', ar: 'مهم', pron: 'إمبورتَنت', ipa: '/ɪmˈpɔːtənt/', ex: 'Sleep is important for health.' },
          { en: 'Avoid', ar: 'يتجنب', pron: 'أفويد', ipa: '/əˈvɔɪd/', ex: 'Try to avoid too much sugar.' },
        ],
        sentences: [
          { en: 'You should avoid too much sugar.', ar: 'ينبغي أن تتجنب الإفراط في السكر.', pron: 'يو شُد أفويد تو ماتش شوغَر', ipa: '/juː ʃʊd əˈvɔɪd tuː mʌtʃ ˈʃʊɡə/' },
          { en: 'Your advice is very helpful.', ar: 'نصيحتك مفيدة جداً.', pron: 'يور أدفايس إز فيري هِلبفُل', ipa: '/jɔː ədˈvaɪs ɪz ˈveri ˈhelpfəl/' },
          { en: 'It is important to rest.', ar: 'من المهم أن ترتاح.', pron: 'إت إز إمبورتَنت تو رِست', ipa: '/ɪt ɪz ɪmˈpɔːtənt tə rest/' },
        ],
        grammar: { rule: "نستخدم shouldn't + الفعل الأساسي للنصيحة بعدم فعل شيء.", prompt: 'You ___ eat so much sugar. It is bad for your teeth.', ar: 'ينبغي ألا تأكل كل هذا السكر. إنه مضر بأسنانك.', options: ["shouldn't", 'should', 'must'], answer: "shouldn't" },
      },
    ],
  },
  {
    id: 'A2-7',
    level: 'A2',
    topic: 'العمل والمهنة',
    lessons: [
      {
        title: 'البحث عن عمل',
        words: [
          { en: 'Interview', ar: 'مقابلة', pron: 'إنتَفيو', ipa: '/ˈɪntəvjuː/', ex: 'My interview is on Monday.' },
          { en: 'Apply', ar: 'يتقدم بطلب', pron: 'أَبلاي', ipa: '/əˈplaɪ/', ex: 'I want to apply for this job.' },
          { en: 'Salary', ar: 'راتب', pron: 'سالَري', ipa: '/ˈsæləri/', ex: 'The company offers a good salary.' },
          { en: 'Experience', ar: 'خبرة', pron: 'إكسبيريَنس', ipa: '/ɪkˈspɪəriəns/', ex: 'She has experience with computers.' },
          { en: 'Skill', ar: 'مهارة', pron: 'سكِل', ipa: '/skɪl/', ex: 'Cooking is a useful skill.' },
        ],
        sentences: [
          { en: 'I have had an interview.', ar: 'لقد أجريت مقابلة.', pron: 'آي هاف هاد أَن إنتَفيو', ipa: '/aɪ hæv hæd ən ˈɪntəvjuː/' },
          { en: 'She has useful work experience.', ar: 'لديها خبرة عملية مفيدة.', pron: 'شي هاز يوسْفُل وِرك إكسبيريَنس', ipa: '/ʃiː hæz ˈjuːsfəl wɜːk ɪkˈspɪəriəns/' },
          { en: 'What salary does this company offer?', ar: 'ما الراتب الذي تعرضه هذه الشركة؟', pron: 'ووت سالَري دَز ذِس كامبَني أوفَر', ipa: '/wɒt ˈsæləri dʌz ðɪs ˈkʌmpəni ˈɒfə/' },
        ],
        grammar: { rule: 'نستخدم have/has + past participle للخبرات المرتبطة بالحاضر.', prompt: 'She ___ applied for the job.', ar: 'لقد تقدمت للوظيفة.', options: ['has', 'have', 'is'], answer: 'has' },
      },
      {
        title: 'في العمل',
        words: [
          { en: 'Colleague', ar: 'زميل عمل', pron: 'كوليغ', ipa: '/ˈkɒliːɡ/', ex: 'My colleague helps me every day.' },
          { en: 'Project', ar: 'مشروع', pron: 'برُجِكت', ipa: '/ˈprɒdʒekt/', ex: 'We have finished the project.' },
          { en: 'Report', ar: 'تقرير', pron: 'رِبورت', ipa: '/rɪˈpɔːt/', ex: 'I have written the report.' },
          { en: 'Deadline', ar: 'موعد نهائي', pron: 'دِدلاين', ipa: '/ˈdedlaɪn/', ex: 'The deadline is next Friday.' },
          { en: 'Task', ar: 'مهمة', pron: 'تاسك', ipa: '/tɑːsk/', ex: 'This task takes ten minutes.' },
        ],
        sentences: [
          { en: 'We have already finished the project.', ar: 'لقد أنهينا المشروع بالفعل.', pron: 'وي هاف أولرِدي فِنِشت ذا برُجِكت', ipa: '/wiː hæv ɔːlˈredi ˈfɪnɪʃt ðə ˈprɒdʒekt/' },
          { en: 'My colleague has written the report.', ar: 'لقد كتب زميلي التقرير.', pron: 'ماي كوليغ هاز رِتَن ذا رِبورت', ipa: '/maɪ ˈkɒliːɡ hæz ˈrɪtən ðə rɪˈpɔːt/' },
          { en: 'Have you completed this task?', ar: 'هل أنجزت هذه المهمة؟', pron: 'هاف يو كَمبليتِد ذِس تاسك', ipa: '/hæv juː kəmˈpliːtɪd ðɪs tɑːsk/' },
        ],
        grammar: { rule: 'نضع already بين have/has والتصريف الثالث بمعنى بالفعل.', prompt: 'We have ___ finished the report.', ar: 'لقد أنهينا التقرير بالفعل.', options: ['already', 'yet', 'ever'], answer: 'already' },
      },
      {
        title: 'الرسائل',
        words: [
          { en: 'Message', ar: 'رسالة', pron: 'مِسِج', ipa: '/ˈmesɪdʒ/', ex: 'I have read your message.' },
          { en: 'Reply', ar: 'يرد', pron: 'رِبلاي', ipa: '/rɪˈplaɪ/', ex: 'Please reply to my email.' },
          { en: 'Send', ar: 'يرسل', pron: 'سِند', ipa: '/send/', ex: 'Please send me the address.' },
          { en: 'Receive', ar: 'يستلم', pron: 'رِسيف', ipa: '/rɪˈsiːv/', ex: 'We receive many emails each day.' },
          { en: 'Contact', ar: 'يتصل', pron: 'كونتاكت', ipa: '/ˈkɒntækt/', ex: 'Please contact the office tomorrow.' },
        ],
        sentences: [
          { en: 'Have you read my message yet?', ar: 'هل قرأت رسالتي حتى الآن؟', pron: 'هاف يو رِد ماي مِسِج يِت', ipa: '/hæv juː red maɪ ˈmesɪdʒ jet/' },
          { en: 'Please reply before lunch.', ar: 'يرجى الرد قبل الغداء.', pron: 'بليز رِبلاي بِفور لَنتش', ipa: '/pliːz rɪˈplaɪ bɪˈfɔː lʌntʃ/' },
          { en: 'You can contact me tomorrow.', ar: 'يمكنك الاتصال بي غداً.', pron: 'يو كَن كونتاكت مي تومورو', ipa: '/juː kən ˈkɒntækt mi təˈmɒrəʊ/' },
        ],
        grammar: { rule: 'نستخدم yet في نهاية السؤال أو النفي مع present perfect بمعنى حتى الآن.', prompt: 'I have not sent the message ___.', ar: 'لم أرسل الرسالة حتى الآن.', options: ['yet', 'already', 'ever'], answer: 'yet' },
      },
      {
        title: 'الهاتف',
        words: [
          { en: 'Mobile', ar: 'هاتف محمول', pron: 'موبايل', ipa: '/ˈməʊbaɪl/', ex: 'My mobile is in my bag.' },
          { en: 'Text', ar: 'رسالة نصية', pron: 'تِكست', ipa: '/tekst/', ex: 'I have sent you a text.' },
          { en: 'Voice', ar: 'صوت', pron: 'فويس', ipa: '/vɔɪs/', ex: 'I can hear your voice.' },
          { en: 'Screen', ar: 'شاشة', pron: 'سكرين', ipa: '/skriːn/', ex: 'The screen is very bright.' },
          { en: 'Charge', ar: 'يشحن', pron: 'تشارج', ipa: '/tʃɑːdʒ/', ex: 'I need to charge my phone.' },
        ],
        sentences: [
          { en: 'Have you ever lost your mobile?', ar: 'هل سبق أن فقدت هاتفك المحمول؟', pron: 'هاف يو إِفَر لوست يور موبايل', ipa: '/hæv juː ˈevə lɒst jɔː ˈməʊbaɪl/' },
          { en: 'I have received your text.', ar: 'لقد استلمت رسالتك النصية.', pron: 'آي هاف رِسيفد يور تِكست', ipa: '/aɪ hæv rɪˈsiːvd jɔː tekst/' },
          { en: 'The screen is broken.', ar: 'الشاشة مكسورة.', pron: 'ذا سكرين إز بروكَن', ipa: '/ðə skriːn ɪz ˈbrəʊkən/' },
        ],
        grammar: { rule: 'نستخدم Have/Has + الفاعل + ever + التصريف الثالث للسؤال عن تجربة سابقة.', prompt: 'Have you ever ___ your mobile?', ar: 'هل سبق أن فقدت هاتفك المحمول؟', options: ['lost', 'lose', 'losing'], answer: 'lost' },
      },
      {
        title: 'الاجتماعات',
        words: [
          { en: 'Agree', ar: 'يوافق', pron: 'أَغري', ipa: '/əˈɡriː/', ex: 'I agree with your idea.' },
          { en: 'Disagree', ar: 'يختلف في الرأي', pron: 'دِسَغري', ipa: '/ˌdɪsəˈɡriː/', ex: 'We disagree about the new plan.' },
          { en: 'Idea', ar: 'فكرة', pron: 'آيديا', ipa: '/aɪˈdɪə/', ex: 'That is a very good idea.' },
          { en: 'Opinion', ar: 'رأي', pron: 'أَبِنيَن', ipa: '/əˈpɪnjən/', ex: 'What is your opinion on this?' },
          { en: 'Discuss', ar: 'يناقش', pron: 'دِسكَس', ipa: '/dɪˈskʌs/', ex: 'We can discuss the plan tomorrow.' },
        ],
        sentences: [
          { en: 'We have discussed your idea.', ar: 'لقد ناقشنا فكرتك.', pron: 'وي هاف دِسكَست يور آيديا', ipa: '/wiː hæv dɪˈskʌst jɔː aɪˈdɪə/' },
          { en: 'I agree with your opinion.', ar: 'أنا أوافق على رأيك.', pron: 'آي أَغري وِذ يور أَبِنيَن', ipa: '/aɪ əˈɡriː wɪð jɔː əˈpɪnjən/' },
          { en: 'We sometimes disagree at work.', ar: 'نختلف أحياناً في الرأي في العمل.', pron: 'وي سَمتايمز دِسَغري أَت وِرك', ipa: '/wiː ˈsʌmtaɪmz ˌdɪsəˈɡriː æt wɜːk/' },
        ],
        grammar: { rule: 'نضع never بين have/has والتصريف الثالث بمعنى لم يحدث أبداً دون not.', prompt: 'I have ___ discussed this idea before. This is the first time.', ar: 'لم أناقش هذه الفكرة من قبل أبداً. هذه هي المرة الأولى.', options: ['never', 'already', 'ever'], answer: 'never' },
      },
    ],
  },

  {
    id: 'A2-8',
    level: 'A2',
    topic: 'التكنولوجيا',
    lessons: [
      {
        title: 'الإنترنت',
        words: [
          { en: 'Internet', ar: 'إنترنت', pron: 'إنتَنت', ipa: '/ˈɪntənet/', ex: 'We use the internet every day.' },
          { en: 'Website', ar: 'موقع إلكتروني', pron: 'ويب سايت', ipa: '/ˈwebsaɪt/', ex: 'This website has useful information.' },
          { en: 'Online', ar: 'متصل بالإنترنت', pron: 'أونلاين', ipa: '/ˌɒnˈlaɪn/', ex: 'I study online after school.' },
          { en: 'Password', ar: 'كلمة مرور', pron: 'باسوِد', ipa: '/ˈpɑːswɜːd/', ex: 'Please keep your password safe.' },
          { en: 'Download', ar: 'ينزّل', pron: 'داونلود', ipa: '/ˌdaʊnˈləʊd/', ex: 'You can download this book.' },
        ],
        sentences: [
          { en: 'I can use the internet.', ar: 'أستطيع استخدام الإنترنت.', pron: 'آي كان يوز ذي إنتَنت', ipa: '/aɪ kən juːz ði ˈɪntənet/' },
          { en: 'Keep your password safe.', ar: 'احتفظ بكلمة مرورك بأمان.', pron: 'كيب يور باسوِد سيف', ipa: '/kiːp jɔː ˈpɑːswɜːd seɪf/' },
          { en: 'Can you download this book?', ar: 'هل تستطيع تنزيل هذا الكتاب؟', pron: 'كان يو داونلود ذِس بوك', ipa: '/kən juː ˌdaʊnˈləʊd ðɪs bʊk/' },
        ],
        grammar: { rule: 'نستخدم can + الفعل الأساسي للتعبير عن القدرة.', prompt: 'I ___ download this book.', ar: 'أستطيع تنزيل هذا الكتاب.', options: ['can', 'am', 'do'], answer: 'can' },
      },
      {
        title: 'الحاسوب',
        words: [
          { en: 'Laptop', ar: 'حاسوب محمول', pron: 'لابتوب', ipa: '/ˈlæptɒp/', ex: 'My laptop is on the desk.' },
          { en: 'Keyboard', ar: 'لوحة مفاتيح', pron: 'كيبورد', ipa: '/ˈkiːbɔːd/', ex: 'This keyboard is easy to use.' },
          { en: 'Click', ar: 'ينقر', pron: 'كليك', ipa: '/klɪk/', ex: 'Click here to open the page.' },
          { en: 'Type', ar: 'يكتب بلوحة المفاتيح', pron: 'تايب', ipa: '/taɪp/', ex: 'Please type your name here.' },
          { en: 'Search', ar: 'يبحث', pron: 'سيرتش', ipa: '/sɜːtʃ/', ex: 'I search for new recipes online.' },
        ],
        sentences: [
          { en: 'My laptop has a small keyboard.', ar: 'حاسبي المحمول له لوحة مفاتيح صغيرة.', pron: 'ماي لابتوب هاز أ سمول كيبورد', ipa: '/maɪ ˈlæptɒp hæz ə smɔːl ˈkiːbɔːd/' },
          { en: 'Click here to search.', ar: 'انقر هنا للبحث.', pron: 'كليك هيَر تو سيرتش', ipa: '/klɪk hɪə tə sɜːtʃ/' },
          { en: 'I could type at ten.', ar: 'كنت أستطيع الكتابة بالحاسوب في العاشرة.', pron: 'آي كود تايب أت تِن', ipa: '/aɪ kəd taɪp æt ten/' },
        ],
        grammar: { rule: 'نستخدم could + الفعل الأساسي للقدرة في الماضي.', prompt: 'At ten I ___ type.', ar: 'في العاشرة كنت أستطيع الكتابة بالحاسوب.', options: ['could', 'was', 'did'], answer: 'could' },
      },
      {
        title: 'التواصل الاجتماعي',
        words: [
          { en: 'Share', ar: 'يشارك', pron: 'شيَر', ipa: '/ʃeə/', ex: 'Please share this photo with me.' },
          { en: 'Post', ar: 'ينشر', pron: 'بوست', ipa: '/pəʊst/', ex: 'I post photos of my cat.' },
          { en: 'Follow', ar: 'يتابع', pron: 'فولو', ipa: '/ˈfɒləʊ/', ex: 'I follow my teacher online.' },
          { en: 'Comment', ar: 'تعليق', pron: 'كومِنت', ipa: '/ˈkɒment/', ex: 'Your comment is very helpful.' },
          { en: 'Video', ar: 'فيديو', pron: 'فيديو', ipa: '/ˈvɪdiəʊ/', ex: 'We watched a short video today.' },
        ],
        sentences: [
          { en: 'Please share this video.', ar: 'من فضلك شارك هذا الفيديو.', pron: 'بليز شيَر ذِس فيديو', ipa: '/pliːz ʃeə ðɪs ˈvɪdiəʊ/' },
          { en: 'I know how to post photos.', ar: 'أعرف كيف أنشر الصور.', pron: 'آي نو هاو تو بوست فوتوز', ipa: '/aɪ nəʊ haʊ tə pəʊst ˈfəʊtəʊz/' },
          { en: 'Your comment is kind.', ar: 'تعليقك لطيف.', pron: 'يور كومِنت إز كايند', ipa: '/jɔː ˈkɒment ɪz kaɪnd/' },
        ],
        grammar: { rule: 'نستخدم how to + الفعل الأساسي لبيان كيفية فعل شيء.', prompt: 'She knows ___ share a video.', ar: 'هي تعرف كيف تشارك فيديو.', options: ['how to', 'how', 'to how'], answer: 'how to' },
      },
      {
        title: 'التطبيقات',
        words: [
          { en: 'App', ar: 'تطبيق', pron: 'أب', ipa: '/æp/', ex: 'This app helps me learn English.' },
          { en: 'Update', ar: 'يحدّث', pron: 'أبديت', ipa: '/ˌʌpˈdeɪt/', ex: 'Please update your app today.' },
          { en: 'Install', ar: 'يثبّت', pron: 'إنستول', ipa: '/ɪnˈstɔːl/', ex: 'We can install this app now.' },
          { en: 'Delete', ar: 'يحذف', pron: 'ديليت', ipa: '/dɪˈliːt/', ex: 'Do not delete my photos.' },
          { en: 'File', ar: 'ملف', pron: 'فايل', ipa: '/faɪl/', ex: 'Save the file on your laptop.' },
        ],
        sentences: [
          { en: 'Install the app first.', ar: 'ثبّت التطبيق أولاً.', pron: 'إنستول ذي أب فيرست', ipa: '/ɪnˈstɔːl ði æp fɜːst/' },
          { en: 'Please update this app.', ar: 'من فضلك حدّث هذا التطبيق.', pron: 'بليز أبديت ذِس أب', ipa: '/pliːz ˌʌpˈdeɪt ðɪs æp/' },
          { en: 'Do not delete this file.', ar: 'لا تحذف هذا الملف.', pron: 'دو نوت ديليت ذِس فايل', ipa: '/duː nɒt dɪˈliːt ðɪs faɪl/' },
        ],
        grammar: { rule: 'يبدأ الأمر بالفعل الأساسي، والنهي بصيغة Do not + الفعل.', prompt: 'Do not ___ this file.', ar: 'لا تحذف هذا الملف.', options: ['delete', 'deletes', 'deleting'], answer: 'delete' },
      },
      {
        title: 'العلوم',
        words: [
          { en: 'Technology', ar: 'تكنولوجيا', pron: 'تِكنولوجي', ipa: '/tekˈnɒlədʒi/', ex: 'Technology helps us in many ways.' },
          { en: 'Robot', ar: 'روبوت', pron: 'روبوت', ipa: '/ˈrəʊbɒt/', ex: 'The robot can clean the floor.' },
          { en: 'Smart', ar: 'ذكي', pron: 'سمارت', ipa: '/smɑːt/', ex: 'This smart watch counts my steps.' },
          { en: 'Invent', ar: 'يخترع', pron: 'إنفِنت', ipa: '/ɪnˈvent/', ex: 'They want to invent useful machines.' },
          { en: 'Science', ar: 'علوم', pron: 'سايَنس', ipa: '/ˈsaɪəns/', ex: 'We study science at school.' },
        ],
        sentences: [
          { en: 'This robot can clean floors.', ar: 'يستطيع هذا الروبوت تنظيف الأرضيات.', pron: 'ذِس روبوت كان كلين فلورز', ipa: '/ðɪs ˈrəʊbɒt kən kliːn flɔːz/' },
          { en: 'Science helps us invent things.', ar: 'تساعدنا العلوم على اختراع أشياء.', pron: 'سايَنس هيلبس أس إنفِنت ثينغز', ipa: '/ˈsaɪəns helps ʌs ɪnˈvent θɪŋz/' },
          { en: 'This smart watch cannot fly.', ar: 'لا تستطيع هذه الساعة الذكية الطيران.', pron: 'ذِس سمارت ووتش كانوت فلاي', ipa: '/ðɪs smɑːt wɒtʃ ˈkænɒt flaɪ/' },
        ],
        grammar: { rule: 'نستخدم cannot + الفعل الأساسي لنفي القدرة.', prompt: 'This robot cannot ___ .', ar: 'لا يستطيع هذا الروبوت الطيران.', options: ['fly', 'flies', 'flying'], answer: 'fly' },
      },
    ],
  },
  {
    id: 'A2-9',
    level: 'A2',
    topic: 'السفر والعطلات',
    lessons: [
      {
        title: 'الطيران',
        words: [
          { en: 'Flight', ar: 'رحلة جوية', pron: 'فلايت', ipa: '/flaɪt/', ex: 'Our flight leaves at seven today.' },
          { en: 'Seat', ar: 'مقعد', pron: 'سيت', ipa: '/siːt/', ex: 'My seat is by the window.' },
          { en: 'Luggage', ar: 'أمتعة', pron: 'لَغِج', ipa: '/ˈlʌɡɪdʒ/', ex: 'Our luggage is very heavy today.' },
          { en: 'Delay', ar: 'تأخير', pron: 'ديلاي', ipa: '/dɪˈleɪ/', ex: 'There was a short delay today.' },
          { en: 'Gate', ar: 'بوابة', pron: 'غيت', ipa: '/ɡeɪt/', ex: 'Please wait at the gate.' },
        ],
        sentences: [
          { en: 'I was checking our flight.', ar: 'كنت أتحقق من رحلتنا الجوية.', pron: 'آي ووز تشيكينغ آور فلايت', ipa: '/aɪ wəz ˈtʃekɪŋ aʊə flaɪt/' },
          { en: 'We were waiting at the gate.', ar: 'كنا ننتظر عند البوابة.', pron: 'وي وِر ويتينغ أت ذا غيت', ipa: '/wiː wə ˈweɪtɪŋ æt ðə ɡeɪt/' },
          { en: 'Our luggage was near my seat.', ar: 'كانت أمتعتنا قرب مقعدي.', pron: 'آور لَغِج ووز نيَر ماي سيت', ipa: '/aʊə ˈlʌɡɪdʒ wəz nɪə maɪ siːt/' },
        ],
        grammar: { rule: 'نستخدم was + فعل ينتهي بـ -ing مع I للماضي المستمر.', prompt: 'I ___ checking our flight.', ar: 'كنت أتحقق من رحلتنا الجوية.', options: ['was', 'were', 'did'], answer: 'was' },
      },
      {
        title: 'السياحة',
        words: [
          { en: 'Tourist', ar: 'سائح', pron: 'توريست', ipa: '/ˈtʊərɪst/', ex: 'The tourist asked for a map.' },
          { en: 'Guide', ar: 'مرشد', pron: 'غايد', ipa: '/ɡaɪd/', ex: 'Our guide knows the city well.' },
          { en: 'Museum', ar: 'متحف', pron: 'ميوزيَم', ipa: '/mjuˈziːəm/', ex: 'We visited the museum last week.' },
          { en: 'Tour', ar: 'جولة', pron: 'تور', ipa: '/tʊə/', ex: 'The tour starts at nine today.' },
          { en: 'Famous', ar: 'مشهور', pron: 'فيمَس', ipa: '/ˈfeɪməs/', ex: 'This city has a famous museum.' },
        ],
        sentences: [
          { en: 'The guide was showing us around.', ar: 'كان المرشد يطلعنا على المكان.', pron: 'ذا غايد ووز شوينغ أس أراوند', ipa: '/ðə ɡaɪd wəz ˈʃəʊɪŋ ʌs əˈraʊnd/' },
          { en: 'The tourists were visiting the museum.', ar: 'كان السياح يزورون المتحف.', pron: 'ذا توريستس وِر فيزيتينغ ذا ميوزيَم', ipa: '/ðə ˈtʊərɪsts wə ˈvɪzɪtɪŋ ðə mjuˈziːəm/' },
          { en: 'We enjoyed the famous city tour.', ar: 'استمتعنا بجولة المدينة المشهورة.', pron: 'وي إنجويد ذا فيمَس سيتي تور', ipa: '/wiː ɪnˈdʒɔɪd ðə ˈfeɪməs ˈsɪti tʊə/' },
        ],
        grammar: { rule: 'نستخدم were + فعل ينتهي بـ -ing مع الجمع.', prompt: 'The tourists ___ visiting the museum.', ar: 'كان السياح يزورون المتحف.', options: ['were', 'was', 'is'], answer: 'were' },
      },
      {
        title: 'التخييم',
        words: [
          { en: 'Tent', ar: 'خيمة', pron: 'تِنت', ipa: '/tent/', ex: 'We slept in a small tent.' },
          { en: 'Camp', ar: 'يخيّم', pron: 'كامب', ipa: '/kæmp/', ex: 'We camp near the river.' },
          { en: 'Island', ar: 'جزيرة', pron: 'آيلَند', ipa: '/ˈaɪlənd/', ex: 'The island has a beautiful beach.' },
          { en: 'Desert', ar: 'صحراء', pron: 'دِزَت', ipa: '/ˈdezət/', ex: 'The desert is hot during summer.' },
          { en: 'Forest', ar: 'غابة', pron: 'فورِست', ipa: '/ˈfɒrɪst/', ex: 'We walked through the green forest.' },
        ],
        sentences: [
          { en: 'We were camping when rain started.', ar: 'كنا نخيّم عندما بدأ المطر.', pron: 'وي وِر كامبينغ وِن رين ستارتِد', ipa: '/wiː wə ˈkæmpɪŋ wen reɪn ˈstɑːtɪd/' },
          { en: 'Our tent was in the forest.', ar: 'كانت خيمتنا في الغابة.', pron: 'آور تِنت ووز إن ذا فورِست', ipa: '/aʊə tent wəz ɪn ðə ˈfɒrɪst/' },
          { en: 'The island has a small forest.', ar: 'توجد غابة صغيرة في الجزيرة.', pron: 'ذي آيلَند هاز أ سمول فورِست', ipa: '/ði ˈaɪlənd hæz ə smɔːl ˈfɒrɪst/' },
        ],
        grammar: { rule: 'نستخدم when لربط حدث قصير بحدث مستمر في الماضي.', prompt: 'We were camping ___ the rain started.', ar: 'كنا نخيّم عندما بدأ المطر.', options: ['when', 'who', 'where'], answer: 'when' },
      },
      {
        title: 'الذكريات',
        words: [
          { en: 'Gift', ar: 'هدية', pron: 'غِفت', ipa: '/ɡɪft/', ex: 'I bought a gift for Mum.' },
          { en: 'Postcard', ar: 'بطاقة بريدية', pron: 'بوستكارد', ipa: '/ˈpəʊstkɑːd/', ex: 'She sent me a lovely postcard.' },
          { en: 'Memory', ar: 'ذكرى', pron: 'ميمَري', ipa: '/ˈmeməri/', ex: 'That holiday is a happy memory.' },
          { en: 'View', ar: 'منظر', pron: 'فيو', ipa: '/vjuː/', ex: 'Our room had a lovely view.' },
          { en: 'Adventure', ar: 'مغامرة', pron: 'أدفِنتشَر', ipa: '/ədˈventʃə/', ex: 'Our trip was a great adventure.' },
        ],
        sentences: [
          { en: 'I have bought a gift.', ar: 'لقد اشتريت هدية.', pron: 'آي هاف بوت أ غِفت', ipa: '/aɪ hæv bɔːt ə ɡɪft/' },
          { en: 'This postcard brings back a memory.', ar: 'تعيد هذه البطاقة البريدية ذكرى.', pron: 'ذِس بوستكارد برينغز باك أ ميمَري', ipa: '/ðɪs ˈpəʊstkɑːd brɪŋz bæk ə ˈmeməri/' },
          { en: 'The view was a lovely gift.', ar: 'كان المنظر هدية جميلة.', pron: 'ذا فيو ووز أ لَفلي غِفت', ipa: '/ðə vjuː wəz ə ˈlʌvli ɡɪft/' },
        ],
        grammar: { rule: 'نستخدم have been to للتحدث عن مكان زرناه وعدنا منه.', prompt: 'I have ___ to Cairo twice.', ar: 'زرت القاهرة مرتين.', options: ['been', 'went', 'go'], answer: 'been' },
      },
      {
        title: 'مشاكل السفر',
        words: [
          { en: 'Lost', ar: 'ضائع', pron: 'لوست', ipa: '/lɒst/', ex: 'My bag is lost again.' },
          { en: 'Miss', ar: 'يفوته', pron: 'مِس', ipa: '/mɪs/', ex: 'Hurry or we will miss the bus.' },
          { en: 'Cancel', ar: 'يلغي', pron: 'كانسَل', ipa: '/ˈkænsəl/', ex: 'We must cancel our trip today.' },
          { en: 'Visa', ar: 'تأشيرة', pron: 'فيزَ', ipa: '/ˈviːzə/', ex: 'You need a visa to travel.' },
          { en: 'Border', ar: 'حدود', pron: 'بورْدَر', ipa: '/ˈbɔːdə/', ex: 'We crossed the border by bus.' },
        ],
        sentences: [
          { en: 'We were lost near the border.', ar: 'كنا تائهين قرب الحدود.', pron: 'وي وِر لوست نيَر ذا بورْدَر', ipa: '/wiː wə lɒst nɪə ðə ˈbɔːdə/' },
          { en: 'I checked my visa while waiting.', ar: 'تحققت من تأشيرتي أثناء الانتظار.', pron: 'آي تشيكت ماي فيزَ وايل ويتينغ', ipa: '/aɪ tʃekt maɪ ˈviːzə waɪl ˈweɪtɪŋ/' },
          { en: 'Do not miss your flight.', ar: 'لا تفوّت رحلتك الجوية.', pron: 'دو نوت مِس يور فلايت', ipa: '/duː nɒt mɪs jɔː flaɪt/' },
        ],
        grammar: { rule: 'نستخدم while مع حدث مستمر في الماضي.', prompt: 'I checked my visa while we ___ waiting.', ar: 'تحققت من تأشيرتي بينما كنا ننتظر.', options: ['were', 'was', 'are'], answer: 'were' },
      },
    ],
  },
  {
    id: 'A2-10',
    level: 'A2',
    topic: 'العائلة والمجتمع',
    lessons: [
      {
        title: 'الزواج والأبناء',
        words: [
          { en: 'Husband', ar: 'زوج', pron: 'هَزبَند', ipa: '/ˈhʌzbənd/', ex: 'Her husband is a kind man.' },
          { en: 'Wife', ar: 'زوجة', pron: 'وايف', ipa: '/waɪf/', ex: 'His wife works at our school.' },
          { en: 'Son', ar: 'ابن', pron: 'سَن', ipa: '/sʌn/', ex: 'Their son is six years old.' },
          { en: 'Daughter', ar: 'ابنة', pron: 'دوتَر', ipa: '/ˈdɔːtə/', ex: 'My daughter likes reading at home.' },
          { en: 'Parent', ar: 'أحد الوالدين', pron: 'بيَرَنت', ipa: '/ˈpeərənt/', ex: 'Every parent wants a happy child.' },
        ],
        sentences: [
          { en: "Sara's husband is a teacher.", ar: 'زوج سارة معلم.', pron: 'سارَز هَزبَند إز أ تيتشَر', ipa: '/ˈsɑːrəz ˈhʌzbənd ɪz ə ˈtiːtʃə/' },
          { en: 'Their son helps their daughter.', ar: 'يساعد ابنهما ابنتهما.', pron: 'ذير سَن هيلبس ذير دوتَر', ipa: '/ðeə sʌn helps ðeə ˈdɔːtə/' },
          { en: 'His wife is a doctor.', ar: 'زوجته طبيبة.', pron: 'هِز وايف إز أ دوكتَر', ipa: '/hɪz waɪf ɪz ə ˈdɒktə/' },
        ],
        grammar: { rule: "نضيف 's إلى الاسم المفرد للدلالة على الملكية.", prompt: 'This is ___ son.', ar: 'هذا ابن علي.', options: ["Ali's", 'Ali', 'Alis'], answer: "Ali's" },
      },
      {
        title: 'العائلة الكبيرة',
        words: [
          { en: 'Uncle', ar: 'عم أو خال', pron: 'أنكَل', ipa: '/ˈʌŋkəl/', ex: 'My uncle lives near our house.' },
          { en: 'Aunt', ar: 'عمة أو خالة', pron: 'آنت', ipa: '/ɑːnt/', ex: 'My aunt makes delicious bread.' },
          { en: 'Cousin', ar: 'ابن أو ابنة العم أو الخال', pron: 'كَزَن', ipa: '/ˈkʌzən/', ex: 'My cousin goes to my school.' },
          { en: 'Grandmother', ar: 'جدة', pron: 'غراندماذَر', ipa: '/ˈɡrænmʌðə/', ex: 'My grandmother tells us lovely stories.' },
          { en: 'Grandfather', ar: 'جد', pron: 'غراندفاذَر', ipa: '/ˈɡrænfɑːðə/', ex: 'My grandfather walks in the park.' },
        ],
        sentences: [
          { en: 'Whose aunt lives near here?', ar: 'عمة من تسكن قرب هنا؟', pron: 'هوز آنت ليفز نيَر هيَر', ipa: '/huːz ɑːnt lɪvz nɪə hɪə/' },
          { en: 'My cousin visits our grandmother.', ar: 'يزور ابن عمي جدتنا.', pron: 'ماي كَزَن فيزيتس آور غراندماذَر', ipa: '/maɪ ˈkʌzən ˈvɪzɪts aʊə ˈɡrænmʌðə/' },
          { en: 'Our uncle helps our grandfather.', ar: 'يساعد عمنا جدنا.', pron: 'آور أنكَل هيلبس آور غراندفاذَر', ipa: '/aʊə ˈʌŋkəl helps aʊə ˈɡrænfɑːðə/' },
        ],
        grammar: { rule: 'نستخدم Whose للسؤال عن الملكية أو صلة القرابة.', prompt: '___ grandfather is this?', ar: 'جد من هذا؟', options: ['Whose', 'Who', 'When'], answer: 'Whose' },
      },
      {
        title: 'المناسبات',
        words: [
          { en: 'Wedding', ar: 'حفل زفاف', pron: 'ويدينغ', ipa: '/ˈwedɪŋ/', ex: 'The wedding is on Saturday.' },
          { en: 'Celebrate', ar: 'يحتفل', pron: 'سيليبريت', ipa: '/ˈselɪbreɪt/', ex: 'We celebrate together every year.' },
          { en: 'Festival', ar: 'مهرجان', pron: 'فيستيفَل', ipa: '/ˈfestɪvəl/', ex: 'The festival starts in the morning.' },
          { en: 'Present', ar: 'هدية', pron: 'بريزَنت', ipa: '/ˈprezənt/', ex: 'This present is for my sister.' },
          { en: 'Wish', ar: 'يتمنى', pron: 'وِش', ipa: '/wɪʃ/', ex: 'I wish you a happy holiday.' },
        ],
        sentences: [
          { en: 'She made the present herself.', ar: 'صنعت الهدية بنفسها.', pron: 'شي ميد ذا بريزَنت هِرسيلف', ipa: '/ʃiː meɪd ðə ˈprezənt hɜːˈself/' },
          { en: 'We celebrate at the festival.', ar: 'نحتفل في المهرجان.', pron: 'وي سيليبريت أت ذا فيستيفَل', ipa: '/wiː ˈselɪbreɪt æt ðə ˈfestɪvəl/' },
          { en: 'I wish you a lovely wedding.', ar: 'أتمنى لك حفل زفاف جميلاً.', pron: 'آي وِش يو أ لَفلي ويدينغ', ipa: '/aɪ wɪʃ juː ə ˈlʌvli ˈwedɪŋ/' },
        ],
        grammar: { rule: 'نستخدم herself مع she للتأكيد أنها فعلت الشيء بنفسها.', prompt: 'She made the wedding cake ___ .', ar: 'صنعت كعكة الزفاف بنفسها.', options: ['herself', 'himself', 'myself'], answer: 'herself' },
      },
      {
        title: 'الأخلاق',
        words: [
          { en: 'Respect', ar: 'يحترم', pron: 'ريسبيكت', ipa: '/rɪˈspekt/', ex: 'We respect our teachers at school.' },
          { en: 'Honest', ar: 'صادق', pron: 'أونِست', ipa: '/ˈɒnɪst/', ex: 'My brother is an honest person.' },
          { en: 'Polite', ar: 'مهذب', pron: 'بَلايت', ipa: '/pəˈlaɪt/', ex: 'The children are polite and kind.' },
          { en: 'Rude', ar: 'وقح', pron: 'رود', ipa: '/ruːd/', ex: 'It is rude to shout.' },
          { en: 'Trust', ar: 'يثق', pron: 'تراست', ipa: '/trʌst/', ex: 'I trust my best friend.' },
        ],
        sentences: [
          { en: 'We respect each other.', ar: 'نحترم بعضنا بعضاً.', pron: 'وي ريسبيكت إيتش أذَر', ipa: '/wiː rɪˈspekt iːtʃ ˈʌðə/' },
          { en: 'An honest friend tells the truth.', ar: 'الصديق الصادق يقول الحقيقة.', pron: 'أَن أونِست فريند تيلز ذا تروث', ipa: '/ən ˈɒnɪst frend telz ðə truːθ/' },
          { en: 'Be polite and never rude.', ar: 'كن مهذباً ولا تكن وقحاً أبداً.', pron: 'بي بَلايت أند نيفَر رود', ipa: '/biː pəˈlaɪt ənd ˈnevə ruːd/' },
        ],
        grammar: { rule: 'نستخدم each other للدلالة على فعل متبادل بين الأشخاص.', prompt: 'Good friends trust ___ .', ar: 'يثق الأصدقاء الجيدون بعضهم ببعض.', options: ['each other', 'itself', 'himself'], answer: 'each other' },
      },
      {
        title: 'المجتمع',
        words: [
          { en: 'People', ar: 'ناس', pron: 'بيبَل', ipa: '/ˈpiːpəl/', ex: 'Many people live in this town.' },
          { en: 'Village', ar: 'قرية', pron: 'فيليج', ipa: '/ˈvɪlɪdʒ/', ex: 'Our village is near the river.' },
          { en: 'Town', ar: 'بلدة', pron: 'تاون', ipa: '/taʊn/', ex: 'This town has a small market.' },
          { en: 'Crowd', ar: 'حشد', pron: 'كراود', ipa: '/kraʊd/', ex: 'A crowd waited outside the shop.' },
          { en: 'Local', ar: 'محلي', pron: 'لوكَل', ipa: '/ˈləʊkəl/', ex: 'We buy fruit at local shops.' },
        ],
        sentences: [
          { en: 'The people love their village.', ar: 'يحب الناس قريتهم.', pron: 'ذا بيبَل لَف ذير فيليج', ipa: '/ðə ˈpiːpəl lʌv ðeə ˈvɪlɪdʒ/' },
          { en: 'Her town has a local market.', ar: 'توجد سوق محلية في بلدتها.', pron: 'هِر تاون هاز أ لوكَل ماركِت', ipa: '/hɜː taʊn hæz ə ˈləʊkəl ˈmɑːkɪt/' },
          { en: 'A crowd gathered in his village.', ar: 'تجمع حشد في قريته.', pron: 'أ كراود غاذَرد إن هِز فيليج', ipa: '/ə kraʊd ˈɡæðəd ɪn hɪz ˈvɪlɪdʒ/' },
        ],
        grammar: { rule: 'نستخدم their للملكية مع الجمع، وhis له وher لها.', prompt: 'These people love ___ town.', ar: 'يحب هؤلاء الناس بلدتهم.', options: ['their', 'his', 'her'], answer: 'their' },
      },
    ],
  },

  {
    id: 'A2-11',
    level: 'A2',
    topic: 'البيئة والطقس',
    lessons: [
      {
        title: 'البيئة',
        words: [
          { en: 'Environment', ar: 'بيئة', pron: 'إنفايرَنمَنت', ipa: '/ɪnˈvaɪrənmənt/', ex: 'We must protect the environment.' },
          { en: 'Pollution', ar: 'تلوث', pron: 'بَلوشَن', ipa: '/pəˈluːʃən/', ex: 'Pollution makes our air dirty.' },
          { en: 'Plastic', ar: 'بلاستيك', pron: 'بلاستِك', ipa: '/ˈplæstɪk/', ex: 'This bottle is made of plastic.' },
          { en: 'Recycle', ar: 'يعيد التدوير', pron: 'ريسايكَل', ipa: '/ˌriːˈsaɪkəl/', ex: 'We recycle paper at school.' },
          { en: 'Waste', ar: 'نفايات', pron: 'ويست', ipa: '/weɪst/', ex: 'Put waste in this bin.' },
        ],
        sentences: [
          { en: 'We recycle plastic bottles.', ar: 'نعيد تدوير الزجاجات البلاستيكية.', pron: 'وي ريسايكَل بلاستِك بوتَلز', ipa: '/wiː ˌriːˈsaɪkəl ˈplæstɪk ˈbɒtəlz/' },
          { en: 'Pollution harms the environment.', ar: 'يضر التلوث بالبيئة.', pron: 'بَلوشَن هارمز ذي إنفايرَنمَنت', ipa: '/pəˈluːʃən hɑːmz ði ɪnˈvaɪrənmənt/' },
          { en: 'This waste is recycled.', ar: 'يعاد تدوير هذه النفايات.', pron: 'ذِس ويست إز ريسايكَلد', ipa: '/ðɪs weɪst ɪz ˌriːˈsaɪkəld/' },
        ],
        grammar: { rule: 'المبني للمجهول: is + past participle لوصف ما يحدث للشيء.', prompt: 'This plastic ___ recycled every week.', ar: 'يعاد تدوير هذا البلاستيك كل أسبوع.', options: ['is', 'are', 'be'], answer: 'is' },
      },
      {
        title: 'كوكبنا',
        words: [
          { en: 'Earth', ar: 'الأرض', pron: 'إرث', ipa: '/ɜːθ/', ex: 'The Earth is our home.' },
          { en: 'World', ar: 'عالم', pron: 'وِرلد', ipa: '/wɜːld/', ex: 'People travel around the world.' },
          { en: 'Nature', ar: 'طبيعة', pron: 'نيتشَر', ipa: '/ˈneɪtʃə/', ex: 'We enjoy nature every weekend.' },
          { en: 'Planet', ar: 'كوكب', pron: 'بلانِت', ipa: '/ˈplænɪt/', ex: 'We live on this planet.' },
          { en: 'Air', ar: 'هواء', pron: 'إير', ipa: '/eə/', ex: 'The air feels fresh today.' },
        ],
        sentences: [
          { en: 'The Earth is a planet.', ar: 'الأرض كوكب.', pron: 'ذي إرث إز أ بلانِت', ipa: '/ði ɜːθ ɪz ə ˈplænɪt/' },
          { en: 'We need clean air.', ar: 'نحتاج إلى هواء نقي.', pron: 'وي نيد كلين إير', ipa: '/wiː niːd kliːn eə/' },
          { en: 'Nature makes our world beautiful.', ar: 'تجعل الطبيعة عالمنا جميلاً.', pron: 'نيتشَر ميكس آور وِرلد بيوتِفُل', ipa: '/ˈneɪtʃə meɪks aʊə wɜːld ˈbjuːtɪfəl/' },
        ],
        grammar: { rule: 'الشرط الأول: If + present simple ثم will + فعل أساسي.', prompt: 'If we protect nature, we ___ help our planet.', ar: 'إذا حمينا الطبيعة فسنساعد كوكبنا.', options: ['will', 'did', 'were'], answer: 'will' },
      },
      {
        title: 'الطاقة',
        words: [
          { en: 'Energy', ar: 'طاقة', pron: 'إنَجي', ipa: '/ˈenədʒi/', ex: 'We save energy at home.' },
          { en: 'Electricity', ar: 'كهرباء', pron: 'إلِكترِسِتي', ipa: '/ɪˌlekˈtrɪsəti/', ex: 'This lamp uses very little electricity.' },
          { en: 'Power', ar: 'طاقة', pron: 'باوَر', ipa: '/ˈpaʊə/', ex: 'The sun gives us power.' },
          { en: 'Fuel', ar: 'وقود', pron: 'فيول', ipa: '/ˈfjuːəl/', ex: 'Our car needs more fuel.' },
          { en: 'Gas', ar: 'غاز', pron: 'غاس', ipa: '/ɡæs/', ex: 'We use gas for cooking.' },
        ],
        sentences: [
          { en: 'This house uses less energy.', ar: 'يستخدم هذا المنزل طاقة أقل.', pron: 'ذِس هاوس يوزِز لِس إنَجي', ipa: '/ðɪs haʊs ˈjuːzɪz les ˈenədʒi/' },
          { en: 'We have enough fuel.', ar: 'لدينا وقود كافٍ.', pron: 'وي هاف إناف فيول', ipa: '/wiː hæv ɪˈnʌf ˈfjuːəl/' },
          { en: 'The power is off.', ar: 'الكهرباء مقطوعة.', pron: 'ذا باوَر إز أوف', ipa: '/ðə ˈpaʊər ɪz ɒf/' },
        ],
        grammar: { rule: 'نضع enough قبل الاسم للتعبير عن كمية كافية.', prompt: 'We have ___ fuel for the whole journey.', ar: 'لدينا وقود كافٍ للرحلة بأكملها.', options: ['enough', 'very', 'too'], answer: 'enough' },
      },
      {
        title: 'حماية الطبيعة',
        words: [
          { en: 'Protect', ar: 'يحمي', pron: 'برَتِكت', ipa: '/prəˈtekt/', ex: 'We must protect these trees.' },
          { en: 'Plant', ar: 'يزرع', pron: 'بلانت', ipa: '/plɑːnt/', ex: 'We plant flowers every spring.' },
          { en: 'Grow', ar: 'ينمو', pron: 'غرو', ipa: '/ɡrəʊ/', ex: 'These trees grow very slowly.' },
          { en: 'Destroy', ar: 'يدمر', pron: 'دِستروي', ipa: '/dɪˈstrɔɪ/', ex: 'Fires can destroy many trees.' },
          { en: 'Climate', ar: 'مناخ', pron: 'كلايمَت', ipa: '/ˈklaɪmət/', ex: 'This country has a warm climate.' },
        ],
        sentences: [
          { en: 'We plant trees every year.', ar: 'نزرع الأشجار كل عام.', pron: 'وي بلانت تريز إفري يير', ipa: '/wiː plɑːnt triːz ˈevri jɪə/' },
          { en: 'Trees grow in this climate.', ar: 'تنمو الأشجار في هذا المناخ.', pron: 'تريز غرو إن ذِس كلايمَت', ipa: '/triːz ɡrəʊ ɪn ðɪs ˈklaɪmət/' },
          { en: 'Protect trees from fire.', ar: 'احمِ الأشجار من النار.', pron: 'برَتِكت تريز فرَم فايَر', ipa: '/prəˈtekt triːz frəm faɪə/' },
        ],
        grammar: { rule: 'بعد If في الشرط الأول نستخدم المضارع البسيط دون will.', prompt: 'If we ___ trees, they will grow.', ar: 'إذا زرعنا الأشجار فسوف تنمو.', options: ['plant', 'planted', 'will plant'], answer: 'plant' },
      },
      {
        title: 'الطقس الشديد',
        words: [
          { en: 'Storm', ar: 'عاصفة', pron: 'ستورم', ipa: '/stɔːm/', ex: 'The storm started last night.' },
          { en: 'Flood', ar: 'فيضان', pron: 'فلَد', ipa: '/flʌd/', ex: 'The flood covered the road.' },
          { en: 'Heat', ar: 'حرارة', pron: 'هيت', ipa: '/hiːt/', ex: 'We stayed inside during the heat.' },
          { en: 'Ice', ar: 'جليد', pron: 'آيس', ipa: '/aɪs/', ex: 'There is ice on the lake.' },
          { en: 'Temperature', ar: 'درجة الحرارة', pron: 'تِمبرَتشَر', ipa: '/ˈtemprətʃə/', ex: 'The temperature is very low today.' },
        ],
        sentences: [
          { en: 'The storm is coming.', ar: 'العاصفة قادمة.', pron: 'ذا ستورم إز كَمِنغ', ipa: '/ðə stɔːm ɪz ˈkʌmɪŋ/' },
          { en: 'The ice is too thin.', ar: 'الجليد رقيق أكثر من اللازم.', pron: 'ذي آيس إز تو ثِن', ipa: '/ði aɪs ɪz tuː θɪn/' },
          { en: 'The temperature is rising.', ar: 'درجة الحرارة ترتفع.', pron: 'ذا تِمبرَتشَر إز رايزِنغ', ipa: '/ðə ˈtemprətʃər ɪz ˈraɪzɪŋ/' },
        ],
        grammar: { rule: 'نستخدم too + صفة للتعبير عن درجة زائدة عن الحد المناسب.', prompt: 'The ice is ___ thin to walk on safely.', ar: 'الجليد رقيق أكثر من اللازم للمشي عليه بأمان.', options: ['too', 'enough', 'many'], answer: 'too' },
      },
    ],
  },
  {
    id: 'A2-12',
    level: 'A2',
    topic: 'الإعلام والثقافة',
    lessons: [
      {
        title: 'الأخبار',
        words: [
          { en: 'News', ar: 'أخبار', pron: 'نيوز', ipa: '/njuːz/', ex: 'I watch the news every evening.' },
          { en: 'Article', ar: 'مقال', pron: 'آرتِكَل', ipa: '/ˈɑːtɪkəl/', ex: 'This article is about our town.' },
          { en: 'Journalist', ar: 'صحفي', pron: 'جِرنَلِست', ipa: '/ˈdʒɜːnəlɪst/', ex: 'The journalist works for a newspaper.' },
          { en: 'Programme', ar: 'برنامج', pron: 'بروغرام', ipa: '/ˈprəʊɡræm/', ex: 'This programme starts at six.' },
          { en: 'Channel', ar: 'قناة', pron: 'تشانَل', ipa: '/ˈtʃænəl/', ex: 'Which channel shows the news?' },
        ],
        sentences: [
          { en: 'The journalist writes articles.', ar: 'يكتب الصحفي مقالات.', pron: 'ذا جِرنَلِست رايتس آرتِكَلز', ipa: '/ðə ˈdʒɜːnəlɪst raɪts ˈɑːtɪkəlz/' },
          { en: 'This channel shows the news.', ar: 'تعرض هذه القناة الأخبار.', pron: 'ذِس تشانَل شوز ذا نيوز', ipa: '/ðɪs ˈtʃænəl ʃəʊz ðə njuːz/' },
          { en: 'The programme starts soon.', ar: 'يبدأ البرنامج قريباً.', pron: 'ذا بروغرام ستارتس سون', ipa: '/ðə ˈprəʊɡræm stɑːts suːn/' },
        ],
        grammar: { rule: 'نستخدم who لربط جملة تصف شخصاً.', prompt: 'She is the journalist ___ wrote this article.', ar: 'هي الصحفية التي كتبت هذا المقال.', options: ['who', 'which', 'where'], answer: 'who' },
      },
      {
        title: 'الكتب',
        words: [
          { en: 'Novel', ar: 'رواية', pron: 'نوفَل', ipa: '/ˈnɒvəl/', ex: 'I read a novel last week.' },
          { en: 'Author', ar: 'مؤلف', pron: 'أوثَر', ipa: '/ˈɔːθə/', ex: 'The author lives in London.' },
          { en: 'Library', ar: 'مكتبة', pron: 'لايبرَري', ipa: '/ˈlaɪbrəri/', ex: 'Our library has many books.' },
          { en: 'Chapter', ar: 'فصل', pron: 'تشابتَر', ipa: '/ˈtʃæptə/', ex: 'This chapter is very short.' },
          { en: 'Character', ar: 'شخصية', pron: 'كارَكتَر', ipa: '/ˈkærəktə/', ex: 'My favourite character is a teacher.' },
        ],
        sentences: [
          { en: 'This novel has ten chapters.', ar: 'تتكون هذه الرواية من عشرة فصول.', pron: 'ذِس نوفَل هاز تِن تشابتَز', ipa: '/ðɪs ˈnɒvəl hæz ten ˈtʃæptəz/' },
          { en: 'The author visits our library.', ar: 'يزور المؤلف مكتبتنا.', pron: 'ذي أوثَر فِزِتس آور لايبرَري', ipa: '/ði ˈɔːθə ˈvɪzɪts aʊə ˈlaɪbrəri/' },
          { en: 'This character is very kind.', ar: 'هذه الشخصية لطيفة جداً.', pron: 'ذِس كارَكتَر إز فِري كايند', ipa: '/ðɪs ˈkærəktər ɪz ˈveri kaɪnd/' },
        ],
        grammar: { rule: 'نستخدم which لربط جملة تصف شيئاً.', prompt: 'This is the novel ___ I read yesterday.', ar: 'هذه هي الرواية التي قرأتها أمس.', options: ['which', 'who', 'where'], answer: 'which' },
      },
      {
        title: 'الحفلات',
        words: [
          { en: 'Concert', ar: 'حفل موسيقي', pron: 'كونسَت', ipa: '/ˈkɒnsət/', ex: 'The concert begins at seven.' },
          { en: 'Band', ar: 'فرقة موسيقية', pron: 'باند', ipa: '/bænd/', ex: 'The band plays every Friday.' },
          { en: 'Singer', ar: 'مغنٍ', pron: 'سِنغَر', ipa: '/ˈsɪŋə/', ex: 'The singer has a lovely voice.' },
          { en: 'Stage', ar: 'خشبة المسرح', pron: 'ستيج', ipa: '/steɪdʒ/', ex: 'The children stood on the stage.' },
          { en: 'Audience', ar: 'جمهور', pron: 'أوديَنس', ipa: '/ˈɔːdiəns/', ex: 'The audience enjoyed the show.' },
        ],
        sentences: [
          { en: 'The singer walks on stage.', ar: 'يصعد المغني إلى خشبة المسرح.', pron: 'ذا سِنغَر ووكس أون ستيج', ipa: '/ðə ˈsɪŋə wɔːks ɒn steɪdʒ/' },
          { en: 'The audience listens quietly.', ar: 'يستمع الجمهور بهدوء.', pron: 'ذي أوديَنس لِسَنز كوايَتلي', ipa: '/ði ˈɔːdiəns ˈlɪsənz ˈkwaɪətli/' },
          { en: 'The band plays at concerts.', ar: 'تعزف الفرقة في الحفلات الموسيقية.', pron: 'ذا باند بليز أت كونسَتس', ipa: '/ðə bænd pleɪz ət ˈkɒnsəts/' },
        ],
        grammar: { rule: 'نضيف غالباً -ly إلى الصفة لتكوين ظرف يصف الفعل.', prompt: 'The audience listened ___ during the song.', ar: 'استمع الجمهور بهدوء أثناء الأغنية.', options: ['quietly', 'quiet', 'quieter'], answer: 'quietly' },
      },
      {
        title: 'المسرح والسينما',
        words: [
          { en: 'Theatre', ar: 'مسرح', pron: 'ثيَتَر', ipa: '/ˈθɪətə/', ex: 'We went to the theatre yesterday.' },
          { en: 'Actor', ar: 'ممثل', pron: 'آكتَر', ipa: '/ˈæktə/', ex: 'This actor is in my favourite film.' },
          { en: 'Cinema', ar: 'سينما', pron: 'سِنَما', ipa: '/ˈsɪnəmə/', ex: 'The cinema is near our house.' },
          { en: 'Scene', ar: 'مشهد', pron: 'سين', ipa: '/siːn/', ex: 'This scene is very funny.' },
          { en: 'Comedy', ar: 'كوميديا', pron: 'كومَدي', ipa: '/ˈkɒmədi/', ex: 'We watched a comedy last night.' },
        ],
        sentences: [
          { en: 'The actor works at this theatre.', ar: 'يعمل الممثل في هذا المسرح.', pron: 'ذي آكتَر وِركس أت ذِس ثيَتَر', ipa: '/ði ˈæktə wɜːks ət ðɪs ˈθɪətə/' },
          { en: 'This comedy has funny scenes.', ar: 'يحتوي هذا العمل الكوميدي على مشاهد مضحكة.', pron: 'ذِس كومَدي هاز فَني سينز', ipa: '/ðɪs ˈkɒmədi hæz ˈfʌni siːnz/' },
          { en: 'We meet outside the cinema.', ar: 'نلتقي خارج السينما.', pron: 'وي ميت آوتسايد ذا سِنَما', ipa: '/wiː miːt ˌaʊtˈsaɪd ðə ˈsɪnəmə/' },
        ],
        grammar: { rule: 'نستخدم where لربط جملة تصف مكاناً يحدث فيه شيء.', prompt: 'This is the theatre ___ my brother works.', ar: 'هذا هو المسرح الذي يعمل فيه أخي.', options: ['where', 'who', 'which'], answer: 'where' },
      },
      {
        title: 'التراث',
        words: [
          { en: 'Tradition', ar: 'تقليد', pron: 'ترَدِشَن', ipa: '/trəˈdɪʃən/', ex: 'This tradition brings families together.' },
          { en: 'History', ar: 'تاريخ', pron: 'هِستَري', ipa: '/ˈhɪstəri/', ex: 'We learn history at school.' },
          { en: 'Culture', ar: 'ثقافة', pron: 'كَلتشَر', ipa: '/ˈkʌltʃə/', ex: 'Food is part of our culture.' },
          { en: 'Ancient', ar: 'قديم جداً', pron: 'إينشَنت', ipa: '/ˈeɪnʃənt/', ex: 'We visited an ancient city.' },
          { en: 'Modern', ar: 'حديث', pron: 'مودَن', ipa: '/ˈmɒdən/', ex: 'Our town has a modern library.' },
        ],
        sentences: [
          { en: 'Our culture has many traditions.', ar: 'تضم ثقافتنا تقاليد كثيرة.', pron: 'آور كَلتشَر هاز مِني ترَدِشَنز', ipa: '/aʊə ˈkʌltʃə hæz ˈmeni trəˈdɪʃənz/' },
          { en: 'We study ancient history.', ar: 'ندرس التاريخ القديم.', pron: 'وي ستَدي إينشَنت هِستَري', ipa: '/wiː ˈstʌdi ˈeɪnʃənt ˈhɪstəri/' },
          { en: 'This museum shows modern art.', ar: 'يعرض هذا المتحف الفن الحديث.', pron: 'ذِس ميوزيَم شوز مودَن آرت', ipa: '/ðɪs mjuˈziːəm ʃəʊz ˈmɒdən ɑːt/' },
        ],
        grammar: { rule: 'نستخدم used to + فعل أساسي لعادة ماضية لم تعد مستمرة.', prompt: 'We ___ live near the ancient city, but now we live here.', ar: 'كنا نسكن قرب المدينة القديمة لكننا نسكن هنا الآن.', options: ['used to', 'use to', 'using to'], answer: 'used to' },
      },
    ],
  },
  {
    id: 'A2-13',
    level: 'A2',
    topic: 'محادثات يومية',
    lessons: [
      {
        title: 'الطلبات المهذبة',
        words: [
          { en: 'Could', ar: 'هل يمكنك', pron: 'كُد', ipa: '/kʊd/', ex: 'Could you open the window?' },
          { en: 'Would', ar: 'هل تتفضل', pron: 'وُد', ipa: '/wʊd/', ex: 'Would you help me please?' },
          { en: 'Excuse me', ar: 'عذراً', pron: 'إكسكيوز مي', ipa: '/ɪkˈskjuːz miː/', ex: 'Excuse me, is this your bag?' },
          { en: 'Mind', ar: 'يمانع', pron: 'مايند', ipa: '/maɪnd/', ex: 'Do you mind opening the door?' },
          { en: 'Of course', ar: 'بالطبع', pron: 'أُف كورس', ipa: '/əv ˈkɔːs/', ex: 'Of course I can help you.' },
        ],
        sentences: [
          { en: 'Could you help me please?', ar: 'هل يمكنك مساعدتي من فضلك؟', pron: 'كُد يو هِلب مي بليز', ipa: '/kʊd juː help miː pliːz/' },
          { en: 'Would you mind waiting here?', ar: 'هل تمانع الانتظار هنا؟', pron: 'وُد يو مايند ويتِنغ هير', ipa: '/wʊd juː maɪnd ˈweɪtɪŋ hɪə/' },
          { en: 'Of course you can sit here.', ar: 'بالطبع يمكنك الجلوس هنا.', pron: 'أُف كورس يو كان سِت هير', ipa: '/əv ˈkɔːs juː kæn sɪt hɪə/' },
        ],
        grammar: { rule: 'للطلب المهذب نستخدم Could you + فعل أساسي.', prompt: 'Could you ___ the door please?', ar: 'هل يمكنك فتح الباب من فضلك؟', options: ['open', 'opening', 'opened'], answer: 'open' },
      },
      {
        title: 'الآراء',
        words: [
          { en: 'Believe', ar: 'يعتقد', pron: 'بِليف', ipa: '/bɪˈliːv/', ex: 'I believe this answer is correct.' },
          { en: 'Sure', ar: 'متأكد', pron: 'شور', ipa: '/ʃɔː/', ex: 'Are you sure about the time?' },
          { en: 'Probably', ar: 'على الأرجح', pron: 'برُبَبلي', ipa: '/ˈprɒbəbli/', ex: 'It will probably rain tomorrow.' },
          { en: 'Really', ar: 'حقاً', pron: 'ريَلي', ipa: '/ˈrɪəli/', ex: 'I really like your new bag.' },
          { en: 'Certainly', ar: 'بالتأكيد', pron: 'سِتَنلي', ipa: '/ˈsɜːtənli/', ex: 'I will certainly call you tomorrow.' },
        ],
        sentences: [
          { en: 'I believe you are right.', ar: 'أعتقد أنك على صواب.', pron: 'آي بِليف يو آر رايت', ipa: '/aɪ bɪˈliːv juː ɑː raɪt/' },
          { en: 'Are you really sure?', ar: 'هل أنت متأكد حقاً؟', pron: 'آر يو ريَلي شور', ipa: '/ɑː juː ˈrɪəli ʃɔː/' },
          { en: 'She will probably agree.', ar: 'ستوافق على الأرجح.', pron: 'شي وِل برُبَبلي أَغري', ipa: '/ʃiː wɪl ˈprɒbəbli əˈɡriː/' },
        ],
        grammar: { rule: 'للرد القصير على سؤال بـ is نستخدم Yes + ضمير + is.', prompt: 'Is she sure? Yes, she ___.', ar: 'هل هي متأكدة؟ نعم، هي متأكدة.', options: ['is', 'does', 'has'], answer: 'is' },
      },
      {
        title: 'ربط الجمل',
        words: [
          { en: 'Because', ar: 'لأن', pron: 'بِكوز', ipa: '/bɪˈkɒz/', ex: 'I stayed home because I was tired.' },
          { en: 'But', ar: 'لكن', pron: 'بَت', ipa: '/bʌt/', ex: 'It is small but very comfortable.' },
          { en: 'So', ar: 'لذلك', pron: 'سو', ipa: '/səʊ/', ex: 'It was cold so we went inside.' },
          { en: 'Or', ar: 'أو', pron: 'أور', ipa: '/ɔː/', ex: 'Would you like tea or coffee?' },
          { en: 'Also', ar: 'أيضاً', pron: 'أولسو', ipa: '/ˈɔːlsəʊ/', ex: 'My brother also speaks English.' },
        ],
        sentences: [
          { en: 'I left because I was tired.', ar: 'غادرت لأنني كنت متعباً.', pron: 'آي لِفت بِكوز آي وُز تايَرد', ipa: '/aɪ left bɪˈkɒz aɪ wəz ˈtaɪəd/' },
          { en: 'Would you like water or juice?', ar: 'هل ترغب في ماء أم عصير؟', pron: 'وُد يو لايك ووتَر أور جوس', ipa: '/wʊd juː laɪk ˈwɔːtər ɔː dʒuːs/' },
          { en: 'He also works on Saturdays.', ar: 'يعمل أيضاً أيام السبت.', pron: 'هي أولسو وِركس أون ساتَديز', ipa: '/hiː ˈɔːlsəʊ wɜːks ɒn ˈsætədeɪz/' },
        ],
        grammar: { rule: 'نستخدم because لذكر سبب حدوث شيء.', prompt: 'I took an umbrella ___ it was raining.', ar: 'أخذت مظلة لأن المطر كان يهطل.', options: ['because', 'or', 'but'], answer: 'because' },
      },
      {
        title: 'أدوات السؤال',
        words: [
          { en: 'Why', ar: 'لماذا', pron: 'واي', ipa: '/waɪ/', ex: 'Why are you leaving so early?' },
          { en: 'When', ar: 'متى', pron: 'وِن', ipa: '/wen/', ex: 'When does the next train leave?' },
          { en: 'Which', ar: 'أي', pron: 'وِتش', ipa: '/wɪtʃ/', ex: 'Which bag belongs to you?' },
          { en: 'Who', ar: 'من', pron: 'هو', ipa: '/huː/', ex: 'Who is your English teacher?' },
          { en: 'How', ar: 'كيف', pron: 'هاو', ipa: '/haʊ/', ex: 'How do you get to school?' },
        ],
        sentences: [
          { en: 'When does the shop open?', ar: 'متى يفتح المتجر؟', pron: 'وِن دَز ذا شوب أوبَن', ipa: '/wen dʌz ðə ʃɒp ˈəʊpən/' },
          { en: 'Who is at the door?', ar: 'من عند الباب؟', pron: 'هو إز أت ذا دور', ipa: '/huː ɪz ət ðə dɔː/' },
          { en: 'How does this machine work?', ar: 'كيف تعمل هذه الآلة؟', pron: 'هاو دَز ذِس مَشين وِرك', ipa: '/haʊ dʌz ðɪs məˈʃiːn wɜːk/' },
        ],
        grammar: { rule: 'نستخدم Which للسؤال عن اختيار من مجموعة محددة.', prompt: '___ of these two bags is yours?', ar: 'أي هاتين الحقيبتين لك؟', options: ['Which', 'Why', 'When'], answer: 'Which' },
      },
      {
        title: 'التوديع',
        words: [
          { en: 'Welcome', ar: 'أهلاً وسهلاً', pron: 'وِلكَم', ipa: '/ˈwelkəm/', ex: 'Welcome to our new home.' },
          { en: 'Congratulations', ar: 'تهانينا', pron: 'كَنغراتشُليشَنز', ipa: '/kənˌɡrætʃəˈleɪʃənz/', ex: 'Congratulations on your new job!' },
          { en: 'Good luck', ar: 'حظاً موفقاً', pron: 'غُد لَك', ipa: '/ˌɡʊd ˈlʌk/', ex: 'Good luck with your test tomorrow.' },
          { en: 'Take care', ar: 'اعتنِ بنفسك', pron: 'تيك كير', ipa: '/ˌteɪk ˈkeə/', ex: 'Take care on your journey home.' },
          { en: 'See you', ar: 'إلى اللقاء', pron: 'سي يو', ipa: '/ˈsiː juː/', ex: 'See you at school tomorrow.' },
        ],
        sentences: [
          { en: 'Welcome to our school.', ar: 'أهلاً وسهلاً بك في مدرستنا.', pron: 'وِلكَم تو آور سكول', ipa: '/ˈwelkəm tə aʊə skuːl/' },
          { en: 'Good luck with your exam.', ar: 'حظاً موفقاً في امتحانك.', pron: 'غُد لَك وِذ يور إغزام', ipa: '/ˌɡʊd ˈlʌk wɪð jɔːr ɪɡˈzæm/' },
          { en: 'See you tomorrow morning.', ar: 'أراك غداً صباحاً.', pron: 'سي يو تومورو مورنِنغ', ipa: '/ˈsiː juː təˈmɒrəʊ ˈmɔːnɪŋ/' },
        ],
        grammar: { rule: "السؤال التأكيدي بعد جملة مثبتة بـ will هو will not مختصرة: won't + ضمير.", prompt: 'You will take care, ___ you?', ar: 'ستعتني بنفسك، أليس كذلك؟', options: ["won't", "don't", "aren't"], answer: "won't" },
      },
    ],
  },
];

export const LEVELS = [
  { id: 'A1', name: 'أساسي' },
  { id: 'A2', name: 'أساسي متقدم' },
];

export const UNITS = RAW_UNITS.map((unit, unitIndex) => ({
  ...unit,
  number: unitIndex + 1,
  lessons: unit.lessons.map((lesson, lessonIndex) => ({
    ...lesson,
    id: `${unit.id}-L${lessonIndex + 1}`,
    number: lessonIndex + 1,
  })),
}));

// Flat list of lessons in course order, each linked to its unit.
export const LESSONS = UNITS.flatMap((unit) => unit.lessons.map((lesson) => ({ ...lesson, unit })));
