import React from 'react';
import bulmaAccordion from 'bulma-extensions/bulma-accordion/dist/js/bulma-accordion.js';


class Accordion extends React.Component {
    componentDidMount(){
        var accordions = bulmaAccordion.attach();
    }

    render() {
        return (
            <section className="accordions">
                <article className="accordion is-active">
                    <div className="accordion-header toggle">
                        <p>Hello World</p>
                    </div>
                    <div className="accordion-body">
                        <div className="accordion-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                    </div>
                    </div>
                </article>
                <article className="accordion">
                    <div className="accordion-header">
                        <p>Hello World</p>
                        <button className="toggle" aria-label="toggle"></button>
                    </div>
                    <div className="accordion-body">
                        <div className="accordion-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                    </div>
                    </div>
                </article>
                <article className="accordion">
                    <div className="accordion-header">
                        <p>Hello World</p>
                        <button className="toggle" aria-label="toggle"></button>
                    </div>
                    <div className="accordion-body">
                        <div className="accordion-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                    </div>
                    </div>
                </article>
            </section>
        )
    }
}

export default Accordion;