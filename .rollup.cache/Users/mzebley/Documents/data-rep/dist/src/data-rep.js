import { __decorate } from "tslib";
import { LitElement, html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { customElement, property } from "lit/decorators.js";
import styles from "./styles/index.css";
let DataRep = class DataRep extends LitElement {
    constructor() {
        super();
        // Public properties
        this.header = "Title";
        this.insight = "Insights";
        this.data = [];
        this.useH1 = false;
        this.explanationMaxCount = 5;
        this.localization = undefined;
        // Private properties
        this.total = 0;
        this.showExplanation = false;
        this.explanation = "";
        this.showGlossaryBtn = false;
        this.showGlossary = false;
        this.previouslyFocusedElement = null;
        this.firstFocusableElement = null;
        this.lastFocusableElement = null;
        this.focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
        this.handleTabFromPanel = (event) => {
            // Handle forward tab (Tab without Shift)
            const glossarySwitchDisability = this.shadowRoot.getElementById("glossarySwitchDisability");
            const explainSwitchDisability = this.shadowRoot.getElementById("explainSwitchDisability");
            if (event.key === "Tab" && !event.shiftKey) {
                event.preventDefault();
                glossarySwitchDisability.focus();
            }
            // Handle backward tab (Shift + Tab)
            else if (event.key === "Tab" && event.shiftKey) {
                event.preventDefault();
                explainSwitchDisability.focus();
            }
        };
        this.handleTabFromPlainLanguageBtn = (event) => {
            // Handle forward tab (Tab without Shift)
            const explainRegionDisability = this.shadowRoot.getElementById("explainRegionDisability");
            if (event.key === "Tab" && !event.shiftKey) {
                event.preventDefault();
                explainRegionDisability.focus();
            }
        };
        this.handleTabFromGlossaryBtn = (event) => {
            // Handle backward tab (Shift + Tab)
            const explainRegionDisability = this.shadowRoot.getElementById("explainRegionDisability");
            if (event.key === "Tab" && event.shiftKey) {
                event.preventDefault();
                explainRegionDisability.focus();
            }
        };
        this.trapTabKey = (event) => {
            if (event.key === "Tab") {
                if (event.shiftKey) {
                    /* shift + tab */ if (document.activeElement === this.firstFocusableElement) {
                        event.preventDefault();
                        this.lastFocusableElement.focus();
                    }
                } /* tab */
                else {
                    if (document.activeElement === this.lastFocusableElement) {
                        event.preventDefault();
                        this.firstFocusableElement.focus();
                    }
                }
            }
            else if (event.key === "Escape") {
                this.closeModal();
            }
        };
        // Define reactive properties--updating a reactive property causes
        // the component to update.
        this.showGlossaryBtn = false;
        this.showGlossary = false;
        this.showExplanation = false;
        this.total = 0;
        this.useH1 = false;
        this.localization = undefined;
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                this.closeModal();
            }
        });
    }
    // The render() method is called any time reactive properties change.
    // Return HTML in a string template literal tagged with the `html`
    // tag function to describe the component's internal DOM.
    // Expressions can set attribute values, property values, event handlers,
    // and child nodes/text.
    render() {
        var _a, _b, _c;
        if (this.data.length) {
            // If data is an array of objects, check if it has the optional definition property
            if (this.data[0].definition)
                this.showGlossaryBtn = true;
            // Generate plain language summary
            this.generateExplanation();
            // Calculate total
            this.total = this.data.reduce((acc, item) => acc + item.value, 0);
            // console.log(this.total);
            // Find largest value
            const largestValue = this.data.reduce((max, item) => Math.max(max, item.value), this.data[0].value);
            // Calculate percentages and flex amount based on largest value
            // Flex amount is determined by dividing the item's value by the largest value
            // In the visual representation, the largest value fills the full width of the chart
            // effectively setting itself as "100%"
            this.data = this.data.map((item) => {
                item.percentage = (item.value / this.total) * 100;
                item.largest = item.value === largestValue;
                item.flexAmount = item.value / largestValue;
                return item;
            });
            // Sort the array from largest to smallest
            this.data.sort((a, b) => b.value - a.value);
            // console.log(this.data);
        }
        return html `
      <article>
        ${this.useH1
            ? html `<h1 class="heading">${this.header}</h1>`
            : html `<h2 class="heading">${this.header}</h2>`}
        <p class="insight">
          ${this.isHtml(this.insight) ? unsafeHTML(this.insight) : this.insight}
        </p>
        <div class="action-bar">
          <button
            @click=${this.togglePlainLanguage}
            id="explainSwitchDisability"
            aria-pressed="false"
            aria-controls="explainRegionDisability"
          >
            ${this.showExplanation
            ? html `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-toggle-right"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M2 6m0 6a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6z"
                  ></path>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                    id="active-toggle"
                  ></path>
                </svg>`
            : html `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-toggle-left"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path
                    d="M2 6m0 6a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6z"
                  ></path>
                </svg>`}
            <label for="explainSwitchDisability">Explain</label>
          </button>
          <button
          @click=${this.toggleGlossary}
          id="glossarySwitchDisability"
          aria-pressed="false"
          hidden="${!this.showGlossaryBtn}"
        >
          ${this.showGlossary
            ? html `<svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-toggle-right"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M2 6m0 6a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6z"
                ></path>
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                ></path>
                <path
                  d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                  id="active-toggle"
                ></path>
              </svg>`
            : html `<svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-toggle-left"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                ></path>
                <path
                  d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                ></path>
                <path
                  d="M2 6m0 6a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6z"
                ></path>
              </svg>`}
              <label for="glossarySwitchDisability">Glossary</label>
        </button>
          <button id="data-modal-button" @click=${this.openDataModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-table"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"
              ></path>
              <path d="M3 10h18"></path>
              <path d="M10 3v18"></path>
            </svg>
            Data
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-share-3"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z"
              ></path>
            </svg>
            Share
          </button>
        </div>
        <div
          class="plain-language"
          id="explainRegionDisability"
          aria-expanded="false"
          tabindex="-1"
          hidden="true"
        >
          ${unsafeHTML((_a = this.explanation) !== null && _a !== void 0 ? _a : "Error generating plain language summary.")}
        </div>
        <ol>
          ${this.data
            ? this.data.map((item) => {
                var _a;
                return html `
                  <li tabindex="0">
                    <div class="content">
                      <p class="label">${item.label}</p>
                      <p class="definition" aria-expanded="false" hidden="true">
                        ${unsafeHTML((_a = item.definition) !== null && _a !== void 0 ? _a : "Not defined.")}
                      </p>
                    </div>
                    <div class="bar-wrapper">
                      <div
                        class="bar"
                        style="--dr-series-item-flex-amount:${item.flexAmount}"
                      ></div>
                      <ul class="details">
                        <li class="percentage">
                          ${item.percentage
                    ? item.percentage.toLocaleString(this.localization, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })
                    : 0}%
                        </li>
                        <li class="value">
                          ${item.value.toLocaleString(this.localization, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                })}
                        </li>
                      </ul>
                    </div>
                  </li>
                `;
            })
            : null}
        </ol>
        <p class="total">
          Total:
          <strong
            >${this.total.toLocaleString(this.localization, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })}</strong
          >
        </p>
      </article>
      <section
        id="data-modal"
        class="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dataModalTitle"
        hidden
      >
        <div class="modal-content" role="document">
          <button id="closeModalButton" @click=${this.closeModal}>
            Close
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-x"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
          <h2 id="dataModalTitle">${(_b = this.header) !== null && _b !== void 0 ? _b : "Title"}</h2>
          <p class="description">${unsafeHTML((_c = this.insight) !== null && _c !== void 0 ? _c : "Insights")}</p>
          <div
            class="data-table"
            role="table"
            aria-label="Descriptive Table Name"
          >
            <div role="row" class="flex-row header-row">
              <div role="columnheader" class="th label">Label</div>
              <div role="columnheader" class="th percentage">%</div>
              <div role="columnheader" class="th value">Value</div>
            </div>
            ${this.data
            ? this.data.map((item) => html ` <div role="row" class="flex-row">
                    <div role="cell" class="td label">${item.label}</div>
                    <div role="cell" class="td percentage">
                      ${item.percentage
                ? item.percentage.toLocaleString(this.localization, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })
                : 0}%
                    </div>
                    <div role="cell" class="td value">
                      <strong
                        >${item.value.toLocaleString(this.localization, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            })}</strong
                      >
                    </div>
                  </div>`)
            : null}
            <div role="row" class="flex-row footer-row">
              <div role="tablefooter" class="tf">
                Total:
                <strong
                  >${this.total.toLocaleString(this.localization, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })}</strong
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    }
    isHtml(str) {
        // A very basic check for HTML tags
        if (!str)
            return false;
        const doc = new DOMParser().parseFromString(str, "text/html");
        return Array.from(doc.body.childNodes).some((node) => node.nodeType === 1);
    }
    generateExplanation() {
        // Slice the array to include only the top items as per explanationMaxCount
        const topItems = this.data.slice(0, this.explanationMaxCount);
        // Convert each item into a plain language string
        const plainLanguageItems = topItems.map((item) => {
            // Convert the value to a percentage string with two decimal places
            const percentage = ((item.value / this.data.reduce((acc, cur) => acc + cur.value, 0)) *
                100).toFixed(2);
            // Format the string with the label and the percentage
            return `${item.label} (${percentage}%)`;
        });
        // Combine the items into a sentence
        let summary = "In the reported data, ";
        if (plainLanguageItems.length > 2) {
            // Join all items with commas, but the last item with 'and'
            const allButLast = plainLanguageItems.slice(0, -1).join(", ");
            const lastItem = plainLanguageItems[plainLanguageItems.length - 1];
            summary += `${allButLast}, and ${lastItem}`;
        }
        else if (plainLanguageItems.length === 2) {
            // No comma, just 'and'
            summary += `${plainLanguageItems[0]} and ${plainLanguageItems[1]}`;
        }
        else if (plainLanguageItems.length === 1) {
            // If there's only one item, just add it
            summary += `${plainLanguageItems[0]}`;
        }
        // Finish the sentence if there are items
        if (plainLanguageItems.length > 0) {
            summary += " represent the top categories.";
        }
        else {
            summary += "No data available.";
        }
        this.explanation = summary;
    }
    // Event handlers can update the state of @properties on the element
    // instance, causing it to re-render
    togglePlainLanguage() {
        this.showExplanation = !this.showExplanation;
        const glossarySwitchDisability = this.shadowRoot.getElementById("glossarySwitchDisability");
        const explainSwitchDisability = this.shadowRoot.getElementById("explainSwitchDisability");
        const explainRegionDisability = this.shadowRoot.getElementById("explainRegionDisability");
        explainSwitchDisability.setAttribute("aria-pressed", this.showExplanation.toString());
        explainRegionDisability.setAttribute("aria-expanded", this.showExplanation.toString());
        explainRegionDisability.hidden = !this.showExplanation;
        if (this.showExplanation) {
            explainRegionDisability.addEventListener("keydown", this.handleTabFromPanel);
            explainSwitchDisability.addEventListener("keydown", this.handleTabFromPlainLanguageBtn);
            glossarySwitchDisability.addEventListener("keydown", this.handleTabFromGlossaryBtn);
        }
        else {
            explainSwitchDisability.focus();
            explainRegionDisability.removeEventListener("keydown", this.handleTabFromPanel);
            explainSwitchDisability.removeEventListener("keydown", this.handleTabFromPlainLanguageBtn);
            glossarySwitchDisability.removeEventListener("keydown", this.handleTabFromGlossaryBtn);
        }
    }
    toggleGlossary() {
        this.showGlossary = !this.showGlossary;
        const glossarySwitchDisability = this.shadowRoot.getElementById("glossarySwitchDisability");
        glossarySwitchDisability.setAttribute("aria-pressed", this.showGlossary.toString());
        const definitions = this.shadowRoot.querySelectorAll(".definition");
        // Cycle through all .definition elements and add set aria-expanded to true
        definitions.forEach((definition) => {
            definition.setAttribute("aria-expanded", this.showGlossary.toString());
            definition.hidden = !this.showGlossary;
        });
    }
    openDataModal() {
        this.previouslyFocusedElement = this.shadowRoot
            .activeElement;
        const modal = this.shadowRoot.getElementById("data-modal");
        const closeModalButton = this.shadowRoot.getElementById("closeModalButton");
        modal.hidden = false;
        let focusableElements = modal.querySelectorAll(this.focusableElementsString);
        this.firstFocusableElement = focusableElements[0];
        this.lastFocusableElement = focusableElements[focusableElements.length - 1];
        closeModalButton.focus();
        modal.addEventListener("keydown", this.trapTabKey);
    }
    closeModal() {
        const modal = this.shadowRoot.getElementById("data-modal");
        modal.hidden = true;
        this.previouslyFocusedElement.focus(); // Return focus to the element that opened the modal
        modal.removeEventListener("keydown", this.trapTabKey);
    }
};
DataRep.styles = [styles];
__decorate([
    property()
], DataRep.prototype, "header", void 0);
__decorate([
    property()
], DataRep.prototype, "insight", void 0);
__decorate([
    property({
        converter: (attrValue) => {
            if (attrValue)
                return JSON.parse(attrValue);
            else
                return console.error("No data provided, or data is in an unrecognized format.");
        },
    })
], DataRep.prototype, "data", void 0);
__decorate([
    property({ type: Boolean })
], DataRep.prototype, "useH1", void 0);
__decorate([
    property()
], DataRep.prototype, "explanationMaxCount", void 0);
__decorate([
    property()
    // Setting 'localization' to undefined by default will force the browser to use the user's locale
], DataRep.prototype, "localization", void 0);
__decorate([
    property()
    // @property() is a decorator that defines a reactive property.
], DataRep.prototype, "showExplanation", void 0);
__decorate([
    property()
], DataRep.prototype, "showGlossaryBtn", void 0);
__decorate([
    property()
], DataRep.prototype, "showGlossary", void 0);
DataRep = __decorate([
    customElement("data-rep")
], DataRep);
export { DataRep };
//# sourceMappingURL=data-rep.js.map