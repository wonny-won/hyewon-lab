/** @format */

export type CopyClipboardResult =
	| {
			status: boolean;
			successMessage: string;
	  }
	| {
			status: boolean;
			errorMessage: string;
	  };

export const onClickCopyClipboard = async (
	copyContent: string,
	successMessage: string,
	errorMessage: string
): Promise<CopyClipboardResult | undefined> => {
	if (!copyContent) return;
	try {
		await window.navigator.clipboard.writeText(copyContent);
		return {
			status: true,
			successMessage,
		};
	} catch {
		return {
			status: false,
			errorMessage,
		};
	}
};
