class TimePanel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        this.area = this.getAttribute('area');
        this.time = this.getAttribute('time');
        this.lastDate = this.getAttribute('last-date');
        this.colorArea;
        this.backgroundArea;
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section class="general-panel">
            <div class="inner-card work">
                <div class="sub-panel">
                <div class="flex-container">
                    <p class="card-title">${this.area}</p>
                    <span class="options">
                            <img src="../../images/icon-ellipsis.svg" alt="">
                    </span>
                </div>
                <div class="flex-container">
                    <span class="time">${this.time}</span>
                    <span class="last-date">last week - ${this.lastDate}</span>
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
            .general-panel {
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
                text-transform: capitalize;
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
        </style>
        `
    }

    defineArea() {
        if(this.area === "work") {
            this.colorArea = 'light-orange';
            this.backgroundArea = 'icon-work';
        }
        if(this.area === "play") {
            this.colorArea = 'soft-blue';
            this.backgroundArea = 'icon-play';
        }
        if(this.area === "study") {
            this.colorArea = 'light-red';
            this.backgroundArea = 'icon-study';
        }
        if(this.area === "exercise") {
            this.colorArea = 'lime-green';
            this.backgroundArea = 'icon-exercise';
        }
        if(this.area === "social") {
            this.colorArea = 'violet';
            this.backgroundArea = 'icon-social';
        }
        if(this.area === "self-care") {
            this.colorArea = 'soft-yellow';
            this.backgroundArea = 'icon-self-care';
        }
    }
    connectedCallback() {
        this.defineArea();
        this.shadowRoot.append(this.getTemplate().content.cloneNode(true))
    }

}

customElements.define('time-panel', TimePanel)