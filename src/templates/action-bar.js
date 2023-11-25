// TODO: Finish configuring project to split out component templates in more manageable chunks
// Current problem to solve -> bound functions in template don't have access to LitElement functions

const template = `
<div class="action-bar">
          <button
            @click=${this.togglePlainLanguage}
            id="explainSwitchDisability"
            aria-pressed="false"
            aria-controls="explainRegionDisability"
          >
            ${this.showExplanation
              ? html`<svg
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
              : html`<svg
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
            ? html`<svg
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
            : html`<svg
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
          ${unsafeHTML(
            this.explanation ?? "Error generating plain language summary."
          )}
        </div>
`

export default template