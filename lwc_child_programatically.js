import { LightningElement } from 'lwc';

export default class Lwc_child_programatically extends LightningElement {
    handlefireevent(event)
    {
        this.dispatchEvent(new CustomEvent('programevent', {detail:'lwc event programming',bubbles:true,composed:true}));
    }
}