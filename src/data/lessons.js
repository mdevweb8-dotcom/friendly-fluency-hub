// A1 course content. Every word uses: { en, ar, pron, ipa, ex }
// pron = English pronunciation written in Arabic letters.
// Each unit = 5 lessons, each lesson = 5 words + 3 sentences + 1 grammar point.

const RAW_UNITS = [
  {
    id: 'A1-1',
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
];

export const UNITS = RAW_UNITS.map((unit, unitIndex) => ({
  ...unit,
  level: 'A1',
  number: unitIndex + 1,
  lessons: unit.lessons.map((lesson, lessonIndex) => ({
    ...lesson,
    id: `${unit.id}-L${lessonIndex + 1}`,
    number: lessonIndex + 1,
  })),
}));

// Flat list of lessons in course order, each linked to its unit.
export const LESSONS = UNITS.flatMap((unit) => unit.lessons.map((lesson) => ({ ...lesson, unit })));
