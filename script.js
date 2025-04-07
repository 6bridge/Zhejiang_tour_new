document.addEventListener('DOMContentLoaded', function() {
    // 标签页切换功能
    const tabButtons = document.querySelectorAll('.tab-btn');
    const cityContents = document.querySelectorAll('.city-content');

    // 隐藏所有城市内容
    function hideAllCityContents() {
        cityContents.forEach(content => {
            content.style.display = 'none';
        });
    }

    // 显示指定城市的内容
    function showCityContent(cityId) {
        const cityContent = document.getElementById(cityId);
        if (cityContent) {
            cityContent.style.display = 'block';
        }
    }

    // 初始化显示
    hideAllCityContents();
    showCityContent('ningbo'); // 默认显示宁波

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            hideAllCityContents();

            // 添加新的活动状态
            button.classList.add('active');
            const cityId = button.getAttribute('data-city');
            showCityContent(cityId);
        });
    });

    // 监听打印事件
    window.addEventListener('beforeprint', () => {
        // 在打印之前显示所有城市的内容
        cityContents.forEach(content => {
            content.style.display = 'block';
        });
    });

    window.addEventListener('afterprint', () => {
        // 打印后恢复原来的显示状态
        hideAllCityContents();
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) {
            showCityContent(activeTab.getAttribute('data-city'));
        }
    });

    // 打印功能优化
    document.querySelector('.print-btn').addEventListener('click', () => {
        window.print();
    });

    // 链接点击处理
    document.querySelectorAll('.map-link, .guide-link').forEach(link => {
        link.addEventListener('click', (e) => {
            // 在新窗口打开链接
            e.preventDefault();
            window.open(link.href, '_blank');
        });
    });
}); 