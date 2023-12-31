import { LitElement } from "lit";
export declare class DataRep extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    private uniqueIdPrefix;
    header?: string;
    insight?: string;
    data: Array<{
        label: string;
        value: number;
        definition?: string;
        percentage?: number;
        largest?: boolean;
        flexAmount?: number;
    }>;
    useH1?: boolean;
    explanationMaxCount?: number;
    localization?: string;
    private total;
    private showExplanation;
    private explanation;
    private showGlossaryBtn;
    private showGlossary;
    private previouslyFocusedElement;
    private firstFocusableElement;
    private lastFocusableElement;
    private focusableElementsString;
    private definitionIdsString;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    isHtml(str: string | undefined): boolean;
    generateExplanation(): void;
    togglePlainLanguage(): void;
    handleTabFromPanel: (event: KeyboardEvent) => void;
    handleTabFromPlainLanguageBtn: (event: KeyboardEvent) => void;
    handleTabFromGlossaryBtn: (event: KeyboardEvent) => void;
    toggleGlossary(): void;
    openDataModal(id: string): void;
    closeModal(): void;
    getDeepActiveElement: () => Element | null;
    trapTabKey: (event: KeyboardEvent) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        "data-rep": DataRep;
    }
}
