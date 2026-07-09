const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        // إزالة active من جميع الأزرار
        tabBtns.forEach(b => b.classList.remove("active"));

        // إخفاء جميع الأقسام
        tabPanels.forEach(panel => panel.classList.remove("active"));

        // تفعيل الزر المضغوط
        btn.classList.add("active");

        // إظهار القسم المطلوب
        const target = btn.dataset.target;
        document.getElementById(target).classList.add("active");
    });
});