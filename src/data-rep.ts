import { LitElement, html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { customElement, property } from "lit/decorators.js";
import styles from "./styles/index.css";
import { v4 as uuidv4 } from "uuid";

// TODO: Break out chunks of code into separate files
// import * as actionBar from "./templates/action-bar.js";

@customElement("data-rep")
export class DataRep extends LitElement {
  static styles = [styles];
  private uniqueIdPrefix: string = "";
  // @property() is a decorator that defines a reactive property.
  // Public properties
  @property()
  header?: string = "Title";

  @property()
  insight?: string = "Insights";

  @property({
    converter: (attrValue: string | null) => {
      if (attrValue) return JSON.parse(attrValue);
      else
        return console.error(
          "No data provided, or data is in an unrecognized format."
        );
    },
  })
  data: Array<{
    label: string;
    value: number;
    definition?: string;
    percentage?: number;
    largest?: boolean;
    flexAmount?: number;
  }> = [];

  @property({ type: Boolean })
  useH1?: boolean = false;

  @property()
  explanationMaxCount?: number = 5;

  @property()
  // Setting 'localization' to undefined by default will force the browser to use the user's locale
  localization?: string = undefined;

  // Private properties
  private total: number = 0;
  @property()
  private showExplanation: boolean = false;
  private explanation: string = "";
  @property()
  private showGlossaryBtn: boolean = false;
  @property()
  private showGlossary: boolean = false;
  private previouslyFocusedElement: HTMLElement | null = null;
  private firstFocusableElement: HTMLElement | null = null;
  private lastFocusableElement: HTMLElement | null = null;
  private focusableElementsString =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

  constructor() {
    super();
    this.togglePlainLanguage = this.togglePlainLanguage.bind(this);
    this.toggleGlossary = this.toggleGlossary.bind(this);
    // Define reactive properties--updating a reactive property causes
    // the component to update.
    this.uniqueIdPrefix = uuidv4().slice(0, 9);
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
    if (this.data.length) {
      // If data is an array of objects, check if it has the optional definition property
      if (this.data[0].definition) this.showGlossaryBtn = true;

      // Generate plain language summary
      this.generateExplanation();

      // Calculate total
      this.total = this.data.reduce((acc, item) => acc + item.value, 0);
      // console.log(this.total);

      // Find largest value
      const largestValue = this.data.reduce(
        (max, item) => Math.max(max, item.value),
        this.data[0].value
      );

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

    return html`
      <article>
        ${this.useH1
          ? html`<h1 class="heading">${this.header}</h1>`
          : html`<h2 class="heading">${this.header}</h2>`}
        <p class="insight">
          ${this.isHtml(this.insight) ? unsafeHTML(this.insight) : this.insight}
        </p>
        <div class="action-bar">
          <ul role="group" aria-label="Data representation action options">
            <li class="action-item" @click=${this.togglePlainLanguage}>
              <label for="${this.uniqueIdPrefix}explanationSwitch">
                <input
                  type="checkbox"
                  id="${this.uniqueIdPrefix}explanationSwitch"
                  aria-controls="${this.uniqueIdPrefix}explanationRegion"
                  value=${this.showExplanation}
                  .checked=${this.showExplanation}
                />
                <span class="toggle-track">
                  <span class="toggle-indicator">
                    <span class="check-mark">
                      <svg xmlns="http://www.w3.org/2000/svg" id="${this.uniqueIdPrefix}explanation-svg-check" role="presentation" aria-hidden="true" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    </span>
                  </span>
                </span>
                Explain
              </label>
            </li>
            <li class="action-item" hidden="${!this.showGlossaryBtn}" @click=${this.toggleGlossary}>
              <label for="${this.uniqueIdPrefix}glossarySwitch">
                <input
                  type="checkbox"
                  id="${this.uniqueIdPrefix}glossarySwitch"
                  value=${this.showGlossary}
                  .checked=${this.showGlossary}
                />
                <span class="toggle-track">
                  <span class="toggle-indicator">
                    <span class="check-mark">
                      <svg xmlns="http://www.w3.org/2000/svg" id="${this.uniqueIdPrefix}glossary-svg-check" role="presentation" aria-hidden="true" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    </span>
                  </span>
                </span>
                Glossary
              </label>
            </li>
          </ul>
          <button
            id="${this.uniqueIdPrefix}data-modal-button"
            @click=${this.openDataModal}
          >
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
          id="${this.uniqueIdPrefix}explanationRegion"
          aria-expanded="false"
          tabindex="-1"
          hidden="true"
        >
          ${unsafeHTML(
            this.explanation ?? "Error generating plain language summary."
          )}
        </div>
        <ol id="${this.uniqueIdPrefix}series" class="series">
          ${this.data
            ? this.data.map(
                (item) => html`
                  <li tabindex="0">
                    <div class="content">
                      <p class="label">${item.label}</p>
                      <p class="definition" aria-expanded="false" hidden="true">
                        ${unsafeHTML(item.definition ?? "Not defined.")}
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
                            ? item.percentage.toLocaleString(
                                this.localization,
                                {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                }
                              )
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
                `
              )
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
        id="${this.uniqueIdPrefix}data-modal"
        class="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="${this.uniqueIdPrefix}dataModalTitle"
        hidden
      >
        <div class="modal-content" role="document">
          <button
            id="${this.uniqueIdPrefix}closeModalButton"
            @click=${this.closeModal}
          >
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
          <h2 id="${this.uniqueIdPrefix}dataModalTitle">
            ${this.header ?? "Title"}
          </h2>
          <p class="description">${unsafeHTML(this.insight ?? "Insights")}</p>
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
              ? this.data.map(
                  (item) => html` <div role="row" class="flex-row">
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
                  </div>`
                )
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

  isHtml(str: string | undefined): boolean {
    // A very basic check for HTML tags
    if (!str) return false;
    const doc = new DOMParser().parseFromString(str, "text/html");
    return Array.from(doc.body.childNodes).some((node) => node.nodeType === 1);
  }

  generateExplanation() {
    // Slice the array to include only the top items as per explanationMaxCount
    const topItems = this.data.slice(0, this.explanationMaxCount);

    // Convert each item into a plain language string
    const plainLanguageItems = topItems.map((item) => {
      // Convert the value to a percentage string with two decimal places
      const percentage = (
        (item.value / this.data.reduce((acc, cur) => acc + cur.value, 0)) *
        100
      ).toFixed(2);
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
    } else if (plainLanguageItems.length === 2) {
      // No comma, just 'and'
      summary += `${plainLanguageItems[0]} and ${plainLanguageItems[1]}`;
    } else if (plainLanguageItems.length === 1) {
      // If there's only one item, just add it
      summary += `${plainLanguageItems[0]}`;
    }

    // Finish the sentence if there are items
    if (plainLanguageItems.length > 0) {
      summary += " represent the top categories.";
    } else {
      summary += "No data available.";
    }

    this.explanation = summary;
  }

  // Event handlers can update the state of @properties on the element
  // instance, causing it to re-render

  togglePlainLanguage() {
    // this.showExplanation = !this.showExplanation;

    // Create references to the elements we'll need to manipulate
    const glossarySwitch = this.shadowRoot!.getElementById(
      this.uniqueIdPrefix + "glossarySwitch"
    ) as HTMLElement;
    const explanationSwitch = this.shadowRoot!.getElementById(
      this.uniqueIdPrefix + "explanationSwitch"
    ) as HTMLInputElement;
    const explanationRegion = this.shadowRoot!.getElementById(
      this.uniqueIdPrefix + "explanationRegion"
    ) as HTMLElement;

    explanationRegion.setAttribute(
      "aria-expanded",
      explanationSwitch.checked.toString()
    );
    explanationRegion.hidden = !explanationSwitch.checked;

    if (this.showExplanation) {
      explanationRegion.addEventListener("keydown", this.handleTabFromPanel);
      explanationSwitch.addEventListener(
        "keydown",
        this.handleTabFromPlainLanguageBtn
      );
      glossarySwitch.addEventListener("keydown", this.handleTabFromGlossaryBtn);
    } else {
      explanationSwitch.focus();
      explanationRegion.removeEventListener("keydown", this.handleTabFromPanel);
      explanationSwitch.removeEventListener(
        "keydown",
        this.handleTabFromPlainLanguageBtn
      );
      glossarySwitch.removeEventListener(
        "keydown",
        this.handleTabFromGlossaryBtn
      );
    }
  }

  handleTabFromPanel = (event: KeyboardEvent) => {
    // Handle forward tab (Tab without Shift)
    const glossarySwitch = this.shadowRoot!.getElementById(
      this.uniqueIdPrefix + "glossarySwitch"
    ) as HTMLElement;
    const explanationSwitch = this.shadowRoot!.getElementById(
      this.uniqueIdPrefix + "explanationSwitch"
    ) as HTMLElement;
    if (event.key === "Tab" && !event.shiftKey) {
      event.preventDefault();
      glossarySwitch.focus();
    }
    // Handle backward tab (Shift + Tab)
    else if (event.key === "Tab" && event.shiftKey) {
      event.preventDefault();
      explanationSwitch.focus();
    }
  };

  handleTabFromPlainLanguageBtn = (event: KeyboardEvent) => {
    // Handle forward tab (Tab without Shift)
    const explanationRegion = this.shadowRoot!.getElementById(
      this.uniqueIdPrefix + "explanationRegion"
    ) as HTMLElement;
    if (event.key === "Tab" && !event.shiftKey) {
      event.preventDefault();
      explanationRegion.focus();
    }
  };

  handleTabFromGlossaryBtn = (event: KeyboardEvent) => {
    // Handle backward tab (Shift + Tab)
    const explanationRegion = this.shadowRoot!.getElementById(
      this.uniqueIdPrefix + "explanationRegion"
    ) as HTMLElement;
    if (event.key === "Tab" && event.shiftKey) {
      event.preventDefault();
      explanationRegion.focus();
    }
  };

  toggleGlossary() {
    // this.showGlossary = !this.showGlossary;
    const glossarySwitch = this.shadowRoot!.getElementById(
      this.uniqueIdPrefix + "glossarySwitch"
    ) as HTMLInputElement;

    const definitions = this.shadowRoot!.querySelectorAll(
      ".definition"
    ) as NodeListOf<HTMLElement>;

    // Cycle through all .definition elements and add set aria-expanded to true
    definitions.forEach((definition: HTMLElement) => {
      definition.setAttribute("aria-expanded", glossarySwitch.checked.toString());
      definition.hidden = !glossarySwitch.checked;
    });
  }

  openDataModal() {
    this.previouslyFocusedElement = this.shadowRoot!
      .activeElement as HTMLElement;

    const modal = this.shadowRoot!.getElementById("data-modal") as HTMLElement;

    const closeModalButton =
      this.shadowRoot!.getElementById("closeModalButton");

    modal.hidden = false;
    let focusableElements = modal.querySelectorAll(
      this.focusableElementsString
    ) as NodeListOf<HTMLElement>;
    this.firstFocusableElement = focusableElements[0];
    this.lastFocusableElement = focusableElements[focusableElements.length - 1];

    closeModalButton!.focus();
    modal.addEventListener("keydown", this.trapTabKey);
  }

  closeModal() {
    const modal = this.shadowRoot!.getElementById("data-modal") as HTMLElement;
    modal.hidden = true;
    this.previouslyFocusedElement!.focus(); // Return focus to the element that opened the modal
    modal.removeEventListener("keydown", this.trapTabKey);
  }

  trapTabKey = (event: KeyboardEvent) => {
    if (event.key === "Tab") {
      if (event.shiftKey) {
        /* shift + tab */ if (
          document.activeElement === this.firstFocusableElement
        ) {
          event.preventDefault();
          this.lastFocusableElement!.focus();
        }
      } /* tab */ else {
        if (document.activeElement === this.lastFocusableElement) {
          event.preventDefault();
          this.firstFocusableElement!.focus();
        }
      }
    } else if (event.key === "Escape") {
      this.closeModal();
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "data-rep": DataRep;
  }
}
