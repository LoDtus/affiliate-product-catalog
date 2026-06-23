"use client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useEffect, useState } from "react";
import { Button } from "antd";

// Thêm cập nhật lúc: ...
// Button: Accept, Deceline
export default function LegalDocument({}) {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("/samples/legal-docs/terms-of-service.md")
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (
        <div className="px-50 py-2">
            <div className="flex justify-between items-center">
                <span>
                    {`Tài liệu > Term of Services`}
                </span>
                <span>
                    Cập nhật lúc: 10h10 26/06/2026
                </span>
            </div>
            <h3 className="mb-5 text-2xl font-semibold">
                Term of Services
            </h3>
            <div
                className="
                    prose max-w-none
                    prose-headings:font-bold
                    prose-h2:text-xl prose-h2:m-0 prose-h2:mt-8 prose-h2:p-0 prose-h2:border-b prose-h2:border-gray-line
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
                    {content}
                </Markdown>
            </div>

            <div className="w-full pt-3 pb-5 flex gap-2 justify-end">
                <Button
                    className="w-30 font-semibold!"
                    variant="solid" color="blue"
                    onClick={() => {console.log(1)}}
                >
                    Chấp nhận
                </Button>
                <Button
                    className="w-30 font-semibold!"
                    onClick={() => {console.log(1)}}
                >
                    Từ chối
                </Button>
            </div>
        </div>
    );
}
