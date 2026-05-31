import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import thêm hook
import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";

interface ProductEditorProps {
    initialValue?: string;
}

export default function ArticleEditor({
    initialValue = "",
}: ProductEditorProps) {
    const [text, setText] = useState(initialValue);
    const { id } = useParams(); // Lấy id từ URL nếu có (ví dụ: /edit/123)
    const navigate = useNavigate();

    // Nếu là chế độ Edit, fetch dữ liệu cũ từ MongoDB về
    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3000/api/articles/${id}`)
                .then((res) => res.json())
                .then((data) => setText(data.content)) // Giả sử backend trả về field content
                .catch((err) =>
                    console.error("Lỗi lấy chi tiết bài viết:", err),
                );
        }
    }, [id]);

    const handleUploadImg = async (
        files: File[],
        callback: (urls: string[]) => void,
    ) => {
        const res = await Promise.all(
            files.map(async (file) => {
                const formData = new FormData();
                formData.append("file", file);
                try {
                    const response = await fetch(
                        "http://localhost:3000/api/upload",
                        {
                            method: "POST",
                            body: formData,
                        },
                    );
                    const data = await response.json();
                    return data.url;
                } catch (error) {
                    console.error("Lỗi khi upload:", error);
                    return "";
                }
            }),
        );
        callback(res.filter((url) => url !== ""));
    };

    // Hàm handle nút lưu
    const handleSave = async () => {
        console.log(text)
        // Nếu bạn vẫn muốn gọi hàm onSave từ prop truyền vào bên ngoài (nếu có)
        // if (onSave) {
        //     onSave(text);
        //     return;
        // }

        // // Tự xử lý API mỳ ăn liền tại đây
        // const url = id
        //     ? `http://localhost:3000/api/articles/${id}` // Cập nhật
        //     : "http://localhost:3000/api/articles"; // Tạo mới
        // const method = id ? "PUT" : "POST";

        // try {
        //     const res = await fetch(url, {
        //         method: method,
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify({ content: text }),
        //     });

        //     if (res.ok) {
        //         alert(
        //             id
        //                 ? "Cập nhật thành công!"
        //                 : "Tạo bài viết mới thành công!",
        //         );
        //         navigate("/articles"); // Quay về danh sách sau khi lưu thành công
        //     }
        // } catch (error) {
        //     console.error("Lỗi khi lưu bài viết:", error);
        // }
    };

    return (
        <div className="editor-container w-full">
            <MdEditor
                value={text}
                onChange={setText}
                onUploadImg={handleUploadImg}
                placeholder="Nhập thông tin chi tiết bài viết..."
                language="en-US"
                toolbars={[
                    "bold",
                    "underline",
                    "italic",
                    "-",
                    "title",
                    "quote",
                    "unorderedList",
                    "orderedList",
                    "task",
                    "-",
                    "codeRow",
                    "code",
                    "link",
                    "image",
                    "catalog",
                    "table",
                    "-",
                    "revoke",
                    "next",
                    "=",
                    "pageFullscreen",
                    "fullscreen",
                    "preview",
                ]}
                style={{ height: "500px" }}
            />
            <button
                onClick={handleSave}
                className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
                {id ? "Cập nhật bài viết" : "Lưu vào Hệ Thống"}
            </button>
        </div>
    );
}
