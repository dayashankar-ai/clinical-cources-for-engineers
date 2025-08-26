// UNIVERSAL LECTURE FUNCTIONS
function checkAnswers() {
    // Get all quiz questions
    const questions = document.querySelectorAll('.quiz-question');
    let score = 0;
    let total = questions.length;
    let feedback = '';
    
    questions.forEach((question, index) => {
        const questionNum = index + 1;
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        
        if (selectedOption) {
            // Simple correct answer detection (option 'b' is usually correct in our format)
            if (selectedOption.value === 'b') {
                score++;
                feedback += `✅ Question ${questionNum}: Correct!<br>`;
            } else {
                feedback += `❌ Question ${questionNum}: Review the concept above.<br>`;
            }
        } else {
            feedback += `⚠️ Question ${questionNum}: Please select an answer.<br>`;
        }
    });
    
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    let resultColor = '#dc3545';
    if (percentage >= 70) resultColor = '#28a745';
    else if (percentage >= 50) resultColor = '#ffc107';
    
    const resultsDiv = document.getElementById('quiz-results');
    resultsDiv.innerHTML = `
        <div style="background: ${resultColor}; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4>Your Score: ${score}/${total} (${percentage}%)</h4>
        </div>
        <div style="padding: 15px; background: white; border-radius: 8px;">
            ${feedback}
            <p style="margin-top: 15px;"><strong>💡 Remember:</strong> Focus on understanding the engineering analogies!</p>
        </div>
    `;
    
    resultsDiv.style.display = 'block';
}

// Smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Interactive elements
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
}

// Virtual patient simulator placeholder
function simulatePatient(scenario) {
    alert(`Virtual Patient Scenario: ${scenario}\n\nThis will be enhanced with interactive simulations.`);
}

// Diagnostic tool placeholder
function analyzeDiagnostic(testType, values) {
    console.log(`Analyzing ${testType}:`, values);
    alert(`Diagnostic Analysis: ${testType}\n\nResults will be displayed here.`);
}