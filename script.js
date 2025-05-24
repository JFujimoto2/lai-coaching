// DOM読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
    
    // ハンバーガーメニューの制御
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // ナビゲーションリンククリック時の処理
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // ハンバーガーメニューを閉じる
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // スムーススクロール
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // ヘッダーの高さを考慮
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // CTAボタンのスムーススクロール
    const ctaButton = document.querySelector('.cta-button');
    
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector('#contact');
        const offsetTop = targetSection.offsetTop - 80;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
    
    // スクロール時のヘッダー背景変更
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    // アニメーション効果（スクロール時に要素をフェードイン）
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // アニメーション対象の要素を設定
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .about-content');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // フォーム送信処理
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // フォームデータの取得
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const service = formData.get('service');
        const message = formData.get('message');
        
        // 簡単なバリデーション
        if (!name || !email) {
            alert('お名前とメールアドレスは必須項目です。');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('正しいメールアドレスを入力してください。');
            return;
        }
        
        // 送信成功メッセージ（実際の送信処理は別途実装が必要）
        alert('お問い合わせありがとうございます。\n24時間以内にご返信いたします。');
        
        // フォームをリセット
        this.reset();
    });
    
    // メールアドレスの検証関数
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // サービスカードのホバー効果
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 40px rgba(44, 90, 160, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // ページ上部に戻るボタン（スクロール量が多い時に表示）
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2c5aa0;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // スクロール量に応じてボタンの表示/非表示を切り替え
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // ページ上部に戻る処理
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ローディングアニメーション（初回表示時）
    window.addEventListener('load', function() {
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateX(-50px)';
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateX(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroImage.style.transition = 'opacity 1s ease, transform 1s ease';
            
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateX(0)';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateX(0)';
        }, 300);
    });
});