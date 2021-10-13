class TimePanel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        this.colorArea;
        this.backgroundArea;
    }

    
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section class="card">
            <div class="inner-card work">
                <div class="sub-panel">
                <div class="flex-container">
                    <p class="card-title">${this.areaValue}</p>
                    <span class="options">
                            <img src="../../images/icon-ellipsis.svg" alt="">
                    </span>
                </div>
                <div class="flex-container">
                    <span class="time">${this.timeValue}Hs</span>
                    <span class="previous-date">last week - ${this.previousDateValue}Hs</span>
                </div>
                </div>
            </div>
        ${this.getStyles()}
        `
        return template;
    }

    getStyles() {
        return `
        <style>
            .card {
                width: 300px;
                background-color: var(--${this.colorArea});
                border-radius: 15px;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;
                color: white;
                padding-top: 50px;
                background-image: url("../../images/${this.backgroundArea}.svg");
                background-repeat: no-repeat;
                background-position-x: 90%;
            }

            .inner-card {
                background-color: var(--dark-blue);
                border-radius: 15px;
                padding: 25px 20px;
                transition: filter .1s;
            }
            
            .inner-card:hover {
                filter: brightness(170%);
            }

            .card-title {
                font-size: 18px;
                font-weight: bolder;
                line-height: 0.5;
            }

            .flex-container{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .time {
                font-weight: 300;
                font-size: 2.3rem;
            }

            .last-date {
                color: var(--pale-blue);
                font-size: 1rem;
            }

            @media screen and (min-width: 1024px) {
                .card {
                    width: 230px
                }

                .flex-container:nth-child(2) {
                    flex-direction: column;
                    align-items: flex-start;
                }

                .time {
                    margin: 10px 0 20px;
                }
              }
        </style>
        `
    }

    defineArea() {
        if(this.area === "Work") {
            this.colorArea = 'light-orange';
            this.backgroundArea = 'icon-work';
        }
        if(this.area === "Play") {
            this.colorArea = 'soft-blue';
            this.backgroundArea = 'icon-play';
        }
        if(this.area === "Study") {
            this.colorArea = 'light-red';
            this.backgroundArea = 'icon-study';
        }
        if(this.area === "Exercise") {
            this.colorArea = 'lime-green';
            this.backgroundArea = 'icon-exercise';
        }
        if(this.area === "Social") {
            this.colorArea = 'violet';
            this.backgroundArea = 'icon-social';
        }
        if(this.area === "Self Care") {
            this.colorArea = 'soft-yellow';
            this.backgroundArea = 'icon-self-care';
        }
    }

    connectedCallback() {
        this.defineArea();
        this.shadowRoot.append(this.getTemplate().content.cloneNode(true))
    }

    static get observedAttributes() {
        return ['area','time','previous-date'];
    }

    get areaValue() {
        return this.area;
    }

    set areaValue(val) {
        this.area = val;
    }

    get timeValue() {
        return this.time;
    }

    set timeValue(val) {
        this.time = val;
    }

    get previousDateValue() {
        return this.previousDate;
    }

    set previousDateValue(val) {
        this.previousDate = val;
    }

    
    attributeChangedCallback(name, old, newVal) {
        if(name === 'area') {
            this.areaValue = newVal
        }
        if(name === 'time') {
            this.timeValue = newVal;
        }
        if(name === 'previous-date') {
            this.previousDateValue = newVal;
        }

    }
    
}

customElements.define('time-panel', TimePanel)