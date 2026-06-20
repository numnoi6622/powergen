// quiz.js - ระบบจัดการแบบฝึกหัด 20 ข้อ

// ชุดข้อมูลแบบฝึกหัดวิชา ระบบไฟฟ้ากำลัง (20 ข้อ)
const quizData = [
    {
        question: "ข้อใดคือหน้าที่หลักของสถานีไฟฟ้าย่อย (Substation)?",
        options: [
            "ผลิตพลังงานไฟฟ้าจากเชื้อเพลิง",
            "แปลงแรงดันไฟฟ้าและสวิตช์ตัดต่อวงจร",
            "เก็บกักพลังงานไฟฟ้าสำรอง",
            "แปลงไฟฟ้ากระแสสลับเป็นกระแสตรงเท่านั้น"
        ],
        correct: 1,
        explanation: "สถานีไฟฟ้าย่อยมีหน้าที่หลักในการแปลงระดับแรงดันไฟฟ้า (Step-up/Step-down) ควบคุมการจ่ายกระแสไฟฟ้า และป้องกันระบบผ่านอุปกรณ์สวิตช์เกียร์"
    },
    {
        question: "ปรากฏการณ์โคโรนา (Corona Effect) ในสายส่งแรงสูงเกิดจากสาเหตุใด?",
        options: [
            "การแตกตัวของอากาศรอบสายส่งเนื่องจากสนามไฟฟ้าความเข้มสูง",
            "ความร้อนที่เกิดจากกระแสไฟฟ้าเกินในสายส่ง",
            "ฟ้าผ่าลงบนสายส่งโดยตรง",
            "การสั่นสะเทือนของสายส่งจากแรงลม"
        ],
        correct: 0,
        explanation: "ปรากฏการณ์โคโรนาเกิดจากการที่สนามไฟฟ้าที่ผิวสายส่งมีค่าสูงเกินกว่าความทนทานของฉนวนอากาศ (Dielectric strength) ทำให้เกิดการแตกตัวเป็นไอออน"
    },
    {
        question: "อุปกรณ์ใดทำหน้าที่ป้องกันฟ้าผ่าไม่ให้เข้าสู่สถานีไฟฟ้าย่อย?",
        options: [
            "เซอร์กิตเบรกเกอร์ (Circuit Breaker)",
            "รีเลย์ป้องกัน (Protective Relay)",
            "กับดักเสิร์จ (Surge Arrester / Lightning Arrester)",
            "หม้อแปลงกระแส (Current Transformer)"
        ],
        correct: 2,
        explanation: "Surge Arrester จะทำหน้าที่นำกระแสเสิร์จที่เกิดจากฟ้าผ่าหรือแรงดันเกินระบายลงดิน เพื่อป้องกันความเสียหายแก่อุปกรณ์ในสถานี"
    },
    {
        question: "ข้อใดคือข้อดีหลักของระบบสายส่งไฟฟ้ากระแสตรงความดันสูง (HVDC)?",
        options: [
            "ไม่ต้องใช้ฉนวนใดๆ ในการติดตั้ง",
            "ส่งกำลังไฟฟ้าได้ระยะทางไกลโดยไม่มีปัญหาเรื่อง Skin Effect และ Reactive Power",
            "หม้อแปลงไฟฟ้าทำงานได้ดีกว่า",
            "สามารถใช้กับเครื่องใช้ไฟฟ้าตามบ้านได้โดยตรง"
        ],
        correct: 1,
        explanation: "ระบบ HVDC ลดความสูญเสียเมื่อส่งระยะทางไกลมาก และไม่ต้องใช้สายถึง 3 เส้น รวมถึงไม่มีผลกระทบจาก Reactive Power เหมือน HVAC"
    },
    {
        question: "โรงไฟฟ้าพลังงานความร้อน (Thermal Power Plant) มักใช้สิ่งใดเป็นตัวขับเคลื่อนกังหันหลัก?",
        options: [
            "ลม",
            "ไอน้ำแรงดันสูง (High-pressure steam)",
            "น้ำตก",
            "แสงอาทิตย์"
        ],
        correct: 1,
        explanation: "โรงไฟฟ้าความร้อนจะต้มน้ำให้กลายเป็นไอน้ำแรงดันสูงและอุณหภูมิสูง เพื่อไปขับเคลื่อนกังหันไอน้ำ (Steam Turbine)"
    },
    {
        question: "Skin Effect ในสายส่งไฟฟ้ากระแสสลับทำให้เกิดผลอย่างไร?",
        options: [
            "กระแสไฟฟ้าจะไหลหนาแน่นที่บริเวณผิวของสายไฟ ทำให้ความต้านทานเสมือนเพิ่มขึ้น",
            "กระแสไฟฟ้าจะไหลที่แกนกลางของสายไฟเท่านั้น",
            "แรงดันไฟฟ้าเพิ่มสูงขึ้นเรื่อยๆ ตามระยะทาง",
            "ทำให้สายไฟเกิดสนิมได้ง่าย"
        ],
        correct: 0,
        explanation: "Skin Effect คือปรากฏการณ์ที่กระแสสลับพยายามไหลหนาแน่นบริเวณรอบนอก (ผิว) ของตัวนำ ทำให้พื้นที่หน้าตัดใช้งานลดลง ส่งผลให้ความต้านทาน AC สูงกว่า DC"
    },
    {
        question: "Bundled Conductors (ตัวนำควบ) ในระบบส่งแรงดันสูงพิเศษมีประโยชน์หลักเพื่ออะไร?",
        options: [
            "ลดน้ำหนักของสายส่ง",
            "เพิ่มความสวยงามให้ระบบ",
            "ลดค่าโคโรนาลอส (Corona Loss) และลดค่าอินดักแตนซ์",
            "ทำให้ง่ายต่อการติดตั้งและซ่อมบำรุง"
        ],
        correct: 2,
        explanation: "การใช้ Bundled Conductors ช่วยเพิ่มรัศมีเสมือนของสาย ลดความเข้มสนามไฟฟ้าที่ผิวสาย ทำให้ลด Corona และยังลด Inductance ของสายลงด้วย"
    },
    {
        question: "Ferranti Effect คือปรากฏการณ์ใดในสายส่งระยะยาว?",
        options: [
            "แรงดันไฟฟ้าที่ปลายทาง (Receiving end) สูงกว่าต้นทาง (Sending end) ในสภาวะไม่มีโหลดหรือโหลดน้อย",
            "กระแสไฟฟ้าที่ปลายทางสูงกว่าต้นทาง",
            "สายส่งเกิดการแกว่งอย่างรุนแรง",
            "ลูกถ้วยฉนวนเกิดการแตกร้าว"
        ],
        correct: 0,
        explanation: "Ferranti Effect เกิดจาก Capacitance ของสายส่งชาร์จกระแสลงไป ทำให้เกิด Voltage drop ที่นำหน้า ทำให้ V ปลายทางสูงกว่าต้นทางเมื่อโหลดต่ำ"
    },
    {
        question: "ลูกถ้วยฉนวน (Insulator) ชนิดใดนิยมใช้แขวนสายส่งแรงดันสูง?",
        options: [
            "Pin type (ลูกถ้วยก้านตรง)",
            "Shackle type (ลูกถ้วยลูกรอก)",
            "Suspension type (ลูกถ้วยแขวน)",
            "Post type (ลูกถ้วยเสา)"
        ],
        correct: 2,
        explanation: "Suspension type เหมาะสำหรับแรงดันสูง เพราะสามารถนำมาต่ออนุกรมกันเป็นพวง (String) เพื่อเพิ่มพิกัดแรงดันได้ตามต้องการ"
    },
    {
        question: "ค่า Sag (ระยะตกท้องช้าง) ของสายส่งขึ้นอยู่กับตัวแปรใดน้อยที่สุด?",
        options: [
            "น้ำหนักของสายส่ง",
            "ความตึงของสาย (Tension)",
            "ระยะห่างระหว่างเสา (Span)",
            "กระแสไฟฟ้าที่ไหลในสาย"
        ],
        correct: 3,
        explanation: "สมการของ Sag (S = wl^2 / 8T) ขึ้นอยู่กับน้ำหนัก(w), ระยะเสา(l), และความตึง(T) กระแสไฟฟ้าไม่มีผลโดยตรงต่อสมการทางกลศาสตร์ (ยกเว้นผลจากอุณหภูมิ)"
    },
    {
        question: "การต่อลงดิน (Grounding) มีจุดประสงค์หลักเพื่ออะไร?",
        options: [
            "ลดค่าไฟฟ้าให้ถูกลง",
            "ทำให้กระแสไฟฟ้าไหลเร็วขึ้น",
            "ความปลอดภัยของบุคคลและป้องกันอุปกรณ์เมื่อเกิดแรงดันหรือกระแสเกิน",
            "เพิ่มความสว่างให้หลอดไฟ"
        ],
        correct: 2,
        explanation: "ระบบ Grounding เป็นเส้นทางไหลกลับของกระแสลัดวงจรลงสู่ดิน ป้องกันไฟดูด และทำให้รีเลย์ตัดวงจรทำงานได้ถูกต้อง"
    },
    {
        question: "ข้อใดคือพารามิเตอร์หลัก 4 ตัวของสายส่ง (Transmission Line Parameters)?",
        options: [
            "R, L, C, G",
            "V, I, P, Q",
            "f, t, w, s",
            "X, Y, Z, S"
        ],
        correct: 0,
        explanation: "พารามิเตอร์ 4 ตัวของสายส่งได้แก่ Resistance (R), Inductance (L), Capacitance (C), และ Conductance (G)"
    },
    {
        question: "สายลวดตีเกลียว (Stranded Conductor) มีข้อดีกว่าสายลวดเดี่ยว (Solid Conductor) อย่างไร?",
        options: [
            "มีราคาถูกกว่ามาก",
            "มีความยืดหยุ่นสูง (Flexibility) และโค้งงอได้ง่ายกว่า",
            "น้ำหนักเบากว่า",
            "ไม่มีผลของ Skin effect"
        ],
        correct: 1,
        explanation: "Stranded conductor ประกอบด้วยลวดเส้นเล็กๆ พันเกลียว ทำให้สายมีความยืดหยุ่นสูง โค้งงอได้ง่าย ไม่หักงอง่ายเมื่อเทียบกับลวดเดี่ยวขนาดเดียวกัน"
    },
    {
        question: "ข้อใดเป็นชนิดของสายส่งที่นิยมใช้มากที่สุดในระบบส่งกำลังไฟฟ้าทางอากาศ?",
        options: [
            "สายทองแดงบริสุทธิ์ (Copper)",
            "สายอะลูมิเนียมแกนเหล็ก (ACSR)",
            "สายเงิน (Silver)",
            "สายไฟเบอร์ออปติก (Fiber Optic)"
        ],
        correct: 1,
        explanation: "ACSR (Aluminum Conductor Steel Reinforced) ได้รับความนิยมเพราะอลูมิเนียมมีน้ำหนักเบา นำไฟฟ้าได้ดีพอควร และแกนเหล็กช่วยรับแรงดึง (Tensile strength)"
    },
    {
        question: "ระบบส่งไฟฟ้าของ กฟผ. (EGAT) นิยมใช้แรงดันสูงสุดที่ระดับใดในปัจจุบัน?",
        options: [
            "115 kV",
            "230 kV",
            "500 kV",
            "1,000 kV"
        ],
        correct: 2,
        explanation: "ระบบสายส่งของ EGAT ในปัจจุบันระดับแรงดันสูงสุดที่ใช้งานคือ 500 kV เพื่อส่งกระแสไฟฟ้าปริมาณมากข้ามภูมิภาค"
    },
    {
        question: "อุปกรณ์ใดใช้จำกัดหรือตัดกระแสไฟลัดวงจรในสถานีไฟฟ้าย่อย?",
        options: [
            "Disconnecting Switch",
            "Circuit Breaker",
            "Current Transformer",
            "Voltage Transformer"
        ],
        correct: 1,
        explanation: "Circuit Breaker มีความสามารถในการตัดต่อกระแสขณะมีโหลด และสามารถทนและตัดกระแสลัดวงจร (Fault current) ได้โดยไม่เสียหาย"
    },
    {
        question: "การวิเคราะห์สายส่งระยะสั้น (Short Transmission Line) จะละทิ้งพารามิเตอร์ใด?",
        options: [
            "Resistance (R)",
            "Inductance (L)",
            "Capacitance (C)",
            "Voltage (V)"
        ],
        correct: 2,
        explanation: "ในสายส่งระยะสั้น (ยาวไม่เกิน 80 กม.) ค่า Shunt Capacitance จะน้อยมากจนสามารถละทิ้งได้เพื่อความง่ายในการคำนวณ โดยคิดเฉพาะอนุกรม R และ L"
    },
    {
        question: "การจำลองสายส่งระยะปานกลาง นิยมใช้แบบจำลองแบบใด?",
        options: [
            "Series R-L model",
            "Nominal Pi (π) หรือ Nominal T model",
            "Distributed parameter model",
            "Lossless line model"
        ],
        correct: 1,
        explanation: "สายส่งระยะปานกลาง (80-250 กม.) จะรวมผลของ Capacitance เข้ามา โดยจะนำมารวมไว้ตรงกลาง (Nominal T) หรือแบ่งครึ่งไว้หัวท้าย (Nominal Pi)"
    },
    {
        question: "อุปกรณ์ใดทำหน้าที่ชดเชย Reactive Power เพื่อรักษาแรงดันของระบบ?",
        options: [
            "Capacitor Bank / Shunt Reactor",
            "Surge Arrester",
            "Isolator",
            "Line Trap"
        ],
        correct: 0,
        explanation: "Capacitor Bank ผลิต Q เพื่อเพิ่มแรงดัน ส่วน Shunt Reactor ดูดกลืน Q เพื่อลดแรงดัน ทั้งสองทำหน้าที่ชดเชยกำลังไฟฟ้ารีแอกทีฟ"
    },
    {
        question: "ข้อใดคือความถี่ระบบไฟฟ้ามาตรฐานของประเทศไทย?",
        options: [
            "50 Hz",
            "60 Hz",
            "100 Hz",
            "120 Hz"
        ],
        correct: 0,
        explanation: "ประเทศไทยและประเทศส่วนใหญ่ในเอเชียและยุโรปใช้ความถี่มาตรฐาน 50 Hz ในขณะที่สหรัฐอเมริกาใช้ 60 Hz"
    }
];

// สถานะของควิซ
let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(null);
let score = 0;

// อ้างอิง DOM
const quizModal = document.getElementById('quizModal');
const quizContainer = document.getElementById('quizContainer');
const quizWelcome = document.getElementById('quizWelcome');
const quizActive = document.getElementById('quizActive');
const quizResult = document.getElementById('quizResult');
const quizReview = document.getElementById('quizReview');
const quizFooter = document.getElementById('quizFooter');

const currentQEl = document.getElementById('currentQ');
const quizProgressEl = document.getElementById('quizProgress');
const questionTextEl = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');

const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const btnSubmit = document.getElementById('btnSubmit');

const scoreValueEl = document.getElementById('scoreValue');
const reviewContainer = document.getElementById('reviewContainer');

// เปิด Modal แบบมี Animation
function openQuiz() {
    // Reset state
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData.length).fill(null);
    score = 0;
    
    quizModal.classList.remove('hidden');
    // Allow display block to apply before animating opacity
    setTimeout(() => {
        quizModal.classList.remove('opacity-0');
        quizContainer.classList.remove('scale-95');
        quizContainer.classList.add('scale-100');
    }, 10);
    
    showWelcome();
}

// ปิด Modal
function closeQuiz() {
    quizModal.classList.add('opacity-0');
    quizContainer.classList.remove('scale-100');
    quizContainer.classList.add('scale-95');
    
    setTimeout(() => {
        quizModal.classList.add('hidden');
    }, 300);
}

// แสดงหน้าต้อนรับ
function showWelcome() {
    quizWelcome.classList.remove('hidden');
    quizActive.classList.add('hidden');
    quizResult.classList.add('hidden');
    quizReview.classList.add('hidden');
    quizFooter.classList.add('hidden');
}

// เริ่มทำควิซ
function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData.length).fill(null);
    score = 0;
    
    quizWelcome.classList.add('hidden');
    quizResult.classList.add('hidden');
    quizReview.classList.add('hidden');
    quizActive.classList.remove('hidden');
    quizFooter.classList.remove('hidden');
    
    loadQuestion();
}

// โหลดคำถามปัจจุบัน
function loadQuestion() {
    const qData = quizData[currentQuestionIndex];
    currentQEl.textContent = currentQuestionIndex + 1;
    
    // อัปเดต Progress bar
    const progressPercent = ((currentQuestionIndex) / quizData.length) * 100;
    quizProgressEl.style.width = `${progressPercent}%`;
    
    questionTextEl.textContent = `${currentQuestionIndex + 1}. ${qData.question}`;
    
    // สร้างปุ่มตัวเลือก
    optionsContainer.innerHTML = '';
    const letters = ['ก', 'ข', 'ค', 'ง'];
    
    qData.options.forEach((opt, idx) => {
        const isSelected = userAnswers[currentQuestionIndex] === idx;
        
        const optBtn = document.createElement('button');
        optBtn.className = `w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-4 ${
            isSelected 
            ? 'border-brand-500 bg-brand-50 text-brand-900 shadow-sm' 
            : 'border-slate-200 hover:border-brand-300 hover:bg-slate-50 text-slate-700'
        }`;
        
        optBtn.onclick = () => selectOption(idx);
        
        optBtn.innerHTML = `
            <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold ${
                isSelected ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-500'
            }">${letters[idx]}</div>
            <div class="pt-1">${opt}</div>
        `;
        
        optionsContainer.appendChild(optBtn);
    });
    
    updateFooterButtons();
}

// เมื่อผู้ใช้เลือกคำตอบ
function selectOption(idx) {
    userAnswers[currentQuestionIndex] = idx;
    loadQuestion(); // Reload UI
}

// อัปเดตปุ่มด้านล่าง
function updateFooterButtons() {
    btnPrev.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === quizData.length - 1) {
        btnNext.classList.add('hidden');
        btnSubmit.classList.remove('hidden');
    } else {
        btnNext.classList.remove('hidden');
        btnSubmit.classList.add('hidden');
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

// ส่งคำตอบและแสดงคะแนน
function submitQuiz() {
    // นับคะแนน
    score = 0;
    userAnswers.forEach((ans, idx) => {
        if (ans === quizData[idx].correct) {
            score++;
        }
    });
    
    scoreValueEl.textContent = score;
    quizProgressEl.style.width = '100%';
    
    quizActive.classList.add('hidden');
    quizFooter.classList.add('hidden');
    quizResult.classList.remove('hidden');
}

// แสดงหน้าเฉลย
function showAnswers() {
    quizResult.classList.add('hidden');
    quizReview.classList.remove('hidden');
    
    reviewContainer.innerHTML = '';
    const letters = ['ก', 'ข', 'ค', 'ง'];
    
    quizData.forEach((qData, qIdx) => {
        const userAns = userAnswers[qIdx];
        const isCorrect = userAns === qData.correct;
        
        const qDiv = document.createElement('div');
        qDiv.className = `p-6 rounded-2xl border-l-4 ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`;
        
        let optionsHtml = '<div class="space-y-2 mt-4">';
        qData.options.forEach((opt, optIdx) => {
            let itemClass = "text-slate-600";
            let icon = "";
            
            if (optIdx === qData.correct) {
                itemClass = "text-green-700 font-bold bg-green-100/50 p-2 rounded-lg";
                icon = '<i class="fa-solid fa-check text-green-500 w-5"></i>';
            } else if (optIdx === userAns) {
                itemClass = "text-red-600 line-through bg-red-100/50 p-2 rounded-lg";
                icon = '<i class="fa-solid fa-xmark text-red-500 w-5"></i>';
            } else {
                itemClass = "p-2";
                icon = '<span class="w-5 inline-block"></span>';
            }
            
            optionsHtml += `
                <div class="flex items-start gap-2 ${itemClass}">
                    ${icon} <span>${letters[optIdx]}. ${opt}</span>
                </div>
            `;
        });
        optionsHtml += '</div>';
        
        qDiv.innerHTML = `
            <div class="flex gap-4">
                <div class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${isCorrect ? 'bg-green-500' : 'bg-red-500'}">
                    ${qIdx + 1}
                </div>
                <div class="w-full">
                    <h4 class="text-lg font-bold text-slate-900">${qData.question}</h4>
                    ${optionsHtml}
                    <div class="mt-4 p-4 bg-white rounded-xl border border-slate-200 text-sm">
                        <strong class="text-brand-600">คำอธิบาย:</strong> ${qData.explanation}
                    </div>
                </div>
            </div>
        `;
        
        reviewContainer.appendChild(qDiv);
    });
}
