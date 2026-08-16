// ==========================================
// BASE DE DATOS DE CÓCTELES (MOCK)
// ==========================================
const cocktailDB = [
    {
        "id": 1,
        "name": "Bubi",
        "category": "Tribu Lovo",
        "ingredients": [
            "50ml Ron Arehucas Blanco",
            "25ml Licor Lemon grass",
            "15ml Licor de Platano",
            "5ml Cacao pico",
            "15ml King Sawa",
            "1dash Tintura Contriri",
            "top Ginger Beer"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Rim sal de cacao por todo el vas",
        "method": "DIRECTO: añadimos todos los ingredientes al vaso y terminao con top de ginger beer",
        "image": "./assets/lovo_bubi.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 2,
        "name": "Manabi",
        "category": "Tribu Lovo",
        "ingredients": [
            "30ml Mix de Rones",
            "10ml Worthy Park",
            "10ml Ron Bumbu",
            "55ml Z. Piña",
            "45ml Z. Tomate de Arbol",
            "20ml Licor Cacahute",
            "10ml Sirope de Coco"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Espuma de Tomate de Arbol y Ají amarillo & polvo cacahuete",
        "method": "DIRECTO: añadimos todos los ingredientes al vaso, terminamos con el gasificado y colocamos espuma por encima &",
        "image": "./assets/lovo_manabi.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 3,
        "name": "Inuit",
        "category": "Tribu Lovo",
        "ingredients": [
            "20ml Mix Gin",
            "30ml Licor Salmon & eneldo",
            "25ml King Sawa",
            "10ml S. Simple",
            "1dash Bitter Ruibarbo"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Gelatina acida y polvo de salmon",
        "method": "Shake & Double Strain:: añadir todos los indredientes dentro de la coctelera y  agitar corto e intenso.",
        "image": "./assets/lovo_inuit.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 4,
        "name": "Maori",
        "category": "Tribu Lovo",
        "ingredients": [
            "40ml Gin Matcha",
            "15ml Licor Lima Kaffir",
            "15ml Sirope Hoja higuera",
            "25ml Z. Lima",
            "top Soda Higuera"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Aire Fresco herbal",
        "method": "Shake & Double Strain:: añadir todos los indredientes dentro de la coctelera y  agitar corto e intenso.",
        "image": "./assets/Cocktail_Maori.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 5,
        "name": "Masai",
        "category": "Tribu Lovo",
        "ingredients": [
            "25ml Bombay saphire",
            "50ml Vemouth Dry 1757 de Calabza",
            "25ml King Sawa",
            "15ml S. Calabaza",
            "15ml S. Simple",
            "15ml Hibiscus",
            "15ml Campari"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Pipeta en el Hielo",
        "method": "Shake: Corto y ligero",
        "image": "./assets/Cocktail_Masai.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 6,
        "name": "Indio Navajos",
        "category": "Tribu Lovo",
        "ingredients": [
            "50ml Bourbon a la Mantequilla",
            "20ml Licor de Tabaco",
            "15ml Licor de Maiz Azul",
            "10ml Licor de Cacao"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Tortilla de maiz azul",
        "method": "Stir: verter todos los ingredientes en el mixing glass, remover, enfriar a punto optimo, servir",
        "image": "./assets/Cocktail_Navajo.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 8,
        "name": "Samurai",
        "category": "Tribu Lovo",
        "ingredients": [
            "54gr Mix Whisky",
            "20gr Licor de Pandam",
            "12,5gr Miso",
            "10gr Gallteta",
            "25gr Z. Limon",
            "20gr Sirope Alga Nori",
            "28gr Leche de Soja",
            "100ml soda higuera"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "ninguno",
        "method": "Servicio de te delante del cliente con su repectiva jarra",
        "image": "./assets/Cocktail_Samurai.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 9,
        "name": "Ngi",
        "category": "Tribu Lovo",
        "ingredients": [
            "40ml Brandy Fundador",
            "15ml Licor de Cacao",
            "70ml Ginnes",
            "10ml King Sawa",
            "10ml Sirope simple",
            "1 dash Bitter Cacao"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Espuma de Banana y plata comestible",
        "method": "Directo:  Vaso rocks redondo, servir y terminar con espuma banana",
        "image": "./assets/lovo_ngi.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 10,
        "name": "Boazu",
        "category": "Tribu Lovo",
        "ingredients": [
            "20ml Mix Ron",
            "20ml Everum",
            "50ml Cordial de Fresa",
            "15ml Pinot Charentes",
            "15ml Fino",
            "2dash Bitter Nuez"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Fresas encurtida",
        "method": "Stir: agregar todos los ingredientes en la codctelera, havcer throw y servir.",
        "image": "./assets/lovo_boazu.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 11,
        "name": "Tliish",
        "category": "Tribu Lovo",
        "ingredients": [
            "45ml Mix Ron a la Nuez Moscada",
            "20ml Cordial pera Asada",
            "10ml King Sawa",
            "15ml Sirope Pera al Horno"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Residuo",
        "method": "Stir: agregar todos los ingrediente en el mizing glass, remover y diluir a temperatura optima y servir.",
        "image": "./assets/lovo_tliish.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 12,
        "name": "Shunme",
        "category": "Tribu Lovo",
        "ingredients": [
            "10ml Laphroaig 10",
            "40ml Mezcal Union",
            "30ml Licor Herbal",
            "10ml Sirope Hierba Luisa",
            "5ml Humo",
            "25ml King Sawa",
            "top Soda Higuera"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "ramillete verde(estragon)",
        "method": "Directo:",
        "image": "./assets/Cocktail_Shunme.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 13,
        "name": "Enngerai",
        "category": "Tribu Lovo",
        "ingredients": [
            "30ml Tequila 3 Generaciones",
            "20ml Mezcal Union",
            "10ml Humo",
            "20ml Sirope Mango",
            "35ml Z. Calamansi",
            "35ml Licor Mango Picante",
            "10ml Licor Melon Cantalupe"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "flores secas",
        "method": "Directo: todos los ingredientes / hielo pile / remover homogeneamente terminar con mas hielo y flores",
        "image": "./assets/lovo-bar-nordico-cocktail.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 14,
        "name": "Manuq",
        "category": "Tribu Lovo",
        "ingredients": [
            "10ml Mix Gin",
            "40ml Licor Salmon & Eneldo",
            "25ml King Sawa",
            "150ml Tonica Albahaca & Pepino",
            "10ml Voltaje"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Cupula hielo pile y Arandanos rojos",
        "method": "Directo:    añadir hielo y todos los ingredientes, remover  / terminar cupula y azucar glass",
        "image": "./assets/Cocktail_Nanuq.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 15,
        "name": "Honu",
        "category": "Tribu Lovo",
        "ingredients": [
            "50ml Tequila Altos de Sisho Verde",
            "25ml Z. Lima",
            "20ml Sirope Hoja Higuera",
            "30ml Clara de Huevo"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Rim Cebollino y sal",
        "method": "Shake: Estilo sour / todos los ingredientes en la coctelera, dry shake and shake.",
        "image": "./assets/lovo-bar-nordico-cocktail.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 23,
        "name": "Tomate & Strawberry",
        "category": "Tribu Lovo",
        "ingredients": [
            "30 Mix Gin de Fresas",
            "10 Amontillado",
            "5 Martini Bitter",
            "35 Agua de Tomate",
            "10 Z. Lima",
            "15 Sirope Simple"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "",
        "method": "Shake: agitado corto e intenso y Servir doble colado",
        "image": "./assets/Cocktail_TomatoStrawberry-scaled.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 24,
        "name": "Jupe Banane",
        "category": "Tribu Lovo",
        "ingredients": [
            "60ml Mix Vodka",
            "10ml Licor de Plátano",
            "25ml Zumo limón",
            "15ml Sirope simple",
            "100ml Yogurt fresa y platano",
            "5 gotas Bitter suze rojo"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Deshidratado residuos",
        "method": "Directo en banana: colocar el bloque y añadir el bitter",
        "image": "./assets/lovo-bar-madrid-50-best-bars-jupe-banane-1.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];


// ==========================================
// APP LOGIC Y CONTROLADOR DE VISTAS
// ==========================================
const app = {
    // Referencias a elementos del DOM
    views: document.querySelectorAll('.view'),
    navItems: document.querySelectorAll('.nav-item'),
    
    // Función para cambiar de pestaña/vista
    navigate: function(viewId, navElement = null) {
        // Ocultar todas las vistas
        this.views.forEach(v => v.classList.remove('active'));
        // Mostrar vista objetivo
        const targetView = document.getElementById(`view-${viewId}`);
        if(targetView) targetView.classList.add('active');

        // Actualizar navegación inferior
        if (navElement) {
            this.navItems.forEach(nav => nav.classList.remove('active'));
            navElement.classList.add('active');
        } else {
            // Si navegamos desde un botón, actualizar el nav bottom automáticamente
            this.navItems.forEach(nav => {
                nav.classList.remove('active');
                if(nav.getAttribute('onclick').includes(viewId)){
                    nav.classList.add('active');
                }
            });
        }

        // Inicializar módulos según la vista
        if(viewId === 'flashcards') this.flashcards.init();
        if(viewId === 'quiz') this.quiz.init();
        if(viewId === 'mixer') this.mixer.init();
        if(viewId === 'exam') this.exam.init();
        if(viewId === 'english') this.english.init();
        if(viewId === 'rush') this.rush.init();
        if(viewId === 'dashboard') app.learning.updateDashboard();
    },

    // Utilidad para obtener elemento aleatorio de array
    getRandomItem: function(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    // Utilidad para mezclar (shuffle) array
    shuffle: function(arr) {
        return arr.sort(() => Math.random() - 0.5);
    }
};

// ==========================================

// ==========================================
// MÓDULO: APRENDIZAJE Y PROGRESO (SPACED REPETITION)
// ==========================================
app.learning = {
    state: {},
    
    init: function() {
        const saved = localStorage.getItem('lovo_learning_state');
        if(saved) {
            this.state = JSON.parse(saved);
        } else {
            // Inicializar estado para cada cóctel
            cocktailDB.forEach(c => {
                this.state[c.id] = { mastery: 0, lastSeen: 0 };
            });
            this.save();
        }
        this.updateDashboard();
    },
    
    save: function() {
        localStorage.setItem('lovo_learning_state', JSON.stringify(this.state));
        this.updateDashboard();
    },
    
    recordSuccess: function(cocktailId) {
        if(!this.state[cocktailId]) this.state[cocktailId] = { mastery: 0, lastSeen: 0 };
        this.state[cocktailId].mastery = Math.min(100, this.state[cocktailId].mastery + 20);
        this.state[cocktailId].lastSeen = Date.now();
        this.save();
    },
    
    recordFailure: function(cocktailId) {
        if(!this.state[cocktailId]) this.state[cocktailId] = { mastery: 0, lastSeen: 0 };
        this.state[cocktailId].mastery = Math.max(0, this.state[cocktailId].mastery - 30);
        this.state[cocktailId].lastSeen = Date.now();
        this.save();
    },
    
    getDeck: function() {
        // Ordenar priorizando los de menor maestría
        let deck = [...cocktailDB];
        deck.sort((a, b) => {
            let ma = this.state[a.id] ? this.state[a.id].mastery : 0;
            let mb = this.state[b.id] ? this.state[b.id].mastery : 0;
            return ma - mb;
        });
        return deck;
    },
    
    updateDashboard: function() {
        let totalMastery = 0;
        let masteredCount = 0;
        let count = cocktailDB.length;
        
        for(let id in this.state) {
            totalMastery += this.state[id].mastery;
            if(this.state[id].mastery >= 80) masteredCount++;
        }
        
        let avgMastery = Math.round(totalMastery / count);
        
        let elPct = document.getElementById('mastery-percentage');
        let elCount = document.getElementById('mastery-count');
        if(elPct) elPct.textContent = avgMastery + '%';
        if(elCount) elCount.textContent = masteredCount + ' / ' + count;
    }
};

// Llamar a init() al cargar
window.addEventListener('load', () => {
    app.learning.init();
});

// MÓDULO 1: FLASHCARDS
// ==========================================
app.flashcards = {
    currentIndex: 0,
    deck: [],
    
    init: function() {
        this.deck = app.learning.getDeck(); // Prioriza no dominados
        this.currentIndex = 0;
        this.renderCard();
    },

    renderCard: function() {
        if(this.deck.length === 0) return;
        
        const cocktail = this.deck[this.currentIndex];
        const card = document.querySelector('.flashcard');
        card.classList.remove('flipped'); // Reset flip
        
        document.getElementById('flashcard-name').textContent = cocktail.name;
        document.getElementById('flashcard-category').textContent = cocktail.category;
        
        // Imagen del coctel en la tarjeta
        document.getElementById('flashcard-image').style.backgroundImage = `url('${cocktail.image}')`;

        const ingredientsHtml = cocktail.ingredients.map(i => `<li>${i}</li>`).join('');
        document.getElementById('flashcard-ingredients').innerHTML = ingredientsHtml;
        document.getElementById('flashcard-method').textContent = cocktail.method;
                        
        
        
        // Guardar el video URL para el modal
        app.currentVideoUrl = cocktail.video;
        
        // Update Counter
        document.getElementById('flashcard-counter').textContent = `${this.currentIndex + 1} / ${this.deck.length}`;
    },

    next: function(knewIt) {
        const cocktail = this.deck[this.currentIndex];
        if (knewIt) {
            app.learning.recordSuccess(cocktail.id);
        } else {
            app.learning.recordFailure(cocktail.id);
        }

        if(this.currentIndex < this.deck.length - 1) {
            this.currentIndex++;
            this.renderCard();
        } else {
            alert("¡Has repasado todas las cartas!");
            this.init(); // Reiniciar mazo
        }
    }
};

// ==========================================
// MÓDULO 2: QUIZ
// ==========================================
app.quiz = {
    score: 0,
    currentQuestion: null,

    init: function() {
        this.score = 0;
        document.getElementById('quiz-score-text').textContent = this.score;
        this.generateQuestion();
    },

    generateQuestion: function() {
        // Ocultar feedback y botón next
        document.getElementById('quiz-feedback').classList.add('hidden');
        document.getElementById('quiz-next-btn').classList.add('hidden');
        
        const cocktail = app.getRandomItem(cocktailDB);
        const types = ['ingredients', 'glassware', 'method'];
        const questionType = app.getRandomItem(types);
        
        let questionText = "";
        let correctAnswer = "";
        let wrongAnswers = [];

        if (questionType === 'glassware') {
            questionText = `¿En qué vaso/copa se sirve el "${cocktail.name}"?`;
            correctAnswer = cocktail.glassware;
            wrongAnswers = cocktailDB.filter(c => c.glassware !== correctAnswer).map(c => c.glassware);
        } else if (questionType === 'method') {
            questionText = `¿Cuál es el método de elaboración del "${cocktail.name}"?`;
            correctAnswer = cocktail.method;
            wrongAnswers = cocktailDB.filter(c => c.method !== correctAnswer).map(c => c.method);
        } else {
            // Ingredients
            const ing = app.getRandomItem(cocktail.ingredients);
            questionText = `¿Cuál de estos ingredientes lleva el "${cocktail.name}"?`;
            correctAnswer = ing;
            // Get random ingredients from other cocktails
            cocktailDB.forEach(c => {
                if(c.id !== cocktail.id) wrongAnswers.push(...c.ingredients);
            });
        }

        // Limpiar duplicados y mezclar wrong answers
        wrongAnswers = [...new Set(wrongAnswers)];
        wrongAnswers = app.shuffle(wrongAnswers).slice(0, 3); // Tomar 3 incorrectas

        const options = app.shuffle([correctAnswer, ...wrongAnswers]);
        
        this.currentQuestion = { correctAnswer };

        document.getElementById('quiz-question').textContent = questionText;
        const optionsContainer = document.getElementById('quiz-options');
        optionsContainer.innerHTML = '';
        
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.textContent = opt;
            btn.onclick = () => this.checkAnswer(btn, opt);
            optionsContainer.appendChild(btn);
        });
    },

    checkAnswer: function(btn, selectedOption) {
        // Deshabilitar todos los botones
        const buttons = document.querySelectorAll('.quiz-option');
        buttons.forEach(b => b.disabled = true);

        const feedback = document.getElementById('quiz-feedback');
        feedback.classList.remove('hidden', 'correct', 'incorrect');
        document.getElementById('quiz-next-btn').classList.remove('hidden');

        if(selectedOption === this.currentQuestion.correctAnswer) {
            btn.classList.add('correct');
            this.score += 10;
            if (cocktail) app.learning.recordSuccess(cocktail.id);
            document.getElementById('quiz-score-text').textContent = this.score;
            feedback.textContent = "¡Correcto! +10 pts";
            feedback.classList.add('correct');
        } else {
            btn.classList.add('incorrect');
            // Resaltar la correcta
            buttons.forEach(b => {
                if(b.textContent === this.currentQuestion.correctAnswer) {
                    b.classList.add('correct');
                }
            });
            feedback.textContent = "Incorrecto. La respuesta era: " + this.currentQuestion.correctAnswer;
            feedback.classList.add('incorrect');
        }
    },

    nextQuestion: function() {
        this.generateQuestion();
    }
};

// ==========================================
// MÓDULO 3: MIXER (ASOCIACIÓN)
// ==========================================
app.mixer = {
    targetCocktail: null,
    selectedIngredients: [],
    
    init: function() {
        this.selectedIngredients = [];
        this.targetCocktail = app.getRandomItem(cocktailDB);
        document.getElementById('mixer-target-cocktail').textContent = this.targetCocktail.name;
        
        // Obtener todos los ingredientes únicos de la BD
        let allIngredients = [];
        cocktailDB.forEach(c => allIngredients.push(...c.ingredients));
        allIngredients = [...new Set(allIngredients)]; // Unique
        
        // Seleccionar ingredientes del cóctel + algunos aleatorios
        let displayIngredients = [...this.targetCocktail.ingredients];
        
        // Añadir distractores
        let distractors = allIngredients.filter(ing => !displayIngredients.includes(ing));
        distractors = app.shuffle(distractors).slice(0, 6); // 6 incorrectos
        
        displayIngredients = app.shuffle([...displayIngredients, ...distractors]);
        
        const container = document.getElementById('mixer-ingredients');
        container.innerHTML = '';
        
        displayIngredients.forEach(ing => {
            const btn = document.createElement('button');
            btn.className = 'mixer-ingredient';
            btn.textContent = ing;
            btn.onclick = () => this.toggleIngredient(btn, ing);
            container.appendChild(btn);
        });
    },
    
    toggleIngredient: function(btn, ing) {
        if(this.selectedIngredients.includes(ing)) {
            this.selectedIngredients = this.selectedIngredients.filter(i => i !== ing);
            btn.classList.remove('selected');
        } else {
            this.selectedIngredients.push(ing);
            btn.classList.add('selected');
        }
    },
    
    check: function() {
        const correctIngredients = this.targetCocktail.ingredients;
        const buttons = document.querySelectorAll('.mixer-ingredient');
        
        let correctCount = 0;
        let penaltyCount = 0;

        buttons.forEach(btn => {
            const ing = btn.textContent;
            btn.disabled = true; // Deshabilitar interacción
            
            if (this.selectedIngredients.includes(ing)) {
                if (correctIngredients.includes(ing)) {
                    btn.classList.add('correct-reveal');
                    correctCount++;
                } else {
                    btn.classList.add('wrong-reveal');
                    penaltyCount++;
                }
            } else {
                if (correctIngredients.includes(ing)) {
                    // No lo seleccionó pero era correcto
                    btn.style.border = "2px dashed #2ecc71";
                    btn.style.color = "#2ecc71";
                }
            }
        });
        
        setTimeout(() => {
            if(correctCount === correctIngredients.length && penaltyCount === 0) {
                alert("¡Mezcla Perfecta! Sabes exactamente qué lleva.");
            } else {
                alert(`Conseguiste ${correctCount} de ${correctIngredients.length} ingredientes correctos. Y te equivocaste en ${penaltyCount}.`);
            }
            this.init(); // Reset game
        }, 1500);
    }
};

// ==========================================
// MÓDULO 4: EXAMEN
// ==========================================
app.exam = {
    questions: [],
    currentQIndex: 0,
    correctAnswers: 0,
    timerInterval: null,
    timeRemaining: 15 * 60, // 15 minutos en segundos
    
    init: function() {
        document.getElementById('exam-intro').classList.remove('hidden');
        document.getElementById('exam-active').classList.add('hidden');
        document.getElementById('exam-results').classList.add('hidden');
        this.timeRemaining = 15 * 60;
        this.updateTimerDisplay();
    },
    
    start: function() {
        this.correctAnswers = 0;
        this.currentQIndex = 0;
        
        // Generar 15 preguntas aleatorias
        this.questions = [];
        for(let i=0; i<15; i++) {
            // Lógica simplificada de generación (similar al quiz)
            const cocktail = app.getRandomItem(cocktailDB);
            const questionType = app.getRandomItem(['ingredients', 'glassware', 'method']);
            
            let qText = "", cAns = "", wAns = [];
            if(questionType === 'glassware'){
                qText = `¿Cristalería para "${cocktail.name}"?`;
                cAns = cocktail.glassware;
                wAns = cocktailDB.filter(c=>c.glassware!==cAns).map(c=>c.glassware);
            } else if (questionType === 'method') {
                qText = `¿Método para "${cocktail.name}"?`;
                cAns = cocktail.method;
                wAns = cocktailDB.filter(c=>c.method!==cAns).map(c=>c.method);
            } else {
                qText = `¿Ingrediente del "${cocktail.name}"?`;
                cAns = app.getRandomItem(cocktail.ingredients);
                cocktailDB.forEach(c => { if(c.id !== cocktail.id) wAns.push(...c.ingredients); });
            }
            wAns = [...new Set(wAns)];
            wAns = app.shuffle(wAns).slice(0,3);
            const opts = app.shuffle([cAns, ...wAns]);
            
            this.questions.push({ qText, cAns, opts });
        }
        
        document.getElementById('exam-intro').classList.add('hidden');
        document.getElementById('exam-active').classList.remove('hidden');
        
        // Start Timer
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            if(this.timeRemaining <= 0) this.endExam(true);
        }, 1000);
        
        this.renderQuestion();
    },
    
    updateTimerDisplay: function() {
        const m = Math.floor(this.timeRemaining / 60).toString().padStart(2, '0');
        const s = (this.timeRemaining % 60).toString().padStart(2, '0');
        document.getElementById('exam-timer').textContent = `${m}:${s}`;
    },
    
    renderQuestion: function() {
        const q = this.questions[this.currentQIndex];
        document.getElementById('exam-progress').textContent = `Pregunta ${this.currentQIndex + 1} de 15`;
        document.getElementById('exam-question').textContent = q.qText;
        
        const optsContainer = document.getElementById('exam-options');
        optsContainer.innerHTML = '';
        
        q.opts.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.textContent = opt;
            btn.onclick = () => this.handleAnswer(opt === q.cAns);
            optsContainer.appendChild(btn);
        });
    },
    
    handleAnswer: function(isCorrect) {
        if(isCorrect) this.correctAnswers++;
        
        if(this.currentQIndex < 14) {
            this.currentQIndex++;
            this.renderQuestion();
        } else {
            this.endExam(false);
        }
    },
    
    endExam: function(timeout = false) {
        clearInterval(this.timerInterval);
        document.getElementById('exam-active').classList.add('hidden');
        
        const resultsEl = document.getElementById('exam-results');
        resultsEl.classList.remove('hidden');
        
        const percentage = Math.round((this.correctAnswers / 15) * 100);
        document.getElementById('exam-final-score').textContent = `${percentage}%`;
        
        const msgEl = document.getElementById('exam-status-message');
        if (timeout) {
            msgEl.textContent = "¡Tiempo agotado!";
            msgEl.style.color = "var(--clr-error)";
        } else if (percentage >= 80) {
            msgEl.textContent = "¡Aprobado! Excelente trabajo.";
            msgEl.style.color = "var(--clr-success)";
        } else {
            msgEl.textContent = "Necesitas estudiar un poco más.";
            msgEl.style.color = "var(--clr-error)";
        }
    }
};

// ==========================================
// MÓDULO 5: INGLÉS
// ==========================================
const englishPhrases = [
  ['Saludos', 'Hi, how are you?', 'Hola, ¿qué tal?', 'Saludo informal y cercano.'],
  ['Saludos', 'Welcome!', '¡Bienvenido/a!', 'Ideal al recibir a un cliente.'],
  ['Pedidos', 'What can I get you?', '¿Qué te pongo?', 'La forma más natural de tomar nota.'],
  ['Pedidos', 'Are you ready to order?', '¿Estáis listos para pedir?', 'Útil con mesas o grupos.'],
  ['Pedidos', 'Would you like anything else?', '¿Queréis algo más?', 'Para ofrecer una segunda ronda.'],
  ['Bebidas', 'Beer, wine or a cocktail?', '¿Cerveza, vino o cóctel?', 'Para ayudar a decidir.'],
  ['Bebidas', 'What would you like to drink?', '¿Qué te gustaría beber?', 'Pregunta general y educada.'],
  ['Bebidas', 'Still or sparkling water?', '¿Agua sin gas o con gas?', 'Pregunta habitual en hostelería.'],
  ['Bebidas', 'With ice?', '¿Con hielo?', 'Corta y muy práctica.'],
  ['Bebidas', 'Do you want a single or a double?', '¿Lo quieres solo o doble?', 'Para combinados.'],
  ['Servicio', 'I will be right with you.', 'Ahora mismo voy con vosotros.', 'Reconoce al cliente aunque estés ocupado.'],
  ['Servicio', 'Sorry for the wait.', 'Perdón por la espera.', 'Una disculpa rápida y cordial.'],
  ['Servicio', 'Here you are.', 'Aquí tienes / Aquí tenéis.', 'Al entregar una bebida o pedido.'],
  ['Servicio', 'Enjoy!', '¡Que lo disfrutéis!', 'Al servir.'],
  ['Pago', 'Would you like to pay by card or cash?', '¿Queréis pagar con tarjeta o en efectivo?', 'Pregunta directa y educada.'],
  ['Pago', 'The total is €___.', 'El total son ___ euros.', 'Completa con el importe.'],
  ['Pago', 'Would you like the bill?', '¿Queréis la cuenta?', 'En inglés británico; en EE. UU., “the check”.'],
  ['Discoteca', 'The DJ starts at midnight.', 'El DJ empieza a medianoche.', 'Información frecuente de la sala.'],
  ['Discoteca', 'The entrance is over there.', 'La entrada está por allí.', 'Para orientar a clientes.'],
  ['Discoteca', 'Last orders, please!', '¡Última ronda, por favor!', 'Anuncio para el cierre de barra.'],
  ['Problemas', 'I am sorry, we are out of that.', 'Lo siento, se nos ha acabado.', 'Para un producto agotado.'],
  ['Problemas', 'Could I see your ID, please?', '¿Podría ver tu identificación, por favor?', 'Para comprobar la edad.'],
  ['Problemas', 'Please drink responsibly.', 'Por favor, bebe con responsabilidad.', 'Mensaje de consumo responsable.']
].map(([category, en, es, tip], id) => ({ id, category, en, es, tip }));

app.english = {
    state: {
        category: 'Todas',
        query: '',
        index: 0,
        known: new Set(JSON.parse(localStorage.getItem('english-bar-known') || '[]'))
    },

    init: function() {
        this.renderCategories();
        this.render();
    },

    save: function() {
        localStorage.setItem('english-bar-known', JSON.stringify([...this.state.known]));
    },

    filtered: function() {
        return englishPhrases.filter(p => 
            (this.state.category === 'Todas' || p.category === this.state.category) && 
            `${p.en} ${p.es}`.toLowerCase().includes(this.state.query)
        );
    },

    renderCategories: function() {
        const categories = ['Todas', ...new Set(englishPhrases.map(p => p.category))];
        const container = document.getElementById('english-categories');
        container.innerHTML = categories.map(c => `
            <button class="category-btn ${c === this.state.category ? 'active' : ''}" onclick="app.english.setCategory('${c}')">${c}</button>
        `).join('');
    },

    setCategory: function(c) {
        this.state.category = c;
        this.state.index = 0;
        this.renderCategories();
        this.render();
    },

    search: function(val) {
        this.state.query = val.trim().toLowerCase();
        this.state.index = 0;
        this.render();
    },

    render: function() {
        const items = this.filtered();
        this.state.index = Math.max(0, Math.min(this.state.index, items.length - 1));
        
        const p = items[this.state.index];
        const card = document.getElementById('english-study-card');
        
        // Progress
        const total = englishPhrases.length;
        const done = this.state.known.size;
        document.getElementById('english-progress-label').textContent = `${done} de ${total} repasadas`;
        document.getElementById('english-progress-bar').style.width = `${(done / total) * 100}%`;

        if (!p) { 
            card.classList.add('hidden'); 
            return; 
        }
        card.classList.remove('hidden');
        
        document.getElementById('english-card-category').textContent = p.category;
        document.getElementById('english-card-counter').textContent = `${this.state.index + 1} / ${items.length}`;
        document.getElementById('english-phrase-en').textContent = p.en;
        document.getElementById('english-phrase-es').textContent = p.es;
        document.getElementById('english-tip').textContent = p.tip;
        
        document.getElementById('english-translation').classList.add('hidden');
        document.getElementById('english-reveal-btn').classList.remove('hidden');
        
        const knownBtn = document.getElementById('english-known-btn');
        if (this.state.known.has(p.id)) {
            knownBtn.textContent = '↺ Repasar';
            knownBtn.style.backgroundColor = 'transparent';
            knownBtn.style.border = '1px solid var(--clr-success)';
            knownBtn.style.color = 'var(--clr-success)';
        } else {
            knownBtn.textContent = '✓ La sé';
            knownBtn.style.backgroundColor = 'var(--clr-success)';
            knownBtn.style.border = 'none';
            knownBtn.style.color = '#fff';
        }
    },

    reveal: function() {
        document.getElementById('english-translation').classList.remove('hidden');
        document.getElementById('english-reveal-btn').classList.add('hidden');
    },

    prev: function() {
        const n = this.filtered().length;
        if(n === 0) return;
        this.state.index = (this.state.index - 1 + n) % n;
        this.render();
    },

    next: function() {
        const n = this.filtered().length;
        if(n === 0) return;
        this.state.index = (this.state.index + 1) % n;
        this.render();
    },

    toggleKnown: function() {
        const p = this.filtered()[this.state.index];
        if(!p) return;
        if(this.state.known.has(p.id)) {
            this.state.known.delete(p.id);
        } else {
            this.state.known.add(p.id);
            // Auto advance on know
            setTimeout(() => this.next(), 300);
        }
        this.save();
        this.render();
    },

    resetProgress: function() {
        if(confirm("¿Seguro que quieres reiniciar tu progreso de inglés?")) {
            this.state.known.clear();
            this.save();
            this.render();
        }
    },

    speak: function() {
        const p = this.filtered()[this.state.index];
        if(!p) return;
        const u = new SpeechSynthesisUtterance(p.en);
        const voices = speechSynthesis.getVoices();
        u.voice = voices.find(v => /^en-GB/i.test(v.lang)) || voices.find(v => /^en/i.test(v.lang)) || null;
        u.lang = u.voice?.lang || 'en-GB';
        u.rate = 0.8;
        speechSynthesis.cancel();
        speechSynthesis.speak(u);
    }
};

// Start default view
document.addEventListener('DOMContentLoaded', () => {
    // Check if URL has hash to navigate directly
    const hash = window.location.hash.substring(1);
    if(hash && ['dashboard', 'flashcards', 'quiz', 'mixer', 'exam', 'english'].includes(hash)) {
        app.navigate(hash);
    }
});

// ==========================================
// LÓGICA DE INSTALACIÓN PWA (ANDROID & IOS)
// ==========================================
let deferredPrompt;
const installBtn = document.getElementById('btn-install-app');
const iosModal = document.getElementById('ios-install-modal');

// Detectar iOS
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};
// Detectar si ya está instalada en iOS
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

if (isIos() && !isInStandaloneMode()) {
    // Mostrar botón para iOS
    if (installBtn) {
        installBtn.classList.remove('hidden');
        installBtn.addEventListener('click', () => {
            if(iosModal) iosModal.classList.remove('hidden');
        });
    }
}

// Lógica para Android / Escritorio (Chrome, Edge)
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevenir el mini-infobar por defecto
    e.preventDefault();
    deferredPrompt = e;
    
    // Mostrar nuestro botón personalizado
    if (installBtn) {
        installBtn.classList.remove('hidden');
        
        installBtn.addEventListener('click', async () => {
            if(!deferredPrompt) return;
            // Mostrar el prompt nativo
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                console.log('El usuario aceptó la instalación');
            }
            deferredPrompt = null;
            installBtn.classList.add('hidden');
        });
    }
});

// Ocultar botón si ya se instaló (evento appinstalled)
window.addEventListener('appinstalled', () => {
    if (installBtn) installBtn.classList.add('hidden');
    deferredPrompt = null;
    console.log('PWA Instalada correctamente');
});


// ==========================================
// MÓDULO: SERVICIO REAL (RUSH)
// ==========================================
app.rush = {
    timeLeft: 60,
    score: 0,
    timer: null,
    currentCocktail: null,
    
    init: function() {
        document.getElementById('rush-start-screen').classList.remove('hidden');
        document.getElementById('rush-game-screen').classList.add('hidden');
        document.getElementById('rush-end-screen').classList.add('hidden');
        document.getElementById('rush-timer').textContent = '60s';
    },
    
    start: function() {
        this.timeLeft = 60;
        this.score = 0;
        document.getElementById('rush-start-screen').classList.add('hidden');
        document.getElementById('rush-end-screen').classList.add('hidden');
        document.getElementById('rush-game-screen').classList.remove('hidden');
        
        this.updateTimer();
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimer();
            if(this.timeLeft <= 0) this.endGame();
        }, 1000);
        
        this.nextOrder();
    },
    
    updateTimer: function() {
        document.getElementById('rush-timer').textContent = this.timeLeft + 's';
        if(this.timeLeft <= 10) {
            document.getElementById('rush-timer').style.color = 'red';
        } else {
            document.getElementById('rush-timer').style.color = '#dc3545';
        }
    },
    
    nextOrder: function() {
        // Elegir coctel basado en aprendizaje (los que menos domina)
        const deck = app.learning.getDeck();
        // Coger uno de los 10 peores al azar
        this.currentCocktail = deck[Math.floor(Math.random() * Math.min(10, deck.length))];
        
        document.getElementById('rush-cocktail-name').textContent = this.currentCocktail.name;
        
        // Generar opciones de método
        const correctAnswer = this.currentCocktail.method;
        let wrongAnswers = cocktailDB.filter(c => c.method !== correctAnswer).map(c => c.method);
        wrongAnswers = app.shuffle(wrongAnswers).slice(0, 3);
        
        let options = [correctAnswer, ...wrongAnswers];
        options = app.shuffle(options);
        
        const optionsGrid = document.getElementById('rush-options');
        optionsGrid.innerHTML = '';
        
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-outline';
            btn.style.height = 'auto';
            btn.style.padding = '15px';
            btn.style.textAlign = 'left';
            btn.textContent = opt;
            btn.onclick = (e) => this.checkAnswer(opt, e.target);
            optionsGrid.appendChild(btn);
        });
    },
    
    checkAnswer: function(selected, btnElement) {
        if(selected === this.currentCocktail.method) {
            btnElement.classList.replace('btn-outline', 'btn-primary');
            btnElement.style.background = '#28a745';
            btnElement.style.borderColor = '#28a745';
            this.timeLeft += 3;
            this.score++;
            app.learning.recordSuccess(this.targetCocktail.id);
            app.learning.recordSuccess(this.currentCocktail.id);
            
            // Efecto visual positivo
            document.body.style.background = 'rgba(40, 167, 69, 0.2)';
            setTimeout(() => { document.body.style.background = ''; }, 200);
            
            setTimeout(() => this.nextOrder(), 400);
        } else {
            btnElement.style.background = '#dc3545';
            btnElement.style.borderColor = '#dc3545';
            btnElement.style.color = 'white';
            this.timeLeft -= 5;
            app.learning.recordFailure(this.currentCocktail.id);
            
            // Efecto visual negativo (flash)
            document.body.style.background = 'rgba(220, 53, 69, 0.3)';
            setTimeout(() => { document.body.style.background = ''; }, 200);
        }
        this.updateTimer();
    },
    
    endGame: function() {
        clearInterval(this.timer);
        document.getElementById('rush-game-screen').classList.add('hidden');
        document.getElementById('rush-end-screen').classList.remove('hidden');
        document.getElementById('rush-score').textContent = this.score;
        document.getElementById('rush-timer').textContent = '0s';
    }
};
