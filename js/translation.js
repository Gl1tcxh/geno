document.addEventListener('DOMContentLoaded', function() {
    // Define the translations
    const translations = {
        'en': {
            // Original content (first page)
            'slogan': 'Get Efficiency, Nab Opportunities',
            'aspiring': 'MIATI Professional | Aspiring Chartered Accountant',
            'premium': 'Premium Outsourcing Assistance:',
            'payroll': 'Payroll',
            'bookkeeping': 'Bookkeeping',
            'smes': 'SMEs',
            'income-tax': 'Income Tax',
            'vat': 'VAT',
            
            // Common elements
            'contacts': 'Contacts',
            'email': 'Email:',
            'phone': 'Phone:',
            'select_lang': 'Select Language',
            'back_button':'Back',
            
            // Remaining translations... (all the rest of your translations)
            // Payroll page
            'quote': '<i>"The greatest virtues are those which are most useful to other persons." </i><br> – Aristotle',
            'asyougo': 'As your go-to accounting technician specializing in payroll management and bookkeeping Ireland, I\'m all about being spot-on with details and super dedicated. My goal is to provide businesses with top-notch financial strategies and ensure they get the best value from our accounting services.',
            'time_management': 'Boss at Time Management:',
            'time_management_text': 'I make sure every deadline is met on time without compromising the quality of my work. My game plan is always to get things done when they\'re supposed to be done, whether it\'s preparing payslips or handling monthly PAYE returns.',
            'compliance': 'Guru of Compliance Assurance:',
            'compliance_text': 'I keep you informed about all the latest regulations, staying up to date with Revenue compliance and providing you with the necessary information as soon as it becomes available.',
            'operational': 'Wizard of Operational Excellence:',
            'operational_text': 'I\'m focused on reducing costs while maintaining high standards and efficiency. I streamline your processes and use the best practices to keep everything running smoothly, from wage preparation to managing employee queries.',
            'thinkofme': 'Think of me as the payroll expert you never knew you needed, ready to guide you through all the complex payroll challenges and ensure everything runs smoothly, giving you peace of mind with our outsourced payroll solutions.',
            'keepingup_title': 'Keeping Up with CPD and Stepping Up Reporting Game:',
            'keepingup_p1': 'By tackling CPD-accredited courses head-on, I stay up to date with the latest in accounting, taxes, and financial management. Being proficient in handling complex financial situations, including PAYE/PRSI/USC deductions, is a key strength.',
            'keepingup_p2': 'Starting in January 2024, employers must report non-taxable payments made to employees to Revenue. This electronic reporting must be done before issuing pay checks, separate from regular payroll actions, aligning with PAYE Modernisation requirements.',
            'pension_title': 'Up for the New Pension Thing:',
            'pension_text': 'The new Auto-Enrolment pension scheme requires payroll systems to handle enrolment and calculate pension contributions. With ERR and Auto-Enrolment making payroll more complex, consider outsourcing these tasks to ensure compliance and efficiency. Our computerized payroll software can handle everything from tax payments to subsistence allowances.',
            
            // Bookkeeping page
            'thoughfew': '<i>"Though few recognize Fra Luca Pacioli, the inventor of double-entry bookkeeping, his contribution to civilization may exceed that of celebrated artists like Dante or Michelangelo"</i> — Herbert J. Muller',
            'mypassion': 'My passion for bookkeeping defines my professional identity as a dedicated bookkeeper, as I apply precision and accuracy to every financial transaction I handle. As an experienced accounting technician, I ensure meticulous attention to detail while maintaining full compliance with Irish regulations. My comprehensive approach combines efficient management practices with tailored small business bookkeeping strategies designed for your specific business needs.\n\nLet me handle your financial record-keeping with expert care, allowing you to concentrate on strategic leadership and business growth initiatives.',
            'bynabbing': 'Get the Divine Proportion by Getting Efficiency and Nabbing the Opportunities.',
            'teveragingtechnology': 'Leveraging Technology for Improved Financial Operations',
            'atgenoaccounting': 'At GENO Accounting, digital solutions drive exceptional bookkeeping services. Cloud platforms deliver instant financial data entry and access, supporting informed decisions and enhanced collaboration for effective business financial management.\n\nModern systems optimize business workflows, combining essential functions like accounting, payroll, and inventory control. This facilitates smooth data handling and financial reporting.\n\nTo maximize productivity, automated solutions handle routine operations like expense tracking and cash flow management, minimizing mistakes and creating space for strategic planning.',
            
            // SME/profile page
            'churchil': '<i>"Success is not final, failure is not fatal: It is the courage to continue that counts."</i> – Winston Churchill',
            'rapideconomicshifts': 'My extensive experience as an accounting technician has provided me with deep insights into the complex challenges and rapid economic shifts that businesses face today. Working in this dynamic environment has taught me that success requires a balanced approach combining resilience and strategic patience. This mindset enables the careful planning and implementation of growth-focused initiatives, including effective cash flow management for SMEs.\n\nLooking ahead, I am committed to expanding my expertise, particularly in understanding and facilitating the crucial transition toward automated systems and advanced technologies for business accounting. I also aim to better analyse economic factors that impact business operations and decision-making processes, including the preparation of management accounts and annual accounts.',
            'geteficency': 'Get Efficiency, Nab Opportunities...',
            
            // Tax page
            'esntain': '<i>"The hardest thing in the world to understand is the income tax."</i> — Albert Einstein',
            'worldoftaxation': 'The world of taxation has always fascinated me; it\'s a dynamic field that constantly presents new challenges, considerations, and learning opportunities. Through my experience as an accounting technician, I\'ve come to appreciate the intricate complexities of tax systems and the necessity for ongoing professional development. Understanding the importance of structural compliance and staying current with ever-changing regulations, including the Special Assignee Relief Programme and Foreign Earnings Deduction, has become second nature to me.\n\nWhat makes my role particularly rewarding is the ability to serve clients in multiple languages, breaking down communication barriers and ensuring clear understanding. I take pride in finding personalized solutions for everyone, adapting my approach to meet their unique needs, whether it\'s tax preparation or ensuring tax compliance through quarterly PAYE returns.',
            'todayistime': 'Today is the time to - Get Efficiency and Nab the Opportunities - that await...',
            
            // VAT page
            'daraob': '"<i>I accumulate receipts for months on end. I need someone who can handle my VAT returns."</i> — Dara O Briain',
            'outsoursevat': 'Outsource Your VAT Returns to Ensure You Stay Compliant',
            'managingvat': 'Managing VAT returns is a critical responsibility for businesses operating in Ireland. The process requires meticulous attention to detail, a comprehensive understanding of complex tax regulations, and significant time investment to ensure accuracy and compliance.\n\nFor many organizations, delegating VAT return preparation to a qualified accountant proves to be a strategic decision. Staying current with changing tax laws and efficiently handling the documentation while meeting strict submission deadlines is essential.\n\nThis approach helps businesses avoid the stress of managing tax obligations internally, prevents costly errors that could trigger penalties, and provides peace of mind, knowing that VAT compliance is being handled by an expert. Having a professional oversee your VAT returns, including VAT reconciliations and VAT registration, is an investment in your business\'s financial health and regulatory compliance.',
            'contacttoday': 'Contact GENO Accounting Today',
            'lookingfordep': 'Looking for dependable financial services or complete accounting solutions? GENO Accounting stands ready as your dedicated partner. Combining professional knowledge, advanced systems like Revenue Online Services, and individualized attention ensures your financial matters receive expert care. From business accounting to financial compliance, \'Get Efficiency and Nab Opportunities\''
        },
        'ru': {
            // Russian translations
            // Original content (first page)
            'slogan': 'Получите эффективность, используйте возможности',
            'aspiring': 'MIATI Professional | Начинающий дипломированный бухгалтер',
            'premium': 'Премиум аутсорсинговая поддержка:',
            'payroll': 'Зарплата',
            'bookkeeping': 'Бухгалтерия',
            'smes': 'МСП',
            'income-tax': 'Подоходный налог',
            'vat': 'НДС',
            
            // Common elements
            'contacts': 'Контакты',
            'email': 'Эл. почта:',
            'phone': 'Телефон:',
            'select_lang': 'Выбрать язык',
            'back_button':'Назад',
            
            // All other Russian translations...
            // Payroll page
            'quote': '<i>"Величайшие добродетели — те, которые наиболее полезны другим людям." </i><br> – Аристотель',
            'asyougo': 'Как ваш незаменимый бухгалтер-техник, специализирующаяся на управлении заработной платой и бухгалтерском учете в Ирландии, я уделяю особое внимание деталям и проявляю высокую преданность делу. Моя цель — предоставлять бизнесу первоклассные финансовые стратегии и обеспечивать максимальную ценность от наших бухгалтерских услуг.',
            'time_management': 'Мастер управления временем:',
            'time_management_text': 'Я обеспечиваю своевременное выполнение каждого срока без ущерба для качества работы. Мой план — всегда выполнять задачи в установленные сроки, будь то подготовка расчетных листов или обработка ежемесячных отчетов PAYE.',
            'compliance': 'Гуру обеспечения соответствия:',
            'compliance_text': 'Я держу вас в курсе всех последних нормативных актов, постоянно отслеживаю требования Revenue и предоставляю вам необходимую информацию, как только она становится доступной.',
            'operational': 'Мастер операционного совершенства:',
            'operational_text': 'Я сосредоточена на снижении затрат при сохранении высоких стандартов и эффективности. Я оптимизирую ваши процессы и использую лучшие практики для обеспечения бесперебойной работы, от подготовки заработной платы до управления запросами сотрудников.',
            'thinkofme': 'Представьте меня как эксперта по расчету заработной платы, который вам всегда был нужен, готовую провести вас через все сложные задачи расчета заработной платы и обеспечить бесперебойную работу, давая вам душевное спокойствие с нашими аутсорсинговыми решениями по расчету заработной платы.',
            'keepingup_title': 'В ногу с CPD и улучшение отчетности:',
            'keepingup_p1': 'Проходя курсы с аккредитацией CPD, я остаюсь в курсе последних новостей в области бухгалтерского учета, налогов и финансового управления. Умение профессионально справляться со сложными финансовыми ситуациями, включая отчисления PAYE/PRSI/USC, является ключевой сильной стороной.',
            'keepingup_p2': 'С января 2024 года работодатели обязаны сообщать в Revenue о необлагаемых налогом платежах, осуществляемых сотрудникам. Эта электронная отчетность должна быть выполнена до выдачи зарплатных чеков, отдельно от обычных действий по расчету заработной платы, в соответствии с требованиями модернизации PAYE.',
            'pension_title': 'Готовность к новой пенсионной системе:',
            'pension_text': 'Новая схема автоматического зачисления пенсий требует, чтобы системы расчета заработной платы обрабатывали зачисление и рассчитывали пенсионные взносы. Поскольку ERR и автоматическое зачисление делают расчет заработной платы более сложным, рассмотрите возможность передачи этих задач на аутсорсинг для обеспечения соответствия и эффективности. Наше компьютеризированное программное обеспечение для расчета заработной платы может обрабатывать все, от налоговых платежей до пособий на проживание.',
            
            // And so on for all the other Russian translations...
            'thoughfew': '<i>"Хотя немногие признают Фра Луку Пачоли, изобретателя двойной бухгалтерии, его вклад в цивилизацию может превосходить вклад таких знаменитых художников, как Данте или Микеланджело"</i> — Герберт Дж. Мюллер',
            'mypassion': 'Моя страсть к бухгалтерскому учету определяет мою профессиональную идентичность как преданной бухгалтера, поскольку я применяю точность и аккуратность к каждой финансовой операции, которую я обрабатываю. Как опытный бухгалтер-техник, я обеспечиваю тщательное внимание к деталям, соблюдая при этом полное соответствие ирландским правилам. Мой комплексный подход сочетает эффективные методы управления с индивидуальными стратегиями ведения бухгалтерского учета для малого бизнеса, разработанными для ваших конкретных потребностей.\n\nПозвольте мне вести ваш финансовый учет с профессиональной заботой, позволяя вам сосредоточиться на стратегическом руководстве и инициативах по развитию бизнеса.',
            'bynabbing': 'Получите Божественную Пропорцию, повышая эффективность и используя возможности.',
            'teveragingtechnology': 'Использование технологий для улучшения финансовых операций',
            'atgenoaccounting': 'В GENO Accounting цифровые решения обеспечивают исключительные услуги бухгалтерского учета. Облачные платформы обеспечивают мгновенный ввод и доступ к финансовым данным, поддерживая обоснованные решения и расширенное сотрудничество для эффективного управления финансами бизнеса.\n\nСовременные системы оптимизируют рабочие процессы бизнеса, объединяя такие важные функции, как бухгалтерский учет, расчет заработной платы и контроль запасов. Это облегчает обработку данных и финансовую отчетность.\n\nДля максимальной производительности автоматизированные решения обрабатывают рутинные операции, такие как отслеживание расходов и управление денежными потоками, минимизируя ошибки и создавая пространство для стратегического планирования.',
            
            'churchil': '<i>"Успех – не окончателен, неудачи – не фатальны: значение имеет лишь мужество продолжать." </i>– Уинстон Черчилль',
            'rapideconomicshifts': 'Мой обширный опыт работы в качестве бухгалтера-техника дал мне глубокое понимание сложных проблем и быстрых экономических изменений, с которыми сталкиваются предприятия сегодня. Работа в этой динамичной среде научила меня, что успех требует сбалансированного подхода, сочетающего устойчивость и стратегическое терпение. Такой подход позволяет тщательно планировать и реализовывать инициативы, направленные на рост, включая эффективное управление денежными потоками для МСП.\n\nВ будущем я намерена расширять свои экспертные знания, особенно в понимании и содействии важному переходу к автоматизированным системам и передовым технологиям для бизнес-бухгалтерии. Я также стремлюсь лучше анализировать экономические факторы, влияющие на бизнес-операции и процессы принятия решений, включая подготовку управленческой и годовой отчетности.',
            'geteficency': 'Получите эффективность, используйте возможности...',
            
            'esntain': '"<i>Самое сложное в мире для понимания — это подоходный налог."</i> — Альберт Эйнштейн',
            'worldoftaxation': 'Мир налогообложения всегда меня очаровывал; это динамичная область, которая постоянно представляет новые вызовы, соображения и возможности для обучения. Благодаря моему опыту работы в качестве бухгалтера-техника, я научилась ценить сложности налоговых систем и необходимость постоянного профессионального развития. Понимание важности структурного соблюдения требований и актуальность изменяющихся правил, включая Программу помощи специальным назначенцам и Вычет иностранных доходов, стало для меня второй натурой.\n\nЧто делает мою роль особенно полезной — это способность обслуживать клиентов на нескольких языках, устраняя коммуникационные барьеры и обеспечивая четкое понимание. Я горжусь тем, что нахожу персонализированные решения для каждого, адаптируя свой подход к их уникальным потребностям, будь то подготовка налогов или обеспечение налогового соответствия через ежеквартальные отчеты PAYE.',
            'todayistime': 'Сегодня время - получить эффективность и использовать возможности - которые ждут...',
            
            'daraob': '<i>"Я месяцами накапливаю чеки. Мне нужен кто-то, кто может заниматься моими декларациями по НДС."</i> — Дара О Брайен',
            'outsoursevat': 'Передайте на аутсорсинг подготовку деклараций по НДС, чтобы обеспечить соответствие требованиям',
            'managingvat': 'Управление декларациями по НДС является важной обязанностью для предприятий, работающих в Ирландии. Этот процесс требует тщательного внимания к деталям, всестороннего понимания сложных налоговых правил и значительных временных затрат для обеспечения точности и соответствия требованиям.\n\nДля многих организаций делегирование подготовки деклараций по НДС квалифицированному бухгалтеру оказывается стратегическим решением. Необходимо быть в курсе изменений налогового законодательства и эффективно обрабатывать документацию, соблюдая строгие сроки подачи.\n\nТакой подход помогает бизнесу избежать стресса от самостоятельного управления налоговыми обязательствами, предотвращает дорогостоящие ошибки, которые могут привести к штрафам, и обеспечивает спокойствие, зная, что соответствие требованиям по НДС находится под контролем эксперта. Привлечение профессионала для контроля ваших деклараций по НДС, включая сверку НДС и регистрацию НДС, является инвестицией в финансовое здоровье вашего бизнеса и соответствие нормативным требованиям.',
            'contacttoday': 'Свяжитесь с GENO Accounting сегодня',
            'lookingfordep': 'Ищете надежные финансовые услуги или комплексные бухгалтерские решения? GENO Accounting готова стать вашим надежным партнером. Сочетание профессиональных знаний, современных систем, таких как Revenue Online Services, и индивидуального подхода гарантирует, что ваши финансовые вопросы получат экспертный уход. От бизнес-бухгалтерии до финансового соответствия, "Получите эффективность и используйте возможности"'
        },
        'ro': {
            // Romanian translations
            // Original content (first page)
            'slogan': 'Obțineți eficiență, profitați de oportunități',
            'aspiring': 'MIATI Professional | Aspirantă contabil autorizat',
            'premium': 'Asistență premium de externalizare:',
            'payroll': 'Salarizare',
            'bookkeeping': 'Contabilitate',
            'smes': 'IMM-uri',
            'income-tax': 'Impozit pe venit',
            'vat': 'TVA',
            
            // Common elements
            'contacts': 'Contacte',
            'email': 'Email:',
            'phone': 'Telefon:',
            'select_lang': 'Selectați limba',
            'back_button':'Înapoi',
            
            // All other Romanian translations...
            // Payroll page
            'quote': '<i>"Cele mai mari virtuți sunt cele care sunt cele mai utile altor persoane."</i> <br> – Aristotel',
            'asyougo': 'Ca tehnician contabil de încredere, specializată în gestionarea salariilor și contabilitate în Irlanda, sunt dedicată detaliilor și extrem de implicată. Scopul meu este să ofer afacerilor strategii financiare de top și să asigur că obțin cea mai bună valoare din serviciile noastre de contabilitate.',
            'time_management': 'Expertă în gestionarea timpului:',
            'time_management_text': 'Mă asigur că fiecare termen limită este respectat la timp fără a compromite calitatea muncii mele. Planul meu este întotdeauna să termin lucrurile când trebuie să fie făcute, fie că este vorba de pregătirea fluturașilor de salariu sau de gestionarea declarațiilor lunare PAYE.',
            'compliance': 'Guru în asigurarea conformității:',
            'compliance_text': 'Vă țin la curent cu toate reglementările recente, mă mențin la zi cu conformitatea fiscală și vă furnizez informațiile necesare imediat ce devin disponibile.',
            'operational': 'Expertă în excelență operațională:',
            'operational_text': 'Sunt concentrată pe reducerea costurilor, menținând în același timp standarde și eficiență ridicate. Vă optimizez procesele și utilizez cele mai bune practici pentru a menține totul funcționând lin, de la pregătirea salariilor până la gestionarea întrebărilor angajaților.',
            'thinkofme': 'Gândiți-vă la mine ca la experta în salarizare de care nu știați că aveți nevoie, gata să vă ghideze prin toate provocările complexe ale salarizării și să asigure că totul funcționează lin, oferindu-vă liniște sufletească cu soluțiile noastre externalizate de salarizare.',
            'keepingup_title': 'La curent cu CPD și îmbunătățirea raportării:',
            'keepingup_p1': 'Prin abordarea cursurilor acreditate CPD, rămân la curent cu ultimele noutăți în contabilitate, taxe și management financiar. Fiind competentă în gestionarea situațiilor financiare complexe, inclusiv deducerile PAYE/PRSI/USC, este un punct forte cheie.',
            'keepingup_p2': 'Începând cu ianuarie 2024, angajatorii trebuie să raporteze plățile neimpozabile făcute angajaților către Revenue. Această raportare electronică trebuie efectuată înainte de emiterea cecurilor de plată, separat de acțiunile obișnuite de salarizare, în conformitate cu cerințele modernizării PAYE.',
            'pension_title': 'Pregătită pentru noul sistem de pensii:',
            'pension_text': 'Noua schemă de înrolare automată la pensii necesită ca sistemele de salarizare să gestioneze înrolarea și să calculeze contribuțiile la pensii. Cu ERR și înrolarea automată făcând salarizarea mai complexă, luați în considerare externalizarea acestor sarcini pentru a asigura conformitatea și eficiența. Software-ul nostru computerizat de salarizare poate gestiona totul, de la plățile fiscale până la indemnizațiile de subzistență.',
            
            // And so on for all the other Romanian translations...
            'thoughfew': '<i>"Deși puțini îl recunosc pe Fra Luca Pacioli, inventatorul contabilității în partidă dublă, contribuția sa la civilizație poate depăși contribuția unor artiști celebri precum Dante sau Michelangelo" </i>— Herbert J. Muller',
            'mypassion': 'Pasiunea mea pentru contabilitate îmi definește identitatea profesională ca o contabilă dedicată, aplicând precizie și acuratețe fiecărei tranzacții financiare pe care o gestionez. Ca tehnician contabil cu experiență, asigur o atenție meticuloasă la detalii, menținând în același timp conformitatea deplină cu reglementările irlandeze. Abordarea mea cuprinzătoare combină practici eficiente de management cu strategii personalizate de contabilitate pentru întreprinderi mici, concepute pentru nevoile specifice ale afacerii dumneavoastră.\n\nPermiteți-mi să gestionez evidența financiară cu grijă expertă, permițându-vă să vă concentrați pe conducerea strategică și inițiativele de creștere a afacerii.',
            'bynabbing': 'Obțineți Proporția Divină prin Obținerea Eficienței și Valorificarea Oportunităților.',
            'teveragingtechnology': 'Utilizarea tehnologiei pentru îmbunătățirea operațiunilor financiare',
            'atgenoaccounting': 'La GENO Accounting, soluțiile digitale oferă servicii excepționale de contabilitate. Platformele cloud oferă introducere și acces instantaneu la date financiare, susținând decizii informate și colaborare îmbunătățită pentru gestionarea eficientă a finanțelor afacerii.\n\nSistemele moderne optimizează fluxurile de lucru ale afacerii, combinând funcții esențiale precum contabilitatea, salarizarea și controlul inventarului. Acest lucru facilitează gestionarea datelor și raportarea financiară.\n\nPentru a maximiza productivitatea, soluțiile automatizate gestionează operațiuni de rutină precum urmărirea cheltuielilor și gestionarea fluxului de numerar, minimizând greșelile și creând spațiu pentru planificare strategică.',
            
            'churchil': '<i>"Succesul nu este final, eșecul nu este fatal: ceea ce contează este curajul de a continua."</i> – Winston Churchill',
            'rapideconomicshifts': 'Experiența mea vastă ca tehnician contabil mi-a oferit perspective profunde asupra provocărilor complexe și schimbărilor economice rapide cu care se confruntă afacerile astăzi. Lucrul în acest mediu dinamic m-a învățat că succesul necesită o abordare echilibrată, combinând reziliența cu răbdarea strategică. Această mentalitate permite planificarea și implementarea atentă a inițiativelor orientate spre creștere, inclusiv gestionarea eficientă a fluxului de numerar pentru IMM-uri.\n\nPrivind înainte, sunt dedicată extinderii expertizei mele, în special în înțelegerea și facilitarea tranziției cruciale către sisteme automatizate și tehnologii avansate pentru contabilitatea afacerilor. De asemenea, îmi propun să analizez mai bine factorii economici care afectează operațiunile de afaceri și procesele de luare a deciziilor, inclusiv pregătirea conturilor de gestiune și a conturilor anuale.',
            'geteficency': 'Obțineți eficiență, profitați de oportunități...',
            
            'esntain': '<i>"Cel mai greu lucru de înțeles în lume este impozitul pe venit."</i> — Albert Einstein',
            'worldoftaxation': 'Lumea fiscalității m-a fascinat întotdeauna; este un domeniu dinamic care prezintă constant noi provocări, considerații și oportunități de învățare. Prin experiența mea ca tehnician contabil, am ajuns să apreciez complexitățile intricate ale sistemelor fiscale și necesitatea dezvoltării profesionale continue. Înțelegerea importanței conformității structurale și menținerea la curent cu reglementările în continuă schimbare, inclusiv Programul Special de Asistență pentru Detașați și Deducerea Veniturilor din Străinătate, a devenit o a doua natură pentru mine.\n\nCeea ce face rolul meu deosebit de satisfăcător este capacitatea de a servi clienții în mai multe limbi, eliminând barierele de comunicare și asigurând o înțelegere clară. Sunt mândră că găsesc soluții personalizate pentru toată lumea, adaptându-mi abordarea pentru a satisface nevoile lor unice, fie că este vorba de pregătirea fiscală sau de asigurarea conformității fiscale prin declarații trimestriale PAYE.',
            'todayistime': 'Astăzi este timpul să - Obțineți eficiență și să profitați de oportunități - care așteaptă...',
            
            'daraob': '<i>"Acumulez chitanțe luni de zile la rând. Am nevoie de cineva care să se ocupe de declarațiile mele de TVA."</i> — Dara O Briain',
            'outsoursevat': 'Externalizați declarațiile de TVA pentru a vă asigura că respectați reglementările',
            'managingvat': 'Gestionarea declarațiilor de TVA este o responsabilitate critică pentru afacerile care operează în Irlanda. Procesul necesită o atenție meticuloasă la detalii, o înțelegere cuprinzătoare a reglementărilor fiscale complexe și o investiție semnificativă de timp pentru a asigura precizia și conformitatea.\n\nPentru multe organizații, delegarea pregătirii declarațiilor de TVA către un contabil calificat se dovedește a fi o decizie strategică. Rămânerea la curent cu schimbările legilor fiscale și gestionarea eficientă a documentației, respectând în același timp termenele stricte de depunere, este esențială.\n\nAceastă abordare ajută afacerile să evite stresul gestionării obligațiilor fiscale intern, previne erorile costisitoare care ar putea declanșa penalități și oferă liniște sufletească, știind că conformitatea TVA este gestionată de un expert. A avea un profesionist care să supravegheze declarațiile dvs. de TVA, inclusiv reconcilierile de TVA și înregistrarea în scopuri de TVA, este o investiție în sănătatea financiară a afacerii dvs. și în conformitatea cu reglementările.',
            'contacttoday': 'Contactați GENO Accounting astăzi',
            'lookingfordep': 'Căutați servicii financiare de încredere sau soluții complete de contabilitate? GENO Accounting este pregătit ca partenerul dvs. dedicat. Combinarea cunoștințelor profesionale, a sistemelor avansate precum Revenue Online Services și a atenției individualizate asigură că problemele dvs. financiare primesc îngrijire de expert. De la contabilitatea afacerii la conformitatea financiară, "Obțineți eficiență și profitați de oportunități"'
        }
    };
    
    // Helper function to safely update an element's innerHTML if it exists
    function safeUpdateElement(selector, content) {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = content;
        }
    }
    
    // Helper function to safely update an element's textContent if it exists
    function safeUpdateText(selector, content) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = content;
        }
    }
    
    // Function to set the language
    function setLanguage(lang) {
        // Save the selected language to localStorage
        localStorage.setItem('selectedLanguage', lang);
        
        // Update the HTML lang attribute
        document.documentElement.setAttribute('lang', lang);
        
        // Highlight the selected language button
        document.querySelectorAll('.lang_button').forEach(button => {
            if (button.id === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // Detect page type by checking for unique elements
        const isHomePage = document.querySelector('.info') !== null;
        const isPayrollPage = document.querySelector('.description') !== null && document.querySelector('.keepingup') !== null;
        const isBookkeepingPage = document.querySelector('.description') !== null && document.querySelector('.thoughfew') !== null;
        const isSMEPage = document.querySelector('.description') !== null && document.querySelector('.churchil') !== null;
        const isTaxPage = document.querySelector('.description') !== null && document.querySelector('.esntain') !== null;
        const isVATPage = document.querySelector('.description') !== null && document.querySelector('.daraob') !== null;

        // Update the navigation menu items if they exist
        safeUpdateText('.payroll', translations[lang]['payroll']);
        safeUpdateText('.bookkeeping', translations[lang]['bookkeeping']);
        safeUpdateText('.smes', translations[lang]['smes']);
        safeUpdateText('.income-tax', translations[lang]['income-tax']);
        safeUpdateText('.vat', translations[lang]['vat']);

        // Update content based on page type
        if (isHomePage) {
            updateHomePage(lang);
        }
        
        if (isPayrollPage) {
            updatePayrollPage(lang);
        }
        
        if (isBookkeepingPage) {
            updateBookkeepingPage(lang);
        }
        
        if (isSMEPage) {
            updateSMEPage(lang);
        }
        
        if (isTaxPage) {
            updateTaxPage(lang);
        }
        
        if (isVATPage) {
            updateVATPage(lang);
        }
        
        // Updates for all pages - common elements like back button
        if (document.querySelector('.back_button')) {
            safeUpdateText('.back_button', translations[lang]['back_button']);
        }
        
        // Update common elements (contacts section)
        updateContactsSection(lang);
    }
    
    // Function to update home page content
    function updateHomePage(lang) {
        // Update slogan and headings
        safeUpdateText('.slogan', translations[lang]['slogan']);
        safeUpdateText('.aspiring', translations[lang]['aspiring']);
        safeUpdateText('.premium', translations[lang]['premium']);
        
        // Update services buttons
        const serviceButtons = document.querySelectorAll('.services_button');
        if (serviceButtons.length >= 5) {
            serviceButtons[0].textContent = translations[lang]['payroll'];
            serviceButtons[1].textContent = translations[lang]['bookkeeping'];
            serviceButtons[2].textContent = translations[lang]['smes'];
            serviceButtons[3].textContent = translations[lang]['income-tax'];
            serviceButtons[4].textContent = translations[lang]['vat'];
        }
    }
    
    // Function to update payroll page content
    function updatePayrollPage(lang) {
        // Update quote section
        safeUpdateElement('.quote', translations[lang]['quote']);
        
        // Update left section
        safeUpdateText('.asyougo', translations[lang]['asyougo']);
        
        // Update list items in the left section
        const listItems = document.querySelectorAll('.left ul li');
        if (listItems.length >= 3) {
            listItems[0].innerHTML = `<strong>${translations[lang]['time_management']}</strong> ${translations[lang]['time_management_text']}`;
            listItems[1].innerHTML = `<strong>${translations[lang]['compliance']}</strong> ${translations[lang]['compliance_text']}`;
            listItems[2].innerHTML = `<strong>${translations[lang]['operational']}</strong> ${translations[lang]['operational_text']}`;
        }
        
        safeUpdateText('.thinkofme', translations[lang]['thinkofme']);
        
        // Update the keepingup section
        const keepingupElement = document.querySelector('.keepingup');
        if (keepingupElement) {
            const keepingupContent = `
                <strong>${translations[lang]['keepingup_title']}</strong> 
                <p>${translations[lang]['keepingup_p1']}</p>
                <p>${translations[lang]['keepingup_p2']}</p>
                <p><strong>${translations[lang]['pension_title']}</strong> 
                ${translations[lang]['pension_text']}</p>
            `;
            keepingupElement.innerHTML = keepingupContent;
        }
    }
    
    // Function to update bookkeeping page content
    function updateBookkeepingPage(lang) {
        // Update the quote (thoughfew)
        safeUpdateElement('.thoughfew', translations[lang]['thoughfew']);
        
        // Update the mypassion paragraph
        const mypassionElement = document.querySelector('.mypassion');
        if (mypassionElement) {
            mypassionElement.innerHTML = translations[lang]['mypassion'] + 
            '<br><br><strong class="bynabbing">' + translations[lang]['bynabbing'] + '</strong>';
        }
        
        // Update the right section
        safeUpdateText('.teveragingtechnology', translations[lang]['teveragingtechnology']);
        safeUpdateText('.atgenoaccounting', translations[lang]['atgenoaccounting']);
    }
    
    // Function to update SME/profile page content
    function updateSMEPage(lang) {
        // Update the Churchill quote
        safeUpdateElement('.churchil', translations[lang]['churchil']);
        
        // Update the main content paragraph
        safeUpdateText('.rapideconomicshifts', translations[lang]['rapideconomicshifts']);
        
        // Update the slogan at the bottom
        safeUpdateText('.geteficency', translations[lang]['geteficency']);
    }
    
    // Function to update Tax page content
    function updateTaxPage(lang) {
        // Update the Einstein quote
        safeUpdateElement('.esntain', translations[lang]['esntain']);
        
        // Update the main content paragraph
        safeUpdateText('.worldoftaxation', translations[lang]['worldoftaxation']);
        
        // Update the slogan at the bottom
        safeUpdateText('.todayistime', translations[lang]['todayistime']);
    }
    
    // Function to update VAT page content
    function updateVATPage(lang) {
        // Update the Dara O Briain quote
        safeUpdateElement('.daraob', translations[lang]['daraob']);
        
        // Update the heading
        safeUpdateText('.outsoursevat', translations[lang]['outsoursevat']);
        
        // Update the main content paragraph
        safeUpdateText('.managingvat', translations[lang]['managingvat']);
        
        // Update the contact heading
        safeUpdateText('.contacttoday', translations[lang]['contacttoday']);
        
        // Update the lookingfordep paragraph
        safeUpdateText('.lookingfordep', translations[lang]['lookingfordep']);
    }
    
    // Function to update common contacts section
    function updateContactsSection(lang) {
        // Update contacts heading - works for all pages
        safeUpdateText('.contact_text', translations[lang]['contacts']);
        
        // Update email and phone labels - works for all pages with different selectors
        let contactSpan;
        if (document.querySelector('.info span:not(.slogan)')) {
            // Home page
            contactSpan = document.querySelector('.info span:not(.slogan)');
        } else if (document.querySelector('.bottom_container span')) {
            // Payroll, Bookkeeping, SME, Tax, or VAT page
            contactSpan = document.querySelector('.bottom_container span');
        }
        
        if (contactSpan) {
            contactSpan.innerHTML = `${translations[lang]['email']} <a href="mailto:Kate.Maxim@geno.ie">Kate.Maxim@geno.ie</a><br>
                                    ${translations[lang]['phone']} +353874516981`;
        }
    }
    
    // Add click event listeners to language buttons
    document.querySelectorAll('.lang_button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            setLanguage(this.id);
        });
    });
    
    // Set the default language or use the one stored in localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setLanguage(savedLanguage);
});