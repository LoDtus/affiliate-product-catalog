import Link from "next/link";

/**
Các văn bản cần thiết (4 VB đầu tiên là bắt buộc):
- Tuyên bố miễn trừ trách nhiệm Affiliate (Affiliate Disclosure): Mục đích chính là khẳng định mình chỉ là người gắn Link, không phải người bán nên nếu có sự
cố gì xảy ra thì đừng có tìm mình. Cái này không chỉ nằm tại foooter mà cần phải đặt ở một nơi rõ ràng

- Chính sách bảo mật (Privacy Policy): Bất kỳ quốc gia nào trong danh sách của bạn (đặc biệt là EU với luật GDPR, California với CCPA, và Việt Nam với Nghị định 13) đều phạt rất nặng nếu website thu thập dữ liệu mà không có Chính sách bảo mật.
Tại sao cần? Ngay cả khi bạn nghĩ "tôi không thu thập gì", thì các công cụ bạn gắn vào như Google Analytics, Facebook Pixel, hay thậm chí hệ thống lưu cookie của link affiliate cũng đang thu thập IP và hành vi của người dùng.
Nội dung tối thiểu:
Bạn thu thập dữ liệu gì? (Cookie, IP, thiết bị, email nếu họ đăng ký nhận tin).
Bạn dùng dữ liệu đó làm gì? (Để phân tích traffic, tối ưu trải nghiệm).
Bên thứ ba nào tiếp cận dữ liệu? (Google Analytics, các mạng lưới Affiliate).
Quyền của người dùng (Quyền yêu cầu xóa dữ liệu đối với người dùng EU).

- Điều khoản sử dụng (Terms of Service / Terms & Conditions):
Đây là "bản hợp đồng" giữa bạn và người truy cập để bảo vệ bạn khỏi các trách nhiệm pháp lý nếu có tranh chấp xảy ra.
Tại sao cần? Giới hạn trách nhiệm của bạn nếu sản phẩm họ mua qua link affiliate bị lỗi, hỏng, hoặc không đúng như mô tả. Người mua phải hiểu họ đang giao dịch với bên bán sản phẩm chứ không phải với bạn.
Nội dung tối thiểu:
Quy định về bản quyền nội dung trên web của bạn (họ không được copy bài viết của bạn).
Tuyên bố miễn trừ trách nhiệm về sản phẩm: Bạn không sở hữu sản phẩm, không chịu trách nhiệm về giá cả, chất lượng, hay chính sách giao hàng của bên bán.
Luật áp dụng (Ví dụ: Áp dụng theo luật pháp Việt Nam hoặc nơi bạn đặt máy chủ).

- Banner thông báo và đồng ý Cookie (Cookie Consent Banner)
Đối với người dùng thuộc khối EU (Đức, Thụy Điển, Na Uy, Hà Lan, Pháp, Bỉ, Tây Ban Nha, Bồ Đào Nha), Anh (UK), và Hàn Quốc, bạn không được tự ý thả cookie affiliate vào máy họ trước khi họ đồng ý.
Tại sao cần? Tuân thủ luật GDPR và ePrivacy Directive của EU.
Cách làm tối thiểu: Một thanh banner nhỏ xuất hiện khi vừa vào trang (Pop-up hoặc Footer banner) thông báo: "Chúng tôi sử dụng cookie để tối ưu hóa trải nghiệm và phục vụ tính năng affiliate. Bằng cách tiếp tục, bạn đồng ý với điều này." (Tốt nhất là có nút "Chấp nhận" / "Từ chối").

### Có thể bổ sung thêm:
- Tuyên bố miễn trừ trách nhiệm Affiliate (Affiliate Disclosure)
Văn bản này cực kỳ quan trọng tại Mỹ (theo luật FTC) và các quốc gia Trung Đông (UAE, Saudi Arabia).
Mục đích bảo vệ bạn: Ngăn người dùng kiện bạn nếu họ mua sản phẩm dựa trên bài viết của bạn nhưng không đạt được kết quả như mong đợi.
Cách bảo vệ: Bạn cần tuyên bố rõ ràng rằng: Những kết quả, doanh thu, hoặc hiệu quả được nhắc đến trên website chỉ là ví dụ hoặc trải nghiệm cá nhân. Bạn không đảm bảo hay cam kết người đọc sẽ đạt được kết quả tương tự khi mua sản phẩm.
Áp dụng khi nào: Đặc biệt bắt buộc nếu các sản phẩm affiliate bạn làm thuộc nhóm: Phần mềm kiếm tiền, khóa học, công cụ tài chính, đầu tư, hoặc các sản phẩm tối ưu hiệu suất công việc.

- Giới hạn trách nhiệm pháp lý nâng cao (Limitation of Liability - Thêm vào Terms of Service)
Mặc dù mục này nằm trong Điều khoản dịch vụ (Terms of Service), nhưng bạn cần nâng cấp nó lên thành một điều khoản "sắt đá" để tự vệ.
Mục đích bảo vệ bạn: Giới hạn số tiền tối đa bạn phải bồi thường nếu chẳng may có tranh chấp pháp lý xảy ra.
Cách bảo vệ: Bạn đưa vào dòng chữ viết hoa (đúng chuẩn luật Mỹ/Anh):
"TRONG MỌI TRƯỜNG HỢP, CHÚNG TÔI KHÔNG CHỊU TRÁCH NHIỆM CHO BẤT KỲ THIỆT HẠI TRỰC TIẾP, GIÁN TIẾP, NGẪU NHIÊN HOẶC HỆ QUẢ NÀO PHÁT SINH TỪ VIỆC BẠN SỬ DỤNG WEBSITE HOẶC MUA SẢN PHẨM QUA LINK LIÊN KẾT. TRÁCH NHIỆM TỐI ĐA CỦA CHÚNG TÔI (NẾU CÓ) SẼ KHÔNG VƯỢT QUÁ [0 USD HOẶC SỐ TIỀN BẠN NHẬN ĐƯỢC TỪ TRANH CHẤP ĐÓ]."
Tại sao cần? Tại các quốc gia phương Tây, người dùng có thể kiện một website nếu phần mềm hoặc sản phẩm họ mua qua link của web đó làm hỏng máy tính, lộ dữ liệu hoặc gây thiệt hại kinh doanh cho họ. Điều khoản này sẽ đá quả bóng trách nhiệm hoàn toàn sang nhà sản xuất gốc.

- Chính sách bảo vệ sở hữu trí tuệ và DMCA (DMCA / Copyright Policy)
Nếu trang web của bạn có tính năng cho người dùng bình luận, đánh giá, hoặc nếu bạn vô tình sử dụng hình ảnh sản phẩm có bản quyền, văn bản này là chiếc phao cứu sinh của bạn tại Mỹ và EU.
Mục đích bảo vệ bạn: Giúp bạn không bị kiện ra tòa ngay lập tức nếu website của bạn vi phạm bản quyền hình ảnh/nội dung của người khác.
Cách bảo vệ (Cơ chế Safe Harbor): Bạn tuyên bố một quy trình rõ ràng: Nếu ai đó phát hiện nội dung trên website vi phạm bản quyền của họ, họ phải gửi thông báo gỡ bỏ (Take-down notice) đến email của bạn trước. Bạn cam kết sẽ gỡ bỏ nội dung đó trong vòng 48-72 giờ.
Tại sao cần? Đạo luật DMCA (Mỹ) quy định nếu bạn cung cấp một cổng để bên bị vi phạm liên hệ gỡ bỏ, và bạn hợp tác gỡ bỏ nhanh chóng, bạn sẽ được miễn trừ trách nhiệm bồi thường thiệt hại tài chính.

- Chính sách nội dung nhạy cảm / Trẻ em (COPPA nâng cao): Trừ khi trang web của bạn cố tình review đồ chơi trẻ em hoặc nội dung người lớn, còn nếu là sản phẩm thông thường, điều khoản "Website không dành cho trẻ em dưới 13/16 tuổi" gộp trong Privacy Policy là đã đủ xài.
*/

export default function Footer() {
    return (
        <>
            <div className="w-full px-3 py-5 bg-white">
                <div className="max-w-960 w-full mx-auto flex flex-col md:flex-row gap-5 md:gap-2">
                    <div className="basis-[33.33%]">
                        <h1 className="font-bold text-2xl text-orange-sunset">
                            Product Review Website
                        </h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Rerum quo debitis fugit. Minima dignissimos
                            perspiciatis exercitationem iusto dolore,
                            repudiandae ut consequatur unde. Aliquam temporibus
                            dignissimos assumenda! Quibusdam eius fuga alias?
                        </p>
                    </div>

                    <div className="basis-[33.33%] flex flex-col gap-2 md:items-center">
                        <h2 className="font-semibold text-xl">Legal & Policies</h2>
                        <Link
                            href="#"
                            className="text-gray-subtitle
                                duration-200 hover:text-black active:scale-98
                            "
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-subtitle
                                duration-200 hover:text-black active:scale-98
                            "
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-subtitle
                                duration-200 hover:text-black active:scale-98
                            "
                        >
                            Affiliate Disclosure
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-subtitle
                                duration-200 hover:text-black active:scale-98
                            "
                        >
                            DMCA Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-subtitle
                                duration-200 hover:text-black active:scale-98
                            "
                        >
                            Children Privacy
                        </Link>
                    </div>

                    <div className="basis-[33.33%] flex flex-col gap-2 md:items-end">
                        <h2 className="font-semibold text-xl">Other Projects</h2>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-subtitle"
                        >
                            Project 1
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-subtitle"
                        >
                            Project 2
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full bg-blue-royal">
                <div className="max-w-960 w-full mx-auto py-2 px-3 flex flex-col md:flex-row gap-2 md:justify-between items-center text-white">
                    <div className="flex flex-col sm:flex-row sm:gap-2 items-center">
                        <span className="shrink-0">
                            Designed by <span className="font-bold">Nguyen Trung Long</span>
                        </span>
                        <span className="hidden sm:block">|</span>
                        <span className="shrink-0">
                            Powered by <span className="font-bold">Next.js</span>
                        </span>
                    </div>
                    <span className="shrink-0">© 2026 Cognition AI, Inc. All rights reserved.</span>
                </div>
            </div>
        </>
    );
}
