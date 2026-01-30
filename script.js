// Simple script for interactive features
document.addEventListener('DOMContentLoaded', function() {
    console.log('Kho Trí Thức Số đã sẵn sàng!');
    
    // Add click event to book cards
    const bookCards = document.querySelectorAll('.book-card');
    bookCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.book-title').textContent;
            alert(`Bạn đã chọn sách: "${title}"\nTính năng xem chi tiết sách đang được phát triển.`);
        });
    });
    
    // Search functionality
    const searchBtn = document.querySelector('.btn-search');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchInput = document.querySelector('.search-input input');
            if (searchInput.value.trim() === '') {
                alert('Vui lòng nhập từ khóa tìm kiếm!');
                searchInput.focus();
            } else {
                alert(`Đang tìm kiếm: "${searchInput.value}"\nKết quả sẽ hiển thị ở trang sau.`);
                // In real app: submit search form or redirect to search results page
            }
        });
    }
});