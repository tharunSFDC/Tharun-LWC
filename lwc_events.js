import { LightningElement } from 'lwc';

export default class Lwc_events extends LightningElement {

    handleinc(event)
    {

        //step1: Create a Event
        const inc = new CustomEvent('increase');

        // step2: Dispatch Event
        this.dispatchEvent(inc);

    }
    handledec(event)
    {

        // Create Event, Dispatch Event in single step
        this.dispatchEvent(new CustomEvent('decrease'));
    }
}