const questions = [
 // ==== Lịch sử Việt Nam ====
  { q: "Vị vua nào đã quyết định dời đô từ Hoa Lư về Thăng Long?", answers: ["Lê Hoàn", "Lý Thái Tổ", "Trần Thái Tông"], correct: 1, explain: "Năm 1010, vua Lý Thái Tổ (Lý Công Uẩn) đã ban Chiếu dời đô từ Hoa Lư về Thăng Long." },
  { q: "Quốc hiệu của nước ta dưới thời nhà Hồ là gì?", answers: ["Đại Việt", "Đại Nam", "Đại Ngu"], correct: 2, explain: "Năm 1400, Hồ Quý Ly lên ngôi và đổi quốc hiệu nước ta thành Đại Ngu." },
  { q: "Ai là người đã phất cờ khởi nghĩa chống quân Minh tại Lam Sơn?", answers: ["Lê Lợi", "Nguyễn Trãi", "Trần Hưng Đạo"], correct: 0, explain: "Lê Lợi là người khởi xướng và lãnh đạo cuộc khởi nghĩa Lam Sơn chống quân Minh." },
  { q: "Chiến thắng 'Điện Biên Phủ trên không' diễn ra vào năm nào?", answers: ["1968", "1975", "1972"], correct: 2, explain: "Trận Điện Biên Phủ trên không là chiến dịch phòng không oanh liệt năm 1972 tại miền Bắc." },
  { q: "Vua Hàm Nghi đã ban chiếu Cần Vương tại địa danh nào?", answers: ["Tân Sở (Quảng Trị)", "Kinh thành Huế", "Ba Đình (Thanh Hóa)"], correct: 0, explain: "Chiếu Cần Vương được vua Hàm Nghi ban hành tại căn cứ Tân Sở thuộc tỉnh Quảng Trị." },
  { q: "Triều đại phong kiến cuối cùng trong lịch sử Việt Nam là triều đại nào?", answers: ["Nhà Tây Sơn", "Nhà Nguyễn", "Nhà Hậu Lê"], correct: 1, explain: "Nhà Nguyễn là triều đại phong kiến cuối cùng, kết thúc vào năm 1945 khi vua Bảo Đại thoái vị." },
  { q: "Vị nữ tướng anh hùng nào đã lãnh đạo nhân dân khởi nghĩa chống lại quân Ngô?", answers: ["Hai Bà Trưng", "Bùi Thị Xuân", "Bà Triệu"], correct: 2, explain: "Bà Triệu (Triệu Thị Trinh) là nữ tướng lãnh đạo cuộc khởi nghĩa chống quân Ngô vào thế kỷ III." },
  { q: "Ai là người trực tiếp chỉ huy đại quân đánh tan quân Thanh vào dịp Tết Kỷ Dậu 1789?", answers: ["Nguyễn Huệ", "Nguyễn Ánh", "Lê Lợi"], correct: 0, explain: "Vua Quang Trung (Nguyễn Huệ) đã chỉ huy cuộc hành quân thần tốc đánh bại quân Thanh năm 1789." },
  { q: "Cuộc khởi nghĩa Yên Bái (1930) do tổ chức nào lãnh đạo?", answers: ["Tân Việt Cách mạng Đảng", "Việt Nam Quốc dân Đảng", "Đảng Cộng sản Đông Dương"], correct: 1, explain: "Khởi nghĩa Yên Bái do tổ chức Việt Nam Quốc dân Đảng khởi xướng và lãnh đạo." },
  { q: "Sau khi dẹp loạn 12 sứ quân, Đinh Bộ Lĩnh lên ngôi và xưng là gì?", answers: ["Đinh Kiến", "Đinh Phế Đế", "Đinh Tiên Hoàng"], correct: 2, explain: "Đinh Bộ Lĩnh lên ngôi Hoàng đế năm 968, tự xưng là Đinh Tiên Hoàng." },

  // ==== Địa lý Việt Nam ====
  { q: "Đỉnh núi nào được mệnh danh là cao thứ hai ở Việt Nam sau Fansipan?", answers: ["Bạch Mã", "Pu Ta Leng", "Mẫu Sơn"], correct: 1, explain: "Đỉnh Pu Ta Leng (Lai Châu) cao 3.049m, là ngọn núi cao thứ hai của nước ta." },
  { q: "Tỉnh nào hiện có diện tích tự nhiên lớn nhất Việt Nam?", answers: ["Nghệ An", "Gia Lai", "Đắk Lắk"], correct: 0, explain: "Nghệ An là tỉnh có diện tích lớn nhất cả nước với hơn 16.400 km2." },
  { q: "Hồ nước ngọt tự nhiên lớn nhất Việt Nam nằm ở tỉnh nào?", answers: ["Hà Nội (Hồ Tây)", "Bắc Kạn (Hồ Ba Bể)", "Gia Lai (Hồ Tơ Nưng)"], correct: 1, explain: "Hồ Ba Bể ở Bắc Kạn là hồ nước ngọt tự nhiên lớn nhất Việt Nam." },
  { q: "Di sản thiên nhiên thế giới Vịnh Hạ Long thuộc địa phận tỉnh nào?", answers: ["Hải Phòng", "Thái Bình", "Quảng Ninh"], correct: 2, explain: "Vịnh Hạ Long nằm ở bờ tây vịnh Bắc Bộ, thuộc tỉnh Quảng Ninh." },
  { q: "Hòn đảo lớn nhất của Việt Nam là đảo nào?", answers: ["Phú Quốc", "Cát Bà", "Côn Đảo"], correct: 0, explain: "Phú Quốc (Kiên Giang) được mệnh danh là Đảo Ngọc, là hòn đảo lớn nhất Việt Nam." },
  { q: "Cao nguyên đá Đồng Văn - Công viên địa chất toàn cầu nằm ở tỉnh nào?", answers: ["Cao Bằng", "Hà Giang", "Lạng Sơn"], correct: 1, explain: "Cao nguyên đá Đồng Văn là một vùng núi đá vôi đặc biệt nằm ở tỉnh Hà Giang." },
  { q: "Đèo Hải Vân là ranh giới tự nhiên giữa hai địa phương nào?", answers: ["Quảng Trị và Thừa Thiên Huế", "Đà Nẵng và Quảng Nam", "Thừa Thiên Huế và Đà Nẵng"], correct: 2, explain: "Đèo Hải Vân cắt ngang dãy Bạch Mã, nối liền Thừa Thiên Huế và Đà Nẵng." },
  { q: "Tỉnh duy nhất ở khu vực Tây Nguyên không có đường biên giới quốc tế là?", answers: ["Lâm Đồng", "Đắk Lắk", "Kon Tum"], correct: 0, explain: "Lâm Đồng là tỉnh duy nhất của Tây Nguyên nằm sâu trong nội địa, không giáp biên giới." },
  { q: "Hang động tự nhiên nào ở Việt Nam được công nhận là lớn nhất thế giới?", answers: ["Động Phong Nha", "Hang Sơn Đoòng", "Động Thiên Đường"], correct: 1, explain: "Hang Sơn Đoòng (Quảng Bình) hiện giữ kỷ lục là hang động tự nhiên lớn nhất thế giới." },
  { q: "Vườn quốc gia Cát Tiên trải dài trên địa bàn của bao nhiêu tỉnh?", answers: ["2 tỉnh", "4 tỉnh", "3 tỉnh"], correct: 2, explain: "Vườn quốc gia Cát Tiên nằm trên địa bàn 3 tỉnh: Đồng Nai, Lâm Đồng và Bình Phước." },

  // ==== Văn học Việt Nam ====
  { q: "Ai là tác giả của bài thơ 'Bánh trôi nước'?", answers: ["Hồ Xuân Hương", "Bà Huyện Thanh Quan", "Đoàn Thị Điểm"], correct: 0, explain: "Hồ Xuân Hương, được mệnh danh là 'Bà chúa thơ Nôm', là tác giả của bài thơ này." },
  { q: "Trong tác phẩm 'Tắt đèn' của Ngô Tất Tố, nhân vật chị Dậu có tên thật là gì?", answers: ["Nguyễn Thị Dậu", "Lê Thị Pha", "Trần Thị Mịch"], correct: 1, explain: "Chị Dậu trong tác phẩm 'Tắt đèn' có tên thật là Lê Thị Pha." },
  { q: "Ai là tác giả của tập thơ 'Góc sân và khoảng trời'?", answers: ["Xuân Quỳnh", "Tố Hữu", "Trần Đăng Khoa"], correct: 2, explain: "Đây là tập thơ nổi tiếng được Trần Đăng Khoa sáng tác từ khi còn là một cậu bé thần đồng." },
  { q: "Tác phẩm truyện thơ 'Lục Vân Tiên' là của nhà văn, nhà thơ nào?", answers: ["Nguyễn Đình Chiểu", "Nguyễn Du", "Nguyễn Bỉnh Khiêm"], correct: 0, explain: "Nguyễn Đình Chiểu là tác giả của truyện thơ Nôm nổi tiếng Lục Vân Tiên." },
  { q: "Nhân vật Huấn Cao trong truyện 'Chữ người tử tù' được lấy nguyên mẫu từ ai?", answers: ["Nguyễn Du", "Cao Bá Quát", "Chu Văn An"], correct: 1, explain: "Nhà văn Nguyễn Tuân đã mượn hình tượng Cao Bá Quát để xây dựng nhân vật Huấn Cao." },
  { q: "Tác giả của bài thơ 'Qua Đèo Ngang' là ai?", answers: ["Bà Huyện Thanh Quan", "Hồ Xuân Hương", "Đoàn Thị Điểm"], correct: 0, explain: "Bài thơ thất ngôn bát cú Đường luật 'Qua Đèo Ngang' là tuyệt tác của Bà Huyện Thanh Quan." },
  { q: "Tập truyện ngắn 'Vang bóng một thời' là sáng tác của nhà văn nào?", answers: ["Nam Cao", "Thạch Lam", "Nguyễn Tuân"], correct: 2, explain: "'Vang bóng một thời' là tập truyện ngắn xuất sắc phản ánh vẻ đẹp xưa cũ của Nguyễn Tuân." },
  { q: "Trong truyện cổ tích 'Tấm Cám', loài chim nào đã bay xuống giúp Tấm nhặt thóc ra khỏi gạo?", answers: ["Chim sẻ", "Bồ câu", "Quạ"], correct: 0, explain: "Đàn chim sẻ đã bay xuống nhặt thóc giúp Tấm để cô có thể đi dự hội." },
  { q: "Câu ca dao 'Đồng Đăng có phố Kỳ Lừa' nhắc đến địa danh thuộc tỉnh nào?", answers: ["Cao Bằng", "Lạng Sơn", "Quảng Ninh"], correct: 1, explain: "Đồng Đăng, Kỳ Lừa, núi Tô Thị, đền Tam Thanh đều là các danh thắng nổi tiếng của Lạng Sơn." },
  { q: "Tác phẩm tiểu thuyết 'Bỉ vỏ' là của nhà văn nào?", answers: ["Vũ Trọng Phụng", "Nam Cao", "Nguyên Hồng"], correct: 2, explain: "'Bỉ vỏ' là tác phẩm tiêu biểu làm nên tên tuổi của nhà văn Nguyên Hồng." },

  // ==== Văn hóa & Đời sống Việt Nam ====
  { q: "Loại hình nghệ thuật múa rối nước là đặc trưng của vùng nào?", answers: ["Đồng bằng sông Cửu Long", "Đồng bằng Bắc Bộ", "Tây Nguyên"], correct: 1, explain: "Múa rối nước ra đời từ nền văn minh lúa nước của cư dân đồng bằng Bắc Bộ." },
  { q: "Hát Xoan là di sản văn hóa phi vật thể đặc trưng của tỉnh nào?", answers: ["Phú Thọ", "Bắc Ninh", "Vĩnh Phúc"], correct: 0, explain: "Hát Xoan là nghệ thuật trình diễn dân gian lâu đời gắn liền với tín ngưỡng thờ cúng Hùng Vương ở Phú Thọ." },
  { q: "Lễ hội tháp Bà Ponagar mang đậm văn hóa Chăm Pa diễn ra hàng năm ở đâu?", answers: ["Phan Thiết", "Quy Nhơn", "Nha Trang"], correct: 2, explain: "Lễ hội tháp Bà Ponagar được tổ chức trang trọng tại thành phố biển Nha Trang." },
  { q: "Nhã nhạc cung đình Huế được UNESCO công nhận là di sản văn hóa thế giới vào năm nào?", answers: ["1999", "2003", "2009"], correct: 1, explain: "Năm 2003, Nhã nhạc cung đình Huế được vinh danh là Kiệt tác di sản truyền khẩu và phi vật thể của nhân loại." },
  { q: "Dân tộc nào có dân số đông thứ hai ở Việt Nam (chỉ sau người Kinh)?", answers: ["Thái", "Mường", "Tày"], correct: 2, explain: "Theo thống kê, người Tày là dân tộc thiểu số có dân số đông nhất tại Việt Nam." },
  { q: "Bánh cốm là thức quà đặc sản nổi tiếng gắn liền với địa phương nào?", answers: ["Hà Nội", "Nam Định", "Hải Dương"], correct: 0, explain: "Bánh cốm (đặc biệt là cốm làng Vòng, Hàng Than) là thức quà truyền thống nổi tiếng của Hà Nội." },
  { q: "Trang phục truyền thống nổi bật của phụ nữ dân tộc Thái được gọi là gì?", answers: ["Áo tứ thân", "Áo cóm", "Áo chàm"], correct: 1, explain: "Phụ nữ Thái nổi bật với chiếc áo cóm bó sát người kết hợp cùng váy đen dài." },
  { q: "Làng gốm Bát Tràng nổi tiếng hàng trăm năm nay nằm ở đâu?", answers: ["Bắc Ninh", "Hưng Yên", "Hà Nội"], correct: 2, explain: "Làng gốm Bát Tràng nằm ở huyện Gia Lâm, ngoại thành thủ đô Hà Nội." },
  { q: "Đàn đá là nhạc cụ gõ truyền thống lâu đời của đồng bào dân tộc ở vùng nào?", answers: ["Tây Nguyên", "Tây Bắc", "Nam Bộ"], correct: 0, explain: "Đàn đá là nhạc cụ cổ sơ và độc đáo của các dân tộc sống tại Tây Nguyên." },
  { q: "Món ăn 'Mì Quảng' là đặc sản trứ danh của tỉnh thành nào?", answers: ["Quảng Ngãi", "Quảng Nam", "Quảng Bình"], correct: 1, explain: "Mì Quảng là món ăn mộc mạc nhưng đậm đà hương vị truyền thống của vùng đất Quảng Nam." },

  // ==== Tự nhiên & Khoa học cơ bản ====
  { q: "Cây tre sinh sản tự nhiên chủ yếu bằng bộ phận nào?", answers: ["Hạt", "Lá", "Thân rễ"], correct: 2, explain: "Tre sinh sản vô tính chủ yếu bằng cách đẻ măng từ thân rễ mọc ngầm dưới đất." },
  { q: "Con vật nào sau đây thuộc lớp động vật lưỡng cư?", answers: ["Ếch", "Rùa", "Cá sấu"], correct: 0, explain: "Ếch là động vật lưỡng cư, vừa sống được dưới nước vừa sống được trên cạn." },
  { q: "Loài chim nào thường được chọn làm biểu tượng cho hòa bình?", answers: ["Chim én", "Bồ câu", "Đại bàng"], correct: 1, explain: "Hình ảnh chim bồ câu trắng ngậm cành ô liu từ lâu đã là biểu tượng quốc tế của hòa bình." },
  { q: "Hiện tượng nhật thực xảy ra khi nào?", answers: ["Trái Đất nằm giữa Mặt Trời và Mặt Trăng", "Mặt Trời nằm giữa Trái Đất và Mặt Trăng", "Mặt Trăng nằm giữa Mặt Trời và Trái Đất"], correct: 2, explain: "Nhật thực xảy ra khi Mặt Trăng đi qua giữa Trái Đất và Mặt Trời, che khuất ánh sáng từ Mặt Trời." },
  { q: "Theo nguyên tắc truyền máu cơ bản, nhóm máu nào được gọi là 'nhóm máu chuyên cho'?", answers: ["Nhóm máu O", "Nhóm máu AB", "Nhóm máu A"], correct: 0, explain: "Nhóm máu O không có kháng nguyên A và B trên hồng cầu nên có thể truyền cho các nhóm máu khác." },
  { q: "Loại cây công nghiệp nào được trồng nhiều nhất để lấy mủ ở miền Đông Nam Bộ nước ta?", answers: ["Cà phê", "Cao su", "Hồ tiêu"], correct: 1, explain: "Đông Nam Bộ là vùng có diện tích trồng cây cao su lớn nhất cả nước." },
  { q: "Động vật nào sau đây có khả năng tái tạo (mọc lại) đuôi sau khi bị đứt?", answers: ["Chuột", "Rắn", "Thằn lằn"], correct: 2, explain: "Thằn lằn có khả năng tự đứt đuôi để trốn kẻ thù và sau đó mọc lại phần đuôi mới." },
  { q: "Loại vitamin nào có rất nhiều trong các loại quả có múi như cam, chanh, bưởi?", answers: ["Vitamin C", "Vitamin A", "Vitamin D"], correct: 0, explain: "Trái cây họ cam quýt là nguồn cung cấp vitamin C tự nhiên dồi dào nhất giúp tăng sức đề kháng." },
  { q: "Các loại gỗ quý hiếm như gỗ trắc, sưa, mun thuộc nhóm gỗ nào theo phân loại ở Việt Nam?", answers: ["Nhóm III", "Nhóm I", "Nhóm II"], correct: 1, explain: "Nhóm I là nhóm gồm những loại gỗ quý hiếm nhất, có vân đẹp, màu sắc óng ánh, siêu bền và có mùi thơm." },
  { q: "Hiện tượng nước biển dâng lên và hạ xuống một cách có chu kỳ hàng ngày được gọi là gì?", answers: ["Sóng thần", "Dòng chảy", "Thủy triều"], correct: 2, explain: "Thủy triều là hiện tượng nước biển dâng lên, hạ xuống theo chu kỳ do lực hấp dẫn của Mặt Trăng và Mặt Trời." },
];

