"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useEffect, useState } from "react";

export default function InfoSection() {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("/samples/sample-01.md")
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (
        <div className="my-2 py-8 px-10 rounded-lg border border-gray-line">
            <h3 className="mb-5 text-2xl font-semibold">
                Thông tin chi tiết sản phẩm
            </h3>
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
                    {content}
                </Markdown>
            </div>
        </div>
    );
}
