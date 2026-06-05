// EmoBridge - Live Dashboard Simulation Script (2026)

document.addEventListener("DOMContentLoaded", () => {
    console.log("EmoBridge Dashboard Script Loaded Successfully! 🚀");

    const totalSessionsEl = document.querySelectorAll(".metric-box .number")[1];
    const badgesEarnedEl = document.querySelectorAll(".metric-box .number")[2];
    const avgScoreEl = document.querySelectorAll(".metric-box .number")[3];
    const emotionHighlight = document.querySelector(".emotion-highlight");
    const chartMockText = document.querySelector(".chart-mock p");

    const emotions = [
        { name: "Happy", color: "#2ecc71", engagement: "92%", distraction: 1 },
        { name: "Neutral", color: "#3498db", engagement: "78%", distraction: 2 },
        { name: "Anxious", color: "#e67e22", engagement: "60%", distraction: 4 },
        { name: "Focused", color: "#9b59b6", engagement: "95%", distraction: 0 }
    ];

    function simulateLiveRobotData() {
        const randomSessions = Math.floor(Math.random() * 5) + 10; // بين 10 و 14
        const randomBadges = Math.floor(Math.random() * 3) + 4;     // بين 4 و 6
        const randomScore = Math.floor(Math.random() * 10) + 85;    // بين 85% و 95%
        
        const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];

        animateCount(totalSessionsEl, randomSessions);
        animateCount(badgesEarnedEl, randomBadges);
        animateCount(avgScoreEl, randomScore, "%");

        emotionHighlight.textContent = randomEmotion.name;
        emotionHighlight.style.color = randomEmotion.color;
        chartMockText.innerHTML = `Engagement Rate: <strong>${randomEmotion.engagement}</strong> | Distraction Count: <strong>${randomEmotion.distraction}</strong> (Average per session)`;
    }

    // دالة الانيميشن للأرقام
    function animateCount(element, target, suffix = "") {
        let current = 0;
        const duration = 1000; // 1 ثانية
        const stepTime = Math.abs(Math.floor(duration / target));
        
        const timer = setInterval(() => {
            current++;
            element.textContent = current + suffix;
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
            }
        }, stepTime);
    }

    // تشغيل المحاكاة فوراً
    simulateLiveRobotData();
});