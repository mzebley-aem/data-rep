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
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], li[tabindex="0"], li[tabindex="-1"], tr[tabindex="0"], tr[tabindex="-1"]';
  private definitionIdsString: string = "";

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

      const definitionIds: string[] = [];

      // Calculate percentages and flex amount based on largest value
      // Flex amount is determined by dividing the item's value by the largest value
      // In the visual representation, the largest value fills the full width of the chart
      // effectively setting itself as "100%"
      this.data = this.data.map((item, index) => {
        item.percentage = (item.value / this.total) * 100;
        item.largest = item.value === largestValue;
        item.flexAmount = item.value / largestValue;
        definitionIds.push(
          this.uniqueIdPrefix + "series-item-definition-" + index
        );
        return item;
      });
      // Sort the array from largest to smallest
      this.data.sort((a, b) => b.value - a.value);
      this.definitionIdsString = definitionIds.join(" ");
    }

    return html`
      <article
        class="data-rep-wrapper"
        aria-labelledby="${this.uniqueIdPrefix}title"
        aria-describedby="${this.uniqueIdPrefix}insight ${this
          .uniqueIdPrefix}total"
      >
        ${this.useH1
          ? html`<h1 id="${this.uniqueIdPrefix}title" class="title">
              ${this.header}
            </h1>`
          : html`<h2 id="${this.uniqueIdPrefix}title" class="title">
              ${this.header}
            </h2>`}
        <p id="${this.uniqueIdPrefix}insight" class="insight">
          ${this.isHtml(this.insight) ? unsafeHTML(this.insight) : this.insight}
        </p>
        <div class="action-bar">
          <ul role="group">
            <li @click=${this.togglePlainLanguage}>
              <label
                class="action-item"
                for="${this.uniqueIdPrefix}explanation-switch"
              >
                <input
                  type="checkbox"
                  id="${this.uniqueIdPrefix}explanation-switch"
                  aria-controls="${this.uniqueIdPrefix}explanation-region"
                  value=${this.showExplanation}
                  .checked=${this.showExplanation}
                />
                <span class="toggle-track">
                  <span class="toggle-indicator">
                    <span class="check-mark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="${this.uniqueIdPrefix}explanation-svg-check"
                        role="presentation"
                        aria-hidden="true"
                        viewBox="0 0 448 512"
                      >
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                        />
                      </svg>
                    </span>
                  </span>
                </span>
                Explain
              </label>
            </li>
            <li hidden="${!this.showGlossaryBtn}" @click=${this.toggleGlossary}>
              <label
                class="action-item"
                for="${this.uniqueIdPrefix}glossary-switch"
              >
                <input
                  type="checkbox"
                  id="${this.uniqueIdPrefix}glossary-switch"
                  value=${this.showGlossary}
                  .checked=${this.showGlossary}
                  aria-controls="${this.definitionIdsString}"
                />
                <span class="toggle-track">
                  <span class="toggle-indicator">
                    <span class="check-mark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="${this.uniqueIdPrefix}glossary-svg-check"
                        role="presentation"
                        aria-hidden="true"
                        viewBox="0 0 448 512"
                      >
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                        />
                      </svg>
                    </span>
                  </span>
                </span>
                Glossary
              </label>
            </li>
            <li>
              <button
                id="${this.uniqueIdPrefix}data-modal-button"
                @click=${() =>
                  this.openDataModal(this.uniqueIdPrefix + "data-modal")}
                aria-label="Open data modal"
                aria-controls="${this.uniqueIdPrefix}data-modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-table"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
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
            </li>
          </ul>

          <button
            aria-label="Open share modal"
            aria-controls="${this.uniqueIdPrefix}share-modal"
            disabled="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-share-3"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
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
          id="${this.uniqueIdPrefix}explanation-region"
          aria-expanded="false"
          tabindex="-1"
          hidden="true"
          aria-label="Plain language summary"
        >
          <h3 class="plain-language-title">Plain language summary</h3>
          ${unsafeHTML(
            this.explanation ?? "Error generating plain language summary."
          )}
        </div>
        <ol
          id="${this.uniqueIdPrefix}series"
          class="series"
          aria-label="Data series"
        >
          ${this.data
            ? this.data.map(
                (item, index) => html`
                  <li
                    tabindex="0"
                    id="${this.uniqueIdPrefix}series-item-${index}"
                    aria-describedby="${this
                      .uniqueIdPrefix}series-item-label-${index} ${this
                      .uniqueIdPrefix}-series-item-percentage-${index} ${this
                      .uniqueIdPrefix}-series-item-value-${index}"
                  >
                    <span class="content">
                      <p
                        class="label"
                        id="${this.uniqueIdPrefix}series-item-label-${index}"
                      >
                        ${item.label}
                      </p>
                      <p
                        class="definition"
                        id="${this
                          .uniqueIdPrefix}series-item-definition-${index}"
                        aria-expanded="false"
                        hidden="true"
                      >
                        ${unsafeHTML(item.definition ?? "Not defined.")}
                      </p>
                    </span>
                    <div class="bar-wrapper">
                      <div
                        class="bar"
                        style="--dr-series-item-flex-amount:${item.flexAmount}"
                        aria-hidden="true"
                      ></div>
                      <ul class="details">
                        <li
                          class="percentage"
                          id="${this
                            .uniqueIdPrefix}series-item-percentage-${index}"
                        >
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
                        <li
                          class="value"
                          id="${this.uniqueIdPrefix}series-item-value-${index}"
                        >
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
        <p class="total" tabindex="0" id="${this.uniqueIdPrefix}total">
          Total:
          <strong
            >${this.total.toLocaleString(this.localization, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}</strong
          >
        </p>
      </article>
      <article
        id="${this.uniqueIdPrefix}data-modal"
        class="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="${this.uniqueIdPrefix}data-modal-title"
        hidden
      >
        <section class="modal-content" role="document">
          <button
            id="${this.uniqueIdPrefix}close-modal-button"
            class="close-modal"
            @click=${this.closeModal}
          >
            Close
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </button>
          <h2 id="${this.uniqueIdPrefix}data-modal-title" class="modal-title">
            ${this.header ?? "Title"}
          </h2>
          <p class="description">${unsafeHTML(this.insight ?? "Insights")}</p>
          <table
            class="data-table"
            aria-label="${this.header ?? "Title"} data table"
          >
            <thead>
              <tr class="header-row">
                <th class="th percentage">%</th>
                <th class="th label">Label</th>
                <th class="th value">Value</th>
              </tr>
            </thead>
            <tbody>
              ${this.data
                ? this.data.map(
                    (item) => html`
                      <tr tabindex="0" class="flex-row">
                        <td class="td percentage">
                          ${item.percentage
                            ? item.percentage.toLocaleString(
                                this.localization,
                                {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                }
                              )
                            : 0}%
                        </td>
                        <td class="td label">${item.label}</td>
                        <td class="td value">
                          ${item.value.toLocaleString(this.localization, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}
                        </td>
                      </tr>
                    `
                  )
                : null}
            </tbody>
            <tfoot>
              <tr class="footer-row" tabindex="0">
                <td colspan="3" class="tf">
                  Total:
                  <strong>
                    ${this.total.toLocaleString(this.localization, {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </section>
      </article>
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
    // Create references to the elements we'll need to manipulate
    const glossarySwitch = this.shadowRoot!.getElementById(
      this.uniqueIdPrefix + "glossary-switch"
    ) as HTMLElement;
    const explanationSwitch = this.shadowRoot!.getElementById(
      this.uniqueIdPrefix + "explanation-switch"
    ) as HTMLInputElement;
    const explanationRegion = this.shadowRoot!.getElementById(
      this.uniqueIdPrefix + "explanation-region"
    ) as HTMLElement;

    explanationRegion.setAttribute(
      "aria-expanded",
      explanationSwitch.checked.toString()
    );
    explanationRegion.hidden = !explanationSwitch.checked;

    if (explanationSwitch.checked) {
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
      this.uniqueIdPrefix + "glossary-switch"
    ) as HTMLElement;
    const explanationSwitch = this.shadowRoot!.getElementById(
      this.uniqueIdPrefix + "explanation-switch"
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
      this.uniqueIdPrefix + "explanation-region"
    ) as HTMLElement;
    if (event.key === "Tab" && !event.shiftKey) {
      event.preventDefault();
      explanationRegion.focus();
    }
  };

  handleTabFromGlossaryBtn = (event: KeyboardEvent) => {
    // Handle backward tab (Shift + Tab)
    const explanationRegion = this.shadowRoot!.getElementById(
      this.uniqueIdPrefix + "explanation-region"
    ) as HTMLElement;
    if (event.key === "Tab" && event.shiftKey) {
      event.preventDefault();
      explanationRegion.focus();
    }
  };

  toggleGlossary() {
    const glossarySwitch = this.shadowRoot!.getElementById(
      this.uniqueIdPrefix + "glossary-switch"
    ) as HTMLInputElement;

    const definitions = this.shadowRoot!.querySelectorAll(
      ".definition"
    ) as NodeListOf<HTMLElement>;

    // Cycle through all .definition elements and add set aria-expanded to true
    definitions.forEach((definition: HTMLElement) => {
      definition.setAttribute(
        "aria-expanded",
        glossarySwitch.checked.toString()
      );
      definition.hidden = !glossarySwitch.checked;
    });
  }

  openDataModal(id: string) {
    this.previouslyFocusedElement = this.shadowRoot!
      .activeElement as HTMLElement;

    const modal = this.shadowRoot!.getElementById(id) as HTMLElement;

    const closeModalButton = this.shadowRoot!.getElementById(
      this.uniqueIdPrefix + "close-modal-button"
    );

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
    const modals = this.shadowRoot!.querySelectorAll(
      ".modal"
    ) as NodeListOf<HTMLElement>;
    modals.forEach((modal: HTMLElement) => {
      modal.hidden = true;
      modal.removeEventListener("keydown", this.trapTabKey);
    });
    this.previouslyFocusedElement!.focus(); // Return focus to the element that opened the modal
  }

  getDeepActiveElement = () => {
    let activeElement = document.activeElement;
    while (
      activeElement &&
      activeElement.shadowRoot &&
      activeElement.shadowRoot.activeElement
    ) {
      activeElement = activeElement.shadowRoot.activeElement;
    }
    return activeElement;
  };

  trapTabKey = (event: KeyboardEvent) => {
    const deepActiveElement = this.getDeepActiveElement();

    if (event.key === "Tab") {

      if (event.shiftKey) {
        /* shift + tab */
        if (deepActiveElement === this.firstFocusableElement) {
          event.preventDefault();
          this.lastFocusableElement!.focus();
        }
      } else {
        /* tab */
        if (deepActiveElement === this.lastFocusableElement) {
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
