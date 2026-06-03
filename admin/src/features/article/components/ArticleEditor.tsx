import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import thêm hook
import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Button, Input } from "antd";

interface ProductEditorProps {
    initialValue?: string;
}

export default function ArticleEditor({
    initialValue = "",
}: ProductEditorProps) {
    const [text, setText] = useState(initialValue);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id);
    }, [id]);

    const handleUploadImg = async (
        files: File[],
        callback: (urls: string[]) => void,
    ) => {};

    return (
        <div className="editor-container w-full">
            <div className="mb-2 flex gap-2">
                <div>
                    thumbnail
                </div>
                <Input
                    placeholder="Tiêu đề"
                />
                <div className="">

                </div>
            </div>
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
                style={{
                    height: "500px",
                    borderColor: "#d2d2d2",
                    borderRadius: "8px",
                }}
            />
            <div className="mt-2 px-3 py-2 border border-gray-line rounded-md">
                <div
                    className="
                    prose max-w-none
                    prose-headings:font-bold
                    prose-h2:text-xl prose-h2:m-0 prose-h2:p-0 prose-h2:border-b prose-h2:border-gray-line
                    prose-h3:text-lg prose-h3:m-0
                    prose-p:m-0
                    prose-table:my-4 prose-table:border prose-table:border-gray-200
                    prose-th:bg-gray-50 prose-th:p-3 prose-th:text-gray-700 prose-th:font-semibold prose-th:text-sm
                    prose-td:p-3 prose-td:text-sm prose-td:border-b prose-td:border-gray-100
                    prose-img:my-2
                    prose-iframe:rounded-xl prose-iframe:my-6 prose-iframe:w-full
                    prose-pre:my-2 prose-li:my-1
                "
                >
                    <Markdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                    >
                        {text}
                    </Markdown>
                </div>
            </div>

            <div className="mt-2">
                <Button
                    className="font-semibold!"
                    type="primary"
                    onClick={() => {}}
                >
                    Tạo bài viết
                </Button>
            </div>
        </div>
    );
}
