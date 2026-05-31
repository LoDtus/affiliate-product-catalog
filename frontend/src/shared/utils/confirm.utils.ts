// import { Modal } from "antd";
// import i18n from "../../app/i18n/i18n.config";

// interface GetConfirmModalParams {
//     title?: string;
//     content?: string;
//     okText?: string;
//     cancelText?: string;
// }

// export const getConfirmModal = ({
//     title,
//     content,
//     okText,
//     cancelText,
// }: GetConfirmModalParams): Promise<boolean> => {
//     return new Promise((resolve) => {
//         Modal.confirm({
//             title: title ?? i18n.t("common:utils.confirm.title"),
//             content: content ?? i18n.t("common:utils.confirm.content"),
//             okText: okText ?? i18n.t("common:utils.confirm.okText"),
//             cancelText: cancelText ?? i18n.t("common:utils.confirm.cancelText"),
//             onOk: () => resolve(true),
//             onCancel: () => resolve(false),
//             centered: true,
//         });
//     });
// };
