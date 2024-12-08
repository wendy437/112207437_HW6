let answer = generateAnswer();
let attempts = 0;

// 生成不重複的4位數字
function generateAnswer() {
    let digits = Array.from({ length: 10 }, (_, i) => i);
    let result = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        result.push(digits[randomIndex]);
        digits.splice(randomIndex, 1);
    }
    return result.join('');
}

// 檢查用戶的猜測
function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;

    // 驗證輸入
    if (!/^\d{4}$/.test(userGuess)) {
        alert("請輸入4個數字！");
        return;
    }
    if (new Set(userGuess).size !== 4) {
        alert("數字不能重複！");
        return;
    }

    // 計算結果
    attempts++;
    let a = 0, b = 0;
    for (let i = 0; i < 4; i++) {
        if (userGuess[i] === answer[i]) {
            a++;
        } else if (answer.includes(userGuess[i])) {
            b++;
        }
    }

    // 更新結果
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML += `<p>第${attempts}次: ${userGuess} → ${a}A${b}B</p>`;

    // 判斷是否猜對
    if (a === 4) {
        setTimeout(() => {
            alert(`答對了！你共猜了 ${attempts} 次`);
        }, 1000);
    }

    // 清空輸入框
    document.getElementById('userGuess').value = '';
}



